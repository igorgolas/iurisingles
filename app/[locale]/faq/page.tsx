import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getFaq } from "@/lib/content/faq";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDictionary(locale).nav.faq };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const faq = getFaq(locale);
  return (
    <>
      <PageHeader eyebrow={dict.nav.faq} title={faq.title} intro={faq.intro} />
      <Container className="py-12">
        <Faq items={faq.items} />
      </Container>
      <CtaBand />
    </>
  );
}
