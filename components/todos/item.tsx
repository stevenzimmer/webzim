"use client"

import { useState } from "react";


export default function TodoItem({todo, index,todos}: {
  todo: string;
  index: number;
  todos: string[];
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo);
  const [error, setError] = useState("");
  const handleDelete = () => {
    // console.log("delete", index)
  }
  const handleEdit = () => {
    // console.log("edit", index);
    setIsEditing(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

  }

  const handleSave = () => {
    // console.log("save", index, value);
    if (!todos.includes(value)) {
      const newTodos = [...todos];
      newTodos[index] = value;
      // setTodos(newTodos);
      setIsEditing(false);
    } else {
      setError("Todo already exists");
    }
 
  }
  return (
    <div className="flex">
      {isEditing ? (
        <div className="relative">
           <input onChange={handleChange} type="text" value={value} />
          <div onClick={() => setIsEditing(false)} className="absolute right-2 top-1  w-8 h-8 rounded-full bg-red-500 opacity-50"></div>
        </div>
       
      ) : value}
      {isEditing ? (
      <div onClick={handleSave} className="px-3 text-emerald-400">Save Item</div>
      ) : (
        <div onClick={handleEdit} className="px-3">Edit Item</div>
      )}
      <div onClick={handleDelete} className="px-3">Delete Item</div>
      {error}
    </div>
  )
}
