import { Metadata } from 'next';
import Header from '@/components/layout/header'
import Input from "@/components/zimgpt/input";
import AllottedChats from "@/components/zimgpt/allottedChats";
import Hamburger from "@/components/zimgpt/hamburger";
import ChatMessage from "@/components/zimgpt/ChatMessage";
import Sidebar from "@/components/zimgpt/Sidebar";
import Loader from "@/components/zimgpt/Loader";
import Nav from "@/components/layout/Nav";

export const metadata: Metadata = {
  title: 'ZimGPT | WebDev Zim Project',
  description: 'A showcase of the OpenAI API and SDK, React, TypeScript, State Management, and Context API.',
};

export default function ZimGPT() {

  return (
    <div className='text-slate-50 flex relative'>
      <Sidebar />
      <section className='h-screen w-full p-6  overflow-scroll ' >
        <Nav />
        <div className="max-w-[650px] mx-auto py-12 lg:py-20">
          <div className="flex justify-center items-center w-full">
            <Hamburger />
            <div>
              <Header>ZimGPT </Header>
            </div>
          </div>
        
          <AllottedChats />
          <div className="my-12 ">
      
            <ChatMessage />
          
            <Loader />
            <div className='w-full my-12 relative z-10  '>
              <Input />
            </div>

          <p className='text-slate-300 text-sm mt-6 text-center'>
          ZimGPT is far from perfect and can make mistakes. Consider checking important information. Also API calls are not free nor cheap so users are limited to 10 chat messages. Please chat responsibly. :)
          </p>
          </div>
        </div>
      </section>
    </div>
  )
}

