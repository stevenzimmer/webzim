"use client";
import ZimGPTContext from '@/context/zimgpt'
import {useContext} from 'react'

export default function NewChat() {
  const {previousChats, currentTitle} = useContext(ZimGPTContext);
  return (
    <>
     {previousChats.length < 20 && currentTitle === null && <li className='my-3'>
              <a className='text-slate-50 block hover:text-slate-100 px-6 py-3 cursor-pointer bg-slate-600 truncate rounded' href='#'>New Chat</a>
              </li>
              }
              </>
  )
}
