import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import { SERVICES } from "@/lib/site";
import { isLocale, withLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getServicesIndex } from "@/lib/content/indexes";
import { pageMeta } from "@/lib/seo";
import type { ServiceSlug } from "@/lib/content/services";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale).seo.services;
  return pageMeta({ locale, path: "/services", title: d.title, description: d.description });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const si = getServicesIndex(locale);
  return (
    <>
      <PageHeader eyebrow={dict.nav.services} title={si.title} intro={si.intro} />
      <Container className="py-16">
        <div className="space-y-10">
          {SERVICES.map((s) => {
            const slug = s.href.split("/").pop() as ServiceSlug;
            return (
              <div key={s.href} className="border-b border-slate/10 pb-10 last:border-0">
                <h2 className="text-xl font-semibold tracking-tight text-ink">{dict.services[slug].label}</h2>
                <div className="mt-4"><Prose paragraphs={[si.detail[slug]]} /></div>
                <Link href={withLocale(locale, s.href)} className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
                  {dict.common.learnMore}
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
