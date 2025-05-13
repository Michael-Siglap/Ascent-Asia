"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLanguage: string) => {
    // Get the current path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "")

    // Navigate to the new locale path
    router.push(`/${newLanguage}${pathWithoutLocale}`)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className={`flex items-center gap-1 text-slate-600 dark:text-slate-400 ${className}`}>
          <Globe className="h-4 w-4" /> {locale === "en" ? "EN" : "中文"}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => switchLanguage("en")}>
            <div className={locale === "en" ? "font-bold" : ""}>English</div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => switchLanguage("zh")}>
            <div className={locale === "zh" ? "font-bold" : ""}>中文</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
