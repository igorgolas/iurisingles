import Link from "next/link";
import Container from "@/components/Container";
import { SERVICES, INDUSTRIES } from "@/lib/site";

const KPIS = [
  "Operating since 1992",
  "More than 3,000 companies served",
  "More than 80% of cases resolved out of court",
  "Madrid head office at Paseo de la Castellana 120",
];

const WHY = [
  {
    t: "We are the Madrid office, not an intermediary.",
    d: "Your case is handled directly from Paseo de la Castellana 120 by Spanish-qualified lawyers. No subcontracting chains, no information loss between layers.",
  },
  {
    t: "Spanish procedural law, in your language.",
    d: "We coordinate the case with you in English and act before the Spanish debtor in Spanish, applying Spanish procedural rules. The same team handles the amicable phase and any subsequent court proceedings.",
  },
  {
    t: "Legal supervision of the entire process.",
    d: "Every communication with the debtor —letters, formal demands, burofaxes— is reviewed by a lawyer of the firm to ensure evidentiary validity, GDPR compliance and, where applicable, the legal effect of interrupting limitation periods.",
  },
  {
    t: "Cross-border judgment enforcement.",
    d: "Practical experience with Regulation (EU) 1215/2012 (Brussels I bis) for the recognition and enforcement in Spain of judgments from other EU Member States, and with Law 29/2015 on international legal cooperation for judgments from non-EU jurisdictions.",
  },
];

const STEPS = [
  "Submit your case through the online form.",
  "Receive a confidential proposal from a lawyer of the firm with the recommended route and fee model.",
  "If you accept, the file is opened and the amicable phase begins, with structured updates and, where applicable, a feasibility report before any court action.",
  "When the case requires it, we move to court proceedings under a lump-sum fee agreed in writing in advance.",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate/10">
        <Container className="py-24">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            For creditors based outside Spain
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Debt collection in Spain for foreign creditors. Operating from Madrid since 1992.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            Iuris Justitia Creditor (IJ Creditor) is an independent Spanish law firm
            specialised in commercial debt recovery. We work directly from our office in
            Madrid —no intermediaries, no subcontracted networks. Success-based fees on the
            amicable phase and lump-sum fees agreed in writing on legal proceedings.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/request-a-proposal" className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">
              Request a proposal
            </Link>
            <Link href="/services" className="rounded-md border border-slate/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-slate/5">
              Submit your case
            </Link>
          </div>
        </Container>
      </section>

      {/* KPI strip */}
      <section className="border-b border-slate/10 bg-ink">
        <Container className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {KPIS.map((k) => (
            <p key={k} className="text-sm font-medium leading-snug text-white/90">{k}</p>
          ))}
        </Container>
      </section>

      {/* Why */}
      <section className="py-20">
        <Container>
          <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-ink">
            Why foreign creditors trust us with debts in Spain
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {WHY.map((w) => (
              <div key={w.t}>
                <h3 className="text-base font-semibold text-ink">{w.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">{w.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="border-t border-slate/10 bg-slate/[0.03] py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">What we do</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="group rounded-lg border border-slate/15 bg-white p-6 transition-colors hover:border-accent/40">
                <h3 className="text-lg font-semibold text-ink group-hover:text-accent">{s.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{s.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">How it works</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={i} className="rounded-lg border border-slate/15 p-5">
                <span className="text-sm font-semibold text-accent">{i + 1}</span>
                <p className="mt-2 text-sm leading-relaxed text-slate">{s}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Industries */}
      <section className="border-t border-slate/10 py-20">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Industries we know</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((s) => (
              <Link key={s.href} href={s.href} className="rounded-lg border border-slate/15 p-5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent">
                {s.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-slate/10 bg-ink">
        <Container className="flex flex-col items-start gap-5 py-14 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-lg leading-relaxed text-white">
            Tell us about your case. You will receive a confidential first assessment.
          </p>
          <Link href="/request-a-proposal" className="flex-none rounded-md bg-white px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90">
            Request a proposal
          </Link>
        </Container>
      </section>
    </>
  );
}
