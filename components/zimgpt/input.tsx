"use client";
import ZimGPTContext from '@/context/zimgpt';
import { useContext, useEffect, useRef } from 'react'


export default function Input({ }) {


  const { setMessage, prompt, setPrompt, previousChats,  setIsLoading, ref } = useContext(ZimGPTContext);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const isDisabled = previousChats.length >= 20;
  
  const getMessages = async () => {
    try {
     
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
    
      setMessage(completion.choices[0].message);
      setIsLoading(false);
  
      ref.current?.focus();

    } catch (error) {
      console.log({error})
    } 
  }

  const handlePromptChange = (e: React.ChangeEvent<any>) => {
    setPrompt(e.target.value);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      getMessages();
    }
  }

  return (
    <>
      <input ref={ref} onKeyDown={handleKeyDown} disabled={isDisabled} onChange={handlePromptChange} className='w-full pr-24 border-0 px-4 py-3 bg-white/20 rounded focus:outline-none shadow-md disabled:bg-slate-900 disabled:text-slate-600 disabled:cursor-not-allowed' value={prompt} type="text" name="prompt-input" id="prompt-input" />
      <button disabled={isDisabled} onClick={getMessages} className='absolute md:translate-x-full right-0 md:right-1  rounded md:text-lg disabled:text-teal-900 disabled:cursor-not-allowed bg-teal-800 h-full disabled:bg-teal-200/50 w-1/4 md:w-1/5 lg:w-1/6' type="submit">Submit</button>
    </>
  )
}
