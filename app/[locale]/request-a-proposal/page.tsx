import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDictionary(locale).request.title };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const r = dict.request;
  return (
    <>
      <PageHeader eyebrow={r.eyebrow} title={r.title} intro={r.intro} />
      <Block title={r.confidentialityTitle}>
        <Prose paragraphs={[r.confidentialityText]} />
      </Block>
      <Container className="py-6">
        <p className="mb-6 inline-block rounded-md bg-accent/10 px-4 py-2 text-sm font-medium text-accent">{r.sla}</p>
        <LeadForm variant="proposal" t={dict.form} />
      </Container>
      <Block title={r.legalBasisTitle}>
        <Prose paragraphs={r.legalBasisParas} />
      </Block>
      <Block title={r.afterTitle}>
        <Prose paragraphs={[r.afterText]} />
      </Block>
    </>
  );
}
