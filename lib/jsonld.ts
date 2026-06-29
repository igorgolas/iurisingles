import { SITE, ASSOCIATIONS } from "@/lib/site";
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
    image: `${SITE_URL}/logo.png`,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: String(SITE.since),
    vatID: SITE.nif,
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
    knowsLanguage: ["en", "es", "pt", "de", "fr", "it"],
    sameAs: ASSOCIATIONS.map((a) => a.href),
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
