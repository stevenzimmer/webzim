"use client";
import ZimGPTContext from '@/context/zimgpt';
import {useContext} from 'react'

import type { Chat } from "@/lib/types"

export default function PreviousChats() {
  const {previousChats, currentTitle, setCurrentTitle, toggleMenu, ref } = useContext(ZimGPTContext);
  return (
    <>
    {previousChats !== null && previousChats.length > 0 && (previousChats as any[]).reduce((acc: string[], chat: Chat) => {

if(!acc.includes(chat.title )) {
  acc.push(chat.title);
}
return acc;

},[]).map((title: string, index: number) => {
return (
  <li key={index} className='my-3'>
    <a onClick={() => {
      setCurrentTitle(title);
      toggleMenu();
      ref.current?.focus();
    }} className={`text-slate-50 block hover:text-slate-100 px-6 py-3 cursor-pointer truncate  ${currentTitle === title ? "bg-slate-600 hover:bg-slate-700" : "hover:bg-slate-700"}`} href='#'>{title}</a>
  </li>
)})
}</>
  )
}
