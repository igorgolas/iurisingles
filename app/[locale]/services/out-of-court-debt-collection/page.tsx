import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { pageMeta, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { serviceLd, breadcrumbLd } from "@/lib/jsonld";

const SLUG = "out-of-court-debt-collection" as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale).seo[SLUG];
  return pageMeta({ locale, path: `/services/${SLUG}`, title: d.title, description: d.description });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const x = getDictionary(locale).services[SLUG];
  const url = `${SITE_URL}/${locale}/services/${SLUG}`;
  return (
    <>
      <JsonLd data={[
        serviceLd({ name: x.label, description: x.summary, url }),
        breadcrumbLd([
          { name: "Home", url: `${SITE_URL}/${locale}` },
          { name: getDictionary(locale).nav.services, url: `${SITE_URL}/${locale}/services` },
          { name: x.label, url },
        ]),
      ]} />
      <ServiceDetail locale={locale} slug={SLUG} />
    </>
  );
}
