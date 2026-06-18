import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Construction, Engineering & Public Suppliers" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Construction, Engineering & Public Suppliers" />
      <Block>
        <Prose paragraphs={[
          "Construction companies, engineering firms and their suppliers face a combination of long payment terms, subcontracting chains, works certifications and milestone-based billing, retention and guarantee amounts, and a high incidence of insolvency. Where the works are public, the buyer adds specific timelines, procedures and a distinct payment regime.",
          "IJ Creditor handles these files with knowledge of milestone and certification billing, the subcontracting structure of the sector, retention and guarantee regimes, and the particularities of claiming against public administrations and against contractors in difficulty.",
        ]} />
      </Block>
      <Block title="Types of files typically handled">
        <Bullets items={[
          "Recovery of unpaid certifications, milestones and works invoices.",
          "Claims along the subcontracting chain.",
          "Disputes over completion, acceptance or defects.",
          "Recovery of retention and guarantee amounts.",
          "Late payment by public administrations, under the applicable procedure.",
          "Action in contractor insolvency and cross-border recovery where the debtor is outside Spain.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
