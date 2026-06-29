import type { MetadataRoute } from "next";
import { SERVICES, INDUSTRIES } from "@/lib/site";
import { KB_GUIDES } from "@/lib/kb";
import { locales, defaultLocale } from "@/lib/i18n";

const base = "https://www.ijcreditor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/about",
    "/services",
    "/industries",
    "/request-a-proposal",
    "/faq",
    "/knowledge-base",
    "/contact",
    "/legal-notice",
    "/privacy",
    ...SERVICES.map((s) => s.href),
    ...INDUSTRIES.map((i) => i.href),
    ...KB_GUIDES.map((g) => `/knowledge-base/${g.slug}`),
  ];
  return locales.flatMap((l) =>
    paths.map((p) => ({
      url: `${base}/${l}${p}`,
      lastModified: now,
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((x) => [x, `${base}/${x}${p}`]),
          ["x-default", `${base}/${defaultLocale}${p}`],
        ]),
      },
    }))
  );
}
