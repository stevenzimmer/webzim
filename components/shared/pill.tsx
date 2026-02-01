import { motion } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'

export default function Pill({item, size = "lg"}: {
  item: string;
  size?: "lg" | "sm";
}) {
  return (
    <motion.div
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      className="m-1 w-auto rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 shadow-sm"
    >
      <motion.p
        className="text-sm font-semibold text-slate-200"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        {item}
      </motion.p>
    </motion.div>
  )
}
