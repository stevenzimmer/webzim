"use client";
import { useState, useEffect } from "react"
import Header from '@/components/layout/header'
import Link from 'next/link'

type Message = {
  content: string | "";
  role: string | "";
}

interface Chat extends Message {
  title: string;
} 
export default function ZimGPT() {
  const [message, setMessage] = useState<Message | null>(null);

  const [prompt, setPrompt] = useState<string>("");
  const [previousChats, setPreviousChats] = useState<Chat[] | []>([]);
  const [currentTitle, setCurrentTitle] = useState<string | null>(null);

  const [numberOfChats, setNumberOfChats] = useState<number>(0);

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

  const isDisabled = numberOfChats >= 10;

  return (
    <div className='text-slate-50 flex'>
      <aside className='w-1/4 h-screen p-6 flex flex-col justify-between bg-slate-700'>
    
        <button disabled={isDisabled} onClick={createNewChat} className='rounded border bg-transparent border-slate-50 px-6 py-3 w-full disabled:bg-slate-800 disabled:border-0 disabled:text-slate-600 disabled:cursor-not-allowed'>Start New Chat</button>
        <nav className='border-t py-3 my-6 h-full'>
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
                  <a onClick={() => setCurrentTitle(title)} className={`text-slate-50 block hover:text-slate-100 px-6 py-3 cursor-pointer truncate ${currentTitle === title ? "bg-slate-600" : ""}`} href='#'>{title}</a>
                </li>
              )})
            }
          
          </ul>
        
        </nav>
        <Link href="/" className="font-bold  block text-slate-800 p-6 hover:bg-slate-100 bg-white rounded shadow-md">&#8592; Back to Portfolio</Link>
    
      </aside>
      <section className='h-screen w-full p-6 flex flex-col justify-between text-center overflow-scroll '>
        <div className="max-w-[650px] mx-auto">
        <Header>ZimGPT </Header>
        {/* <p>Chat Counter: {numberOfChats}</p> */}
        {isDisabled && <p className='text-slate-300 p-3 bg-amber-700 rounded text-sm mt-6'>You have exceeded the number of chats messages. You are welcome to review your previous chats.</p>}
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
          ZimGPT is far from perfect and can make mistakes. Consider checking important information. Also API calls are not free nor cheap so users are limited to 10 chat messages.
          </p>
          </div>
        </div>
      </section>
    </div>
  )
}
