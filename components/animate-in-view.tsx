"use client"

import type { ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimateInViewProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate" | "none"
  className?: string
  once?: boolean
  amount?: number
  duration?: number
  staggerChildren?: boolean
  staggerDelay?: number
}

export default function AnimateInView({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
  amount = 0.3,
  duration = 0.6,
  staggerChildren = false,
  staggerDelay = 0.1,
}: AnimateInViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  const directionVariants = {
    up: {
      hidden: { y: 50, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    down: {
      hidden: { y: -50, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    left: {
      hidden: { x: 50, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    right: {
      hidden: { x: -50, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    scale: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
    },
    rotate: {
      hidden: { rotate: -5, opacity: 0 },
      visible: { rotate: 0, opacity: 1 },
    },
    none: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  if (staggerChildren) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={directionVariants[direction]}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function AnimateInViewItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
