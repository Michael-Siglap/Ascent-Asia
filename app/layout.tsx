import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: {
    default: "Ascent Asia Advisory | Business Internationalization",
    template: "%s | Ascent Asia Advisory",
  },
  description: "We facilitate the internationalization of businesses into Singapore and Southeast Asia.",
  alternates: {
    languages: {
      en: "/",
      zh: "/zh",
    },
  },
  openGraph: {
    title: "Ascent Asia Advisory | Business Internationalization",
    description: "We facilitate the internationalization of businesses into Singapore and Southeast Asia.",
    url: "https://ascentasia.com",
    siteName: "Ascent Asia Advisory",
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
