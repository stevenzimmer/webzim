"use client"
import { useState } from "react"
import TodoItem from "./item"

export default function TodoForm({todos}: {
  todos: string[];
  }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value && !todos.includes(value)) {
      // setTodos([...todos, value]);
      setValue("");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={value} type="text" onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Add task</button>
      </form>
      {todos.map((todo, i) => <TodoItem key={i} index={i} todo={todo}  todos={todos} />)}
      
    </>
  )
}
