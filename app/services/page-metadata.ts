import { getMetadata } from "@/lib/get-metadata"

export function generateMetadata({ params }: { params: { lang?: string } }) {
  const locale = params.lang || "en"

  return getMetadata(
    {
      title: {
        en: "Our Services | Ascent Asia Advisory",
        zh: "我们的服务 | 亚升咨询",
      },
      description: {
        en: "Comprehensive solutions for businesses expanding into Southeast Asian markets.",
        zh: "为拓展东南亚市场的企业提供全面解决方案。",
      },
      path: "services",
    },
    locale,
  )
}
