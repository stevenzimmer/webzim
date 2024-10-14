import { Metadata } from "next";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export const metadata: Metadata = {
  // title: "ZimGPT | WebDev Zim Project",
  // description:
  //   "A showcase of the OpenAI API and SDK, React, TypeScript, State Management, and Context API.",
  alternates: {
    canonical: "/search",
  },
  robots: {
    index: false,
    follow: true,
  },
};
export default function Page({ searchParams }: PageProps) {
  const { q } = searchParams;
  if (Array.isArray(q) || !q) {
    return redirect("/search");
  }
  return <div>{q}</div>;
}
