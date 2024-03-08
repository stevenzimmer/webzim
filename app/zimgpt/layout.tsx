"use client";
import {useState, useEffect, useRef } from 'react'
import ZimGPTContext from "@/context/zimgpt";
import type { Chat, Message } from "@/lib/types"
;
export default function Layout({ children}: {
  children: React.ReactNode
}) {

  const ref = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState<Message | null>(null);

  const [prompt, setPrompt] = useState<string>("");
  const [previousChats, setPreviousChats] = useState<Chat[] | []>([]);
  const [currentTitle, setCurrentTitle] = useState<string | null>(null);

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  }


  useEffect(() => {

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


  return (
    <ZimGPTContext.Provider value={
      {
        message,
        setMessage,
        prompt,
        setPrompt,
        previousChats,
        setPreviousChats,
        currentTitle,
        setCurrentTitle,
        mobileOpen,
        setMobileOpen,
        isLoading,
        setIsLoading,
        toggleMenu,
        ref
        
      }
    }>{children}</ZimGPTContext.Provider>
  )
}
