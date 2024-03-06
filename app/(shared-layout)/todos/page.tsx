"use client"
import { useState } from "react"
import Header from "@/components/layout/header"
import TodoForm from "@/components/todos/form"
import type { Todo } from "@/lib/types";

export default function Todos() {
  const [todos, setTodos] = useState<Todo[] | []>([]);

  return (
    <>
      <Header>Todos</Header>
      <TodoForm todos={todos} setTodos={setTodos}  />
    </>
  )
}
