export type KbGuide = {
  slug: string;
  title: string;
  nav: string;
  summary: string;
  body: string[];
  assist: string;
};

export const KB_GUIDES: KbGuide[] = [
  {
    slug: "spanish-payment-order-monitorio",
    title: "The Spanish Payment Order Procedure (Proceso Monitorio)",
    nav: "The Spanish order-for-payment procedure (monitorio)",
    summary: "Legal basis in the Civil Procedure Act; who may file; required documents; the twenty-day window; the prior MASC requirement; opposition; enforcement.",
    body: [
      "The Spanish payment order procedure, regulated in Articles 812 to 818 of the Civil Procedure Act (LEC), is a streamlined route for recovering monetary debts that are due, payable and supported by documentary evidence such as invoices, contracts, delivery notes or written acknowledgements of debt. There is no maximum claim amount. The application is filed before the competent Court of First Instance; once admitted, the debtor is required to pay or to file a reasoned objection within twenty working days (días hábiles). If no objection is filed, the creditor may move directly to enforcement, including the attachment of bank accounts and other assets.",
      "Since 3 April 2025, under Article 5 of Organic Law 1/2025 and Article 403.2 LEC, a prior attempt at an adequate means of dispute resolution (MASC) is, as a general rule, a condition of admissibility for the national payment order, although case law on its precise scope is still settling (the European order for payment is excepted). Where the debtor has ceased communications and raises no genuine dispute, the procedure is frequently the most direct way to obtain an enforceable title in Spain.",
    ],
    assist: "We assess the documentary basis of the claim, address the prior MASC requirement, and file and follow the payment order before the competent Spanish court.",
  },
  {
    slug: "verbal-proceedings",
    title: "Verbal Proceedings (Juicio Verbal)",
    nav: "Verbal proceedings (juicio verbal) for claims under €15,000",
    summary: "When this route applies instead of the monitorio; the €15,000 threshold; the hearing; timeline; interaction with the monitorio on opposition.",
    body: [
      "Verbal proceedings are the declaratory route provided for lower-value civil claims and for certain matters designated by law, regulated mainly in Article 250 LEC. Following the reform introduced by Royal Decree-Law 6/2023, in force since 20 March 2024, claims of €15,000 or less are decided through this procedure. It is also the route that follows when a debtor files a reasoned objection to a payment order whose amount falls within that threshold.",
      "The court examines the parties' arguments and evidence and, where appropriate, holds a hearing at which witnesses, experts and documents may be presented, before issuing judgment. Although more contentious than the payment order, verbal proceedings remain a comparatively efficient mechanism for resolving commercial disputes and recovering sums owed.",
    ],
    assist: "We act for foreign creditors throughout verbal proceedings in Spain, from assessing the claim's value and route to representation at the hearing.",
  },
  {
    slug: "ordinary-proceedings",
    title: "Ordinary Proceedings (Juicio Ordinario)",
    nav: "Ordinary proceedings for claims above €15,000",
    summary: "When ordinary proceedings apply; structure (claim, defence, preliminary hearing, trial, judgment); when this is the appropriate route.",
    body: [
      "Ordinary proceedings are the declaratory route for higher-value or more complex claims. Under Article 249 LEC, claims exceeding €15,000 —together with certain matters reserved to this route regardless of amount— are heard through this procedure. It follows a fuller structure: statement of claim, defence, a preliminary hearing (audiencia previa) to fix the issues and evidence, trial and judgment.",
      "It is the appropriate route where the dispute turns on contractual interpretation, liability, contested commercial transactions or substantial evidentiary questions. Although it generally takes longer than other procedures, it allows the court to examine complex legal and factual matters in detail, and it is typically the route where the debtor raises substantial objections or the amount at stake justifies a comprehensive judicial review.",
    ],
    assist: "We prepare and conduct ordinary proceedings for foreign creditors, coordinating the case strategy, evidence and representation before the Spanish courts.",
  },
  {
    slug: "burofax-formal-demand",
    title: "Formal Demand Letters and Burofax",
    nav: "The Spanish burofax",
    summary: "What a burofax is; what it proves (content and delivery); interruption of limitation periods; its role in evidencing the prior MASC step.",
    body: [
      "A burofax is one of the most widely used means of serving formal notices in Spain because it provides proof of both the content of the communication and its delivery, which gives it clear evidentiary value. A properly drafted burofax may be used to demand payment, place the debtor in default, interrupt the limitation period under Article 1973 of the Civil Code, and evidence the creditor's attempt to resolve the matter before litigation.",
      "Since the entry into force of Organic Law 1/2025, a documented demand of this kind also plays a role in evidencing the prior dispute-resolution step now generally required before filing certain claims. In a number of cases a formal demand prompts payment without court proceedings; and where litigation does become necessary, a prior demand generally strengthens the creditor's position.",
    ],
    assist: "We draft and send burofax demands under Spanish law, calibrated to interrupt limitation periods and to support both the recovery and, where relevant, the MASC requirement.",
  },
  {
    slug: "limitation-periods",
    title: "Limitation Periods for Commercial Debts",
    nav: "Limitation periods for commercial debts in Spanish law",
    summary: "General five-year rule (Article 1964 CC); shorter sector-specific periods such as transport; how limitation is interrupted; why early action matters.",
    body: [
      "Spanish law sets limitation periods within which creditors must act; allowing the period to lapse may bar judicial recovery. The general limitation period for personal (contractual) actions is five years, under Article 1964.2 of the Civil Code, as amended by Law 42/2015. Certain sectors are subject to shorter periods: claims arising from a contract for the carriage of goods, for example, are generally subject to a one-year period (Article 79 of Law 15/2009, and the CMR Convention in international carriage).",
      "Limitation can be interrupted by a formal out-of-court demand, by legal action or by the debtor's acknowledgement of the debt (Article 1973 of the Civil Code), which makes early action important. Because the applicable period depends on the nature of the claim, creditors are advised to verify it as soon as payment difficulties arise.",
    ],
    assist: "We confirm the limitation period applicable to each claim and act in time to interrupt it, typically by a documented burofax, before recovery rights are lost.",
  },
  {
    slug: "masc-organic-law-1-2025",
    title: "Adequate Means of Dispute Resolution (MASC) under Organic Law 1/2025",
    nav: "Alternative Dispute Resolution (MASC) under Organic Law 1/2025",
    summary: "What MASC is; when it is a procedural admissibility requirement; the recognised mechanisms; statutory exceptions; how IJ Creditor evidences the attempt.",
    body: [
      "Since 3 April 2025, Organic Law 1/2025 has made the prior attempt at an adequate means of dispute resolution (MASC) a requirement of admissibility for most civil and commercial claims (Article 5 of the Law and Article 403.2 LEC): the claimant must, as a general rule, be able to evidence a genuine attempt to resolve the dispute before filing. Recognised mechanisms include direct negotiation, mediation, conciliation, an independent expert opinion and a confidential binding offer (oferta vinculante confidencial).",
      "The requirement extends to the national payment order procedure, while enforcement actions and certain matters listed in the Law (such as fundamental-rights, capacity or exchange-instrument proceedings) are excepted. Failure to evidence the attempt can lead to the claim being held inadmissible. For creditors, these mechanisms can also offer a faster and more cost-effective outcome while preserving commercial relationships. As the law is recent, judicial criteria on its application are still developing.",
    ],
    assist: "We handle the MASC step for foreign creditors —ordinarily through a documented Spanish burofax— so that the subsequent claim meets the admissibility requirement.",
  },
  {
    slug: "brussels-i-bis-regulation",
    title: "Brussels I bis Regulation (EU Regulation 1215/2012)",
    nav: "Regulation Brussels I bis (EU 1215/2012)",
    summary: "Jurisdiction and cross-border enforcement of judgments in the EU; abolition of exequatur between Member States; the Article 53 certificate; limited grounds of opposition.",
    body: [
      "The Brussels I bis Regulation governs jurisdiction and the recognition and enforcement of civil and commercial judgments throughout the European Union. It sets out which courts have jurisdiction over a dispute and abolishes the prior declaration of enforceability (exequatur) between Member States: a judgment given in one Member State is, in principle, enforceable in another without intermediate recognition proceedings.",
      "Enforcement does, however, require a certificate issued under Article 53 of the Regulation, and the debtor may oppose enforcement on the limited grounds set out in the Regulation (for example, manifest conflict with public policy). For creditors operating within the European Union, it remains one of the most important instruments for cross-border recovery.",
    ],
    assist: "We enforce EU judgments in Spain under Brussels I bis, obtaining the necessary certificate and conducting the enforcement before the competent Spanish court.",
  },
  {
    slug: "exequatur-foreign-judgments",
    title: "Recognition and Enforcement of Foreign Judgments (Exequatur)",
    nav: "Exequatur under Law 29/2015",
    summary: "Recognition and enforcement of non-EU judgments in Spain; Law 29/2015; the competent court; the requirements verified; enforcement once recognised.",
    body: [
      "Where a judgment comes from a country outside the Brussels I bis framework and no other applicable international instrument governs the matter, recognition proceedings (exequatur) are generally required before it can be enforced in Spain. Law 29/2015 on international legal cooperation in civil matters regulates this process, which is heard by the Courts of First Instance.",
      "The Spanish court verifies a set of procedural and public-policy requirements —among them that the rights of defence were respected and that the judgment is not contrary to Spanish public policy— without reviewing the merits. Once recognised, the foreign judgment may be enforced in Spain in essentially the same way as a domestic one, allowing creditors to pursue assets located in Spanish territory.",
    ],
    assist: "We conduct exequatur proceedings for non-EU judgments and, once recognition is granted, carry out enforcement against the debtor's assets in Spain.",
  },
  {
    slug: "insolvency-concurso",
    title: "Insolvency Proceedings in Spain (Concurso de Acreedores)",
    nav: "Concurso de acreedores",
    summary: "The consolidated Insolvency Act; restructuring and liquidation; communicating claims to the insolvency administrator; recovery prospects for foreign creditors.",
    body: [
      "Where a debtor becomes insolvent, creditors may need to take part in formal insolvency proceedings, governed by the consolidated Insolvency Act (Royal Legislative Decree 1/2020), as reformed by Law 16/2022 transposing the EU Restructuring Directive. The framework provides both for restructuring viable businesses and for liquidating those that cannot continue.",
      "Creditors should monitor insolvency filings closely, since strict deadlines apply to communicating claims to the insolvency administrator (administración concursal) for their classification and inclusion. Failing to act in time can adversely affect recovery prospects. Although insolvency frequently reduces the amount ultimately recovered, the proceedings remain an important means of protecting creditors' rights and securing an orderly distribution of the available assets.",
    ],
    assist: "We file and defend our clients' claims in Spanish insolvency proceedings, monitor the process and pursue any available avenues to improve recovery.",
  },
  {
    slug: "directors-liability",
    title: "Directors' Liability for Corporate Debts",
    nav: "Director liability for company debts in Spain",
    summary: "When directors can be personally liable; the Capital Companies Act; Article 367 liability for failure to dissolve; the individual liability action; culpable insolvency.",
    body: [
      "In certain circumstances, company directors may be personally liable for corporate debts. Under the Capital Companies Act (Royal Legislative Decree 1/2010), directors must act diligently and take the steps required when the company faces a legal cause for dissolution; in particular, Article 367 makes them jointly liable for company obligations arising after that cause where they fail to call the general meeting or seek dissolution or insolvency within the legal period.",
      "Creditors may also pursue the individual liability action (Article 241) for damage caused directly by the directors' conduct, and the conduct of directors can be examined within insolvency proceedings (culpable insolvency). Such actions can improve recovery prospects, particularly where the company itself lacks sufficient assets, and are frequently considered in cases involving insolvent companies, abandoned businesses or signs of mismanagement.",
    ],
    assist: "We assess and bring directors' liability actions in Spain where the company's assets are insufficient, including within insolvency proceedings.",
  },
  {
    slug: "asset-tracing",
    title: "Asset Tracing and Debtor Investigation",
    nav: "Debtor tracing and asset investigation",
    summary: "How asset investigation works in Spain; public registries; the judicial tools available in enforcement (Articles 589 and 590 LEC); assessing recovery prospects.",
    body: [
      "Successful recovery often depends on identifying assets against which enforcement can be directed, which makes asset tracing a key part of any strategy. Investigations may draw on corporate records at the Commercial Registry, property held at the Land Registry, commercial interests, litigation history and other publicly available information.",
      "Within enforcement proceedings, further information can be obtained through judicial channels: the debtor may be required to disclose its assets (Article 589 LEC), and the court may order an investigation of the debtor's patrimony, requesting information from public bodies and financial institutions (Article 590 LEC). A thorough investigation frequently allows creditors to assess recovery prospects before incurring substantial litigation costs.",
    ],
    assist: "We carry out asset and solvency investigations on Spanish debtors and, in enforcement, use the judicial tools available to locate assets.",
  },
  {
    slug: "bank-account-attachment",
    title: "Attachment of Bank Accounts",
    nav: "Bank account attachment in Spain",
    summary: "How attachment is processed once an enforceable title is obtained (Article 588 LEC); the requirement of an enforceable title; interaction with other creditors and unattachable amounts.",
    body: [
      "The attachment of bank accounts is one of the more effective enforcement measures available under Spanish law. Once an enforceable title has been obtained, the court may order financial institutions to freeze and transfer funds held by the debtor (Article 588 LEC). Because liquid funds are generally easier to realise than other assets, account attachments can produce results quickly.",
      "The measure is only available, however, once the creditor holds an enforceable title —a judgment, an unopposed payment order or another recognised enforcement instrument— and is carried out within enforcement proceedings, subject to the debtor's other creditors and to the rules on unattachable amounts. The availability of this measure is one of the practical advantages of pursuing judicial recovery in Spain.",
    ],
    assist: "Once an enforceable title is in place, we apply for and pursue the attachment of the debtor's bank accounts before the Spanish enforcement court.",
  },
  {
    slug: "payment-terms-late-payment",
    title: "Payment Terms and Late Payment Rules in Spain",
    nav: "Payment terms in Spain (Law 3/2004, as amended)",
    summary: "Statutory payment periods (30/60 days); statutory late-payment interest; the €40 fixed recovery compensation; Law 3/2004 and the EU Late Payment Directive.",
    body: [
      "Commercial transactions in Spain are subject to statutory payment rules designed to protect businesses against late payment, deriving mainly from Law 3/2004, which transposes the EU Late Payment Directive (Directive 2011/7/EU). As a general rule, the default payment period is 30 days, and the period agreed between businesses may not exceed 60 days.",
      "Where invoices remain unpaid beyond the applicable period, the creditor may be entitled to statutory late-payment interest —the European Central Bank reference rate plus eight percentage points— and to a fixed sum of €40 as compensation for recovery costs, without prejudice to additional reasonable costs (Articles 7 and 8 of the Law). Understanding these provisions matters not only for recovery but also for contract drafting and credit-risk management.",
    ],
    assist: "We quantify the principal, statutory interest and recovery compensation due under Law 3/2004 and claim them as part of the recovery.",
  },
  {
    slug: "contract-clauses",
    title: "Contract Clauses that Facilitate Debt Recovery",
    nav: "Contractual clauses that help recovery",
    summary: "Jurisdiction and choice-of-law clauses; default interest; retention of title (reserva de dominio); acknowledgements of debt; guarantees; recovery-cost clauses.",
    body: [
      "Effective recovery often begins long before a dispute arises, and well-drafted contracts can materially improve a creditor's position if payment difficulties occur. Particularly useful provisions under Spanish practice include jurisdiction and choice-of-law clauses, default-interest provisions, retention-of-title clauses (reserva de dominio), written acknowledgements of debt, valid notice provisions, personal guarantees and clauses allocating recovery costs.",
      "Retention of title, in particular, can be opposed more effectively against third parties where it is documented and, where applicable, recorded. Businesses trading in or with Spain are well advised to review their contractual documentation periodically so as to strengthen their legal position and reduce recovery risk.",
    ],
    assist: "We review and draft B2B contract terms for trade with Spain, focusing on the clauses that most strengthen a creditor's position if a debt arises.",
  },
  {
    slug: "power-of-attorney",
    title: "Power of Attorney for Litigation in Spain",
    nav: "Power of attorney for litigation in Spain",
    summary: "The power of attorney needed to litigate in Spain; the roles of lawyer and court representative; notarisation, apostille and translation requirements.",
    body: [
      "Foreign creditors pursuing claims in Spain generally need to appoint local legal representatives, since court proceedings typically require both a lawyer (abogado) and a court representative (procurador). This is normally arranged through a power of attorney for litigation (poder para pleitos) authorising them to act on the creditor's behalf.",
      "The document may be executed before a notary in the creditor's home jurisdiction and, depending on the country, may require the Hague apostille or, failing that, diplomatic legalisation, together with a sworn translation where appropriate. A properly prepared power of attorney enables proceedings to commence without avoidable procedural delay, and is therefore one of the first practical steps in any cross-border recovery.",
    ],
    assist: "We provide the model power of attorney required for Spanish litigation and guide the creditor through notarisation, apostille and translation, so the file is ready to proceed.",
  },
];

export function getGuide(slug: string): KbGuide | undefined {
  return KB_GUIDES.find((g) => g.slug === slug);
}
