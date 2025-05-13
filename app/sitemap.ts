import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ascent.asia"
  const locales = ["en", "zh"]

  // Define all routes that should be in the sitemap
  const routes = [
    "",
    "/services",
    "/services/market-entry",
    "/services/regulatory",
    "/services/business-development",
    "/about",
    "/contact",
  ]

  // Create sitemap entries for all routes in all languages
  const sitemap = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  )

  return sitemap
}
