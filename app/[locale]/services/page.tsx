import ServicesClient from "@/components/services-client"

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  return <ServicesClient />
}
