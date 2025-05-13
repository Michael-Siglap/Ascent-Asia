"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"

interface DynamicTranslateProps {
  text: string
  className?: string
}

export default function DynamicTranslate({ text, className = "" }: DynamicTranslateProps) {
  const { currentLanguage, dynamicTranslate } = useLanguage()
  const [translatedText, setTranslatedText] = useState(text)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isMounted = true

    const translateContent = async () => {
      // Only translate if not in English
      if (currentLanguage !== "en") {
        setIsLoading(true)
        try {
          const result = await dynamicTranslate(text)
          if (isMounted) {
            setTranslatedText(result)
          }
        } catch (error) {
          console.error("Translation failed:", error)
        } finally {
          if (isMounted) {
            setIsLoading(false)
          }
        }
      } else {
        setTranslatedText(text)
      }
    }

    translateContent()

    return () => {
      isMounted = false
    }
  }, [text, currentLanguage, dynamicTranslate])

  return <span className={`${className} ${isLoading ? "opacity-70" : ""}`}>{translatedText}</span>
}
