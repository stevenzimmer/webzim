import { motion } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'

export default function Pill({item, size = "lg"}: {
  item: string;
  size?: "lg" | "sm";
}) {
  return (
    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}  className="w-auto border border-teal-200/50 bg-teal-200/50 rounded px-2 md:px-3 py-1 shadow m-1">
                        
      <motion.p
      className="text-white font-semibold text-sm md:text-base font-code tracking-wide"
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        {item}
      </motion.p>
    </motion.div>
  )
}
