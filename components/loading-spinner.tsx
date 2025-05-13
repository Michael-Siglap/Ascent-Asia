"use client"

import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: "primary" | "white"
  className?: string
}

export default function LoadingSpinner({ size = "md", color = "primary", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  const colorClasses = {
    primary: "text-amber-500",
    white: "text-white",
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`border-4 border-t-transparent rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{ borderTopColor: "transparent" }}
      />
    </div>
  )
}
