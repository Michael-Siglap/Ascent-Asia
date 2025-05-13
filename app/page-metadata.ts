import { getMetadata } from "@/lib/get-metadata"

export function generateMetadata({ params }: { params: { lang?: string } }) {
  const locale = params.lang || "en"

  return getMetadata(
    {
      title: {
        en: "Ascent Asia Advisory | Business Internationalization",
        zh: "亚升咨询 | 企业国际化",
      },
      description: {
        en: "We facilitate the internationalization of businesses into Singapore and Southeast Asia.",
        zh: "我们促进企业向新加坡和东南亚的国际化发展。",
      },
    },
    locale,
  )
}
