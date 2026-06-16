import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Goods & Services Suppliers" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Goods & Services Suppliers" />
      <Block>
        <Prose paragraphs={[
          "B2B debt collection in the sale of goods and services is the most widespread typology in Spain and the one that most frequently reaches IJ Creditor. It covers supplier invoices to corporate customers, recurring supplies, professional services, construction contracts and turnkey projects, and goods sales with or without retention of title.",
          "It is also a typology in which balance reconciliation is particularly useful: payments allocated to the wrong invoice, pending commercial credit notes, unrecognised early-payment discounts, cross-returns, double-counted VAT or invoicing discrepancies between client and supplier are common, and many claims that start as straightforward unpaid invoices close after a reconciliation phase.",
        ]} />
      </Block>
      <Block title="Types of files typically handled">
        <Bullets items={[
        "Recovery of unpaid commercial invoices arising from recurring supplies of goods or services between companies.",
        "Balance reconciliation in commercial relationships with continuous history of invoicing, credit notes, partial payments and set-offs.",
        "Claims arising from disputes over works certifications, project milestones or acceptance of services rendered.",
        "Files relating to goods delivered under retention of title or with disputes over returns and receipt.",
        "Claims against corporate customers in pre-insolvency or insolvency situations.",
        "Resolution of complex accounting incidents: payments wrongly allocated, commercial discounts, cross-returns or invoicing discrepancies.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
