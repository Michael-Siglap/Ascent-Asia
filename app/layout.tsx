import PartnerBanner from "@/components/partner-banner";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ascent Asia Advisory | Business Internationalization",
  description:
    "We facilitate the internationalization of businesses into Singapore and Southeast Asia.",
  generator: "Michael Mammela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PartnerBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
