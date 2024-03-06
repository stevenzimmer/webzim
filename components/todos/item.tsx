"use client"

import { useState } from "react";

import type { Todo } from "@/lib/types";

export default function TodoItem({todo, index,todos, setTodos}: {
  todo: Todo;
  index: number;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  
  const [error, setError] = useState("");
  
  const handleDelete = () => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const newTodos = [...todos];
    newTodos[index].title = e.target.value;
    setTodos(newTodos);
    // setValue(e.target.value);
  }

  const handleSave = () => {
      const newTodos = [...todos];
      newTodos[index].title = todo.title;
      setTodos(newTodos);
      setIsEditing(false);
      // setError("");
  }

  const handleTodoComplete = () => {
    // setCompleted(!completed);
    const newTodos = [...todos];
    newTodos[index].completed = !todo.completed;
    console.log({newTodos});
    console.log({index});
    setTodos(newTodos);
  }

  return (
    <div className="flex items-center justify-between mb-2">
      <div className="w-full">
        <div className="flex items-center">

       
        <input className="mx-2" type="checkbox" onChange={handleTodoComplete} value={`${todo.completed}`} checked={todo.completed} />
      {isEditing ? (
        <div className="relative">
           <input className="text-slate-900 w-full rounded border" onChange={handleChange} type="text" value={todo.title} />
          {/* <div onClick={() => setIsEditing(false)} className="absolute right-2 top-1  w-8 h-8 rounded-full bg-red-500 opacity-50"></div> */}
        </div>
       
      ) : (
        <div className={`p-3 w-full  rounded ${todo.completed ? "bg-slate-600" : "bg-slate-400" }` }>
          {todo.title}
        </div>
      )}
       </div>
      {error && (
     
      <div className="border border-red-500 bg-slate-200 p-3 text-slate-800 rounded">
       {error}
      </div>
     )}
      </div>
      <div className="w-full px-2">

        {!todo.completed && (
          <>
            {isEditing ? (
      <button  onClick={handleSave} className="border px-3 py-2 rounded text-white bg-green-800 border-green-900 whitespace-nowrap mx-1">Save Item</button>
      ) : (
        <button  onClick={handleEdit} className="border px-3 py-2 rounded text-white bg-slate-600 border-slate-500 whitespace-nowrap mx-1">Edit Item</button>
      )}
      <button onClick={handleDelete} className="border px-3 py-2 rounded text-white bg-red-800 border-red-900 whitespace-nowrap mx-1">Delete Item</button>
          </>  
        )}
    
     
      </div>
    </div>
    
  )
}
