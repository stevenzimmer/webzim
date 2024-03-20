import type { Metadata } from "next";
import Header from "@/components/layout/header";
import TodoForm from "@/components/todos/form";

export const metadata: Metadata = {
  title: "Todos | Web Dev Zim Project",
  description:
    "A showcase of react, TypeScript,  persisted state management, and TailwindCSS.",
};

export default function Todos() {
  return (
    <div className="py-20">
      <Header>Todos</Header>
      <TodoForm />
      <div className="py-32"></div>
    </div>
  );
}
