"use client";
import ZimGPTContext from '@/context/zimgpt';
import {useContext} from 'react'

export default function ChatMessage() {
  const {previousChats, currentTitle} = useContext(ZimGPTContext);
  return (
    <>    {previousChats !== null && previousChats.filter((chat, index) => {
            
      return chat.title === currentTitle;
    }).map((chat, index) => {
      return (
        <div key={index} className={`text-left p-6 rounded ${chat.role === "user" ? "bg-slate-700" : ""}`}>
     
          <div className=''>
            <p className='text-slate-300 text-sm'>{chat.role}</p>
            <p className='text-slate-50 text-lg'>{chat.content}</p>
          </div>
        </div>
      )
    })}
    </>

  )
}
