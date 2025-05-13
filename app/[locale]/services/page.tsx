import { unstable_setRequestLocale } from "next-intl/server"
import ServicesClient from "@/components/services-client"

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  return <ServicesClient />
}
