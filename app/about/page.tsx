import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "About us" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="About us"
        intro="A debt recovery firm and law office in Madrid, acting for creditors based outside Spain."
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
