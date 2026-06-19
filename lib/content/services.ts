import type { Locale } from "@/lib/i18n";

export type ServiceSlug =
  | "out-of-court-debt-collection"
  | "judicial-debt-collection"
  | "international-debt-collection"
  | "credit-solvency-reports";

export type Block =
  | { t: "prose"; title?: string; paras: string[] }
  | { t: "bullets"; title?: string; intro?: string; items: string[] }
  | { t: "subs"; title?: string; intro?: string; items: { h: string; p: string }[] };

export type ServicePage = { intro: string; blocks: Block[] };

const en: Record<ServiceSlug, ServicePage> = {
  "out-of-court-debt-collection": {
    intro: "The first route IJ Creditor attempts in every case: resolve payment before court action and, whenever possible, preserve the commercial relationship. More than 80% of cases entrusted to the firm are resolved at this stage, without filing a claim.",
    blocks: [
      { t: "prose", title: "Fees", paras: [
        "The service is performed on a success-fee basis. The firm charges a commission on the amount actually recovered, calculated under the terms agreed with the client in the engagement contract and depending on the amount, age of the debt, complexity of the case and information available about the debtor. If nothing is recovered, no variable fees are invoiced.",
        "Specific actions or third-party costs —such as commercial information reports, certified Spanish burofax communications, registry certifications, or other external services required to manage the case— may involve additional cost, in all cases with prior information to the client and express approval.",
      ] },
      { t: "prose", title: "Legal supervision of the process", paras: [
        "Out-of-court work is performed by a team formed mainly by lawyers and, in every case, supervised file by file by a lawyer of the firm. This is what prevents the typical mistakes made when debt collection is handled without legal training: communications that breach GDPR rules, poorly drafted demands that fail to interrupt limitation periods, decisions that close the door to a subsequent court action, or non-compliance with the deadlines and formalities provided by Spanish and European law.",
      ] },
      { t: "prose", title: "Two integrated functions", paras: [
        "IJ Creditor combines two specialised functions inside the out-of-court department, applied jointly and successively to each case according to its needs: balance reconciliation and amicable debt collection. In practice they are not separate silos: many cases that arrive as a straightforward unpaid invoice reveal, once dialogue with the debtor begins, an accounting situation that requires reconciliation; and many that begin as reconciliation matters end as amicable collection of the amounts confirmed as enforceable.",
      ] },
      { t: "prose", title: "Balance reconciliation", paras: [
        "Where it is necessary to clarify with the debtor the actual composition of the debt before claiming payment —because of doubts on payments already credited, pending credit notes, commercial discounts not yet applied, allocation errors, double-counted VAT or invoicing discrepancies— IJ Creditor acts, on behalf of the creditor, as an interlocutor between the parties in clarification mode. Communications with the debtor always identify the creditor on whose behalf the firm acts and place the process in accounting-clarification mode, not in pressure mode.",
        "The client's records are cross-checked against the supporting documentation provided by the debtor —payment receipts, credit notes, banking evidence— and only the balance confirmed as enforceable after the reconciliation is claimed. The function applies both to corporate debtors (B2B) and to individual debtors (B2C) and is particularly useful when the client wishes to recover the debt while preserving the commercial relationship: reconciliation reduces conflict and opens the way to quick, reasonable solutions for both parties.",
      ] },
      { t: "prose", title: "Amicable debt collection", paras: [
        "Where the composition of the debt is clear and amicable management is requested, the firm handles direct collection: communications with the debtor, formal demands when appropriate, negotiation of payment plans or instalment arrangements, and closure of the file with the satisfaction of the debt.",
        "The amount claimed is the amount the client communicates; the firm does not proactively challenge it. If, during the management of the case, the debtor raises disputes or discrepancies on their own initiative, IJ Creditor records them, conveys them to the client with the firm's professional view on their coherence, and the client retains the decision on how to proceed. Any settlement proposal —payment plan, instalment arrangement or reasonable waiver— is brought to the creditor with all the information needed to decide; final approval always rests with the creditor.",
      ] },
      { t: "bullets", title: "How we work", items: [
        "Intake. The client sends the files in whatever format is most convenient —usually digital files: spreadsheets, ERP exports, or any other suitable medium. The firm requests, along the way, any additional data or documents needed.",
        "Internal review and file opening. The team assesses each case, identifies legal risks, and opens the file under the corresponding legal supervision.",
        "Communications with the debtor. Demand letters, certified Spanish burofaxes, electronic or telephone contact, as appropriate. Each communication is reviewed by a lawyer to ensure evidentiary validity, GDPR compliance and, where applicable, the legal effect of interrupting limitation periods.",
        "Reconciliation, negotiation or settlement. Where the case requires clarifying the composition of the debt, balance reconciliation is initiated before claiming payment. When confirmed, the firm works with the debtor to reach closure: full payment, payment plan, instalments or a reasonable waiver. Proposals requiring client approval are submitted with reasoning.",
        "Collection and accounting. Recovered amounts are held in a separate bank account and remitted to the creditor at the cadence and in the format agreed. By default, accounting is monthly.",
        "Closure or escalation. If the amicable route succeeds, the file is closed. If it does not, IJ Creditor prepares a judicial feasibility report and, based on its outcome, advises the client on next steps.",
      ] },
      { t: "prose", title: "Information that we find useful", paras: [
        "The firm works with whatever the client can provide, requesting any additional data along the way. It is not necessary to provide everything up front. If the client can provide from the start, without significant administrative effort, the full information of each debt, the file is opened faster.",
      ] },
      { t: "bullets", items: [
        "Unpaid invoices with their due dates and concepts.",
        "Contract with the debtor, if any.",
        "Delivery notes or proof of provision of the service or product.",
        "Prior communications with the debtor.",
        "Full identification of the debtor (Spanish CIF/NIF or foreign equivalent, registered address, contact person or department, telephone and email).",
        "Any other relevant circumstance such as partial payments received or pending credit notes.",
      ] },
      { t: "prose", title: "Timeframes", paras: [
        "After the file is received together with the supporting documentation, the opening and first contact with the debtor take place within a short timeframe. The total duration of the amicable phase depends on the complexity of the case, the solvency and disposition of the debtor and the function activated: simpler files are closed within a few weeks, while cases requiring accounting reconciliation or payment-plan negotiation may take some months.",
        "If, after a reasonable period, the amicable route does not allow the debt to be satisfied, the appropriateness of moving to court is evaluated together with the client, always preceded by a judicial feasibility report.",
      ] },
    ],
  },
  "judicial-debt-collection": {
    intro: "The route activated when the amicable phase has been exhausted, or where it is not feasible from the outset. IJ Creditor takes direct legal representation in the procedure that best fits each situation, through to judgment, enforcement and effective recovery.",
    blocks: [
      { t: "prose", title: "Judicial feasibility report", paras: [
        "Before recommending court action, IJ Creditor prepares —whenever possible— a judicial feasibility report. The report assesses the strength and validity of the documentation, the debtor's solvency and whereabouts, applicable limitation periods, and the realistic prospects of success in court. Its purpose is to avoid putting the client through the cost and effort of a procedure that, given the circumstances, should not be initiated.",
        "If the feasibility report advises against filing, this is communicated to the client with reasoned support. The lawyer's intellectual work on the report is never invoiced. Where external information with cost is required —debtor asset reports, registry certifications, specific searches in public or private databases— that cost is passed on to the client, with prior express approval.",
      ] },
      { t: "prose", title: "Fees", paras: [
        "In most cases, judicial fees are already covered by the rates agreed with the client in the engagement contract signed at the start of the relationship. In that case, before initiating proceedings only express authorisation from the client to proceed is required; the fees applicable are the rates already agreed and no new quote is needed.",
        "Where judicial fees are not covered by the contract, IJ Creditor issues to the client a lump-sum quote in writing before any action is initiated, calculated according to the procedure involved, the amount claimed and the expected complexity, and requests express approval to continue.",
        "In either case, ancillary items related to the procedure are identified upfront, including applicable court fees and foreseeable disbursements.",
      ] },
      { t: "prose", title: "Alternative Dispute Resolution (MASC)", paras: [
        "Since the entry into force of Spanish Organic Law 1/2025, most civil and commercial court proceedings require evidence of a prior attempt at an Alternative Dispute Resolution method (MASC) —negotiation, mediation, conciliation, binding offer, or any other form set out by the law— before a claim can be filed. The law also sets out exceptions: insolvency proceedings, bill-of-exchange procedures, enforcement, preliminary precautionary measures and certain non-contentious jurisdiction procedures. Where the requirement applies, the claim will not be admitted without evidence of the prior MASC attempt.",
        "IJ Creditor handles this requirement in each file where it applies. The standard form is a formal notification to the debtor, typically by Spanish burofax with a specific payment proposal. The burofax allows documentation of both the despatch and, through the Spanish postal service, the delivery and full content of the communication, thereby evidencing the attempt required by the law. The cost is agreed with the client.",
      ] },
      { t: "subs", title: "Procedural routes available depending on the matter", intro: "The specific procedure that IJ Creditor will initiate in each case depends on the subject matter of the claim and on the conditions set by the Spanish Civil Procedure Act for each route. Not every claim admits every procedure —for instance, an action for termination of a contract does not admit the order-for-payment (monitorio) procedure. The firm assesses, case by case, which procedure is legally possible and commercially most appropriate.", items: [
        { h: "Order-for-payment procedure (monitorio)", p: "Standard route for pecuniary claims that are liquid, determined, due and enforceable, with no upper limit. Once admitted, the court orders the debtor to pay within twenty days or to oppose. If the debtor does not respond, the creditor obtains an enforceable title and the case moves directly to enforcement. If the debtor opposes, the procedure transforms —depending on the amount— into verbal or ordinary proceedings." },
        { h: "Verbal proceedings (juicio verbal)", p: "Procedural route applicable to monetary claims of up to €15,000 and to other specific matters listed in the Civil Procedure Act. It is a more agile procedure than ordinary proceedings; the holding of an oral hearing depends on the parties' requests and on what the court considers appropriate." },
        { h: "Ordinary proceedings (procedimiento ordinario)", p: "Procedural route applicable to monetary claims exceeding €15,000 and to other specific matters reserved by law. It allows a fuller evidentiary phase and is the usual route for cases of certain technical or legal complexity." },
        { h: "Enforcement and attachment", p: "Once a final judgment, monitorio order or any other enforceable title is obtained, IJ Creditor pursues enforcement: filing of the enforcement application, requesting the court to undertake the debtor's asset investigation, and attachment of bank accounts, salaries, vehicles, real estate or third-party receivables, up to public auction where required —until effective collection or a declaration of insolvency." },
        { h: "Insolvency proceedings (concurso de acreedores)", p: "When the debtor enters insolvency proceedings, the firm channels the case through the insolvency framework: communication of the credit to the appointed insolvency administrator within the legal deadline, qualification of the credit, monitoring of the arrangement or liquidation, and challenging of acts harmful to the estate. Where statutory grounds exist, IJ Creditor also pursues actions for extension of liability to directors." },
      ] },
      { t: "bullets", title: "How we work", items: [
        "Judicial feasibility assessment. Prospects of success are evaluated and the firm recommends the appropriate route or, where appropriate, the non-filing of the claim.",
        "Client approval. Where judicial fees are already covered by the contract, the client's express authorisation suffices. Where not, a lump-sum quote in writing is issued in advance and requires approval. No procedural action is taken without client approval.",
        "Drafting and filing the claim. The firm's lawyers draft the procedural pleading, gather documentary evidence and, where appropriate, propose witness and expert evidence.",
        "Procedural management. Direct legal representation throughout: hearings, responses, appeals and any incidental matters.",
        "Enforcement and attachment. Once a judgment or enforceable order is obtained, the enforcement phase is initiated until effective satisfaction of the claim.",
        "Information and accounting to the client. Throughout the procedure the client receives updates on the status of the file and on any relevant developments.",
      ] },
      { t: "bullets", title: "Documentation we need from the client", items: [
        "All documentation evidencing the debt: invoices, contracts, delivery notes, evidence of service or product provision.",
        "Prior communications with the debtor: correspondence, formal demands, responses.",
        "Full identifying details of the debtor: Spanish CIF/NIF or foreign equivalent, registered address, legal form, directors.",
        "Where available, information on the debtor's asset position or on any prior procedural circumstance (pending proceedings, insolvency situation, etc.).",
        "General power of attorney for litigation in favour of the procurator and lawyers designated by the firm, or, where applicable, apud acta.",
      ] },
      { t: "prose", title: "Timeframes", paras: [
        "Judicial timeframes depend on the procedure, the competent court and the debtor's response. As an orientation, an unopposed monitorio can be resolved within a few months. In contested procedures —verbal proceedings, ordinary proceedings, enforcement— timeframes may extend depending on the procedural stages required and the court's workload.",
        "At the start of proceedings, IJ Creditor provides the client with a reasonable estimate of timeframes based on the firm's experience with the relevant court and on the type of procedure foreseen.",
      ] },
      { t: "prose", title: "Network of local lawyers", paras: [
        "Although the legal representation of every procedure is led from IJ Creditor in Madrid, the firm maintains a consolidated network of local lawyers with specific experience in their respective judicial districts. Where the nature of the procedure, the debtor's location or the technical complexity of the matter make it appropriate, IJ Creditor relies on these professionals to secure the best representation in each case.",
        "Coordination is always maintained from the central office, so that the client retains a single point of contact for the entire file.",
      ] },
    ],
  },
  "international-debt-collection": {
    intro: "For foreign clients whose debtors are located in countries other than Spain. IJ Creditor coordinates the case from Madrid and executes it in the debtor's country through a network of partner firms and correspondents.",
    blocks: [
      { t: "prose", paras: [
        "Cases in which a foreign creditor has a debtor located in Spain are not handled through this service. Those cases are the core of the firm's offering for foreign creditors and are covered by the Out-of-court and Judicial Debt Collection pages.",
      ] },
      { t: "prose", title: "How the network operates", paras: [
        "Each case is handled in the debtor's country by a local firm that knows the legal environment, commercial customs and language. Coordination, communications with the client and case follow-up are conducted from Madrid, in English, so that the client benefits from a single point of contact for cases executed across different jurisdictions. Correspondents are selected by track record, by their membership in the same sector associations and by IJ Creditor's prior experience with each firm.",
      ] },
      { t: "subs", title: "Applicable legal framework", items: [
        { h: "Within the European Union", p: "Recognition and enforcement of Spanish judgments in other EU Member States is governed, as a rule, by Regulation (EU) No 1215/2012 (Brussels I bis): a Spanish judgment is directly enforceable in any other Member State without a separate declaration of enforceability. For cross-border claims of moderate amount, the European Order for Payment Procedure (Regulation (EC) No 1896/2006) and the European Small Claims Procedure (Regulation (EC) No 861/2007) are also available, both allowing a European enforceable title directly effective in other Member States." },
        { h: "Outside the European Union", p: "For debtors located in non-EU States, recognition and enforcement of Spanish judgments is sought through exequatur, in accordance with the applicable international convention where one exists (Lugano Convention for Switzerland, Norway and Iceland; bilateral treaties with several Latin American countries; etc.) and, in their absence, under Spanish Law 29/2015 on international legal cooperation in civil matters and the law of the State of enforcement. Where circumstances so advise, IJ Creditor may recommend initiating proceedings directly in the debtor's jurisdiction through the local correspondent firm, which is often more efficient than filing in Spain and then seeking enforcement abroad." },
      ] },
      { t: "bullets", title: "Types of action covered by the service", items: [
        "Cross-border out-of-court debt collection. Communications and negotiation with the debtor through the local correspondent, in their language and following local commercial customs. The first route attempted and the one that most often leads to collection without court action.",
        "Court proceedings in the debtor's country. Where the amicable phase does not produce a result, IJ Creditor coordinates with the local correspondent the filing and follow-up of the applicable procedure, through to judgment and enforcement.",
        "Court proceedings in Spain with enforcement abroad. Where it is more appropriate to file in Spain (e.g. due to the contract's terms, a jurisdiction clause or debtor assets in Spain), the firm holds legal representation in Spain and coordinates the recognition and enforcement abroad of the final decision.",
        "Cross-border insolvency. If the foreign debtor enters insolvency, IJ Creditor coordinates with the local correspondent the communication of the credit and subsequent monitoring, in accordance with Regulation (EU) 2015/848 where applicable.",
      ] },
    ],
  },
  "credit-solvency-reports": {
    intro: "Commercial, asset and solvency reports on companies and individuals, Spanish and foreign, prepared from verifiable sources — so the decision-maker has sufficient, contrasted information to decide with criteria.",
    blocks: [
      { t: "bullets", title: "Four typical uses", items: [
        "Pre-credit analysis. Before accepting a new customer, opening a deferred-payment line or closing a transaction of certain size, a report profiles the financial, asset and compliance situation of the counterparty, allowing the risk limit to be set or guarantees requested.",
        "Active customer-portfolio risk monitoring. For companies with broad or concentrated B2B portfolios, periodic reports allow anticipation of asset deterioration, insolvency filings, changes in management or early signs of default.",
        "Pre-recovery feasibility assessment. Before investing time and fees in a collection action, a report profiles the debtor's solvency and assets. If unfavourable, the client is spared the cost of a procedure with no realistic return.",
        "Support to ongoing recovery cases. Where IJ Creditor already has an open file, a specific report can support the case: verification of corporate status, location of companies that changed address, identification of assets for collateral or enforcement. The request is made with prior client authorisation and the cost is passed on with a prior quote.",
      ] },
      { t: "subs", title: "Types of report", items: [
        { h: "Basic commercial report", p: "Identification and registry data of the company, legal form, share capital, current directors and recent track record, business activity and, where available, the latest filed annual accounts. Useful as initial verification of the formal solvency of a counterparty." },
        { h: "Asset and property report", p: "Identification of the debtor's registered assets: real estate at the Land Registry, vehicles, vessels, shareholdings, trademarks and other assets. Essential to assess the prospects of enforcement and attachment in the event of default." },
        { h: "Extended report and specific checks", p: "Combines the above with specific checks requested by the client: presence in credit information systems under article 20 LOPDGDD, prior insolvency proceedings, links to corporate groups, identification of the ultimate beneficial owner where legitimate interest is established, exposure to international sanctions or any other relevant matter." },
        { h: "Recovery feasibility report", p: "Synthesis with a legal lens of the above, applied to a specific recovery case: realistic prospects of collection, recommended routes and, where appropriate, recommendation not to file. This is the report that precedes any court action handled by the firm." },
      ] },
      { t: "prose", title: "Sources used", paras: ["Every report is prepared from contrasted information from two types of sources:"] },
      { t: "bullets", items: [
        "Public registries accessible under applicable law: Spanish Commercial Registry, Land Registry, Movable Asset Registry, BORME, Official State Gazette and other administrative registries. Where consultation requires demonstrating a legitimate interest —as with the Land Registry— IJ Creditor requests the information in compliance with the corresponding legislation.",
        "Specialised commercial-information providers, Spanish and international, that aggregate contrasted data on companies and individuals and make it available to sector professionals through service agreements.",
      ] },
      { t: "prose", paras: [
        "IJ Creditor does not maintain its own databases of commercial information about companies or individuals. The information delivered comes in all cases from the sources above and is identified in each report.",
        "Where the subject of the report is an individual or the data requested is subject to particular access restrictions —in particular those relating to asset solvency under article 20 of Organic Law 3/2018 (LOPDGDD) and the case law of the Spanish Supreme Court on credit-bureau files, or the consultation of the Spanish Central Register of Beneficial Ownership— the service is provided only where there is a legal basis, a legitimate purpose and access authorised by the applicable rules. In those cases, the firm reviews the legitimacy of the consultation in advance and brings it to the client before proceeding.",
      ] },
    ],
  },
};

const content: Partial<Record<Locale, Partial<Record<ServiceSlug, ServicePage>>>> = {
  en,
  // de/fr/it added incrementally; fall back to English until translated.
};

export function getServicePage(locale: Locale, slug: ServiceSlug): ServicePage {
  return content[locale]?.[slug] ?? en[slug];
}
