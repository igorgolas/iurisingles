import Link from "next/link";
import { SERVICES } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="border-b border-slate/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            For creditors based outside Spain
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
            Recover debts owed by Spanish debtors, without leaving your desk.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            IJ Creditor is a Madrid-based debt recovery firm and law office. We act
            for companies abroad with receivables in Spain, handling the process
            locally — amicable first, in court when needed.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/request-a-proposal"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Request a proposal
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-slate/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-slate/5"
            >
              How we work
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          What we do
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-lg border border-slate/15 p-6 transition-colors hover:border-accent/40 hover:bg-slate/[0.02]"
            >
              <h3 className="text-lg font-semibold text-ink group-hover:text-accent">
                {s.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {s.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
