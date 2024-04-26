"use client";
import { motion } from "framer-motion";
export default function Motion({
  children,
  className,
  animate = "show",
  initial = "hidden",
  variants,
  whileInView = "show",
  viewport = { once: true },
  ...props
}: {
  children: React.ReactNode;
  props?: any;
  className?: string;
  animate?: string;
  initial?: string;
  whileInView?: string;
  viewport?: any;
  variants?: any;
}) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}
