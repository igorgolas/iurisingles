import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Manufacturing & Industrial Supply" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Manufacturing & Industrial Supply" />
      <Block>
        <Prose paragraphs={[
          "Manufacturers, machinery suppliers, component makers and industrial distributors sell to Spanish buyers on deferred payment, frequently under framework agreements, instalment or financed sales and with retention-of-title clauses. Defaults typically arise from disputed deliveries, quality or specification disagreements, acceptance of goods, or buyers under cash-flow pressure, and often involve significant balances and an extensive documentary trail (orders, delivery notes, acceptance records, framework contracts).",
          "IJ Creditor handles these files with knowledge of the law applicable to commercial sales, the late-payment regime under Spanish Law 3/2004 (as amended), the enforceability of retention-of-title clauses, and the customary clauses of industrial supply: payment schedules, agreed default interest, guarantees and penalty clauses.",
        ]} />
      </Block>
      <Block title="Types of files typically handled">
        <Bullets items={[
          "Recovery of unpaid invoices for machinery, components and industrial materials.",
          "Disputes over delivery, specifications or acceptance of goods.",
          "Files involving goods supplied under retention of title.",
          "Balance reconciliation on recurring supply accounts.",
          "Recovery against buyers in insolvency, with knowledge of the sector's particularities.",
          "Cross-border recovery where the debtor is outside Spain, through the firm's correspondent network.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
