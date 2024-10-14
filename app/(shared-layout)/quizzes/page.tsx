import type { Metadata } from "next";
import Link from "next/link";
import Quizzes from "@/components/quizzes";
import Header from "@/components/layout/header";
import { Suspense } from "react";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function QuizPage() {
  return (
    <>
      <Link href="/" className="mb-4 block font-bold">
        &#8592; Back to Portfolio
      </Link>

      <Header>All Quizzes</Header>
      <Suspense fallback={<div>Loading Quizzes...</div>}>
        {/* <Quizzes  />
         */}
        {/* @ts-expect-error Server Component */}
        <Quizzes />
      </Suspense>
    </>
  );
}
