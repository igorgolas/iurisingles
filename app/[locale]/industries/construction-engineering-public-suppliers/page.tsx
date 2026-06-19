import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetail from "@/components/IndustryDetail";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

const SLUG = "construction-engineering-public-suppliers" as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: getDictionary(locale).industries[SLUG].label };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <IndustryDetail locale={locale} slug={SLUG} />;
}
