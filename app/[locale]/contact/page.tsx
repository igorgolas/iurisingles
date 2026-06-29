import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import { SITE } from "@/lib/site";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { pageMeta, clamp } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getDictionary(locale).contact;
  return pageMeta({ locale, path: "/contact", title: getDictionary(locale).nav.contact, description: clamp(c.intro) });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const c = dict.contact;
  return (
    <>
      <PageHeader eyebrow={dict.nav.contact} title={c.title} intro={c.intro} />
      <Container className="grid gap-12 py-16 md:grid-cols-2">
        <div className="space-y-6 text-[15px] leading-relaxed text-slate">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">{c.headOffice}</h2>
            <p className="mt-2">Paseo de la Castellana 120<br />28046 Madrid<br />Spain</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">{c.telephone}</h2>
            <p className="mt-2">{SITE.phone}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">{c.emailLabel}</h2>
            <p className="mt-2">{SITE.email}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">{c.internationalMatters}</h2>
            <p className="mt-2">{c.internationalText}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">{c.companyIdentification}</h2>
            <p className="mt-2">{c.companyNameLabel}: {SITE.name}, S.L.<br />{c.nifLabel}: {SITE.nif}.<br />{c.addressLabel}: {SITE.address}</p>
          </div>
        </div>
        <LeadForm variant="contact" t={dict.form} />
      </Container>
    </>
  );
}
