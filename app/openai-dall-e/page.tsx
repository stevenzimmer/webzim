
import type { Metadata } from 'next';
import Link from "next/link";
import Header from "@/components/layout/header";
import Form from "@/components/openai-dall-e/form";

export const metadata: Metadata = {
    title: 'Open AI Dall-E Demonstration | Web Dev Zim Project',
    description: 'A demonstration of the Open AI API using Dall-E 3 to generate images with revised prompt',
  };
export default function Dalle() {

  return (    
    <div className="py-20 px-6 max-w-[800px]">
      <div className="container">
        <Link href="/" className="font-bold mb-4 block text-white">&#8592; Back home</Link>
       
        <Header>
          Generate an image
        </Header>
        <Form />
        
      </div>
    </div>

  )
}