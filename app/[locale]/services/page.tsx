import { Suspense } from "react"
import ServicesClient from "@/components/services-client"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <ServicesClient />
      </Suspense>
    </div>
  )
}
