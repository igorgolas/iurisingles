import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import CtaBand from "@/components/CtaBand";
import { getGuideL } from "@/lib/content/kb";
import { isLocale, withLocale } from "@/lib/i18n";
import { pageMeta, canonicalUrl, SITE_URL } from "@/lib/seo";
import { getKbUi } from "@/lib/content/kb-ui";
import { LONGFORM } from "@/lib/content/longform";
import Markdown from "@/components/Markdown";
import JsonLd from "@/components/JsonLd";
import { articleLd, breadcrumbLd } from "@/lib/jsonld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return { title: "Knowledge Base" };
  const guide = getGuideL(locale, slug);
  if (!guide) return { title: "Knowledge Base" };
  return pageMeta({ locale, path: `/knowledge-base/${slug}`, title: guide.title, description: guide.summary });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const guide = getGuideL(locale, slug);
  if (!guide) notFound();
  const ui = getKbUi(locale);
  const url = canonicalUrl(locale, `/knowledge-base/${slug}`);

  return (
    <>
      <JsonLd
        data={[
          articleLd({ headline: guide.title, description: guide.summary, url, inLanguage: locale }),
          breadcrumbLd([
            { name: "IJ Creditor", url: `${SITE_URL}/${locale}` },
            { name: ui.eyebrow, url: canonicalUrl(locale, "/knowledge-base") },
            { name: guide.title, url },
          ]),
        ]}
      />
      <PageHeader eyebrow={ui.eyebrow} title={guide.title} intro={guide.summary} />
      {LONGFORM[slug]?.[locale] ? (
        <Markdown source={LONGFORM[slug]![locale]!} />
      ) : (
        <>
          <Block><Prose paragraphs={guide.body} /></Block>
          <Block title={ui.assistTitle}><Prose paragraphs={[guide.assist]} /></Block>
        </>
      )}
      <Block>
        <Link href={withLocale(locale, "/knowledge-base")} className="text-sm font-medium text-accent transition-opacity hover:opacity-80">
          {ui.allGuides}
        </Link>
      </Block>
      <CtaBand />
    </>
  );
}
