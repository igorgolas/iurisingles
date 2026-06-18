import { withLocale, type Locale } from "@/lib/i18n";
import { SERVICES, INDUSTRIES } from "@/lib/site";
import type { Dictionary } from "@/lib/dictionaries";

export type NavLink = { label: string; href: string; summary?: string };
export type NavEntry = NavLink & { children?: NavLink[]; cta?: boolean };

function slugOf(href: string): string {
  return href.split("/").pop() as string;
}

function services(locale: Locale, dict: Dictionary): NavLink[] {
  return SERVICES.map((s) => {
    const d = dict.services[slugOf(s.href) as keyof typeof dict.services];
    return { label: d.label, href: withLocale(locale, s.href), summary: d.summary };
  });
}

function industries(locale: Locale, dict: Dictionary): NavLink[] {
  return INDUSTRIES.map((s) => {
    const d = dict.industries[slugOf(s.href) as keyof typeof dict.industries];
    return { label: d.label, href: withLocale(locale, s.href), summary: d.summary };
  });
}

export function buildNav(locale: Locale, dict: Dictionary): NavEntry[] {
  return [
    { label: dict.nav.about, href: withLocale(locale, "/about") },
    { label: dict.nav.services, href: withLocale(locale, "/services"), children: services(locale, dict) },
    { label: dict.nav.industries, href: withLocale(locale, "/industries"), children: industries(locale, dict) },
    { label: dict.nav.requestProposal, href: withLocale(locale, "/request-a-proposal"), cta: true },
    { label: dict.nav.faq, href: withLocale(locale, "/faq") },
    { label: dict.nav.knowledgeBase, href: withLocale(locale, "/knowledge-base") },
    { label: dict.nav.contact, href: withLocale(locale, "/contact") },
  ];
}

export function navServices(locale: Locale, dict: Dictionary): NavLink[] {
  return services(locale, dict);
}
export function navIndustries(locale: Locale, dict: Dictionary): NavLink[] {
  return industries(locale, dict);
}
