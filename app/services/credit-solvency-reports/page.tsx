import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Credit & Solvency Reports" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Credit & Solvency Reports"
        intro="Commercial, asset and solvency reports on companies and individuals, Spanish and foreign, prepared from verifiable sources — so the decision-maker has sufficient, contrasted information to decide with criteria."
      />
      <Block title="Four typical uses">
        <Bullets items={[
          "Pre-credit analysis. Before accepting a new customer, opening a deferred-payment line or closing a transaction of certain size, a report profiles the financial, asset and compliance situation of the counterparty, allowing the risk limit to be set or guarantees requested.",
          "Active customer-portfolio risk monitoring. For companies with broad or concentrated B2B portfolios, periodic reports allow anticipation of asset deterioration, insolvency filings, changes in management or early signs of default.",
          "Pre-recovery feasibility assessment. Before investing time and fees in a collection action, a report profiles the debtor's solvency and assets. If unfavourable, the client is spared the cost of a procedure with no realistic return.",
          "Support to ongoing recovery cases. Where IJ Creditor already has an open file, a specific report can support the case: verification of corporate status, location of companies that changed address, identification of assets for collateral or enforcement. The request is made with prior client authorisation and the cost is passed on with a prior quote.",
        ]} />
      </Block>
      <Block title="Types of report">
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-semibold text-ink">Basic commercial report</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate">Identification and registry data of the company, legal form, share capital, current directors and recent track record, business activity and, where available, the latest filed annual accounts. Useful as initial verification of the formal solvency of a counterparty.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">Asset and property report</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate">Identification of the debtor's registered assets: real estate at the Land Registry, vehicles, vessels, shareholdings, trademarks and other assets. Essential to assess the prospects of enforcement and attachment in the event of default.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">Extended report and specific checks</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate">Combines the above with specific checks requested by the client: presence in credit information systems under article 20 LOPDGDD, prior insolvency proceedings, links to corporate groups, identification of the ultimate beneficial owner where legitimate interest is established, exposure to international sanctions or any other relevant matter.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">Recovery feasibility report</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate">Synthesis with a legal lens of the above, applied to a specific recovery case: realistic prospects of collection, recommended routes and, where appropriate, recommendation not to file. This is the report that precedes any court action handled by the firm.</p>
          </div>
        </div>
      </Block>
      <Block title="Sources used">
        <Prose paragraphs={["Every report is prepared from contrasted information from two types of sources:"]} />
        <div className="mt-5">
          <Bullets items={[
            "Public registries accessible under applicable law: Spanish Commercial Registry, Land Registry, Movable Asset Registry, BORME, Official State Gazette and other administrative registries. Where consultation requires demonstrating a legitimate interest —as with the Land Registry— IJ Creditor requests the information in compliance with the corresponding legislation.",
            "Specialised commercial-information providers, Spanish and international, that aggregate contrasted data on companies and individuals and make it available to sector professionals through service agreements.",
          ]} />
        </div>
        <div className="mt-5">
          <Prose paragraphs={[
            "IJ Creditor does not maintain its own databases of commercial information about companies or individuals. The information delivered comes in all cases from the sources above and is identified in each report.",
            "Where the subject of the report is an individual or the data requested is subject to particular access restrictions —in particular those relating to asset solvency under article 20 of Organic Law 3/2018 (LOPDGDD) and the case law of the Spanish Supreme Court on credit-bureau files, or the consultation of the Spanish Central Register of Beneficial Ownership— the service is provided only where there is a legal basis, a legitimate purpose and access authorised by the applicable rules. In those cases, the firm reviews the legitimacy of the consultation in advance and brings it to the client before proceeding.",
          ]} />
        </div>
      </Block>
      <CtaBand />
    </>
  );
}
