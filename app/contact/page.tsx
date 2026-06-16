import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Contact us" />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm leading-relaxed text-slate">{SITE.address}</p>
          <p className="mt-3 text-sm text-ink">{SITE.phone}</p>
          <p className="text-sm text-ink">{SITE.email}</p>
        </div>
        <LeadForm variant="contact" />
      </section>
    </>
  );
}
