import Link from "next/link";
import Header from "@/components/layout/header";
import { Suspense } from "react";
import QuizItem from "@/components/quizzes/item";

export default function QuizPage({ params: { id } }: {
  params: {
    id: string
  }
}) {
  return (
    
      <>
        <Link href="/" className="font-bold mb-4 block">&#8592; Back to Portfolio</Link>
    

        <Header>Quiz {id}</Header>
        <Suspense fallback={<div>Loading Quizzes...</div>}>
         
           {/* @ts-expect-error Server Component */}
           <QuizItem id={id} />
        </Suspense>
      </>
  )
}
