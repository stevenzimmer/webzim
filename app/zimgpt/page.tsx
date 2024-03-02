"use client";
import { useState, useEffect } from "react"
import Header from '@/components/layout/header'
import Link from 'next/link'
import type { Metadata } from 'next'
import Subheader from "@/components/layout/subheader";

type Message = {
  content: string | "";
  role: string | "";
}

// export const metadata: Metadata = {
//   title: 'ZimGPT | WebDev Zim Project',
//   description: 'A showcase of React, State Management, and Tailwind CSS.',
// };

interface Chat extends Message {
  title: string;
} 
export default function ZimGPT() {
  const [message, setMessage] = useState<Message | null>(null);

  const [prompt, setPrompt] = useState<string>("");
  const [previousChats, setPreviousChats] = useState<Chat[] | []>([]);
  const [currentTitle, setCurrentTitle] = useState<string | null>(null);

  const [numberOfChats, setNumberOfChats] = useState<number>(0);

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMessages = async () => {
    try {
      if(numberOfChats >= 10) {
        alert("You have exceeded the number of calls per day. Please try again tomorrow.");
        return;
      }

      setIsLoading(true);
      
      const response = await fetch("/api/zimgpt", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });
      const {completion} = await response.json()
      // console.log( completion );
      setMessage(completion.choices[0].message);
      setNumberOfChats(numberOfChats + 1);
      localStorage.setItem("numberOfChats", JSON.stringify(numberOfChats + 1));
      // setPrompt("");
      setIsLoading(false)
    } catch (error) {
      console.log({error})
    } 
  }

  const handlePromptChange = (e: React.ChangeEvent<any>) => {
    setPrompt(e.target.value);
  }

  const createNewChat = () => {
    setPrompt("");
    toggleMenu();
    setCurrentTitle(null);
    setMessage(null);
  }

  useEffect(() => {
    if(localStorage.getItem("numberOfChats")) {
    setNumberOfChats(JSON.parse(localStorage.getItem("numberOfChats") as string ));
    }

    if(localStorage.getItem("previousChats")) {
      setPreviousChats(JSON.parse(localStorage.getItem("previousChats") as string ));
    }
   
  }, []);

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
        }
      ]));
    
    setPreviousChats( (prevChats) => (
      [...prevChats, 
        
        {
          title: currentTitle,
          content: message?.content || "",
          role: message?.role || ""
        }
      ]));

    setPrompt("");
   
  }}, [message, currentTitle]);

  useEffect(() => {
    if(previousChats.length > 0) {

    
    localStorage.setItem("previousChats", JSON.stringify(previousChats));
  }
  }, [previousChats]);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      getMessages();
    }
  }

  const isDisabled = numberOfChats >= 10;

  return (
    <div className='text-slate-50 flex relative'>
      {mobileOpen && (
        <div className="absolute w-full h-full inset-0 bg-black/80 z-0 md:hidden" onClick={toggleMenu}></div>
      )}
    
      <aside className={`w-4/5 md:w-1/4 h-screen p-6 flex flex-col justify-between bg-slate-700   absolute md:relative z-50 transition-transform duration-200 shadow-lg md:-translate-x-0 ${mobileOpen ? "" : "-translate-x-full "  }` }>
      
        <div className="flex md:hidden mb-6 group cursor-pointer" onClick={toggleMenu}>
        <svg className="w-8 border rounded p-1 w-content group-hover:bg-slate-900 "  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeWidth="2" d="M7,7 L17,17 M7,17 L17,7"></path></svg>
         
        </div>
        <button disabled={isDisabled} onClick={createNewChat} className='rounded border bg-transparent border-slate-50 px-6 py-3 w-full disabled:bg-slate-800 disabled:border-0 disabled:text-slate-600 disabled:cursor-not-allowed'>Start New Chat</button>
        {isDisabled && <AllottedChats />}
        <nav className='border-t py-6 my-6 h-full'>
          <div className="md:hidden">
          <Subheader >Previous Chats</Subheader>
          </div>
          
          <ul>
            
            {!isDisabled && currentTitle === null && <li className='my-3'>
              <a className='text-slate-50 block hover:text-slate-100 px-6 py-3 cursor-pointer bg-slate-600 truncate rounded' href='#'>New Chat</a>
              </li>
              }
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
                  }} className={`text-slate-50 block hover:text-slate-100 px-6 py-3 cursor-pointer truncate hover:bg-slate-800 ${currentTitle === title ? "bg-slate-600" : ""}`} href='#'>{title}</a>
                </li>
              )})
            }
          
          </ul>
        
        </nav>
        <Link href="/" className="font-bold  block text-slate-800 p-6 hover:bg-slate-100 bg-white rounded shadow-md">&#8592; Back to Portfolio</Link>
    
   
      </aside>
      <section className='h-screen w-full p-6 flex flex-col justify-between text-center overflow-scroll ' >
        <div className="max-w-[650px] mx-auto">
          <div className="flex justify-center items-center w-full">
            <div className="md:hidden w-1/2 text-left cursor-pointer group" onClick={toggleMenu}>
            <svg className="w-8 border rounded p-1 w-content group-hover:bg-slate-900 " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path><path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"></path></svg>
            </div>
            <div className="w-1/2 text-right">
            <Header>ZimGPT </Header>
            </div>
         
          </div>
        
        {isDisabled && <AllottedChats />}
        <div className="my-12 ">
      
          {previousChats !== null && previousChats.filter((chat, index) => {
            
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
          {isLoading && <div className='text-slate-50 text-lg'>Waiting for chat response...</div>}
         
          <div className='w-full flex flex-col justify-center items-center my-12 relative bottom-0 z-10  '>
            
            <input onKeyDown={handleKeyDown} disabled={isDisabled} onChange={handlePromptChange} className='w-full border-0 px-4 py-3 bg-white/20 rounded focus:outline-none shadow-md disabled:bg-slate-900 disabled:text-slate-600 disabled:cursor-not-allowed' value={prompt} type="text" name="prompt-input" id="prompt-input" />
            <button disabled={isDisabled} onClick={getMessages} className='absolute right-6 text-lg disabled:text-slate-600 disabled:cursor-not-allowed' type="submit">Submit</button>
          </div>
          <p className='text-slate-300 text-sm mt-6'>
          ZimGPT is far from perfect and can make mistakes. Consider checking important information. Also API calls are not free nor cheap so users are limited to 10 chat messages. Please chat responsibly. :)
          </p>
          </div>
        </div>
      </section>
    </div>
  )
}


const AllottedChats = () => {
  return (
    <div className="p-3 bg-amber-700 rounded mt-6 " >
      <p className='text-slate-300 text-sm mb-3'>You have exceeded the number of chats messages allotted for testing. You are welcome to review your previous chats.</p>
      <p>Please email if you like what you&apos;ve seen: webdevzim@gmail.com</p>
    </div>
  )
}