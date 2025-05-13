import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "zh"],

  // Used when no locale matches
  defaultLocale: "en",

  // Make sure to redirect the root path to the default locale
  localePrefix: "always",
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
