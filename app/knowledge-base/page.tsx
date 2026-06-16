import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Knowledge Base" };

const GUIDES: { t: string; d: string }[] = [
  { t: "The Spanish order-for-payment procedure (monitorio)", d: "Definition; legal basis in the Civil Procedure Act; who may file; required documents; the 20-day window; opposition; payment or silence; enforcement; costs; realistic timeline." },
  { t: "Verbal proceedings (juicio verbal) for claims under €15,000", d: "When to use this route instead of the monitorio; simplified hearing; evidentiary requirements; timeline; appeal options; interaction with the monitorio on opposition." },
  { t: "Ordinary proceedings for claims above €15,000", d: "When ordinary applies; structure (claim, response, preliminary hearing, trial, judgment); provisional enforcement; timeline expectations; appeals." },
  { t: "The Spanish burofax", d: "What a burofax is; what it proves (content and delivery); cost; legal effect of interrupting limitation periods; evidentiary value at trial; alternatives." },
  { t: "Limitation periods for commercial debts in Spanish law", d: "General 5-year rule; shorter sector-specific periods; how to interrupt limitation; effect of partial payment or written acknowledgement; implications for foreign creditors." },
  { t: "Alternative Dispute Resolution (MASC) under Organic Law 1/2025", d: "What MASC is; when it is a procedural admissibility requirement; statutory exceptions; how to evidence the attempt; how IJ Creditor handles it through Spanish burofax." },
  { t: "Regulation Brussels I bis (EU 1215/2012)", d: "Direct enforcement of Spanish judgments in other EU Member States; the Brussels I bis certificate; the procedure in the State of enforcement; interaction with local procedural law." },
  { t: "Exequatur under Law 29/2015", d: "Recognition and enforcement of non-EU judgments in Spain; applicable conventions; procedural steps; estimated timeframes." },
  { t: "Concurso de acreedores", d: "Filing of credits, classification, monitoring of arrangement or liquidation, recovery prospects for foreign creditors, action against directors." },
  { t: "Director liability for company debts in Spain", d: "When directors can be held personally liable; legal causes for dissolution; action for extension of liability." },
  { t: "Debtor tracing and asset investigation", d: "How asset investigation works in Spain; the role of the court; sources available to professionals; what foreign creditors can expect when their counterparty goes silent." },
  { t: "Bank account attachment in Spain", d: "How attachment of bank accounts is processed once an enforceable title is obtained; practical timeline; interaction with the debtor's other creditors." },
  { t: "Payment terms in Spain (Law 3/2004, as amended)", d: "Legal payment terms in B2B operations; obligations and rights of the creditor; default interest; recent developments under Law 18/2022." },
  { t: "Contractual clauses that help recovery", d: "Retention of title; jurisdiction clauses; default interest rates; personal guarantees; payment plans; standard B2B clauses that strengthen the creditor's position." },
  { t: "Power of attorney for litigation in Spain", d: "What kind of power of attorney is needed to file court proceedings in Spain; how a foreign creditor can grant it; apostille and translation requirements." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge Base"
        title="Permanent guides on Spanish debt collection law"
        intro="A static, didactic Knowledge Base instead of a news blog. Permanent content, not news: each guide answers, in a self-contained way, a specific question a foreign creditor asks about recovering debt in Spain."
      />
      <Block>
        <Prose paragraphs={[
          "Each guide is a pillar page designed to answer a precise question of the foreign creditor: how Spanish debt collection works, how long it takes, whether travel is required, what documents are needed, whether a home-country judgment can be enforced in Spain. Each is written to be self-contained and citable. The full guides are being published progressively.",
        ]} />
      </Block>
      <Container className="pb-8">
        <div className="grid gap-4 md:grid-cols-2">
          {GUIDES.map((g) => (
            <div key={g.t} className="rounded-lg border border-slate/15 p-5">
              <h2 className="text-base font-semibold text-ink">{g.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate">{g.d}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-slate/50">Guide in preparation</p>
            </div>
          ))}
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
