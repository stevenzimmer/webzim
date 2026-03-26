"use client";
import ZimGPTContext from "@/context/zimgpt";
import { useContext } from "react";

export default function NewChat() {
  const { previousChats, currentTitle } = useContext(ZimGPTContext);
  return (
    <>
      {previousChats.length < 20 && currentTitle === null && (
        <li className="my-3">
          <a
            className="block cursor-pointer truncate rounded bg-slate-600 px-6 py-3 text-slate-50 hover:text-slate-100"
            href="#"
          >
            New Chat
          </a>
        </li>
      )}
    </>
  );
}
