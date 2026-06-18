import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "International Debt Collection" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="International Debt Collection"
        intro="For foreign clients whose debtors are located in countries other than Spain. IJ Creditor coordinates the case from Madrid and executes it in the debtor's country through a network of partner firms and correspondents."
      />
      <Block>
        <Prose paragraphs={[
          "Cases in which a foreign creditor has a debtor located in Spain are not handled through this service. Those cases are the core of the firm's offering for foreign creditors and are covered by the Out-of-court and Judicial Debt Collection pages.",
        ]} />
      </Block>
      <Block title="How the network operates">
        <Prose paragraphs={[
          "Each case is handled in the debtor's country by a local firm that knows the legal environment, commercial customs and language. Coordination, communications with the client and case follow-up are conducted from Madrid, in English, so that the client benefits from a single point of contact for cases executed across different jurisdictions. Correspondents are selected by track record, by their membership in the same sector associations and by IJ Creditor's prior experience with each firm.",
        ]} />
      </Block>
      <Block title="Applicable legal framework">
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-semibold text-ink">Within the European Union</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate">Recognition and enforcement of Spanish judgments in other EU Member States is governed, as a rule, by Regulation (EU) No 1215/2012 (Brussels I bis): a Spanish judgment is directly enforceable in any other Member State without a separate declaration of enforceability. For cross-border claims of moderate amount, the European Order for Payment Procedure (Regulation (EC) No 1896/2006) and the European Small Claims Procedure (Regulation (EC) No 861/2007) are also available, both allowing a European enforceable title directly effective in other Member States.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">Outside the European Union</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate">For debtors located in non-EU States, recognition and enforcement of Spanish judgments is sought through exequatur, in accordance with the applicable international convention where one exists (Lugano Convention for Switzerland, Norway and Iceland; bilateral treaties with several Latin American countries; etc.) and, in their absence, under Spanish Law 29/2015 on international legal cooperation in civil matters and the law of the State of enforcement. Where circumstances so advise, IJ Creditor may recommend initiating proceedings directly in the debtor's jurisdiction through the local correspondent firm, which is often more efficient than filing in Spain and then seeking enforcement abroad.</p>
          </div>
        </div>
      </Block>
      <Block title="Types of action covered by the service">
        <Bullets items={[
          "Cross-border out-of-court debt collection. Communications and negotiation with the debtor through the local correspondent, in their language and following local commercial customs. The first route attempted and the one that most often leads to collection without court action.",
          "Court proceedings in the debtor's country. Where the amicable phase does not produce a result, IJ Creditor coordinates with the local correspondent the filing and follow-up of the applicable procedure, through to judgment and enforcement.",
          "Court proceedings in Spain with enforcement abroad. Where it is more appropriate to file in Spain (e.g. due to the contract's terms, a jurisdiction clause or debtor assets in Spain), the firm holds legal representation in Spain and coordinates the recognition and enforcement abroad of the final decision.",
          "Cross-border insolvency. If the foreign debtor enters insolvency, IJ Creditor coordinates with the local correspondent the communication of the credit and subsequent monitoring, in accordance with Regulation (EU) 2015/848 where applicable.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
