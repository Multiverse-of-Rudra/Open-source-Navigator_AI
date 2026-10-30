import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";

interface Analysis {
  summary: string;
  architecture: string;
  roadmap: string;
  contribution: string;
  startHere: string;
}

interface AnalysisTabsProps {
  analysis: Analysis;
}

export default function AnalysisTabs({
  analysis,
}: AnalysisTabsProps)  {
  return (
    <Tabs defaultValue="summary">
      <TabsList className="mb-4">
        <TabsTrigger value="summary">Summary</TabsTrigger>

        <TabsTrigger value="architecture">Architecture</TabsTrigger>

        <TabsTrigger value="roadmap">Roadmap</TabsTrigger>

        <TabsTrigger value="contribute">Contribute</TabsTrigger>

        <TabsTrigger value="start">Start Here</TabsTrigger>
      </TabsList>

      <TabsContent value="summary">
        <div className="bg-slate-900 p-6 rounded-xl">
          <ReactMarkdown>{analysis?.summary || "No summary available."}</ReactMarkdown>
        </div>
      </TabsContent>

      <TabsContent value="architecture">
        <div className="bg-slate-900 p-6 rounded-xl">
          <ReactMarkdown>{analysis.architecture}</ReactMarkdown>
        </div>
      </TabsContent>

      <TabsContent value="roadmap">
        <div className="bg-slate-900 p-6 rounded-xl">
          <ReactMarkdown>{analysis.roadmap}</ReactMarkdown>
        </div>
      </TabsContent>

      <TabsContent value="contribute">
        <div className="bg-slate-900 p-6 rounded-xl">
          <ReactMarkdown>{analysis.contribution}</ReactMarkdown>
        </div>
      </TabsContent>

      <TabsContent value="start">
        <div className="bg-slate-900 p-6 rounded-xl">
          <ReactMarkdown>{analysis.startHere}</ReactMarkdown>
        </div>
      </TabsContent>
    </Tabs>
  );
}
