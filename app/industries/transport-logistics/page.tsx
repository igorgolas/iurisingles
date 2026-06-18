import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Transport, Freight Forwarding & Logistics" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Transport, Freight Forwarding & Logistics" />
      <Block>
        <Prose paragraphs={[
          "Transport, courier and logistics activities typically operate with tight margins and a high operational interdependence between the various links of the chain: shippers, logistics operators, freight forwarders, carriers, platforms, warehouses and last-mile operators. In certain segments, collection cycles can be lengthy. Defaults usually arise from disputes over service performance —deliveries with incidents, missed deadlines, damaged goods, service-level or contractual KPIs not met— or from clients under real cash-flow pressure.",
          "IJ Creditor has recurrent experience in the sector and knowledge of its legal specifics: Spanish Law 15/2009 on the contract of land transport of goods, the payment terms under Spanish Law 3/2004 (as amended), the CMR Convention on international road transport, the specific issues raised by transport incidents —theft of cargo, losses, damages and disputes over insurance coverage— and the customary contractual practices of the sector (consignment notes, signed delivery documents, framework contracts with penalty clauses).",
        ]} />
      </Block>
      <Block title="Types of files typically handled">
        <Bullets items={[
        "Collection of unpaid invoices from shippers and final customers.",
        "B2B claims between companies along the logistics chain (forwarders, subcontractors, platforms).",
        "Files relating to cargo theft, loss or damage, and claims related to transport insurance.",
        "Recovery against debtors in insolvency, with knowledge of the insolvency particularities of the transport sector.",
        "Cross-border recovery where the debtor is outside Spain, through the firm's correspondent network.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
