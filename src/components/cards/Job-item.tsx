import { cn } from "@/util/util";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: number;
};

type JobItemProps = {
  job: Job;
};

export default function JobItem({ job }: JobItemProps) {
  return (
    <article className="flex w-full items-center justify-between rounded-sm border border-t-4 border-black px-6 py-4 transition-colors hover:border-blue-400">
      <h3 className="font-display w-64 text-lg font-medium text-gray-700">
        {job.title}
      </h3>
      <h4 className="w-34 text-left font-light text-gray-500">
        <span className="font-bold">{job.company}</span>{" "}
      </h4>
      <h4 className="font-light text-gray-500">{job.location}</h4>
      <h4 className="font-light text-gray-500">
        {" "}
        <span className="font-medium"></span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(job.salary)}
      </h4>
      <Link
        href={`/vagas/${job.id}`}
        title="clique e veja mais detalhes da vaga"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        Detalhes da Vaga
      </Link>
    </article>
  );
}
