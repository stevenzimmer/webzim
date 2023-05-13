import { useState } from "react"
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import {  FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Link from "next/link";
export default function Dalle() {

  const [answer, setAnswer] = useState("");
  const [prompt, setPrompt] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.ChangeEvent<any>) {
    e.preventDefault()
    if(prompt) {
      setErrorMsg("");
      setIsLoading(true)

      const response = await fetch("/api/openai-turbo", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      })
      const data = await response.json()
      // console.log({data});
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
  <Layout  meta={{title: "Open AI Dall-E Demonstration | Webzim Project", "description": "Demonstration of the Open AI APIs using Dall-E to generate images"}}>    
    <div className="py-20 px-6 max-w-[800px]">
      <div className="container">
        <Link href="/" className="font-bold mb-4 block">&#8592; Back home</Link>
        <motion.h1
          className="bg-gradient-to-br from-black to-slate-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[3rem] mb-6"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>OpenAI&apos;s 3.5 Turbo</Balancer>
        </motion.h1>
     
        <form className="our-form mb-12" onSubmit={handleSubmit}>
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
              <svg className="animate-spin h-10 w-10 text-blue-300 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-center text-xl">Generating Image</p>
            </div>
          )}
        
          {!isLoading && answer && (
            <div className="bg-blue-200 p-6 max-w-[512px] mx-auto">
              <img className="aspect-square w-full" src={answer} alt={`${prompt} AI generated Image`} />
            </div>
          )}
        </div>
      </div>
    </div>
  </Layout>

  )
}