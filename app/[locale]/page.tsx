import { Suspense } from "react"
import { unstable_setRequestLocale } from "next-intl/server"
import HomeClient from "@/components/home-client"

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <HomeClient />
      </Suspense>
    </div>
  )
}
