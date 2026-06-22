import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import Blocks from "@/components/Blocks";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePage, type ServiceSlug } from "@/lib/content/services";

export default function ServiceDetail({ locale, slug }: { locale: Locale; slug: ServiceSlug }) {
  const dict = getDictionary(locale);
  const page = getServicePage(locale, slug);
  return (
    <>
      <PageHeader eyebrow={dict.nav.services} title={dict.services[slug].label} intro={page.intro} />
      <Blocks blocks={page.blocks} />
      <CtaBand />
    </>
  );
}
