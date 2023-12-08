"use client";
import { useState } from "react"
export default function Form() {
  const [answer, setAnswer] = useState("");
  const [aiPrompt, setAiPrompt] = useState("");
  const [prompt, setPrompt] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  async function handleSubmit(e: React.ChangeEvent<any>) {
    e.preventDefault()
    if(prompt) {
      setErrorMsg("");
      setIsLoading(true)

      const response = await fetch("/api/get-painting", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });
      const data = await response.json()
      // console.log({data});
      setAiPrompt(data.aiPrompt);
      setAnswer(data.img);
      setIsLoading(false);
    } else {
      setErrorMsg("Please describe the image");
    }
    
  }

  async function handleChange(e: React.ChangeEvent<any>) {
    setPrompt(e.target.value);
  }
  return (
  <>
    <form className="our-form my-12" onSubmit={handleSubmit}>
          <input placeholder="Describe the image you want to generate..." className="w-full border-slate-200 rounded mb-2" type="text" onChange={handleChange} />
          <button className=" bg-indigo-200 rounded px-3 py-2">Generate image</button>
        </form>
        <div className="h-screen">
        {errorMsg && (
          <div>
            {errorMsg}
          </div>
        )}

        {isLoading && (
          <div>
            <svg className="animate-spin h-10 w-10 text-slate-800 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-center text-xl text-white">Generating Image</p>
          </div>
        )}
      
        {!isLoading && answer && (
          <div className="bg-slate-800 rounded p-6 max-w-[512px] mx-auto mb-6">
            <img className="aspect-square w-full" src={answer} alt={`${prompt} AI generated Image`} />
          </div>
          
        )}
        {aiPrompt && (
            <div className="text-white bg-slate-800 rounded p-6">
              <p className="font-semibold mb-3">Revised Prompt</p>
<p>                {aiPrompt}</p>
            </div>
          )}
      </div>
      </>
  )
}
