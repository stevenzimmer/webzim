
import postgres from "postgres";
const sql = postgres(process.env.DATABASE_URL!);

export default async function QuizItem({id}: {
  id: string
}) {
  const quizItem = await sql`SELECT * FROM quizzes WHERE id = ${id}`;
  console.log({quizItem});

  return (
    <div>{id}</div>
  )
}
