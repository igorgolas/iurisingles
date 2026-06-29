import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Blocks from "@/components/Blocks";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getAbout } from "@/lib/content/about";
import { pageMeta, clamp } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const a = getAbout(locale);
  const first = a.blocks[0] && "paras" in a.blocks[0] ? (a.blocks[0].paras?.[0] ?? "") : "";
  return pageMeta({ locale, path: "/about", title: getDictionary(locale).nav.about, description: clamp(first) });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const about = getAbout(locale);
  return (
    <>
      <PageHeader eyebrow={dict.nav.about} title={about.title} />
      <Blocks blocks={about.blocks} />
      <CtaBand />
    </>
  );
}
