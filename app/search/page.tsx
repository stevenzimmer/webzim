import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
export default function Page({ searchParams }: PageProps) {
  const { q } = searchParams;
  if (Array.isArray(q) || !q) {
    return redirect("/search");
  }
  return <div>{q}</div>;
}
