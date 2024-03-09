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
    
    <aside className={`w-4/5 lg:w-1/4 h-screen p-6 flex flex-col justify-between bg-slate-800  absolute lg:relative z-50 transition-transform duration-200 shadow-lg lg:-translate-x-0 ${mobileOpen ? "" : "-translate-x-full "  }` }>
    
     
      <Close />
      <CreateNewChat />
    
       <AllottedChats />
      <nav className='border-t py-6 my-6 h-full'>
        <div className="lg:hidden">
        <Subheader >Previous Chats</Subheader>
        </div>
        
        <ul>
          
          <NewChat />
          <PreviousChats /> 
        
        </ul>
      
      </nav>  
 
    </aside>
    </>
  )
}
