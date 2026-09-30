// Draft route inventory. Do not expose alternate-language URLs until every
// edition has its own complete content and the 120-route audit passes.
export const locales = [
  { slug: "ja", lang: "ja", label: "日本語", dir: "ltr" },
  { slug: "ko", lang: "ko", label: "한국어", dir: "ltr" },
  { slug: "zh-hant", lang: "zh-Hant", label: "繁體中文", dir: "ltr" },
  { slug: "es", lang: "es", label: "Español", dir: "ltr" },
  { slug: "pt-br", lang: "pt-BR", label: "Português (Brasil)", dir: "ltr" },
  { slug: "ru", lang: "ru", label: "Русский", dir: "ltr" },
  { slug: "de", lang: "de", label: "Deutsch", dir: "ltr" },
  { slug: "fr", lang: "fr", label: "Français", dir: "ltr" },
  { slug: "ar", lang: "ar", label: "العربية", dir: "rtl" },
] as const;
export type Locale = typeof locales[number]["slug"];
export const comparisonSlugs = [
  "spicychat-vs-character-ai",
  "spicychat-vs-janitor-ai",
  "spicy-chat-ai-vs-crushon-ai",
  "spicy-chat-ai-vs-polybuzz",
  "spicy-chat-ai-vs-girlfriendgpt",
] as const;
export type ComparisonSlug = typeof comparisonSlugs[number];
export const infoPageKeys = ["about", "contact", "editorial-policy", "privacy", "terms"] as const;
export type InfoPageKey = typeof infoPageKeys[number];

export function routeFor(locale: Locale | "", page = "") {
  const cleanPage = page.replace(/^\/+|\/+$/g, "");
  return `${locale ? `/${locale}` : ""}/${cleanPage ? `${cleanPage}/` : ""}`;
}

export function languageAlternates(pathname: string) {
  const englishPath = pathname.replace(/^\/(?:ja|ko|zh-hant|es|pt-br|ru|de|fr|ar)(?=\/)/, "") || "/";
  return [{ lang: "en", href: englishPath }, ...locales.map(({ slug, lang }) => ({ lang, href: `/${slug}${englishPath}` }))];
}
