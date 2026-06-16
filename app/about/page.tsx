import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "About Us" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="A Spanish debt collection firm and law office, working for creditors since 1992" />
      <Block>
        <Prose paragraphs={[
          "Iuris Justitia Creditor (IJ Creditor) is a Spanish debt collection firm specialised in commercial debt recovery and in legal services to creditors. It was founded in 1992 and has operated uninterruptedly ever since, with its head office at Paseo de la Castellana 120, in Madrid. The firm covers four service lines: out-of-court debt collection, judicial debt collection in Spain, international debt collection through a correspondent network, and credit & solvency reports.",
          "More than 3,000 companies —Spanish and foreign— have entrusted their unpaid claims to the firm over the years. Activity covers both B2B and, where applicable, B2C claims, applied under the same legal, technical and ethical criteria. More than 80% of cases entrusted to the firm are resolved at the out-of-court stage, without going to court.",
        ]} />
      </Block>
      <Block title="Debt collection firm and law firm">
        <Prose paragraphs={[
          "IJ Creditor operates simultaneously as a Spanish debt collection firm and as a law firm. The practical consequence of this structure is that every step of the case, including the amicable phase, is supervised by a lawyer of the firm. Each communication with the debtor, each formal demand and each settlement proposal is drafted under legal criteria —evidentiary value, GDPR compliance, potential effect of interrupting limitation periods— and in accordance with applicable procedural law.",
          "The firm covers the entire credit cycle, from clarifying disputed balances when the claim is not clear-cut, to the judicial enforcement of unpaid amounts when court action becomes necessary.",
        ]} />
      </Block>
      <Block title="How we work">
        <Prose paragraphs={[
          "The purpose of IJ Creditor is always the same: to find a solution that recovers the debt while, whenever possible, preserving the commercial relationship between the client and the debtor. Court proceedings are recommended only when out-of-court dialogue has been exhausted, or where, from the outset, it is not feasible. They are never the default route. This way of working is reflected in the firm's code of conduct, publicly available from this website.",
        ]} />
      </Block>
      <Block title="Team and network">
        <Prose paragraphs={[
          "The team comprises in-house lawyers, case handlers and commercial-information specialists, all integrated at the Madrid head office. The firm is a member of the relevant national and international debt-collection associations, through which its correspondent network across multiple jurisdictions is maintained.",
        ]} />
      </Block>
      <Block title="Regulatory framework">
        <Prose paragraphs={[
          "IJ Creditor's activity is governed simultaneously by the Code of Ethics of the Spanish Bar (Código Deontológico de la Abogacía Española, approved by the General Council of the Spanish Bar in March 2019), the General Statute of the Spanish Bar (Royal Decree 135/2021), and the industry codes of conduct adopted by the debt-collection associations to which the firm belongs.",
          "The relevant general Spanish and European legislation also applies, including the Spanish Civil Code, the Criminal Code, the Civil Procedure Act, Regulation (EU) 2016/679 (GDPR) and Organic Law 3/2018 (LOPDGDD), Law 18/2022 on the creation and growth of enterprises, Law 10/2010 on the prevention of money laundering, and EU legislation applicable to cross-border debt collection.",
        ]} />
      </Block>
      <Block title="Head office">
        <Prose paragraphs={["Paseo de la Castellana 120, 28046 Madrid, Spain."]} />
      </Block>
      <CtaBand />
    </>
  );
}
