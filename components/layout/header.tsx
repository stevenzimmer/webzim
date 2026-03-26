"use client";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h1
      className={cn(
        "text-gradient text-balance font-display text-4xl font-semibold leading-tight md:text-7xl",
        className,
      )}
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      {children}
    </motion.h1>
  );
}
