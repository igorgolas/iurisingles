import Link from "next/link";
import Container from "@/components/Container";
import { SERVICES, INDUSTRIES } from "@/lib/site";

const KPIS = [
  { n: "1992", label: "Operating since" },
  { n: "3,000+", label: "Companies served" },
  { n: "80%", label: "Resolved out of court" },
  { n: "Nationwide", label: "Local lawyers across Spain" },
];

const WHY = [
  {
    t: "Handled directly, not through intermediaries.",
    d: "Your case is run by the firm itself, by Spanish-qualified lawyers. No subcontracting chains, no information loss between layers.",
  },
  {
    t: "Local lawyers anywhere in Spain.",
    d: "We act before the debtor wherever they are, through our own network of local lawyers across the country, not only in Madrid.",
  },
  {
    t: "Spanish procedural law, in your language.",
    d: "We coordinate the case with you in English and act before the Spanish debtor in Spanish. The same team handles the amicable phase and any subsequent court proceedings.",
  },
  {
    t: "Legal supervision of the entire process.",
    d: "Every formal demand and burofax is reviewed by a lawyer of the firm to ensure evidentiary validity, GDPR compliance and, where applicable, interruption of limitation periods.",
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
        <Container className="py-24 text-center">
          <div className="mx-auto mb-5 flex w-10 flex-col gap-[3px]">
            <span className="h-[2px] bg-accent" />
            <span className="h-[2px] bg-accent" />
            <span className="h-[2px] bg-accent" />
          </div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            For creditors based outside Spain
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight text-ink md:text-5xl">
            Debt collection in Spain for foreign creditors.
          </h1>
          <p className="mt-4 font-serif text-2xl italic text-accent">
            Operating from Madrid since 1992.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            Iuris Justitia Creditor (IJ Creditor) is an independent Spanish law firm
            specialised in commercial debt recovery. We work directly — no intermediaries,
            no subcontracted networks — with local lawyers anywhere in Spain.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/request-a-proposal" className="rounded-sm bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">
              Request a proposal
            </Link>
            <Link href="/services" className="rounded-sm border border-slate/25 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-slate/5">
              Submit your case
            </Link>
          </div>
        </Container>
      </section>

      {/* KPI strip */}
      <section className="border-b border-slate/10">
        <Container className="grid grid-cols-2 divide-x divide-y divide-slate/10 lg:grid-cols-4 lg:divide-y-0">
          {KPIS.map((k) => (
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
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">Why foreign creditors trust us</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-medium tracking-tight text-ink">
              The firm itself — wherever your debtor is.
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-x-12 gap-y-10 md:grid-cols-2">
            {WHY.map((w) => (
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
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-accent">What we do</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="group border border-slate/10 bg-white p-6 transition-colors hover:border-accent/40">
                <h3 className="font-serif text-xl font-medium text-ink">{s.label}</h3>
                <div className="my-3 h-[2px] w-8 bg-accent" />
                <p className="text-sm leading-relaxed text-slate">{s.summary}</p>
                <span className="mt-4 inline-block font-serif text-sm italic text-accent">Learn more →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-20">
        <Container>
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-accent">How it works</p>
          <ol className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-4">
            {STEPS.map((s, i) => (
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
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-accent">Industries we know</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((s) => (
              <Link key={s.href} href={s.href} className="border border-slate/10 bg-white p-5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent">
                {s.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-slate/10 py-20">
        <Container className="text-center">
          <p className="mx-auto max-w-2xl font-serif text-2xl italic leading-relaxed text-ink">
            Tell us about your case. You will receive a confidential first assessment.
          </p>
          <div className="mt-8">
            <Link href="/request-a-proposal" className="rounded-sm bg-accent px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">
              Request a proposal
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
