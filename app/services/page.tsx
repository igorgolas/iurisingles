import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = { title: "Debt recovery in Spain" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Debt recovery in Spain"
        intro="One local team handling your Spanish receivables end to end. We start amicably and escalate to court only when it is the right call."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-lg border border-slate/15 p-6 transition-colors hover:border-accent/40"
            >
              <h2 className="text-lg font-semibold text-ink group-hover:text-accent">
                {s.label}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">{s.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
