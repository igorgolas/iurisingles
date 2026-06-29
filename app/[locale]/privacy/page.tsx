import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Blocks from "@/components/Blocks";
import { isLocale } from "@/lib/i18n";
import { getLegal } from "@/lib/content/legal";
import { pageMeta, clamp } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const p = getLegal(locale).privacy;
  const first = p.blocks?.[0] && "paras" in p.blocks[0] ? (p.blocks[0].paras?.[0] ?? p.title) : p.title;
  return { ...pageMeta({ locale, path: "/privacy", title: p.title, description: clamp(first) }), robots: { index: true, follow: true } };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const page = getLegal(locale).privacy;
  return (
    <>
      <PageHeader eyebrow="Legal" title={page.title} />
      <Blocks blocks={page.blocks} />
    </>
  );
}
