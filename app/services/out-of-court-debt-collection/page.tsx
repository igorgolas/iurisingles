import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Out-of-court Debt Collection in Spain" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Out-of-court Debt Collection in Spain"
        intro="The first route IJ Creditor attempts in every case: resolve payment before court action and, whenever possible, preserve the commercial relationship. More than 80% of cases entrusted to the firm are resolved at this stage, without filing a claim."
      />
      <Block title="Fees">
        <Prose paragraphs={[
          "The service is performed on a success-fee basis. The firm charges a commission on the amount actually recovered, calculated under the terms agreed with the client in the engagement contract and depending on the amount, age of the debt, complexity of the case and information available about the debtor. If nothing is recovered, no variable fees are invoiced.",
          "Specific actions or third-party costs —such as commercial information reports, certified Spanish burofax communications, registry certifications, or other external services required to manage the case— may involve additional cost, in all cases with prior information to the client and express approval.",
        ]} />
      </Block>
      <Block title="Legal supervision of the process">
        <Prose paragraphs={[
          "Out-of-court work is performed by a team formed mainly by lawyers and, in every case, supervised file by file by a lawyer of the firm. This is what prevents the typical mistakes made when debt collection is handled without legal training: communications that breach GDPR rules, poorly drafted demands that fail to interrupt limitation periods, decisions that close the door to a subsequent court action, or non-compliance with the deadlines and formalities provided by Spanish and European law.",
        ]} />
      </Block>
      <Block title="Two integrated functions">
        <Prose paragraphs={[
          "IJ Creditor combines two specialised functions inside the out-of-court department, applied jointly and successively to each case according to its needs: balance reconciliation and amicable debt collection. In practice they are not separate silos: many cases that arrive as a straightforward unpaid invoice reveal, once dialogue with the debtor begins, an accounting situation that requires reconciliation; and many that begin as reconciliation matters end as amicable collection of the amounts confirmed as enforceable.",
        ]} />
      </Block>
      <Block title="Balance reconciliation">
        <Prose paragraphs={[
          "Where it is necessary to clarify with the debtor the actual composition of the debt before claiming payment —because of doubts on payments already credited, pending credit notes, commercial discounts not yet applied, allocation errors, double-counted VAT or invoicing discrepancies— IJ Creditor acts, on behalf of the creditor, as an interlocutor between the parties in clarification mode. Communications with the debtor always identify the creditor on whose behalf the firm acts and place the process in accounting-clarification mode, not in pressure mode.",
          "The client's records are cross-checked against the supporting documentation provided by the debtor —payment receipts, credit notes, banking evidence— and only the balance confirmed as enforceable after the reconciliation is claimed. The function applies both to corporate debtors (B2B) and to individual debtors (B2C) and is particularly useful when the client wishes to recover the debt while preserving the commercial relationship: reconciliation reduces conflict and opens the way to quick, reasonable solutions for both parties.",
        ]} />
      </Block>
      <Block title="Amicable debt collection">
        <Prose paragraphs={[
          "Where the composition of the debt is clear and amicable management is requested, the firm handles direct collection: communications with the debtor, formal demands when appropriate, negotiation of payment plans or instalment arrangements, and closure of the file with the satisfaction of the debt.",
          "The amount claimed is the amount the client communicates; the firm does not proactively challenge it. If, during the management of the case, the debtor raises disputes or discrepancies on their own initiative, IJ Creditor records them, conveys them to the client with the firm's professional view on their coherence, and the client retains the decision on how to proceed. Any settlement proposal —payment plan, instalment arrangement or reasonable waiver— is brought to the creditor with all the information needed to decide; final approval always rests with the creditor.",
        ]} />
      </Block>
      <Block title="How we work">
        <Bullets items={[
          "Intake. The client sends the files in whatever format is most convenient —usually digital files: spreadsheets, ERP exports, or any other suitable medium. The firm requests, along the way, any additional data or documents needed.",
          "Internal review and file opening. The team assesses each case, identifies legal risks, and opens the file under the corresponding legal supervision.",
          "Communications with the debtor. Demand letters, certified Spanish burofaxes, electronic or telephone contact, as appropriate. Each communication is reviewed by a lawyer to ensure evidentiary validity, GDPR compliance and, where applicable, the legal effect of interrupting limitation periods.",
          "Reconciliation, negotiation or settlement. Where the case requires clarifying the composition of the debt, balance reconciliation is initiated before claiming payment. When confirmed, the firm works with the debtor to reach closure: full payment, payment plan, instalments or a reasonable waiver. Proposals requiring client approval are submitted with reasoning.",
          "Collection and accounting. Recovered amounts are held in a separate bank account and remitted to the creditor at the cadence and in the format agreed. By default, accounting is monthly.",
          "Closure or escalation. If the amicable route succeeds, the file is closed. If it does not, IJ Creditor prepares a judicial feasibility report and, based on its outcome, advises the client on next steps.",
        ]} />
      </Block>
      <Block title="Information that we find useful">
        <Prose paragraphs={[
          "The firm works with whatever the client can provide, requesting any additional data along the way. It is not necessary to provide everything up front. If the client can provide from the start, without significant administrative effort, the full information of each debt, the file is opened faster.",
        ]} />
        <div className="mt-5">
          <Bullets items={[
            "Unpaid invoices with their due dates and concepts.",
            "Contract with the debtor, if any.",
            "Delivery notes or proof of provision of the service or product.",
            "Prior communications with the debtor.",
            "Full identification of the debtor (Spanish CIF/NIF or foreign equivalent, registered address, contact person or department, telephone and email).",
            "Any other relevant circumstance such as partial payments received or pending credit notes.",
          ]} />
        </div>
      </Block>
      <Block title="Timeframes">
        <Prose paragraphs={[
          "After the file is received together with the supporting documentation, the opening and first contact with the debtor take place within a short timeframe. The total duration of the amicable phase depends on the complexity of the case, the solvency and disposition of the debtor and the function activated: simpler files are closed within a few weeks, while cases requiring accounting reconciliation or payment-plan negotiation may take some months.",
          "If, after a reasonable period, the amicable route does not allow the debt to be satisfied, the appropriateness of moving to court is evaluated together with the client, always preceded by a judicial feasibility report.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
