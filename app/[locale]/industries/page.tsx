import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { navIndustries } from "@/lib/nav-model";

export const metadata: Metadata = { title: "Industries" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const industries = navIndustries(locale, dict);
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Sectors where we recover for foreign creditors with debtors in Spain"
        intro="IJ Creditor has handled unpaid claims for foreign creditors in virtually all economic sectors with debtors in Spain. It identifies the areas with recurrent experience and specific knowledge of the commercial customs, contractual standards and legal particularities that affect debt collection in Spain."
      />
      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {industries.map((s) => (
            <Link key={s.href} href={s.href} className="group rounded-lg border border-slate/15 p-6 transition-colors hover:border-accent/40">
              <h2 className="text-lg font-semibold text-ink group-hover:text-accent">{s.label}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">{s.summary}</p>
            </Link>
          ))}
        </div>
      </Container>
      <Block>
        <Prose paragraphs={[
          "Each sector has its own default dynamics —debtor profile, invoice nature, customary payment terms, standard contractual guarantees and most efficient claim routes. Sector specialisation allows the firm to quickly recognise the specifics of each case and tailor the collection strategy without delay.",
          "For sectors not listed here, IJ Creditor also handles files through its general service line. Sector specialisation is a complement that adds value where it applies, not a precondition for accessing the service.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
