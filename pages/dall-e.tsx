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

      const response = await fetch("/api/get-painting", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      })
      const data = await response.json()
      console.log({data});
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

        
    <Layout  meta={{title: "Open AI Dall-E Demonstration | Webzim", "description": "Demonstration of the Open AI APIs using Dall-E"}}>
      
    <div className="py-20">

      <div className="container">
        <Link href="/" className="font-bold">&#8592; Back home</Link>
      <motion.h1
          className="bg-gradient-to-br from-black to-slate-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem] mb-6"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Generate an image with a text prompt using Open AI&apos;s Dall-E</Balancer>
        </motion.h1>
     
{/* 
        <h2 className="text-center mb-4">Describe the image you want to generate</h2> */}
        <form className="our-form mb-12" onSubmit={handleSubmit}>
        <input placeholder="Describe the image..." className="prompt-field w-full border-slate-200 rounded mb-2" type="text" onChange={handleChange} />
        <button className="prompt-button bg-indigo-200 rounded px-3 py-2">Generate image</button>
      </form>
      {errorMsg && (
        <div>
          {errorMsg}
        </div>
      )}
      {isLoading && (
          <div>
            Generating image...
          </div>
        )}
        
        {!isLoading && answer && (
          <div className="bg-blue-200 p-6 max-w-[512px] mx-auto">
            
            <img className="aspect-square" src={answer} alt={`${prompt} AI generated Image`} />
          </div>
        )}
    </div>
    </div>
    </Layout>

  )
}