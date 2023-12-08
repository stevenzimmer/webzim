"use client"
import { useState } from "react"
import Header from "@/components/layout/header"
import TodoForm from "@/components/todos/form"


export default function Todos() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header>Todos</Header>
      <TodoForm todos={todos}   />
    </div>
  )
}
