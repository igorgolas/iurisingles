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
import { getIndustriesIndex } from "@/lib/content/indexes";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDictionary(locale).nav.industries };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const ii = getIndustriesIndex(locale);
  const industries = navIndustries(locale, dict);
  return (
    <>
      <PageHeader eyebrow={dict.nav.industries} title={ii.title} intro={ii.intro} />
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
      <Block><Prose paragraphs={ii.closing} /></Block>
      <CtaBand />
    </>
  );
}
