import Link from "next/link";
import postgres from "postgres";
const sql = postgres(process.env.DATABASE_URL!);


export default async function Quizzes() {
 
  // const quizzes = await sql`SELECT * FROM quiz`
  // Create quizzes table
  // await sql`DROP TABLE quizzes`;
  // await sql`CREATE TABLE IF NOT EXISTS quiz (
  //   quiz_id SERIAL PRIMARY KEY,
  //   title VARCHAR(255) TEXT NOT NULL,
  //   description TEXT,
  //   question_text TEXT NOT NULL,
  //   created_at TIMESTAMPTZ DEFAULT NOW()
  // )`;

  // await sql`CREATE TABLE IF NOT EXISTS answer (
  //   answer_id SERIAL PRIMARY KEY,
  //   quiz_id INT REFERENCES quiz(quiz_id) ON DELETE CASCADE,
  //   answer_text TEXT NOT NULL,
  //   is_correct BOOLEAN NOT NULL
  // )` ;
  // // Insert dummy data for quizzes table
  // await sql`INSERT INTO quizzes (name) VALUES ('Quiz 1'), ('Quiz 2')`

  return (
    <ul>
      {/* {quizzes.map(quiz => <li key={quiz.id}><Link href={`/quizzes/${quiz.id}`}>{quiz.name}</Link></li>)} */}
    </ul>
  )
}