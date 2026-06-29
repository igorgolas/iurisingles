import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetail from "@/components/IndustryDetail";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { pageMeta, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/jsonld";

const SLUG = "transport-logistics" as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const x = getDictionary(locale).industries[SLUG];
  return pageMeta({ locale, path: `/industries/${SLUG}`, title: x.label, description: x.summary });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const x = getDictionary(locale).industries[SLUG];
  const url = `${SITE_URL}/${locale}/industries/${SLUG}`;
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: "Home", url: `${SITE_URL}/${locale}` },
        { name: getDictionary(locale).nav.industries, url: `${SITE_URL}/${locale}/industries` },
        { name: x.label, url },
      ])} />
      <IndustryDetail locale={locale} slug={SLUG} />
    </>
  );
}
