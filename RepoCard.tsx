import { Card, CardContent } from "@/components/ui/card";

interface Repo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
}

interface RepoCardProps {
  repo: Repo;
}

export default function RepoCard({
  repo,
}: RepoCardProps) 

 {

  return (
    <Card className="mb-6 bg-slate-900 text-white border-slate-800">
      <CardContent className="p-6">

        <h2 className="text-2xl font-bold">
          {repo.name}
        </h2>

        <p className="text-gray-400 mb-4">
          {repo.description}
        </p>

        <div className="grid grid-cols-3 gap-4">

          <div>
            <p className="text-gray-500">Stars</p>
            <p className="text-xl font-bold">
              ⭐ {repo.stars}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Forks</p>
            <p className="text-xl font-bold">
              🍴 {repo.forks}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Language</p>
            <p className="text-xl font-bold">
              💻 {repo.language}
            </p>
          </div>

        </div>

      </CardContent>
    </Card>
  );
}