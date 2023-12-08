import Link from "next/link";
import Quizzes from "@/components/quizzes";
import Header from "@/components/layout/header";
import { Suspense } from "react";

export default function QuizPage() {
  return (
    
      <>
        <Link href="/" className="font-bold mb-4 block">&#8592; Back to Portfolio</Link>
    

        <Header>All Quizzes</Header>
        <Suspense fallback={<div>Loading Quizzes...</div>}>
          {/* <Quizzes  />
           */}
           {/* @ts-expect-error Server Component */}
           <Quizzes />
        </Suspense>
      </>
  )
}
