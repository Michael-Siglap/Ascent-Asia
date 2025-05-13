import type { ReactNode } from "react"
import { i18n } from "@/i18n/i18n-config"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: { lang: string }
}) {
  // Validate that the incoming `lang` parameter is valid
  const isValidLocale = i18n.locales.some((locale) => locale === params.lang)
  const locale = isValidLocale ? params.lang : i18n.defaultLocale

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
