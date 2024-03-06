"use client";
import ZimGPTContext from '@/context/zimgpt';
import {useContext} from 'react'

export default function CreateNewChat() {
  const {setMessage, setPrompt, setCurrentTitle, toggleMenu, previousChats} = useContext(ZimGPTContext);
  const createNewChat = () => {
    setPrompt("");
    toggleMenu();
    setCurrentTitle(null);
    setMessage(null);
  }
  return (
    <button disabled={previousChats.length >= 20} onClick={createNewChat} className='rounded border bg-transparent border-slate-50 px-6 py-3 w-full disabled:bg-slate-800 disabled:border-0 disabled:text-slate-600 disabled:cursor-not-allowed'>Start New Chat</button>
  )
}
