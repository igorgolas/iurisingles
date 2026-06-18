import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VersionPill from "@/components/VersionPill";
import Analytics from "@/components/Analytics";
import { isLocale, withLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { buildNav } from "@/lib/nav-model";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <Nav
        items={buildNav(locale, dict)}
        homeHref={withLocale(locale, "/")}
        menuLabel={dict.common.menu}
        locale={locale}
      />
      <main>{children}</main>
      <Footer locale={locale} dict={dict} />
      <VersionPill />
      <Analytics locale={locale} cookie={dict.cookie} />
    </>
  );
}
