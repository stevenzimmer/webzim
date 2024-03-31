"use client";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

export default function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h1
      className={`text-4xl font-semibold text-white md:text-7xl ${className}`}
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      {children}
    </motion.h1>
  );
}
