"use client";
import ZimGPTContext from '@/context/zimgpt'
import {useContext} from 'react'
import MobileBGOverlay from './mobileBGOverlay';
import Close from './close';
import CreateNewChat from './createNewChat';
import AllottedChats from './allottedChats';
import Subheader from '@/components/layout/subheader';
import NewChat from './newChat';
import PreviousChats from './previousChats';
import Link from 'next/link';
export default function Sidebar() {
  const {mobileOpen} = useContext(ZimGPTContext);
  return (
    <>
    <MobileBGOverlay />
    
    <aside className={`w-4/5 md:w-1/4 h-screen p-6 flex flex-col justify-between bg-slate-700   absolute md:relative z-50 transition-transform duration-200 shadow-lg md:-translate-x-0 ${mobileOpen ? "" : "-translate-x-full "  }` }>
    
     
      <Close />
      <CreateNewChat />
    
       <AllottedChats />
      <nav className='border-t py-6 my-6 h-full'>
        <div className="md:hidden">
        <Subheader >Previous Chats</Subheader>
        </div>
        
        <ul>
          
          <NewChat />
          <PreviousChats /> 
        
        </ul>
      
      </nav>
      <Link href="/" className="font-bold  block text-slate-800 p-6 hover:bg-slate-100 bg-white rounded shadow-md">&#8592; Back to Portfolio</Link>
  
 
    </aside>
    </>
  )
}
