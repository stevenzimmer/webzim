import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import {  FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
export default function Subheader({children}: {children: React.ReactNode}) {
  return (
    <motion.h2
          className="bg-gradient-to-br from-white to-slate-500 bg-clip-text  font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem] text-center mb-6"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>{children}</Balancer>
        </motion.h2>
  )
}
