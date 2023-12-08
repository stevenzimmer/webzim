"use client"
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import {  FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

export default function Header({children}: {children: React.ReactNode}) {
  return (
         <motion.h1
          className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>{children}</Balancer>
        </motion.h1> 
  )
}
