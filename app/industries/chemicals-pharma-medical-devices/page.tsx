import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Chemicals, Pharma & Medical Devices" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Chemicals, Pharma & Medical Devices" />
      <Block>
        <Prose paragraphs={[
          "Suppliers of chemical products, pharmaceuticals, laboratory consumables and medical devices operate high-value, regulated supply chains with deferred payment to Spanish distributors, manufacturers, pharmacies and private or public hospitals. Defaults often involve large balances, framework or tender agreements and documentation specific to the sector (batches, certificates, traceability), and may concern public-sector buyers with their own payment timelines.",
          "IJ Creditor handles these files with attention to the documentary requirements of the sector and to the public-sector payment regime, distinguishing private commercial claims from those subject to public-procurement rules and timelines.",
        ]} />
      </Block>
      <Block title="Types of files typically handled">
        <Bullets items={[
          "Recovery of unpaid supply invoices for chemical, pharmaceutical and medical-device products.",
          "Balances under framework or tender (public-procurement) agreements.",
          "Disputes over batches, certificates or regulated documentation.",
          "Claims against distributors, pharmacies and private or public hospitals.",
          "Late payment by public-sector buyers, under the applicable procedure.",
          "Recovery in insolvency and cross-border recovery where the debtor is outside Spain.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
