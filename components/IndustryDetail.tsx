import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";
import type { Locale } from "@/lib/i18n";
import { getDictionary, type Dictionary } from "@/lib/dictionaries";

type IndustrySlug = keyof Dictionary["industriesContent"]["pages"];

export default function IndustryDetail({ locale, slug }: { locale: Locale; slug: IndustrySlug }) {
  const dict = getDictionary(locale);
  const meta = dict.industries[slug];
  const content = dict.industriesContent.pages[slug];
  return (
    <>
      <PageHeader eyebrow={dict.nav.industries} title={meta.label} />
      <Block><Prose paragraphs={content.intro} /></Block>
      <Block title={dict.industriesContent.filesTitle}><Bullets items={content.files} /></Block>
      <CtaBand />
    </>
  );
}
