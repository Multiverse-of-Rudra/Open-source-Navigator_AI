"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Hero from "@/components/ui/Hero";
import RepoCard from "@/components/ui/RepoCard";
import AnalysisTabs from "@/components/ui/AnalysisTabs";

interface Repo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
}

interface Analysis {
  summary: string;
  architecture: string;
  roadmap: string;
  contribution: string;
  startHere: string;
}

interface AnalysisResponse {
  repo: Repo;
  analysis: Analysis;
}

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AnalysisResponse | null>(null);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/analyze", {
        method: "POST",
        body: JSON.stringify({ url }),
      });

      const result = await res.json();

      console.log("API Result:", result);

      setData(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-3 mb-8">
          <Input
            placeholder="Paste GitHub Repository URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <Button onClick={handleAnalyze} disabled={loading}>
            <Search className="mr-2 h-4 w-4" />
            {loading && (
              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>

                <p className="text-slate-400">Analyzing repository...</p>
              </div>
            )}
          </Button>
        </div>
        <div className="flex justify-center gap-3 mt-6">
          <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400">
            Gemma 4 Powered
          </span>

          <span className="rounded-full bg-purple-500/20 px-4 py-2 text-purple-400">
            Open Source AI
          </span>
        </div>

        {data?.repo && data?.analysis && (
          <>
            <RepoCard repo={data.repo} />
            <AnalysisTabs analysis={data.analysis} />
          </>
        )}
      </div>
    </main>
  );
}
