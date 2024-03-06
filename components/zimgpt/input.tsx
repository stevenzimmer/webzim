"use client";
import ZimGPTContext from '@/context/zimgpt';
import { useContext} from 'react'


export default function Input({ }) {

  const { setMessage, prompt, setPrompt, previousChats,  setIsLoading} = useContext(ZimGPTContext);

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
      setIsLoading(false)
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
      <input onKeyDown={handleKeyDown} disabled={isDisabled} onChange={handlePromptChange} className='w-full border-0 px-4 py-3 bg-white/20 rounded focus:outline-none shadow-md disabled:bg-slate-900 disabled:text-slate-600 disabled:cursor-not-allowed' value={prompt} type="text" name="prompt-input" id="prompt-input" />
      <button disabled={isDisabled} onClick={getMessages} className='absolute right-6 text-lg disabled:text-slate-600 disabled:cursor-not-allowed' type="submit">Submit</button>
    </>
  )
}
