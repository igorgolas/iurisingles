import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Judicial recovery" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Judicial recovery"
        intro="Court action in Spain when amicable recovery is exhausted, preceded by a viability assessment."
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-base leading-relaxed text-slate">
          Content for this page is being finalised. Placeholder copy — to be
          replaced with the approved English text.
        </p>
      </section>
    </>
  );
}
