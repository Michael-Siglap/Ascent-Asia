"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
}

export default function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      <Card className="h-full border-0 dark:bg-slate-800 shadow-lg transition-all duration-300">
        <CardContent className="p-6 h-full">{children}</CardContent>
      </Card>
    </motion.div>
  )
}
