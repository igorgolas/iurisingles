import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Amicable recovery" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Amicable recovery"
        intro="Pre-litigation collection of Spanish receivables, supervised by lawyers from the first contact."
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
