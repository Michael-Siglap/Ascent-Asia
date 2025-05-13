import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { getTranslations, unstable_setRequestLocale } from "next-intl/server"
import { Suspense } from "react"

import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }]
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale

  // Get translations for metadata
  const t = await getTranslations({ locale, namespace: "metadata" })

  // Define the alternate languages for hreflang tags
  const alternateLanguages = {
    canonical: `https://ascent.asia/${locale}`,
    languages: {
      en: "https://ascent.asia/en",
      zh: "https://ascent.asia/zh",
    },
  }

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    metadataBase: new URL("https://ascent.asia"),
    alternates: alternateLanguages,
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://ascent.asia/${locale}`,
      siteName: "Ascent Asia Advisory",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Ascent Asia Advisory",
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/images/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
