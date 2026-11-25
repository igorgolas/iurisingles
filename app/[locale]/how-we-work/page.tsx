import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Markdown from "@/components/Markdown";
import JsonLd from "@/components/JsonLd";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getLongform } from "@/lib/content/longform";
import { pageMeta, canonicalUrl, SITE_URL, clamp } from "@/lib/seo";
import { breadcrumbLd } from "@/lib/jsonld";

const META: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "How We Work: Debt Collection Process in Spain",
    description:
      "How Iuris Justitia Creditor handles a debt in Spain: amicable phase, MASC prior negotiation, judicial feasibility study, court action, reporting and fees.",
  },
  pt: {
    title: "Como trabalhamos: cobrança de dívidas em Espanha",
    description:
      "Como a Iuris Justitia Creditor gere uma dívida em Espanha: fase amigável, negociação prévia MASC, estudo de viabilidade, via judicial, prestação de contas e honorários.",
  },
  de: {
    title: "So arbeiten wir: Inkasso in Spanien",
    description:
      "Wie Iuris Justitia Creditor eine Forderung in Spanien bearbeitet: außergerichtliche Phase, MASC-Vorverhandlung, Erfolgsprüfung, Gerichtsverfahren, Abrechnung und Honorare.",
  },
  fr: {
    title: "Notre méthode : recouvrement de créances en Espagne",
    description:
      "Comment Iuris Justitia Creditor traite une créance en Espagne : phase amiable, négociation préalable MASC, étude de faisabilité, voie judiciaire, reddition de comptes et honoraires.",
  },
  it: {
    title: "Come lavoriamo: recupero crediti in Spagna",
    description:
      "Come Iuris Justitia Creditor gestisce un credito in Spagna: fase bonaria, negoziazione preventiva MASC, studio di fattibilità, via giudiziale, rendicontazione e onorari.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta({ locale, path: "/how-we-work", title: META[locale].title, description: clamp(META[locale].description) });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const source = getLongform("how-we-work", locale);
  if (!source) notFound();
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "IJ Creditor", url: `${SITE_URL}/${locale}` },
          { name: dict.nav.howWeWork, url: canonicalUrl(locale, "/how-we-work") },
        ])}
      />
      <PageHeader title={dict.nav.howWeWork} />
      <Markdown source={source} />
      <CtaBand />
    </>
  );
}
