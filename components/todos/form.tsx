"use client";
import { useState, Dispatch, SetStateAction } from "react";
import TodoItem from "./item";
import type { Todo } from "@/lib/types";
export default function TodoForm({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}) {
  const [value, setValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      setTodos([
        ...todos,
        {
          title: value,
          completed: false,
        },
      ]);
      setValue("");
    }
  };

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  // const completedTodosLength = todos.filter( (todo) => todo.completed).length;

  return (
    <div className="my-6 text-white">
      <form onSubmit={handleSubmit} className="mb-6 flex w-full items-center">
        <input
          className="w-full rounded border border-slate-100 bg-slate-100 text-slate-900 shadow-lg"
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="mx-3 whitespace-nowrap rounded border border-slate-900 bg-slate-800 px-6 py-2 text-white"
          type="submit"
        >
          Add task
        </button>
      </form>
      <div>
        <p className="mb-3">Number of Todos: {incompleteTodos.length}</p>
        {todos.map((todo, i) => {
          if (!todo.completed) {
            return (
              <TodoItem
                key={i}
                index={i}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
