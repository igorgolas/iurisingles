import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Frequently asked questions" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        intro="Common questions from international creditors about recovering debt in Spain."
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
