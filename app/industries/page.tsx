import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Industries" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Sectors"
        title="Industries"
        intro="Sectors where we recover most often for international creditors with exposure in Spain."
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
