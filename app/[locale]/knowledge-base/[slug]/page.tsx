import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import CtaBand from "@/components/CtaBand";
import { getGuideL } from "@/lib/content/kb";
import { isLocale, withLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

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

  return (
    <>
      <PageHeader eyebrow="Knowledge Base" title={guide.title} intro={guide.summary} />
      <Block><Prose paragraphs={guide.body} /></Block>
      <Block title="How IJ Creditor Can Assist"><Prose paragraphs={[guide.assist]} /></Block>
      <Block>
        <Link href={withLocale(locale, "/knowledge-base")} className="text-sm font-medium text-accent transition-opacity hover:opacity-80">
          ← All guides
        </Link>
      </Block>
      <CtaBand />
    </>
  );
}
