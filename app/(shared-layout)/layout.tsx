"use client"
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import {  FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <motion.div
        className="container  px-5 xl:px-0 md:py-20"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
    
        <motion.div
          className="max-w-[600px] mx-auto"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
      
          {children}
        </motion.div>
    </motion.div>
  </Layout>
  )
}
