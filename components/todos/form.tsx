"use client"
import { useState, Dispatch, SetStateAction } from "react";
import TodoItem from "./item";
import type {Todo} from "@/lib/types";
export default function TodoForm({todos, setTodos}: {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value ) {
      setTodos([...todos, {
        title: value,
        completed: false
      }]);
      setValue("");
    }
  }

  const incompleteTodos = todos.filter( (todo) => !todo.completed);
  // const completedTodosLength = todos.filter( (todo) => todo.completed).length;
  
  return (
    <div className="text-white my-6">
      <form onSubmit={handleSubmit} className="w-full flex items-center mb-6">
        <input className="w-full border-slate-100 border bg-slate-100 rounded shadow-lg text-slate-900" value={value} type="text" onChange={(e) => setValue(e.target.value)} />
        <button className="border px-6 py-2 rounded text-white bg-slate-800 border-slate-900 whitespace-nowrap mx-3" type="submit">Add task</button>
      </form>
      <div >
      <p className="mb-3">Number of Todos: {incompleteTodos.length}</p>
      {todos.map((todo, i) => {
      if(!todo.completed) {
        return (
          <TodoItem key={i} index={i} todo={todo} todos={todos} setTodos={setTodos} />
        )
      }})}
      </div>
     
      
    </div>
  )
}
