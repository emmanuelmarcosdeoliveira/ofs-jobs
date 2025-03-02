import JobItem from "@/components/cards/Job-item";
import { Job } from "@/lib/utils";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";
type jobItemProps = {
  job: Job;
};

async function fetchJobs() {
  try {
    const res = await fetch(" https://apis.codante.io/api/job-board/jobs");
    if (!res.ok) {
      throw new Error("Erro ao buscar vagas, tente mais tarde");
    }
    const json = await res.json();
    const jobs: Job[] = json.data;
    return jobs;
  } catch (error) {
    console.error(error);
    notFound();
  }
}

export default async function Vagas({}: jobItemProps) {
  const jobs = await fetchJobs();
  if (!jobs) {
  }

  return (
    <main className="container mx-auto py-10">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
