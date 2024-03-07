"use client";
import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import TodoForm from "@/components/todos/form";
import type { Todo } from "@/lib/types";
import Link from "next/link";

export default function Todos() {
  const [todos, setTodos] = useState<Todo[] | []>([]);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  return (
    <div className="py-20">

      <Link href="/" className="font-bold  block text-slate-800 p-6 hover:bg-slate-100 bg-white rounded shadow-md mb-6 inline-block">&#8592; Back to Portfolio</Link>
      <Header>Todos</Header>
      <TodoForm todos={todos} setTodos={setTodos} />
      <div className="py-20"></div>
    </div>
  );
}
