import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getFaq } from "@/lib/content/faq";
import { pageMeta, clamp } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { faqLd } from "@/lib/jsonld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const faq = getFaq(locale);
  return pageMeta({ locale, path: "/faq", title: getDictionary(locale).nav.faq, description: clamp(faq.intro) });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const faq = getFaq(locale);
  return (
    <>
      <JsonLd data={faqLd(faq.items)} />
      <PageHeader eyebrow={dict.nav.faq} title={faq.title} intro={faq.intro} />
      <Container className="py-12">
        <Faq items={faq.items} />
      </Container>
      <CtaBand />
    </>
  );
}
