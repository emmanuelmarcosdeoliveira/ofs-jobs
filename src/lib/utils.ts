import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  company_website: string;
  city: string;
  schedule: "part time" | "full time";
  number_of_positions: number;
  description: string;
  requirements: string;
};
