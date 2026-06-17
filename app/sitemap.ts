import type { MetadataRoute } from "next";
import { SERVICES, INDUSTRIES } from "@/lib/site";
import { KB_GUIDES } from "@/lib/kb";

const base = "https://ijcreditor.com";

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
  return paths.map((p) => ({ url: `${base}${p}`, lastModified: now }));
}
