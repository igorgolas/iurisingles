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
import { pageMeta } from "@/lib/seo";
import { getKbUi } from "@/lib/content/kb-ui";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const ui = getKbUi(locale);
  return pageMeta({ locale, path: "/knowledge-base", title: ui.metaTitle, description: ui.metaDescription });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const guides = getGuides(locale);
  const ui = getKbUi(locale);
  return (
    <>
      <PageHeader
        eyebrow={ui.eyebrow}
        title={ui.title}
        intro={ui.intro}
      />
      <Block>
        <Prose paragraphs={[ui.lead]} />
      </Block>
      <Container className="pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link key={g.slug} href={withLocale(locale, `/knowledge-base/${g.slug}`)} className="group rounded-lg border border-slate/15 p-5 transition-colors hover:border-accent/40">
              <h2 className="text-base font-semibold text-ink group-hover:text-accent">{g.nav}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{g.summary}</p>
              <span className="mt-3 inline-block text-xs font-medium uppercase tracking-wider text-accent">{ui.readGuide}</span>
            </Link>
          ))}
        </div>
      </Container>
      <Container className="pb-4">
        <p className="max-w-3xl border-t border-slate/10 pt-6 text-xs leading-relaxed text-slate/60">
          {ui.disclaimer}
        </p>
      </Container>
      <CtaBand />
    </>
  );
}
