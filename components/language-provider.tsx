"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "next-intl"

type Language = "en" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useLocale() as Language
  const [language, setLanguageState] = useState<Language>(locale)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Update state when locale changes
    setLanguageState(locale)
  }, [locale])

  const setLanguage = (newLanguage: Language) => {
    if (newLanguage === language) return

    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)

    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "")

    // Navigate to the new locale path
    router.push(`/${newLanguage}${pathWithoutLocale}`)
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
