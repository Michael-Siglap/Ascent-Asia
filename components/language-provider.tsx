"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import enTranslations from "@/translations/en.json"
import zhTranslations from "@/translations/zh.json"

export type LanguageCode = "en" | "zh"

export const languages = {
  en: { label: "English", flag: "🇺🇸" },
  zh: { label: "中文", flag: "🇨🇳" },
}

type Translations = {
  [key: string]: string
}

type LanguageContextType = {
  currentLanguage: LanguageCode
  changeLanguage: (language: LanguageCode) => void
  t: (key: string) => string
}

// Create a default context value
const defaultContextValue: LanguageContextType = {
  currentLanguage: "en",
  changeLanguage: () => {},
  t: (key) => key,
}

const LanguageContext = createContext<LanguageContextType>(defaultContextValue)

// Load translations
const translations: Record<LanguageCode, Translations> = {
  en: enTranslations,
  zh: zhTranslations,
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check if there's a language in the URL path
    const pathname = window.location.pathname
    const urlLang = pathname.startsWith("/zh") ? "zh" : pathname.startsWith("/en") ? "en" : null

    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("NEXT_LOCALE") as LanguageCode

    // Priority: URL language > saved preference > default
    if (urlLang && Object.keys(languages).includes(urlLang)) {
      setCurrentLanguage(urlLang as LanguageCode)
    } else if (savedLanguage && Object.keys(languages).includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }

    setMounted(true)
  }, [])

  const changeLanguage = (language: LanguageCode) => {
    setCurrentLanguage(language)
    localStorage.setItem("NEXT_LOCALE", language)

    // Update URL to reflect language change (optional)
    const currentPath = window.location.pathname
    const strippedPath = currentPath.replace(/^\/(en|zh)/, "")

    if (language === "en") {
      window.history.pushState({}, "", strippedPath || "/")
    } else {
      window.history.pushState({}, "", `/${language}${strippedPath}`)
    }
  }

  const t = (key: string) => {
    if (!mounted) return key
    return translations[currentLanguage]?.[key] || key
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  return useContext(LanguageContext)
}
