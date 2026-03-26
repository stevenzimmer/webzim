"use client";
import ZimGPTContext from "@/context/zimgpt";
import { useContext } from "react";

export default function CreateNewChat() {
  const {
    setMessage,
    setPrompt,
    setCurrentTitle,
    toggleMenu,
    previousChats,
    ref,
  } = useContext(ZimGPTContext);
  const createNewChat = () => {
    setPrompt("");
    toggleMenu();
    setCurrentTitle(null);
    setMessage(null);
    ref.current?.focus();
  };
  return (
    <button
      disabled={previousChats.length >= 20}
      onClick={createNewChat}
      className="w-full rounded border border-slate-50 bg-transparent px-6 py-3 disabled:cursor-not-allowed disabled:border-0 disabled:bg-slate-800 disabled:text-slate-600"
    >
      Start New Chat
    </button>
  );
}
