import en from "./en.json";
import es from "./es.json";

export type Locale = "en" | "es";

const translations: Record<Locale, typeof en> = { en, es };

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "es") return "es";
  return "en";
}

export function useTranslations(locale: Locale) {
  return translations[locale];
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.replace(/^\/(en|es)/, "") || "/";
  if (locale === "en") return cleanPath;
  return `/es${cleanPath === "/" ? "" : cleanPath}`;
}
