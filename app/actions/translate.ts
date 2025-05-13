"use server"

// This is a simple implementation of machine translation using the LibreTranslate API
// For production, you might want to use a paid service like Google Translate API or DeepL
export async function translateText(text: string, targetLang: string) {
  try {
    // Using LibreTranslate's public API
    const response = await fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: targetLang,
        format: "text",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`Translation failed: ${response.statusText}`)
    }

    const data = await response.json()
    return data.translatedText
  } catch (error) {
    console.error("Translation error:", error)
    return text // Return original text on error
  }
}

// In case we need to translate an entire object of strings
export async function translateObject(
  obj: Record<string, string>,
  targetLang: string,
): Promise<Record<string, string>> {
  const result: Record<string, string> = {}

  for (const [key, value] of Object.entries(obj)) {
    result[key] = await translateText(value, targetLang)
  }

  return result
}
