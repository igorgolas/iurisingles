import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { isLocale, withLocale } from "@/lib/i18n";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { pageMeta } from "@/lib/seo";
import { ASSOCIATIONS } from "@/lib/site";
import { navServices, navIndustries } from "@/lib/nav-model";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const h = getDictionary(locale).home;
  return pageMeta({ locale, path: "/", description: h.intro });
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const h = dict.home;
  const services = navServices(locale, dict);
  const industries = navIndustries(locale, dict);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate/10">
        <Container className="py-24 text-center">
          <div className="mx-auto mb-5 flex w-10 flex-col gap-[3px]">
            <span className="h-[2px] bg-accent" />
            <span className="h-[2px] bg-accent" />
            <span className="h-[2px] bg-accent" />
          </div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">{h.eyebrow}</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight text-ink md:text-5xl">
            {h.h1}
          </h1>
          <p className="mt-4 font-serif text-2xl italic text-accent">{h.subtitle}</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate">{h.intro}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href={withLocale(locale, "/request-a-proposal")} className="rounded-sm bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">
              {dict.common.requestProposal}
            </Link>
            <Link href={withLocale(locale, "/services")} className="rounded-sm border border-slate/25 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-slate/5">
              {dict.common.submitYourCase}
            </Link>
          </div>
        </Container>
      </section>

      {/* KPI strip */}
      <section className="border-b border-slate/10">
        <Container className="grid grid-cols-2 divide-x divide-y divide-slate/10 lg:grid-cols-4 lg:divide-y-0">
          {h.kpis.map((k) => (
            <div key={k.label} className="px-4 py-8 text-center">
              <div className="font-serif text-3xl text-ink">{k.n}</div>
              <div className="mt-2 text-[10.5px] uppercase tracking-wider text-slate/70">{k.label}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* Why */}
      <section className="py-20">
        <Container>
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">{h.whyEyebrow}</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-medium tracking-tight text-ink">{h.whyTitle}</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-x-12 gap-y-10 md:grid-cols-2">
            {h.why.map((w) => (
              <div key={w.t}>
                <div className="mb-3 h-[2px] w-7 bg-accent" />
                <h3 className="font-serif text-xl font-medium text-ink">{w.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{w.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="border-t border-slate/10 bg-paper py-20">
        <Container>
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-accent">{h.whatWeDo}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group border border-slate/10 bg-white p-6 transition-colors hover:border-accent/40">
                <h3 className="font-serif text-xl font-medium text-ink">{s.label}</h3>
                <div className="my-3 h-[2px] w-8 bg-accent" />
                <p className="text-sm leading-relaxed text-slate">{s.summary}</p>
                <span className="mt-4 inline-block font-serif text-sm italic text-accent">{dict.common.learnMore}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20">
        <Container>
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-accent">{h.howItWorks}</p>
          <ol className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-4">
            {h.steps.map((s, i) => (
              <li key={i}>
                <div className="font-serif text-3xl text-accent">{i + 1}</div>
                <div className="my-3 h-[2px] w-7 bg-slate/15" />
                <p className="text-sm leading-relaxed text-slate">{s}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Industries */}
      <section className="border-t border-slate/10 bg-paper py-20">
        <Container>
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-accent">{h.industriesWeKnow}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((s) => (
              <Link key={s.href} href={s.href} className="border border-slate/10 bg-white p-5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent">
                {s.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Memberships */}
      <section className="border-t border-slate/10 py-14">
        <Container className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">{h.membersOf}</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
            {ASSOCIATIONS.map((a) => (
              <a
                key={a.href}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                title={a.name}
                className="flex h-20 w-48 items-center justify-center rounded-md border border-slate/15 bg-white px-6 transition-colors hover:border-accent/40"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.logo} alt={a.name} className="max-h-11 w-auto object-contain" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-slate/10 py-20">
        <Container className="text-center">
          <p className="mx-auto max-w-2xl font-serif text-2xl italic leading-relaxed text-ink">{h.closing}</p>
          <div className="mt-8">
            <Link href={withLocale(locale, "/request-a-proposal")} className="rounded-sm bg-accent px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">
              {dict.common.requestProposal}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
