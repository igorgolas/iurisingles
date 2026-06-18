import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import Faq, { type QA } from "@/components/Faq";

export const metadata: Metadata = { title: "FAQ" };

const ITEMS: QA[] = [
  { q: "How do your fees work?", a: [
    "Out-of-court work is performed on a success-fee basis: a commission on the amount actually recovered, with no upfront cost. If nothing is recovered, no variable fees are charged.",
    "Certain specific actions or third-party costs —commercial information reports, Spanish burofaxes, registry certifications, or external services required to manage the case— may involve additional cost, in all cases with prior information and express client approval.",
    "On court proceedings, fees are agreed in writing in a closed quote before any action is initiated, calculated based on the type of procedure and the amount involved.",
  ]},
  { q: "What if you don't recover anything?", a: [
    "On the amicable phase, variable fees only accrue when the client recovers amounts. Before moving to court action, a no-cost judicial feasibility report is prepared assessing the prospects of success. If the report advises against filing, the recommendation is communicated with reasoning to the client.",
  ]},
  { q: "Is there a minimum amount for taking on a case?", a: [
    "No. There is no minimum threshold. For small amounts, the most efficient route is assessed in cost-benefit terms; if a particular route is not reasonable given the relationship between expected cost and amount claimed, the firm will explain this to the client so they can decide with full information.",
  ]},
  { q: "Do you also handle small-amount portfolios?", a: [
    "Yes. IJ Creditor handles both individual high-value cases and portfolios of numerous small amounts. In each case, the proportionality between expected cost and realistic recovery prospects is assessed, recommending the most efficient route from an economic and legal standpoint.",
    "In certain sectors —transport, vehicle rental, recurring supplies, B2B services— it is common to work with broad portfolios of small but repetitive amounts, for which the firm has specific management and reconciliation models.",
  ]},
  { q: "Do I need to travel to Spain to recover a debt from a Spanish debtor?", a: [
    "No. The Madrid office manages the case directly from start to finish. You communicate with the firm in English; the firm communicates with the debtor in Spanish, in person where it adds value. For court proceedings, the firm uses a notarised power of attorney signed in your country, typically apostilled under the Hague Convention.",
  ]},
  { q: "How long does it take to recover a debt in Spain?", a: [
    "Timeframes in the amicable phase depend on the complexity of the case, the solvency and disposition of the debtor and the function activated. Simpler cases close within weeks; cases requiring balance reconciliation or payment-plan negotiation may take some months. The majority of cases entrusted to IJ Creditor are resolved at the out-of-court stage. Court proceedings depend on the procedure and the court.",
  ]},
  { q: "Can a Spanish judgment be enforced against a debtor in another EU country?", a: [
    "Yes. Under Regulation (EU) 1215/2012 (Brussels I bis), a Spanish enforceable title is recognised and enforced directly in any other EU Member State, without exequatur. The Member State court receives the certified judgment and the Brussels I bis certificate and proceeds with enforcement under local procedural law. The firm handles the Spanish side and coordinates with its partners in the State of enforcement.",
  ]},
  { q: "Can a foreign judgment be enforced in Spain?", a: [
    "Yes. If the judgment was issued in an EU Member State, Brussels I bis applies —direct recognition and enforcement without exequatur. If the judgment comes from a non-EU country, recognition and enforcement go through the Spanish exequatur procedure under Law 29/2015 on international legal cooperation in civil matters and applicable international conventions.",
  ]},
  { q: "What is the difference between balance reconciliation and debt collection?", a: [
    "Balance reconciliation is the stage in which the firm acts as a technical interlocutor between creditor and debtor to clarify the actual composition of the debt before claiming payment: payments already allocated, pending credit notes, commercial discounts, allocation errors or accounting discrepancies.",
    "Debt collection is the stage at which the debt is clear and the firm manages amicable payment.",
    "In practice, the two functions are applied in an integrated manner: many cases that start as straightforward claims later reveal an accounting situation that requires reconciliation, and many that start as reconciliation matters end as amicable collection of the amounts confirmed as enforceable.",
  ]},
  { q: "What legal supervision applies in the amicable phase?", a: [
    "All out-of-court work at IJ Creditor is supervised by a lawyer of the firm. The team is formed mainly by lawyers, and every communication with the debtor —letters, formal demands, burofaxes— is reviewed under legal criteria to ensure evidentiary validity, GDPR compliance and, where legally applicable, the potential effect of interrupting limitation periods.",
  ]},
  { q: "Can the debtor make a complaint about the collection process?", a: [
    "IJ Creditor performs all its activity in accordance with applicable Spanish and European law, including data-protection, consumer and professional-conduct rules. Communications with the debtor are conducted under proportionality, traceability and legal-supervision criteria, avoiding any practice incompatible with the applicable legal framework.",
    "Activity is duly documented and tailored to the nature of each file —corporate or individual debtor, domestic or international scope, amicable or judicial phase— in order to reduce unnecessary risk both to the creditor client and to the firm.",
  ]},
  { q: "What is a burofax?", a: [
    "A burofax is Spain's gold-standard certified postal service, providing legal proof of both the content and the delivery of a communication. It is admitted as evidence in court that the debtor has been formally notified and, where applicable, has the legal effect of interrupting limitation periods. The firm uses it whenever the case requires it.",
  ]},
  { q: "What is MASC and why does it matter?", a: [
    "MASC stands for “Medio Adecuado de Solución de Controversias” — Alternative Dispute Resolution method. Following Spanish Organic Law 1/2025, in most civil and commercial proceedings a documented attempt at an MASC must be evidenced before filing a court claim. The law also sets out exceptions, including insolvency proceedings, the bill-of-exchange procedure, enforcement, preliminary precautionary measures and certain non-contentious jurisdiction procedures. The firm handles the MASC attempt where required, leaving documented record so that it counts towards the procedural admissibility requirement.",
  ]},
  { q: "What is concurso de acreedores and how does it affect my claim?", a: [
    "Concurso de acreedores is the Spanish insolvency procedure for companies and individuals unable to meet their obligations. Once it is opened, creditors must communicate their credits to the court-appointed insolvency administrator and the amicable phase stops. The firm represents foreign creditors in Spanish insolvency proceedings: filing of credits, classification (privileged, ordinary, subordinated), monitoring of the arrangement or liquidation, and where applicable, action for extension of liability against directors.",
    "Insolvency matters are excluded from the general MASC regime; actions are channelled directly through the insolvency procedure.",
  ]},
  { q: "How is the client kept informed?", a: [
    "The firm reports to the client at the cadence and in the format agreed in each case. By default reporting is monthly and includes the status of each file, the actions taken, amounts collected and outstanding.",
    "In addition, IJ Creditor makes available to its clients an online application from which clients can consult in real time the status of their files: status of each claim, recovered amounts, outstanding balance, latest actions and overall portfolio evolution.",
    "Any procedural or out-of-court event of relevance is communicated to the client at the time it takes place, without waiting for the periodic report.",
  ]},
  { q: "What happens with the amounts recovered?", a: [
    "Amounts recovered for the client are held in a separate bank account from the firm's own assets, in accordance with Spanish bar rules, and are transferred to the client at the cadence and method foreseen.",
    "The firm invoices its fees against the amounts actually collected and remits the balance to the client.",
  ]},
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        intro="The questions most frequently asked by clients and visitors. If your question is not answered here, please contact the firm through the Request a Proposal form or the Contact page."
      />
      <Container className="py-12">
        <Faq items={ITEMS} />
      </Container>
      <CtaBand />
    </>
  );
}
