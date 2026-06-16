import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = { title: "Request a proposal" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Get started"
        title="Request a proposal"
        intro="Tell us about the debt and the debtor in Spain. We will assess viability and send you a tailored, confidential proposal."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <LeadForm variant="proposal" />
      </section>
    </>
  );
}
