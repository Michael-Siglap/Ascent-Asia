"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

export type LanguageCode = "en" | "zh"

export const languages = {
  en: { label: "English", flag: "🇺🇸" },
  zh: { label: "中文", flag: "🇨🇳" },
}

type LanguageContextType = {
  currentLanguage: LanguageCode
  changeLanguage: (language: LanguageCode) => void
  t: (key: string) => string
  dynamicTranslate: (text: string) => Promise<string>
}

// Create a default context value to avoid the "must be used within a provider" error
const defaultContextValue: LanguageContextType = {
  currentLanguage: "en",
  changeLanguage: () => {},
  t: (key) => key,
  dynamicTranslate: async (text) => text,
}

const LanguageContext = createContext<LanguageContextType>(defaultContextValue)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>("en")
  const [dictionary, setDictionary] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("NEXT_LOCALE") as LanguageCode
    if (savedLanguage && Object.keys(languages).includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }

    // Simple dictionary for now - in a real app, you'd load this from JSON files
    setDictionary({
      // English translations are the keys themselves
    })
    setIsLoading(false)
  }, [])

  const changeLanguage = (language: LanguageCode) => {
    setCurrentLanguage(language)
    localStorage.setItem("NEXT_LOCALE", language)
    // In a real implementation, you would reload translations here
    window.location.reload()
  }

  const t = (key: string) => {
    return dictionary[key] || key
  }

  const dynamicTranslate = async (text: string): Promise<string> => {
    // If we're in English or the text is very short, don't translate
    if (currentLanguage === "en" || text.length < 5) return text

    // In a real implementation, you would call a translation API here
    return text
  }

  // Show a simple loading state
  if (isLoading) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        t,
        dynamicTranslate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  return useContext(LanguageContext)
}
