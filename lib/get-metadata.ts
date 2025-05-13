import type { Metadata } from "next"
import { i18n } from "@/i18n/i18n-config"

type MetadataProps = {
  title?: {
    en: string
    zh: string
  }
  description?: {
    en: string
    zh: string
  }
  path?: string
}

export function getMetadata(props: MetadataProps, locale = "en"): Metadata {
  const { title, description, path = "" } = props

  // Default metadata for English
  const defaultTitle = {
    en: "Ascent Asia Advisory | Business Internationalization",
    zh: "亚升咨询 | 企业国际化",
  }

  const defaultDescription = {
    en: "We facilitate the internationalization of businesses into Singapore and Southeast Asia.",
    zh: "我们促进企业向新加坡和东南亚的国际化发展。",
  }

  // Use provided title/description or fallback to defaults
  const titleContent = title ? title[locale as keyof typeof title] : defaultTitle[locale as keyof typeof defaultTitle]
  const descriptionContent = description
    ? description[locale as keyof typeof description]
    : defaultDescription[locale as keyof typeof defaultDescription]

  // Generate alternate URLs for each language
  const alternateLanguages: Record<string, string> = {}
  i18n.locales.forEach((lang) => {
    alternateLanguages[lang] = lang === "en" ? `/${path}` : `/${lang}/${path}`
  })

  return {
    title: titleContent,
    description: descriptionContent,
    alternates: {
      languages: alternateLanguages,
    },
    openGraph: {
      title: titleContent,
      description: descriptionContent,
      url: `https://ascentasia.com/${locale === "en" ? "" : locale + "/"}${path}`,
      siteName: locale === "en" ? "Ascent Asia Advisory" : "亚升咨询",
      locale: locale === "en" ? "en_US" : "zh_CN",
      type: "website",
    },
  }
}
