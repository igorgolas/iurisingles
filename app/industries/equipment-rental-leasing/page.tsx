import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Equipment Rental & Leasing" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Equipment Rental & Leasing" />
      <Block>
        <Prose paragraphs={[
          "Rental and leasing arrangements cover operational or financial financing schemes for movable assets —commercial vehicles, industrial machinery, IT equipment, installations or furniture— for use by companies and self-employed professionals. When default occurs, it is usually accompanied by specific issues: ownership of the asset, contract termination for breach, settlement of the customer's account, residual value of the asset and, where applicable, physical recovery of the financed or rented asset.",
          "IJ Creditor handles these files with knowledge of the legal framework applicable to each contractual form and of the customary clauses in the sector: payment schedule, purchase option, personal guarantees, agreed default interest, asset-return regime and settlements following early termination.",
        ]} />
      </Block>
      <Block title="Types of files typically handled">
        <Bullets items={[
        "Recovery of unpaid instalments.",
        "Contract termination for breach, with settlement of the customer's account.",
        "Recovery of the financed or rented asset following contract termination.",
        "Claims arising from early returns, asset deterioration or residual-value settlements.",
        "Intervention in insolvency proceedings, with knowledge of the particularities applicable to rental and financial leasing.",
        "Claims against guarantors and personal sureties when set out in the contract.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
