"use client";
import ZimGPTContext from '@/context/zimgpt'
import {useContext} from 'react';
export default function AllottedChats() {
  const {previousChats} = useContext(ZimGPTContext);
  return (
    <>
      {previousChats.length >= 20 && (

    
    <div className="p-3 bg-amber-700 rounded mt-6 " >
      <p className='text-slate-300 text-sm mb-3'>You have exceeded the number of chats messages allotted for testing. You are welcome to review your previous chats.</p>
      <p>Please email if you like what you&apos;ve seen: webdevzim@gmail.com</p>
    </div>
      )}
      </>
  )
}
