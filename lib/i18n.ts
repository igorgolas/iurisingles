export const locales = ["en", "pt", "de", "fr", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Prefix an internal href with the active locale (English stays unprefixed-safe too).
export function withLocale(locale: Locale, href: string): string {
  if (/^https?:|^mailto:|^tel:|^#/.test(href)) return href;
  return `/${locale}${href === "/" ? "" : href}`;
}
