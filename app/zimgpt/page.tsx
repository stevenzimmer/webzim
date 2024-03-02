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
    // const aside = document.querySelector("aside");
    // aside?.classList.toggle("-translate-x-full");
    setMobileOpen(!mobileOpen);
  }

  const isDisabled = numberOfChats >= 10;

  return (
    <div className='text-slate-50 flex relative'>
      {/* {mobileOpen && (
  <div className="absolute w-full h-full inset-0 bg-black/80"></div>
      )} */}
    
      <aside className={`w-4/5 md:w-1/4 h-screen p-6 flex flex-col justify-between bg-slate-700   absolute md:relative z-50 transition-transform duration-200 shadow-lg ${mobileOpen ? "-translate-x-full md:-translate-x-0" : "" }` }>
      
        <div className="flex md:hidden mb-6 group cursor-pointer" onClick={toggleMenu}>
        <svg className="w-8 border rounded p-1 w-content group-hover:bg-slate-900" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path></svg>
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
            <svg className="w-8 border rounded p-1 w-content group-hover:bg-slate-900" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"></path></svg>
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
            
            <input disabled={isDisabled}  onChange={handlePromptChange} className='w-full border-0 px-4 py-3 bg-white/20 rounded focus:outline-none shadow-md disabled:bg-slate-900 disabled:text-slate-600 disabled:cursor-not-allowed' value={prompt} type="text" name="prompt-input" id="prompt-input" />
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