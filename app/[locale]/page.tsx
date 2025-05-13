import { Suspense } from "react"
import HomeClient from "@/components/home-client"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <HomeClient />
      </Suspense>
    </div>
  )
}
