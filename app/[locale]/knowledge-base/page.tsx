import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import { getGuides } from "@/lib/content/kb";
import { isLocale, withLocale } from "@/lib/i18n";

export const metadata: Metadata = { title: "Knowledge Base" };

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const guides = getGuides(locale);
  return (
    <>
      <PageHeader
        eyebrow="Knowledge Base"
        title="Permanent guides on Spanish debt collection law"
        intro="A static, didactic Knowledge Base instead of a news blog. Permanent content, not news: each guide answers, in a self-contained way, a specific question a foreign creditor asks about recovering debt in Spain."
      />
      <Block>
        <Prose paragraphs={[
          "Each guide is a pillar page designed to answer a precise question of the foreign creditor: how Spanish debt collection works, how long it takes, whether travel is required, what documents are needed, whether a home-country judgment can be enforced in Spain. Each is written to be self-contained and citable.",
        ]} />
      </Block>
      <Container className="pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link key={g.slug} href={withLocale(locale, `/knowledge-base/${g.slug}`)} className="group rounded-lg border border-slate/15 p-5 transition-colors hover:border-accent/40">
              <h2 className="text-base font-semibold text-ink group-hover:text-accent">{g.nav}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{g.summary}</p>
              <span className="mt-3 inline-block text-xs font-medium uppercase tracking-wider text-accent">Read guide →</span>
            </Link>
          ))}
        </div>
      </Container>
      <Container className="pb-4">
        <p className="max-w-3xl border-t border-slate/10 pt-6 text-xs leading-relaxed text-slate/60">
          These guides provide general information on debt recovery in Spain and do not constitute legal advice. Content updated as of June 2026; recent rules —such as the MASC requirement under Organic Law 1/2025 and procedural thresholds— may change. For advice on a specific case, request a proposal.
        </p>
      </Container>
      <CtaBand />
    </>
  );
}
