import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const SITE_URL = "https://www.ijcreditor.com";

export function clamp(s: string, n = 160): string {
  if (s.length <= n) return s;
  const cut = s.slice(0, n);
  const i = cut.lastIndexOf(" ");
  return (i > 40 ? cut.slice(0, i) : cut).trimEnd() + "\u2026";
}

const clean = (path: string) => (path === "/" ? "" : path);

export function canonicalUrl(locale: Locale, path: string): string {
  return `${SITE_URL}/${locale}${clean(path)}`;
}

// hreflang map (one entry per locale + x-default) for a locale-less path
export function languageAlternates(path: string): Record<string, string> {
  const langs: Record<string, string> = {};
  for (const l of locales) langs[l] = `${SITE_URL}/${l}${clean(path)}`;
  langs["x-default"] = `${SITE_URL}/${defaultLocale}${clean(path)}`;
  return langs;
}

export function pageMeta(opts: {
  locale: Locale;
  path: string;
  title?: string;
  description: string;
}): Metadata {
  const url = canonicalUrl(opts.locale, opts.path);
  const titleField = opts.title ? { title: opts.title } : {};
  return {
    ...titleField,
    description: opts.description,
    alternates: {
      canonical: url,
      languages: languageAlternates(opts.path),
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      ...titleField,
      description: opts.description,
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      ...titleField,
      description: opts.description,
    },
  };
}
