"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  className?: string
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "40%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"
      />
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 180 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mx-4 h-3 w-3 rounded-full bg-amber-500"
      />
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "40%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"
      />
    </div>
  )
}
