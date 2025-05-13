"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"

import { Button } from "@/components/ui/button"
import LanguageSwitcher from "@/components/language-switcher"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = useTranslations("navbar")
  const tServices = useTranslations("services")
  const locale = useLocale()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 shadow-sm backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <motion.div whileHover={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
            <Image src="/images/logo.png" alt="Ascent Asia Advisory" width={40} height={40} />
          </motion.div>
          <div>
            <div className="text-lg font-bold text-slate-800 dark:text-white">Ascent Asia Advisory</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Scaling New Heights</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
            <Link
              href={`/${locale}`}
              className="text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400"
            >
              {t("home")}
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
            <Link
              href={`/${locale}/services`}
              className="text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400"
            >
              {t("services")}
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
            <Link
              href={`/${locale}/about`}
              className="text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400"
            >
              {t("aboutUs")}
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
            <Link
              href={`/${locale}/contact`}
              className="text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400"
            >
              {t("contact")}
            </Link>
          </motion.div>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {mounted && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2" aria-label="Toggle theme">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>
          )}

          <LanguageSwitcher />

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-amber-500 hover:bg-amber-600">{t("getStarted")}</Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isMenuOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-slate-800 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-slate-800 dark:text-white" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute left-0 right-0 top-[72px] z-20 bg-white dark:bg-slate-900 p-4 shadow-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <nav className="flex flex-col gap-4">
              <Link
                href={`/${locale}`}
                className="p-2 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("home")}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="p-2 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("services")}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="p-2 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("aboutUs")}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="p-2 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contact")}
              </Link>

              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="mr-2 self-start"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                </Button>
              )}

              <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-2">
                  <LanguageSwitcher className="text-slate-600 dark:text-slate-400" />
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" className="bg-amber-500 hover:bg-amber-600" onClick={() => setIsMenuOpen(false)}>
                    {t("getStarted")}
                  </Button>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
