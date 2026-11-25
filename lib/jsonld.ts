import { SITE, ASSOCIATIONS, SERVICES } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";
import { locales } from "@/lib/i18n";

const ORG_ID = `${SITE_URL}/#organization`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Organization"],
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-en.png`,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: String(SITE.since),
    legalName: "Iuris Justitia Creditor, S.L.",
    vatID: SITE.nif,
    taxID: SITE.nif,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE.email,
      telephone: SITE.phone,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Debt collection services in Spain",
      itemListElement: SERVICES.map((sv) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: sv.label, description: sv.summary, url: `${SITE_URL}/en${sv.href}` },
      })),
    },
    description:
      "Madrid law firm specialised in commercial debt collection in Spain for creditors based outside Spain. Out-of-court and judicial recovery, supervised by lawyers, operating since 1992.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Paseo de la Castellana 120",
      addressLocality: "Madrid",
      postalCode: "28046",
      addressCountry: "ES",
    },
    areaServed: { "@type": "Country", name: "Spain" },
    serviceType: "Commercial debt collection",
    memberOf: ASSOCIATIONS.map((a) => ({ "@type": "Organization", name: a.name, url: a.href })),
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE.name,
    inLanguage: [...locales],
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function serviceLd(opts: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: opts.url,
    areaServed: { "@type": "Country", name: "Spain" },
    provider: { "@id": ORG_ID },
  };
}

export function faqLd(items: { q: string; a: string[] }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a.join(" ") },
    })),
  };
}

// Knowledge Base guides. Dates reflect the June 2026 legal review stated on the index page.
export function articleLd(opts: { headline: string; description: string; url: string; inLanguage: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: opts.url,
    inLanguage: opts.inLanguage,
    datePublished: "2026-06-17",
    dateModified: "2026-11-25",
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}
