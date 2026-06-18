import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Textile Manufacturing & Brands" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Textile Manufacturing & Brands" />
      <Block>
        <Prose paragraphs={[
          "Textile and fashion manufacturers and brands supply Spanish retail chains and wholesalers on credit, frequently around seasonal collections and large orders. Defaults typically arise from returns and markdown disputes, agreed discounts not honoured, cancelled or reduced orders, and retailers under commercial pressure, against a running account with a continuous history of invoices, credit notes and partial payments.",
          "IJ Creditor handles these files with knowledge of wholesale and retail supply practices, seasonal ordering, the reconciliation of running commercial accounts and claims against retail groups in difficulty or insolvency.",
        ]} />
      </Block>
      <Block title="Types of files typically handled">
        <Bullets items={[
          "Recovery of unpaid wholesale and retail supply invoices.",
          "Claims on seasonal collection and large-volume orders.",
          "Disputes over returns, markdowns or agreed discounts.",
          "Reconciliation of running accounts (invoices, credit notes, partial payments).",
          "Claims against retail chains in difficulty or insolvency.",
          "Cross-border recovery where the debtor is outside Spain.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
