"use client";
import ZimGPTContext from "@/context/zimgpt";
import { useContext } from "react";

export default function Close() {
  const { toggleMenu } = useContext(ZimGPTContext);
  return (
    <div
      className="group mb-6 flex cursor-pointer lg:hidden"
      onClick={toggleMenu}
    >
      <svg
        className="w-content w-8 rounded border p-1 group-hover:bg-slate-900"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" strokeWidth="2" d="M7,7 L17,17 M7,17 L17,7"></path>
      </svg>
    </div>
  );
}
