import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Blocks from "@/components/Blocks";
import { isLocale } from "@/lib/i18n";
import { getLegal } from "@/lib/content/legal";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getLegal(locale).cookies.title, robots: { index: true, follow: true } };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const page = getLegal(locale).cookies;
  return (
    <>
      <PageHeader eyebrow="Legal" title={page.title} />
      <Blocks blocks={page.blocks} />
    </>
  );
}
