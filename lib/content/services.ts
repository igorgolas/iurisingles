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

const de: Record<ServiceSlug, ServicePage> = {
  "out-of-court-debt-collection": {
    intro: "Der erste Weg, den IJ Creditor in jedem Fall versucht: die Zahlung vor einem Gerichtsverfahren herbeiführen und nach Möglichkeit die Geschäftsbeziehung erhalten. Mehr als 80 % der der Kanzlei anvertrauten Fälle werden in dieser Phase gelöst, ohne Klage.",
    blocks: [
      { t: "prose", title: "Honorar", paras: [
        "Die Leistung erfolgt auf Erfolgshonorarbasis. Die Kanzlei berechnet eine Provision auf den tatsächlich beigetriebenen Betrag, gemäß den im Mandatsvertrag mit dem Mandanten vereinbarten Bedingungen und abhängig von Betrag, Alter der Forderung, Komplexität des Falls und verfügbaren Informationen über den Schuldner. Wird nichts beigetrieben, werden keine variablen Honorare in Rechnung gestellt.",
        "Bestimmte Maßnahmen oder Kosten Dritter —wie Wirtschaftsauskünfte, beglaubigte spanische Burofax-Mitteilungen, Registerbescheinigungen oder andere für die Bearbeitung erforderliche externe Dienste— können zusätzliche Kosten verursachen, in allen Fällen nach vorheriger Information des Mandanten und ausdrücklicher Zustimmung.",
      ] },
      { t: "prose", title: "Juristische Begleitung des Verfahrens", paras: [
        "Die außergerichtliche Arbeit wird von einem überwiegend aus Anwälten bestehenden Team ausgeführt und in jedem Fall fallweise von einem Anwalt der Kanzlei begleitet. Genau das verhindert die typischen Fehler, die beim Forderungseinzug ohne juristische Ausbildung entstehen: DSGVO-widrige Mitteilungen, schlecht formulierte Mahnungen, die Verjährungsfristen nicht unterbrechen, Entscheidungen, die ein späteres Gerichtsverfahren verbauen, oder die Nichteinhaltung der nach spanischem und europäischem Recht vorgesehenen Fristen und Formvorschriften.",
      ] },
      { t: "prose", title: "Zwei integrierte Funktionen", paras: [
        "IJ Creditor verbindet innerhalb der außergerichtlichen Abteilung zwei spezialisierte Funktionen, die je nach Bedarf gemeinsam und nacheinander auf jeden Fall angewandt werden: Saldenabstimmung und gütlicher Forderungseinzug. In der Praxis sind dies keine getrennten Silos: Viele Fälle, die als einfache offene Rechnung eingehen, offenbaren, sobald der Dialog mit dem Schuldner beginnt, eine buchhalterische Situation, die eine Abstimmung erfordert; und viele, die als Abstimmungsfälle beginnen, enden als gütlicher Einzug der als durchsetzbar bestätigten Beträge.",
      ] },
      { t: "prose", title: "Saldenabstimmung", paras: [
        "Wenn vor der Zahlungsaufforderung mit dem Schuldner die tatsächliche Zusammensetzung der Forderung zu klären ist —wegen Zweifeln an bereits verbuchten Zahlungen, ausstehenden Gutschriften, noch nicht angewandten Handelsrabatten, Zuordnungsfehlern, doppelt erfasster Mehrwertsteuer oder Rechnungsabweichungen— tritt IJ Creditor im Namen des Gläubigers als klärender Ansprechpartner zwischen den Parteien auf. Die Mitteilungen an den Schuldner nennen stets den Gläubiger, in dessen Namen die Kanzlei handelt, und stellen das Verfahren in den Modus der buchhalterischen Klärung, nicht des Drucks.",
        "Die Unterlagen des Mandanten werden mit der vom Schuldner vorgelegten Belegdokumentation abgeglichen —Zahlungsbelege, Gutschriften, Banknachweise— und es wird nur der nach der Abstimmung als durchsetzbar bestätigte Saldo geltend gemacht. Die Funktion gilt sowohl für gewerbliche Schuldner (B2B) als auch für private Schuldner (B2C) und ist besonders nützlich, wenn der Mandant die Forderung beitreiben und zugleich die Geschäftsbeziehung erhalten möchte: Die Abstimmung verringert den Konflikt und ebnet den Weg zu schnellen, vernünftigen Lösungen für beide Seiten.",
      ] },
      { t: "prose", title: "Gütlicher Forderungseinzug", paras: [
        "Wenn die Zusammensetzung der Forderung klar ist und eine gütliche Bearbeitung gewünscht wird, übernimmt die Kanzlei den direkten Einzug: Mitteilungen an den Schuldner, förmliche Mahnungen, wo angebracht, Verhandlung von Zahlungsplänen oder Ratenvereinbarungen und Abschluss der Akte mit Befriedigung der Forderung.",
        "Der geltend gemachte Betrag ist der vom Mandanten mitgeteilte Betrag; die Kanzlei stellt ihn nicht von sich aus in Frage. Bringt der Schuldner während der Bearbeitung von sich aus Einwände oder Abweichungen vor, hält IJ Creditor sie fest, übermittelt sie dem Mandanten mit der fachlichen Einschätzung der Kanzlei zu ihrer Stichhaltigkeit, und die Entscheidung über das weitere Vorgehen verbleibt beim Mandanten. Jeder Vergleichsvorschlag —Zahlungsplan, Ratenvereinbarung oder angemessener Verzicht— wird dem Gläubiger mit allen für die Entscheidung nötigen Informationen vorgelegt; die endgültige Zustimmung liegt stets beim Gläubiger.",
      ] },
      { t: "bullets", title: "So arbeiten wir", items: [
        "Annahme. Der Mandant übermittelt die Unterlagen im für ihn bequemsten Format —meist digitale Dateien: Tabellen, ERP-Exporte oder ein anderes geeignetes Medium. Die Kanzlei fordert im Verlauf alle zusätzlich benötigten Daten oder Dokumente an.",
        "Interne Prüfung und Aktenanlage. Das Team bewertet jeden Fall, identifiziert rechtliche Risiken und legt die Akte unter der entsprechenden juristischen Begleitung an.",
        "Mitteilungen an den Schuldner. Mahnschreiben, beglaubigte spanische Burofaxe, elektronischer oder telefonischer Kontakt, je nach Sachlage. Jede Mitteilung wird von einem Anwalt geprüft, um Beweiskraft, DSGVO-Konformität und gegebenenfalls die Rechtswirkung der Unterbrechung von Verjährungsfristen sicherzustellen.",
        "Abstimmung, Verhandlung oder Vergleich. Wo der Fall die Klärung der Forderungszusammensetzung erfordert, wird vor der Zahlungsaufforderung die Saldenabstimmung eingeleitet. Nach Bestätigung arbeitet die Kanzlei mit dem Schuldner auf einen Abschluss hin: vollständige Zahlung, Zahlungsplan, Raten oder angemessener Verzicht. Vorschläge, die der Zustimmung des Mandanten bedürfen, werden begründet vorgelegt.",
        "Einzug und Abrechnung. Beigetriebene Beträge werden auf einem separaten Bankkonto verwahrt und dem Gläubiger im vereinbarten Rhythmus und Format überwiesen. Standardmäßig erfolgt die Abrechnung monatlich.",
        "Abschluss oder Eskalation. Gelingt der gütliche Weg, wird die Akte geschlossen. Andernfalls erstellt IJ Creditor einen Bericht zur gerichtlichen Erfolgsaussicht und berät den Mandanten anhand des Ergebnisses über die nächsten Schritte.",
      ] },
      { t: "prose", title: "Informationen, die uns nützlich sind", paras: [
        "Die Kanzlei arbeitet mit dem, was der Mandant bereitstellen kann, und fordert weitere Daten im Verlauf an. Es ist nicht nötig, alles im Voraus zu liefern. Kann der Mandant von Anfang an ohne nennenswerten Verwaltungsaufwand die vollständigen Informationen jeder Forderung bereitstellen, wird die Akte schneller angelegt.",
      ] },
      { t: "bullets", items: [
        "Offene Rechnungen mit Fälligkeitsdaten und Leistungsbeschreibung.",
        "Vertrag mit dem Schuldner, falls vorhanden.",
        "Lieferscheine oder Nachweise über die Erbringung der Leistung oder des Produkts.",
        "Frühere Mitteilungen an den Schuldner.",
        "Vollständige Identifikation des Schuldners (spanische CIF/NIF oder ausländisches Äquivalent, Sitz, Ansprechpartner oder Abteilung, Telefon und E-Mail).",
        "Jeder weitere relevante Umstand wie erhaltene Teilzahlungen oder ausstehende Gutschriften.",
      ] },
      { t: "prose", title: "Fristen", paras: [
        "Nach Eingang der Akte samt Belegen erfolgen Anlage und erster Kontakt mit dem Schuldner kurzfristig. Die Gesamtdauer der gütlichen Phase hängt von der Komplexität des Falls, der Solvenz und Bereitschaft des Schuldners und der aktivierten Funktion ab: einfachere Akten werden innerhalb weniger Wochen abgeschlossen, während Fälle, die eine buchhalterische Abstimmung oder die Verhandlung eines Zahlungsplans erfordern, einige Monate dauern können.",
        "Lässt sich die Forderung nach einem angemessenen Zeitraum auf dem gütlichen Weg nicht befriedigen, wird gemeinsam mit dem Mandanten die Zweckmäßigkeit eines gerichtlichen Vorgehens geprüft, stets mit vorausgehendem Bericht zur gerichtlichen Erfolgsaussicht.",
      ] },
    ],
  },
  "judicial-debt-collection": {
    intro: "Der Weg, der aktiviert wird, wenn die gütliche Phase ausgeschöpft ist oder von vornherein nicht in Betracht kommt. IJ Creditor übernimmt die direkte rechtliche Vertretung in dem für die jeweilige Lage am besten geeigneten Verfahren, bis zu Urteil, Vollstreckung und tatsächlicher Beitreibung.",
    blocks: [
      { t: "prose", title: "Bericht zur gerichtlichen Erfolgsaussicht", paras: [
        "Vor der Empfehlung eines gerichtlichen Vorgehens erstellt IJ Creditor —soweit möglich— einen Bericht zur gerichtlichen Erfolgsaussicht. Der Bericht bewertet Stärke und Gültigkeit der Dokumentation, Solvenz und Verbleib des Schuldners, anwendbare Verjährungsfristen und die realistischen Erfolgsaussichten vor Gericht. Sein Zweck ist es, dem Mandanten Kosten und Aufwand eines Verfahrens zu ersparen, das unter den gegebenen Umständen nicht eingeleitet werden sollte.",
        "Rät der Bericht von einer Klage ab, wird dies dem Mandanten begründet mitgeteilt. Die geistige Arbeit des Anwalts am Bericht wird nie in Rechnung gestellt. Sind kostenpflichtige externe Auskünfte erforderlich —Vermögensberichte zum Schuldner, Registerbescheinigungen, gezielte Recherchen in öffentlichen oder privaten Datenbanken— werden diese Kosten nach vorheriger ausdrücklicher Zustimmung an den Mandanten weitergegeben.",
      ] },
      { t: "prose", title: "Honorar", paras: [
        "In den meisten Fällen sind die gerichtlichen Honorare bereits durch die im Mandatsvertrag zu Beginn der Beziehung vereinbarten Sätze abgedeckt. In diesem Fall ist vor Verfahrenseinleitung nur die ausdrückliche Ermächtigung des Mandanten zum Vorgehen erforderlich; es gelten die bereits vereinbarten Sätze, ein neues Angebot ist nicht nötig.",
        "Sind die gerichtlichen Honorare nicht vom Vertrag abgedeckt, übermittelt IJ Creditor dem Mandanten vor jeder Maßnahme ein schriftliches Pauschalangebot, berechnet nach dem betreffenden Verfahren, dem geltend gemachten Betrag und der erwarteten Komplexität, und bittet um ausdrückliche Zustimmung zur Fortsetzung.",
        "In beiden Fällen werden die mit dem Verfahren verbundenen Nebenposten vorab ausgewiesen, einschließlich anfallender Gerichtsgebühren und absehbarer Auslagen.",
      ] },
      { t: "prose", title: "Alternative Streitbeilegung (MASC)", paras: [
        "Seit Inkrafttreten des spanischen Organgesetzes 1/2025 setzen die meisten Zivil- und Handelsgerichtsverfahren den Nachweis eines vorherigen Versuchs einer alternativen Streitbeilegungsmethode (MASC) voraus —Verhandlung, Mediation, Schlichtung, verbindliches Angebot oder jede andere gesetzlich vorgesehene Form— bevor eine Klage erhoben werden kann. Das Gesetz sieht auch Ausnahmen vor: Insolvenzverfahren, Wechselverfahren, Vollstreckung, vorläufige Sicherungsmaßnahmen und bestimmte Verfahren der freiwilligen Gerichtsbarkeit. Wo die Anforderung gilt, wird die Klage ohne Nachweis des vorherigen MASC-Versuchs nicht zugelassen.",
        "IJ Creditor erledigt diese Anforderung in jeder Akte, in der sie gilt. Die übliche Form ist eine förmliche Mitteilung an den Schuldner, typischerweise per spanischem Burofax mit einem konkreten Zahlungsvorschlag. Das Burofax ermöglicht es, sowohl den Versand als auch —über die spanische Post— die Zustellung und den vollständigen Inhalt der Mitteilung zu dokumentieren und damit den gesetzlich geforderten Versuch nachzuweisen. Die Kosten werden mit dem Mandanten vereinbart.",
      ] },
      { t: "subs", title: "Verfügbare Verfahrenswege je nach Sachverhalt", intro: "Welches konkrete Verfahren IJ Creditor in jedem Fall einleitet, hängt vom Gegenstand der Forderung und von den Voraussetzungen ab, die das spanische Zivilprozessgesetz für jeden Weg festlegt. Nicht jede Forderung lässt jedes Verfahren zu —so lässt etwa eine Klage auf Vertragsauflösung das Mahnverfahren (monitorio) nicht zu. Die Kanzlei prüft fallweise, welches Verfahren rechtlich möglich und kommerziell am zweckmäßigsten ist.", items: [
        { h: "Mahnverfahren (monitorio)", p: "Standardweg für bezifferte, bestimmte, fällige und durchsetzbare Geldforderungen, ohne Höchstgrenze. Nach Zulassung fordert das Gericht den Schuldner auf, binnen zwanzig Tagen zu zahlen oder Widerspruch einzulegen. Reagiert der Schuldner nicht, erhält der Gläubiger einen Vollstreckungstitel und der Fall geht direkt in die Vollstreckung. Legt der Schuldner Widerspruch ein, wandelt sich das Verfahren —je nach Betrag— in ein verbales oder ordentliches Verfahren um." },
        { h: "Verbales Verfahren (juicio verbal)", p: "Verfahrensweg für Geldforderungen bis 15.000 € und für weitere im Zivilprozessgesetz aufgeführte Sachverhalte. Es ist zügiger als das ordentliche Verfahren; ob eine mündliche Verhandlung stattfindet, hängt von den Anträgen der Parteien und der Einschätzung des Gerichts ab." },
        { h: "Ordentliches Verfahren (procedimiento ordinario)", p: "Verfahrensweg für Geldforderungen über 15.000 € und für weitere gesetzlich vorbehaltene Sachverhalte. Es erlaubt eine umfassendere Beweisphase und ist der übliche Weg für Fälle mit gewisser technischer oder rechtlicher Komplexität." },
        { h: "Vollstreckung und Pfändung", p: "Sobald ein rechtskräftiges Urteil, ein Mahnbescheid oder ein anderer Vollstreckungstitel vorliegt, betreibt IJ Creditor die Vollstreckung: Einreichung des Vollstreckungsantrags, Antrag auf gerichtliche Vermögensermittlung des Schuldners und Pfändung von Bankkonten, Gehältern, Fahrzeugen, Immobilien oder Forderungen gegen Dritte, bis hin zur öffentlichen Versteigerung, sofern erforderlich —bis zur tatsächlichen Beitreibung oder zur Feststellung der Zahlungsunfähigkeit." },
        { h: "Insolvenzverfahren (concurso de acreedores)", p: "Tritt der Schuldner in ein Insolvenzverfahren ein, führt die Kanzlei den Fall über den insolvenzrechtlichen Rahmen: Anmeldung der Forderung beim bestellten Insolvenzverwalter innerhalb der gesetzlichen Frist, Qualifizierung der Forderung, Begleitung des Vergleichs oder der Liquidation und Anfechtung masseschädigender Handlungen. Wo gesetzliche Gründe bestehen, verfolgt IJ Creditor auch Klagen auf Ausdehnung der Haftung auf die Geschäftsführer." },
      ] },
      { t: "bullets", title: "So arbeiten wir", items: [
        "Prüfung der gerichtlichen Erfolgsaussicht. Die Erfolgsaussichten werden bewertet und die Kanzlei empfiehlt den geeigneten Weg oder gegebenenfalls den Verzicht auf eine Klage.",
        "Zustimmung des Mandanten. Sind die gerichtlichen Honorare bereits vom Vertrag abgedeckt, genügt die ausdrückliche Ermächtigung des Mandanten. Andernfalls wird vorab ein schriftliches Pauschalangebot erstellt, das der Zustimmung bedarf. Ohne Zustimmung des Mandanten wird keine Verfahrenshandlung vorgenommen.",
        "Abfassung und Einreichung der Klage. Die Anwälte der Kanzlei verfassen den Schriftsatz, sammeln Urkundenbeweise und schlagen gegebenenfalls Zeugen- und Sachverständigenbeweise vor.",
        "Verfahrensführung. Durchgehende direkte rechtliche Vertretung: Verhandlungen, Stellungnahmen, Rechtsmittel und etwaige Zwischenverfahren.",
        "Vollstreckung und Pfändung. Nach Erlangung eines Urteils oder vollstreckbaren Beschlusses wird die Vollstreckungsphase bis zur tatsächlichen Befriedigung der Forderung eingeleitet.",
        "Information und Abrechnung gegenüber dem Mandanten. Während des gesamten Verfahrens erhält der Mandant Updates zum Stand der Akte und zu relevanten Entwicklungen.",
      ] },
      { t: "bullets", title: "Unterlagen, die wir vom Mandanten benötigen", items: [
        "Alle die Forderung belegenden Unterlagen: Rechnungen, Verträge, Lieferscheine, Nachweise über die Erbringung der Leistung oder des Produkts.",
        "Frühere Mitteilungen an den Schuldner: Korrespondenz, förmliche Mahnungen, Antworten.",
        "Vollständige Identifikationsdaten des Schuldners: spanische CIF/NIF oder ausländisches Äquivalent, Sitz, Rechtsform, Geschäftsführer.",
        "Soweit verfügbar, Informationen zur Vermögenslage des Schuldners oder zu früheren prozessualen Umständen (anhängige Verfahren, Insolvenzlage usw.).",
        "Allgemeine Prozessvollmacht zugunsten des von der Kanzlei benannten Prozessbevollmächtigten (procurador) und der Anwälte oder gegebenenfalls apud acta.",
      ] },
      { t: "prose", title: "Fristen", paras: [
        "Die gerichtlichen Fristen hängen vom Verfahren, dem zuständigen Gericht und der Reaktion des Schuldners ab. Als Orientierung kann ein unwidersprochenes Mahnverfahren innerhalb weniger Monate erledigt sein. In streitigen Verfahren —verbales Verfahren, ordentliches Verfahren, Vollstreckung— können sich die Fristen je nach erforderlichen Verfahrensabschnitten und Arbeitsanfall des Gerichts verlängern.",
        "Zu Verfahrensbeginn gibt IJ Creditor dem Mandanten eine angemessene Schätzung der Fristen, gestützt auf die Erfahrung der Kanzlei mit dem jeweiligen Gericht und auf die vorgesehene Verfahrensart.",
      ] },
      { t: "prose", title: "Netz lokaler Anwälte", paras: [
        "Obwohl die rechtliche Vertretung jedes Verfahrens von IJ Creditor in Madrid geleitet wird, unterhält die Kanzlei ein gefestigtes Netz lokaler Anwälte mit spezifischer Erfahrung in ihren jeweiligen Gerichtsbezirken. Wo Art des Verfahrens, Standort des Schuldners oder technische Komplexität es nahelegen, greift IJ Creditor auf diese Fachleute zurück, um in jedem Fall die beste Vertretung zu sichern.",
        "Die Koordination erfolgt stets von der Zentrale aus, sodass der Mandant für die gesamte Akte einen einzigen Ansprechpartner behält.",
      ] },
    ],
  },
  "international-debt-collection": {
    intro: "Für ausländische Mandanten, deren Schuldner sich in anderen Ländern als Spanien befinden. IJ Creditor koordiniert den Fall von Madrid aus und führt ihn im Land des Schuldners über ein Netz von Partnerkanzleien und Korrespondenten aus.",
    blocks: [
      { t: "prose", paras: [
        "Fälle, in denen ein ausländischer Gläubiger einen in Spanien ansässigen Schuldner hat, werden nicht über diese Leistung bearbeitet. Diese Fälle sind der Kern des Angebots der Kanzlei für ausländische Gläubiger und werden auf den Seiten zum außergerichtlichen und gerichtlichen Forderungseinzug behandelt.",
      ] },
      { t: "prose", title: "So arbeitet das Netz", paras: [
        "Jeder Fall wird im Land des Schuldners von einer lokalen Kanzlei bearbeitet, die das rechtliche Umfeld, die Handelsgepflogenheiten und die Sprache kennt. Koordination, Kommunikation mit dem Mandanten und Fallbegleitung erfolgen von Madrid aus auf Englisch, sodass der Mandant für über verschiedene Rechtsordnungen hinweg geführte Fälle einen einzigen Ansprechpartner hat. Die Korrespondenten werden nach Erfolgsbilanz, Mitgliedschaft in denselben Branchenverbänden und der bisherigen Erfahrung von IJ Creditor mit jeder Kanzlei ausgewählt.",
      ] },
      { t: "subs", title: "Anwendbarer Rechtsrahmen", items: [
        { h: "Innerhalb der Europäischen Union", p: "Anerkennung und Vollstreckung spanischer Urteile in anderen EU-Mitgliedstaaten richten sich in der Regel nach der Verordnung (EU) Nr. 1215/2012 (Brüssel Ia): Ein spanisches Urteil ist in jedem anderen Mitgliedstaat ohne gesonderte Vollstreckbarerklärung unmittelbar vollstreckbar. Für grenzüberschreitende Forderungen mäßiger Höhe stehen zudem das Europäische Mahnverfahren (Verordnung (EG) Nr. 1896/2006) und das Europäische Verfahren für geringfügige Forderungen (Verordnung (EG) Nr. 861/2007) zur Verfügung, die beide einen europäischen, in anderen Mitgliedstaaten unmittelbar wirksamen Vollstreckungstitel ermöglichen." },
        { h: "Außerhalb der Europäischen Union", p: "Für Schuldner in Nicht-EU-Staaten wird die Anerkennung und Vollstreckung spanischer Urteile über das Exequaturverfahren betrieben, nach dem einschlägigen internationalen Abkommen, sofern eines besteht (Übereinkommen von Lugano für die Schweiz, Norwegen und Island; bilaterale Verträge mit mehreren lateinamerikanischen Ländern usw.), und in deren Ermangelung nach dem spanischen Gesetz 29/2015 über die internationale Rechtskooperation in Zivilsachen sowie dem Recht des Vollstreckungsstaats. Wo die Umstände es nahelegen, kann IJ Creditor empfehlen, das Verfahren direkt in der Gerichtsbarkeit des Schuldners über die lokale Korrespondenzkanzlei einzuleiten, was oft effizienter ist, als in Spanien zu klagen und dann die Vollstreckung im Ausland zu betreiben." },
      ] },
      { t: "bullets", title: "Vom Service abgedeckte Maßnahmen", items: [
        "Grenzüberschreitender außergerichtlicher Forderungseinzug. Kommunikation und Verhandlung mit dem Schuldner über den lokalen Korrespondenten, in dessen Sprache und nach den örtlichen Handelsgepflogenheiten. Der zuerst versuchte Weg und derjenige, der am häufigsten ohne Gericht zum Einzug führt.",
        "Gerichtsverfahren im Land des Schuldners. Bleibt die gütliche Phase ohne Ergebnis, koordiniert IJ Creditor mit dem lokalen Korrespondenten Einreichung und Begleitung des einschlägigen Verfahrens, bis zu Urteil und Vollstreckung.",
        "Gerichtsverfahren in Spanien mit Vollstreckung im Ausland. Wo es zweckmäßiger ist, in Spanien zu klagen (z. B. aufgrund der Vertragsbedingungen, einer Gerichtsstandsklausel oder von Vermögen des Schuldners in Spanien), übernimmt die Kanzlei die rechtliche Vertretung in Spanien und koordiniert die Anerkennung und Vollstreckung der rechtskräftigen Entscheidung im Ausland.",
        "Grenzüberschreitende Insolvenz. Wird der ausländische Schuldner insolvent, koordiniert IJ Creditor mit dem lokalen Korrespondenten die Anmeldung der Forderung und die weitere Begleitung, gegebenenfalls nach der Verordnung (EU) 2015/848.",
      ] },
    ],
  },
  "credit-solvency-reports": {
    intro: "Wirtschafts-, Vermögens- und Solvenzauskünfte über Unternehmen und Privatpersonen, spanisch und ausländisch, erstellt aus überprüfbaren Quellen — damit die entscheidende Person über ausreichende, abgesicherte Informationen verfügt, um fundiert zu entscheiden.",
    blocks: [
      { t: "bullets", title: "Vier typische Einsatzzwecke", items: [
        "Analyse vor Kreditgewährung. Bevor ein neuer Kunde angenommen, eine Zahlungsziel-Linie eröffnet oder ein Geschäft gewisser Größe abgeschlossen wird, profiliert eine Auskunft die finanzielle, vermögensbezogene und Compliance-Situation der Gegenpartei und erlaubt es, das Risikolimit festzulegen oder Sicherheiten zu verlangen.",
        "Laufende Risikoüberwachung des Kundenportfolios. Für Unternehmen mit breiten oder konzentrierten B2B-Portfolios ermöglichen periodische Auskünfte, Vermögensverschlechterungen, Insolvenzanträge, Wechsel in der Geschäftsführung oder frühe Anzeichen von Zahlungsausfall vorwegzunehmen.",
        "Prüfung der Erfolgsaussicht vor dem Einzug. Bevor Zeit und Honorar in eine Einzugsmaßnahme investiert werden, profiliert eine Auskunft Solvenz und Vermögen des Schuldners. Fällt sie ungünstig aus, bleibt dem Mandanten die Kosten eines Verfahrens ohne realistische Aussicht erspart.",
        "Unterstützung laufender Einzugsfälle. Hat IJ Creditor bereits eine offene Akte, kann eine gezielte Auskunft den Fall stützen: Überprüfung des Gesellschaftsstatus, Lokalisierung von Unternehmen mit Sitzwechsel, Identifizierung von Vermögen für Sicherheiten oder Vollstreckung. Die Anfrage erfolgt mit vorheriger Zustimmung des Mandanten, und die Kosten werden mit vorherigem Angebot weitergegeben.",
      ] },
      { t: "subs", title: "Arten von Auskünften", items: [
        { h: "Wirtschaftsauskunft (Basis)", p: "Identifikations- und Registerdaten des Unternehmens, Rechtsform, Stammkapital, aktuelle Geschäftsführer und jüngste Historie, Geschäftstätigkeit und, soweit verfügbar, der zuletzt hinterlegte Jahresabschluss. Nützlich als erste Überprüfung der formellen Solvenz einer Gegenpartei." },
        { h: "Vermögensauskunft", p: "Identifizierung des registrierten Vermögens des Schuldners: Immobilien im Grundbuch, Fahrzeuge, Schiffe, Beteiligungen, Marken und sonstige Vermögenswerte. Unerlässlich, um die Aussichten von Vollstreckung und Pfändung im Fall eines Zahlungsausfalls zu bewerten." },
        { h: "Erweiterte Auskunft und gezielte Prüfungen", p: "Verbindet das Vorstehende mit vom Mandanten angeforderten gezielten Prüfungen: Eintrag in Kreditinformationssystemen nach Artikel 20 LOPDGDD, frühere Insolvenzverfahren, Verbindungen zu Unternehmensgruppen, Identifizierung des wirtschaftlich Berechtigten bei nachgewiesenem berechtigtem Interesse, Exposition gegenüber internationalen Sanktionen oder jeder andere relevante Punkt." },
        { h: "Bericht zur Einzugs-Erfolgsaussicht", p: "Zusammenfassung des Vorstehenden aus juristischer Sicht, angewandt auf einen konkreten Einzugsfall: realistische Einzugsaussichten, empfohlene Wege und gegebenenfalls die Empfehlung, nicht zu klagen. Dies ist der Bericht, der jeder von der Kanzlei geführten gerichtlichen Maßnahme vorausgeht." },
      ] },
      { t: "prose", title: "Verwendete Quellen", paras: ["Jede Auskunft wird aus abgesicherten Informationen aus zwei Arten von Quellen erstellt:"] },
      { t: "bullets", items: [
        "Nach geltendem Recht zugängliche öffentliche Register: spanisches Handelsregister, Grundbuch, Register für bewegliches Vermögen, BORME, spanisches Amtsblatt und andere Verwaltungsregister. Wo die Einsicht den Nachweis eines berechtigten Interesses erfordert —wie beim Grundbuch— fragt IJ Creditor die Informationen unter Einhaltung der entsprechenden Vorschriften ab.",
        "Spezialisierte Wirtschaftsauskunfteien, spanisch und international, die abgesicherte Daten über Unternehmen und Privatpersonen aggregieren und Branchenfachleuten über Dienstleistungsverträge zur Verfügung stellen.",
      ] },
      { t: "prose", paras: [
        "IJ Creditor unterhält keine eigenen Datenbanken mit Wirtschaftsinformationen über Unternehmen oder Privatpersonen. Die gelieferten Informationen stammen in allen Fällen aus den genannten Quellen und werden in jeder Auskunft ausgewiesen.",
        "Wo Gegenstand der Auskunft eine Privatperson ist oder die angeforderten Daten besonderen Zugangsbeschränkungen unterliegen —insbesondere den Vorschriften zur Vermögenssolvenz nach Artikel 20 des Organgesetzes 3/2018 (LOPDGDD) und der Rechtsprechung des spanischen Obersten Gerichtshofs zu Bonitätsdateien oder der Einsicht in das spanische Zentralregister der wirtschaftlich Berechtigten— wird die Leistung nur erbracht, wenn eine Rechtsgrundlage, ein berechtigter Zweck und ein nach den anwendbaren Vorschriften zulässiger Zugang vorliegen. In diesen Fällen prüft die Kanzlei vorab die Rechtmäßigkeit der Abfrage und legt sie dem Mandanten vor dem Vorgehen vor.",
      ] },
    ],
  },
};

const content: Partial<Record<Locale, Partial<Record<ServiceSlug, ServicePage>>>> = {
  en,
  de,
  // fr/it added incrementally; fall back to English until translated.
};

export function getServicePage(locale: Locale, slug: ServiceSlug): ServicePage {
  return content[locale]?.[slug] ?? en[slug];
}
