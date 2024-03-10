"use client";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Nav from "@/components/layout/Nav";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />

      <motion.div
        className="container  px-5 md:py-20 xl:px-0"
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
          className="mx-auto max-w-[600px]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
}
