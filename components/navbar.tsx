"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Globe, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage, languages, type LanguageCode } from "@/components/language-provider"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { currentLanguage, changeLanguage, t } = useLanguage()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 shadow-sm backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
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
              href="/"
              className="text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400"
            >
              {t("home")}
            </Link>
          </motion.div>

          <DropdownMenu>
            <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400">
                {t("services")} <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
            </motion.div>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/services/market-entry" className="w-full">
                  {t("market_entry")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/regulatory" className="w-full">
                  {t("regulatory_compliance")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/business-development" className="w-full">
                  {t("business_development")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
            <Link
              href="/about"
              className="text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400"
            >
              {t("about_us")}
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
            <Link
              href="/contact"
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

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
              <Globe className="h-4 w-4" /> {languages[currentLanguage].flag} {currentLanguage.toUpperCase()}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Object.entries(languages).map(([code, { label, flag }]) => (
                <DropdownMenuItem key={code} onClick={() => changeLanguage(code as LanguageCode)}>
                  <span className="mr-2">{flag}</span> {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-amber-500 hover:bg-amber-600">{t("get_started")}</Button>
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="p-2 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("home")}
              </Link>
              <div className="p-2 text-slate-800 dark:text-white">
                <div className="mb-2 font-medium">{t("services")}</div>
                <div className="ml-4 flex flex-col gap-2">
                  <Link
                    href="/services/market-entry"
                    className="py-1 text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("market_entry")}
                  </Link>
                  <Link
                    href="/services/regulatory"
                    className="py-1 text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("regulatory_compliance")}
                  </Link>
                  <Link
                    href="/services/business-development"
                    className="py-1 text-slate-600 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("business_development")}
                  </Link>
                </div>
              </div>
              <Link
                href="/about"
                className="p-2 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about_us")}
              </Link>
              <Link
                href="/contact"
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
                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                  <Globe className="h-4 w-4" /> {languages[currentLanguage].flag} {currentLanguage.toUpperCase()}
                </div>
                <Button size="sm" className="bg-amber-500 hover:bg-amber-600" onClick={() => setIsMenuOpen(false)}>
                  {t("get_started")}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
