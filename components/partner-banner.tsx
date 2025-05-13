"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"

interface Partner {
  name: string
  url: string
  description: string
  imageUrl: string
}

export default function PartnerBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentPartner, setCurrentPartner] = useState(0)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  const partners: Partner[] = [
    {
      name: "Hikari Nova",
      url: "https://hikarinova.com",
      description: t("partner_hikari_desc") || "See your investments grow with Hikari Nova",
      imageUrl: "/images/partner-hikari.png",
    },
    {
      name: "Japan Trawl",
      url: "https://japantrawl.com",
      description: t("partner_japan_desc") || "Experience the beauty of Japan's destinations",
      imageUrl: "/images/partner-japan.jpg",
    },
    {
      name: "Baking Heritage",
      url: "https://bakingheritage.com",
      description: t("partner_baking_desc") || "Explore traditional baking recipes and techniques",
      imageUrl: "/images/partner-baking.jpg",
    },
  ]

  useEffect(() => {
    setMounted(true)

    // Show banner after 5 seconds
    const timer = setTimeout(() => {
      const bannerDismissed = localStorage.getItem("partnerBannerDismissed")
      if (bannerDismissed !== "true") {
        setIsVisible(true)
      }
    }, 5000)

    // Rotate partners every 7 seconds
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length)
    }, 7000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [partners.length])

  const dismissBanner = () => {
    setIsVisible(false)
    localStorage.setItem("partnerBannerDismissed", "true")
  }

  const nextPartner = () => {
    setCurrentPartner((prev) => (prev + 1) % partners.length)
  }

  const prevPartner = () => {
    setCurrentPartner((prev) => (prev - 1 + partners.length) % partners.length)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, x: 100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          exit={{ y: 100, x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-4 right-4 z-50 max-w-xs overflow-hidden rounded-lg shadow-lg"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <motion.div
            className={`${theme === "dark" ? "bg-slate-800" : "bg-white"} border ${
              theme === "dark" ? "border-slate-700" : "border-slate-200"
            } rounded-lg overflow-hidden`}
            animate={{
              width: isExpanded ? "320px" : "220px",
              height: isExpanded ? "auto" : "64px",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-md bg-white">
                  <Image
                    src={partners[currentPartner].imageUrl || "/placeholder.svg"}
                    alt={partners[currentPartner].name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                    {t("partner_highlight") || "Partner Highlight"}
                  </p>
                  <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-slate-800"}`}>
                    {partners[currentPartner].name}
                  </p>
                </div>
              </div>
              <button
                onClick={dismissBanner}
                className={`p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-500"
                }`}
                aria-label="Dismiss banner"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3">
                    <div className="relative h-32 w-full overflow-hidden rounded-md mb-3 bg-white">
                      <Image
                        src={partners[currentPartner].imageUrl || "/placeholder.svg"}
                        alt={partners[currentPartner].name}
                        fill
                        className={`object-contain ${partners[currentPartner].name === "Hikari Nova" ? "p-4" : ""}`}
                      />
                      {partners[currentPartner].name !== "Hikari Nova" && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p
                          className={`font-medium ${partners[currentPartner].name === "Hikari Nova" ? "text-transparent" : "text-white"}`}
                        >
                          {partners[currentPartner].name}
                        </p>
                      </div>
                    </div>
                    <p className={`text-sm mb-3 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                      {partners[currentPartner].description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        <button
                          onClick={prevPartner}
                          className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
                          aria-label="Previous partner"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={nextPartner}
                          className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700"
                          aria-label="Next partner"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                      <Link
                        href={partners[currentPartner].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-medium text-amber-500 hover:text-amber-600"
                      >
                        {t("visit_site") || "Visit Site"} <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulse Animation */}
            <motion.div
              className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-amber-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
