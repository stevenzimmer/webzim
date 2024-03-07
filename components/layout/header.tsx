"use client"
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import {  FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

export default function Header({children}: {children: React.ReactNode}) {
  return (
         <motion.h1
          className="text-white text-4xl font-semibold md:text-7xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {children}
        </motion.h1> 
  )
}
