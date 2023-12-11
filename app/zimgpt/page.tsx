"use client";
import { useState, useEffect } from "react"
import Header from '@/components/layout/header'
import Link from 'next/link'
import { set } from "immer/dist/internal";

// type PreviousChat = {
//   title: string;
//   role: string;
//   content: string;
// }

type Message = {
  content: string | "";
  role: string | "";
}

interface PreviousChat extends Message {
  title: string;
} 
export default function page() {
  const [message, setMessage] = useState<Message | null>(null);

  const [prompt, setPrompt] = useState("");
  const [previousChats, setPreviousChats] = useState<PreviousChat[]| []>([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const getMessages = async () => {
    try {
      const response = await fetch("/api/zimgpt", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });
      const {completion} = await response.json()
      console.log( completion );
      setMessage(completion.choices[0].message);
      setPrompt("");
    } catch (error) {
      console.log({error})
    }
    
  }

  const handlePromptChange = (e: React.ChangeEvent<any>) => {
    setPrompt(e.target.value);
  }

  useEffect(() => {
   if(!currentTitle && prompt && message) {
    setCurrentTitle(prompt);
   }

   if( currentTitle && prompt && message) {
 
    setPreviousChats( (prevChats) => (
      [...prevChats, 
        {
          title: currentTitle,
          role: "user",
          content: prompt
        },
        {
          title: currentTitle,
          content: message?.content || "",
          role: message?.role || ""
        }
      ]));
   
    // const previousChats = localStorage.getItem("previousChats");
    // if(previousChats) {
    //   setPreviousChats(JSON.parse(previousChats));
    // }
  }}, [message, currentTitle])

  return (
    <div className='text-slate-50 flex'>
      <aside className='w-1/4 h-screen p-6 flex flex-col justify-between bg-slate-800'>
    
        <button className='rounded border bg-transparent border-slate-50 px-6 py-3 w-full'>New Chat</button>
        <nav className='border-t py-3 my-6 h-full'>
          <ul>
            <li>
              <a className='text-slate-50 hover:text-slate-100' href='#'>Chats</a>
            </li>
          </ul>
        
        </nav>
        <Link href="/" className="font-bold  block text-slate-800 p-6 hover:bg-slate-100 bg-white rounded shadow-md">&#8592; Back to Portfolio</Link>
    
      </aside>
      <section className='h-screen w-full p-6 flex flex-col justify-between text-center'>
        <Header>ZimGPT</Header>
        <div>
          <ul className='mb-6'>
            <li>
              Feed
            </li>
          </ul>
          <div className='w-full flex flex-col justify-center items-center relative'>
            
            <input onChange={handlePromptChange} className='w-full border-0 px-4 py-3 bg-white/20 rounded focus:outline-none shadow-md' value={prompt} type="text" name="prompt-input" id="prompt-input" />
            <button onClick={getMessages} className='absolute right-6 text-lg' type="submit">Submit</button>
          </div>
          <p className='text-slate-300 text-sm mt-6'>
          ZimGPT is far from perfect and can make mistakes. Consider checking important information.
          </p>
        </div>
      </section>
    </div>
  )
}
