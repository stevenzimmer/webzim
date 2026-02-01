import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import {  FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
export default function Subheader({children}: {children: React.ReactNode}) {
  return (
    <motion.h2
          className="mb-6 text-center font-display text-3xl font-semibold tracking-[-0.02em] text-slate-100 md:text-5xl md:leading-[4.5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>{children}</Balancer>
        </motion.h2>
  )
}
