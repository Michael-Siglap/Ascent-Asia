import enTranslations from "@/translations/en.json"
import zhTranslations from "@/translations/zh.json"

const dictionaries = {
  en: () => Promise.resolve(enTranslations),
  zh: () => Promise.resolve(zhTranslations),
}

export const getDictionary = async (locale: string) => {
  // Default to 'en' if the locale is not supported
  const dictionary = dictionaries[locale as keyof typeof dictionaries] || dictionaries.en
  return dictionary()
}
