"use client"

import { motion } from "motion/react"
import { easeOutQuart } from "@/lib/animations"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: easeOutQuart }}
    >
      {children}
    </motion.div>
  )
}
