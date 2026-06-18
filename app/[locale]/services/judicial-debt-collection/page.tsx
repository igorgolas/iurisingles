import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Judicial Debt Collection in Spain" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Judicial Debt Collection in Spain"
        intro="The route activated when the amicable phase has been exhausted, or where it is not feasible from the outset. IJ Creditor takes direct legal representation in the procedure that best fits each situation, through to judgment, enforcement and effective recovery."
      />
      <Block title="Judicial feasibility report">
        <Prose paragraphs={[
          "Before recommending court action, IJ Creditor prepares —whenever possible— a judicial feasibility report. The report assesses the strength and validity of the documentation, the debtor's solvency and whereabouts, applicable limitation periods, and the realistic prospects of success in court. Its purpose is to avoid putting the client through the cost and effort of a procedure that, given the circumstances, should not be initiated.",
          "If the feasibility report advises against filing, this is communicated to the client with reasoned support. The lawyer's intellectual work on the report is never invoiced. Where external information with cost is required —debtor asset reports, registry certifications, specific searches in public or private databases— that cost is passed on to the client, with prior express approval.",
        ]} />
      </Block>
      <Block title="Fees">
        <Prose paragraphs={[
          "In most cases, judicial fees are already covered by the rates agreed with the client in the engagement contract signed at the start of the relationship. In that case, before initiating proceedings only express authorisation from the client to proceed is required; the fees applicable are the rates already agreed and no new quote is needed.",
          "Where judicial fees are not covered by the contract, IJ Creditor issues to the client a lump-sum quote in writing before any action is initiated, calculated according to the procedure involved, the amount claimed and the expected complexity, and requests express approval to continue.",
          "In either case, ancillary items related to the procedure are identified upfront, including applicable court fees and foreseeable disbursements.",
        ]} />
      </Block>
      <Block title="Alternative Dispute Resolution (MASC)">
        <Prose paragraphs={[
          "Since the entry into force of Spanish Organic Law 1/2025, most civil and commercial court proceedings require evidence of a prior attempt at an Alternative Dispute Resolution method (MASC) —negotiation, mediation, conciliation, binding offer, or any other form set out by the law— before a claim can be filed. The law also sets out exceptions: insolvency proceedings, bill-of-exchange procedures, enforcement, preliminary precautionary measures and certain non-contentious jurisdiction procedures. Where the requirement applies, the claim will not be admitted without evidence of the prior MASC attempt.",
          "IJ Creditor handles this requirement in each file where it applies. The standard form is a formal notification to the debtor, typically by Spanish burofax with a specific payment proposal. The burofax allows documentation of both the despatch and, through the Spanish postal service, the delivery and full content of the communication, thereby evidencing the attempt required by the law. The cost is agreed with the client.",
        ]} />
      </Block>
      <Block title="Procedural routes available depending on the matter">
        <Prose paragraphs={[
          "The specific procedure that IJ Creditor will initiate in each case depends on the subject matter of the claim and on the conditions set by the Spanish Civil Procedure Act for each route. Not every claim admits every procedure —for instance, an action for termination of a contract does not admit the order-for-payment (monitorio) procedure. The firm assesses, case by case, which procedure is legally possible and commercially most appropriate.",
        ]} />
        <div className="mt-5 space-y-4">
          <div>
            <h3 className="text-base font-semibold text-ink">Order-for-payment procedure (monitorio)</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate">Standard route for pecuniary claims that are liquid, determined, due and enforceable, with no upper limit. Once admitted, the court orders the debtor to pay within twenty days or to oppose. If the debtor does not respond, the creditor obtains an enforceable title and the case moves directly to enforcement. If the debtor opposes, the procedure transforms —depending on the amount— into verbal or ordinary proceedings.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">Verbal proceedings (juicio verbal)</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate">Procedural route applicable to monetary claims of up to €15,000 and to other specific matters listed in the Civil Procedure Act. It is a more agile procedure than ordinary proceedings; the holding of an oral hearing depends on the parties' requests and on what the court considers appropriate.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">Ordinary proceedings (procedimiento ordinario)</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate">Procedural route applicable to monetary claims exceeding €15,000 and to other specific matters reserved by law. It allows a fuller evidentiary phase and is the usual route for cases of certain technical or legal complexity.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">Enforcement and attachment</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate">Once a final judgment, monitorio order or any other enforceable title is obtained, IJ Creditor pursues enforcement: filing of the enforcement application, requesting the court to undertake the debtor's asset investigation, and attachment of bank accounts, salaries, vehicles, real estate or third-party receivables, up to public auction where required —until effective collection or a declaration of insolvency.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">Insolvency proceedings (concurso de acreedores)</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-slate">When the debtor enters insolvency proceedings, the firm channels the case through the insolvency framework: communication of the credit to the appointed insolvency administrator within the legal deadline, qualification of the credit, monitoring of the arrangement or liquidation, and challenging of acts harmful to the estate. Where statutory grounds exist, IJ Creditor also pursues actions for extension of liability to directors.</p>
          </div>
        </div>
      </Block>
      <Block title="How we work">
        <Bullets items={[
          "Judicial feasibility assessment. Prospects of success are evaluated and the firm recommends the appropriate route or, where appropriate, the non-filing of the claim.",
          "Client approval. Where judicial fees are already covered by the contract, the client's express authorisation suffices. Where not, a lump-sum quote in writing is issued in advance and requires approval. No procedural action is taken without client approval.",
          "Drafting and filing the claim. The firm's lawyers draft the procedural pleading, gather documentary evidence and, where appropriate, propose witness and expert evidence.",
          "Procedural management. Direct legal representation throughout: hearings, responses, appeals and any incidental matters.",
          "Enforcement and attachment. Once a judgment or enforceable order is obtained, the enforcement phase is initiated until effective satisfaction of the claim.",
          "Information and accounting to the client. Throughout the procedure the client receives updates on the status of the file and on any relevant developments.",
        ]} />
      </Block>
      <Block title="Documentation we need from the client">
        <Bullets items={[
          "All documentation evidencing the debt: invoices, contracts, delivery notes, evidence of service or product provision.",
          "Prior communications with the debtor: correspondence, formal demands, responses.",
          "Full identifying details of the debtor: Spanish CIF/NIF or foreign equivalent, registered address, legal form, directors.",
          "Where available, information on the debtor's asset position or on any prior procedural circumstance (pending proceedings, insolvency situation, etc.).",
          "General power of attorney for litigation in favour of the procurator and lawyers designated by the firm, or, where applicable, apud acta.",
        ]} />
      </Block>
      <Block title="Timeframes">
        <Prose paragraphs={[
          "Judicial timeframes depend on the procedure, the competent court and the debtor's response. As an orientation, an unopposed monitorio can be resolved within a few months. In contested procedures —verbal proceedings, ordinary proceedings, enforcement— timeframes may extend depending on the procedural stages required and the court's workload.",
          "At the start of proceedings, IJ Creditor provides the client with a reasonable estimate of timeframes based on the firm's experience with the relevant court and on the type of procedure foreseen.",
        ]} />
      </Block>
      <Block title="Network of local lawyers">
        <Prose paragraphs={[
          "Although the legal representation of every procedure is led from IJ Creditor in Madrid, the firm maintains a consolidated network of local lawyers with specific experience in their respective judicial districts. Where the nature of the procedure, the debtor's location or the technical complexity of the matter make it appropriate, IJ Creditor relies on these professionals to secure the best representation in each case.",
          "Coordination is always maintained from the central office, so that the client retains a single point of contact for the entire file.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
