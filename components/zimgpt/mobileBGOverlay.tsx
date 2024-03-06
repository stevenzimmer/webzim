"use client";
import ZimGPTContext from '@/context/zimgpt'
import {useContext} from 'react'

export default function MobileBGOverlay() {
  const {mobileOpen, toggleMenu} = useContext(ZimGPTContext);
  return (
    <>
     {mobileOpen && (
        <div className="absolute w-full h-full inset-0 bg-black/80 z-0 md:hidden" onClick={toggleMenu}></div>
      )}</>
  )
}
