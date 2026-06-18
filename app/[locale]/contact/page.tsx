import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact us"
        intro="IJ Creditor handles consultations and engagements from Spanish and foreign clients from its head office in Madrid. The fastest way to start a case is through the Request a Proposal form; for any other matter, the details below apply."
      />
      <Container className="grid gap-12 py-16 md:grid-cols-2">
        <div className="space-y-6 text-[15px] leading-relaxed text-slate">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Head office</h2>
            <p className="mt-2">Paseo de la Castellana 120<br />28046 Madrid<br />Spain</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Telephone</h2>
            <p className="mt-2">{SITE.phone}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Email</h2>
            <p className="mt-2">{SITE.email}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">International matters</h2>
            <p className="mt-2">For consultations from foreign companies or cross-border matters, communications may be sent to the same general email address; the firm channels them internally to the team in charge of international debt collection.</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">Company identification</h2>
            <p className="mt-2">Company name: {SITE.name}, S.L.<br />Spanish tax ID (NIF): {SITE.nif}.<br />Address: {SITE.address}</p>
          </div>
        </div>
        <LeadForm variant="contact" />
      </Container>
    </>
  );
}
