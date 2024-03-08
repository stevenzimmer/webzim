"use client";
import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import TodoForm from "@/components/todos/form";
import type { Todo } from "@/lib/types";

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
      <Header>Todos</Header>
      <TodoForm todos={todos} setTodos={setTodos} />
      <div className="py-32"></div>
    </div>

  );
}
