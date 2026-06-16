import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Credit and solvency reports" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Credit and solvency reports"
        intro="Asset and solvency information on Spanish debtors before you decide how to proceed."
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
