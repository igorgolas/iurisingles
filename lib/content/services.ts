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

const fr: Record<ServiceSlug, ServicePage> = {
  "out-of-court-debt-collection": {
    intro: "La première voie que IJ Creditor tente dans chaque dossier : obtenir le paiement avant toute action judiciaire et, dans la mesure du possible, préserver la relation commerciale. Plus de 80 % des dossiers confiés au cabinet se résolvent à ce stade, sans dépôt de plainte.",
    blocks: [
      { t: "prose", title: "Honoraires", paras: [
        "Le service est rendu aux honoraires de résultat. Le cabinet perçoit une commission sur le montant effectivement recouvré, calculée selon les conditions convenues avec le client dans le contrat de mandat et en fonction du montant, de l'ancienneté de la créance, de la complexité du dossier et des informations disponibles sur le débiteur. Si rien n'est recouvré, aucun honoraire variable n'est facturé.",
        "Certaines actions ou coûts de tiers —comme les rapports d'information commerciale, les burofax espagnols certifiés, les certifications de registre ou d'autres services externes nécessaires à la gestion— peuvent entraîner un coût supplémentaire, dans tous les cas avec information préalable du client et approbation expresse.",
      ] },
      { t: "prose", title: "Supervision juridique du processus", paras: [
        "Le travail amiable est réalisé par une équipe composée majoritairement d'avocats et, dans chaque dossier, supervisé pièce par pièce par un avocat du cabinet. C'est ce qui évite les erreurs typiques du recouvrement géré sans formation juridique : communications contraires au RGPD, mises en demeure mal rédigées qui n'interrompent pas la prescription, décisions qui ferment la porte à une action judiciaire ultérieure, ou non-respect des délais et formalités prévus par le droit espagnol et européen.",
      ] },
      { t: "prose", title: "Deux fonctions intégrées", paras: [
        "IJ Creditor combine au sein du département amiable deux fonctions spécialisées, appliquées conjointement et successivement à chaque dossier selon ses besoins : le rapprochement des soldes et le recouvrement amiable. En pratique, ce ne sont pas des silos séparés : de nombreux dossiers arrivés comme simple facture impayée révèlent, dès l'ouverture du dialogue avec le débiteur, une situation comptable qui exige un rapprochement ; et beaucoup qui commencent comme des rapprochements se terminent par le recouvrement amiable des montants confirmés comme exigibles.",
      ] },
      { t: "prose", title: "Rapprochement des soldes", paras: [
        "Lorsqu'il faut clarifier avec le débiteur la composition réelle de la créance avant de réclamer le paiement —en raison de doutes sur des paiements déjà crédités, d'avoirs en attente, de remises commerciales non encore appliquées, d'erreurs d'imputation, d'une TVA comptée deux fois ou de divergences de facturation— IJ Creditor agit, au nom du créancier, comme interlocuteur entre les parties en mode clarification. Les communications avec le débiteur identifient toujours le créancier pour le compte duquel le cabinet agit et placent le processus en mode de clarification comptable, non de pression.",
        "Les registres du client sont recoupés avec les pièces justificatives fournies par le débiteur —reçus de paiement, avoirs, preuves bancaires— et seul le solde confirmé comme exigible après le rapprochement est réclamé. La fonction s'applique tant aux débiteurs professionnels (B2B) qu'aux particuliers (B2C) et est particulièrement utile lorsque le client souhaite recouvrer la créance tout en préservant la relation commerciale : le rapprochement réduit le conflit et ouvre la voie à des solutions rapides et raisonnables pour les deux parties.",
      ] },
      { t: "prose", title: "Recouvrement amiable", paras: [
        "Lorsque la composition de la créance est claire et qu'une gestion amiable est demandée, le cabinet assure le recouvrement direct : communications avec le débiteur, mises en demeure le cas échéant, négociation de plans de paiement ou d'échelonnements, et clôture du dossier avec la satisfaction de la créance.",
        "Le montant réclamé est celui que le client communique ; le cabinet ne le conteste pas de sa propre initiative. Si, durant la gestion, le débiteur soulève de lui-même des contestations ou divergences, IJ Creditor les consigne, les transmet au client avec l'avis professionnel du cabinet sur leur cohérence, et la décision sur la suite reste au client. Toute proposition de règlement —plan de paiement, échelonnement ou remise raisonnable— est portée au créancier avec toutes les informations nécessaires pour décider ; l'approbation finale appartient toujours au créancier.",
      ] },
      { t: "bullets", title: "Notre méthode", items: [
        "Réception. Le client envoie les dossiers dans le format le plus pratique —généralement des fichiers numériques : tableurs, exports d'ERP ou tout autre support adapté. Le cabinet demande au fil de l'eau les données ou documents complémentaires nécessaires.",
        "Examen interne et ouverture du dossier. L'équipe évalue chaque dossier, identifie les risques juridiques et ouvre le dossier sous la supervision juridique correspondante.",
        "Communications avec le débiteur. Lettres de mise en demeure, burofax espagnols certifiés, contact électronique ou téléphonique, selon le cas. Chaque communication est examinée par un avocat pour assurer la valeur probante, la conformité au RGPD et, le cas échéant, l'effet juridique d'interruption de la prescription.",
        "Rapprochement, négociation ou règlement. Lorsque le dossier exige de clarifier la composition de la créance, le rapprochement des soldes est engagé avant toute réclamation. Une fois confirmé, le cabinet travaille avec le débiteur vers une clôture : paiement intégral, plan de paiement, échelonnement ou remise raisonnable. Les propositions requérant l'accord du client sont soumises de façon motivée.",
        "Encaissement et reddition de comptes. Les sommes recouvrées sont conservées sur un compte bancaire distinct et reversées au créancier au rythme et dans le format convenus. Par défaut, la reddition de comptes est mensuelle.",
        "Clôture ou escalade. Si la voie amiable aboutit, le dossier est clôturé. Sinon, IJ Creditor établit un rapport de faisabilité judiciaire et, selon son résultat, conseille le client sur les étapes suivantes.",
      ] },
      { t: "prose", title: "Informations qui nous sont utiles", paras: [
        "Le cabinet travaille avec ce que le client peut fournir, en demandant toute donnée complémentaire en cours de route. Il n'est pas nécessaire de tout fournir d'emblée. Si le client peut fournir dès le départ, sans effort administratif notable, l'information complète de chaque créance, le dossier s'ouvre plus vite.",
      ] },
      { t: "bullets", items: [
        "Factures impayées avec leurs échéances et leur objet.",
        "Contrat avec le débiteur, le cas échéant.",
        "Bons de livraison ou preuves de la prestation du service ou du produit.",
        "Communications antérieures avec le débiteur.",
        "Identification complète du débiteur (CIF/NIF espagnol ou équivalent étranger, siège, personne ou service de contact, téléphone et e-mail).",
        "Toute autre circonstance pertinente, comme des paiements partiels reçus ou des avoirs en attente.",
      ] },
      { t: "prose", title: "Délais", paras: [
        "Après réception du dossier accompagné des pièces, l'ouverture et le premier contact avec le débiteur ont lieu dans un délai court. La durée totale de la phase amiable dépend de la complexité du dossier, de la solvabilité et de la disposition du débiteur et de la fonction activée : les dossiers les plus simples se clôturent en quelques semaines, tandis que ceux exigeant un rapprochement comptable ou la négociation d'un plan de paiement peuvent prendre quelques mois.",
        "Si, après un délai raisonnable, la voie amiable ne permet pas de satisfaire la créance, l'opportunité de passer en justice est évaluée avec le client, toujours précédée d'un rapport de faisabilité judiciaire.",
      ] },
    ],
  },
  "judicial-debt-collection": {
    intro: "La voie activée lorsque la phase amiable est épuisée, ou lorsqu'elle n'est pas envisageable d'emblée. IJ Creditor assure la représentation juridique directe dans la procédure la mieux adaptée à chaque situation, jusqu'au jugement, à l'exécution et au recouvrement effectif.",
    blocks: [
      { t: "prose", title: "Rapport de faisabilité judiciaire", paras: [
        "Avant de recommander une action en justice, IJ Creditor établit —dans la mesure du possible— un rapport de faisabilité judiciaire. Le rapport évalue la solidité et la validité de la documentation, la solvabilité et la localisation du débiteur, les délais de prescription applicables et les perspectives réalistes de succès en justice. Son but est d'éviter d'imposer au client le coût et l'effort d'une procédure qui, au vu des circonstances, ne devrait pas être engagée.",
        "Si le rapport déconseille le dépôt, cela est communiqué au client de façon motivée. Le travail intellectuel de l'avocat sur le rapport n'est jamais facturé. Lorsque des informations externes payantes sont requises —rapports de patrimoine du débiteur, certifications de registre, recherches spécifiques dans des bases publiques ou privées— ce coût est répercuté au client, avec approbation expresse préalable.",
      ] },
      { t: "prose", title: "Honoraires", paras: [
        "Dans la plupart des cas, les honoraires judiciaires sont déjà couverts par les tarifs convenus avec le client dans le contrat de mandat signé au début de la relation. Dans ce cas, avant d'engager la procédure, seule l'autorisation expresse du client de procéder est requise ; les honoraires applicables sont les tarifs déjà convenus et aucun nouveau devis n'est nécessaire.",
        "Lorsque les honoraires judiciaires ne sont pas couverts par le contrat, IJ Creditor remet au client un devis forfaitaire par écrit avant toute action, calculé selon la procédure concernée, le montant réclamé et la complexité prévue, et demande l'approbation expresse pour continuer.",
        "Dans les deux cas, les éléments accessoires liés à la procédure sont identifiés en amont, y compris les frais de justice applicables et les débours prévisibles.",
      ] },
      { t: "prose", title: "Résolution alternative des litiges (MASC)", paras: [
        "Depuis l'entrée en vigueur de la loi organique espagnole 1/2025, la plupart des procédures civiles et commerciales exigent la preuve d'une tentative préalable d'une méthode alternative de résolution des litiges (MASC) —négociation, médiation, conciliation, offre contraignante ou toute autre forme prévue par la loi— avant qu'une demande puisse être déposée. La loi prévoit aussi des exceptions : procédures d'insolvabilité, procédures de change, exécution, mesures conservatoires préalables et certaines procédures gracieuses. Lorsque l'exigence s'applique, la demande n'est pas admise sans preuve de la tentative MASC préalable.",
        "IJ Creditor gère cette exigence dans chaque dossier où elle s'applique. La forme habituelle est une notification formelle au débiteur, généralement par burofax espagnol avec une proposition de paiement précise. Le burofax permet de documenter à la fois l'envoi et, via la poste espagnole, la remise et le contenu intégral de la communication, prouvant ainsi la tentative requise par la loi. Le coût est convenu avec le client.",
      ] },
      { t: "subs", title: "Voies procédurales disponibles selon la matière", intro: "La procédure précise que IJ Creditor engagera dans chaque cas dépend de l'objet de la demande et des conditions fixées par le code de procédure civile espagnol pour chaque voie. Toutes les demandes n'admettent pas toutes les procédures —par exemple, une action en résolution de contrat n'admet pas la procédure d'injonction de payer (monitorio). Le cabinet évalue, au cas par cas, quelle procédure est juridiquement possible et commercialement la plus appropriée.", items: [
        { h: "Procédure d'injonction de payer (monitorio)", p: "Voie standard pour les créances pécuniaires liquides, déterminées, échues et exigibles, sans plafond. Une fois admise, le tribunal enjoint au débiteur de payer dans les vingt jours ou de s'opposer. Si le débiteur ne répond pas, le créancier obtient un titre exécutoire et le dossier passe directement à l'exécution. En cas d'opposition, la procédure se transforme —selon le montant— en procédure verbale ou ordinaire." },
        { h: "Procédure verbale (juicio verbal)", p: "Voie applicable aux demandes pécuniaires jusqu'à 15 000 € et à d'autres matières spécifiques listées par le code de procédure civile. Elle est plus agile que la procédure ordinaire ; la tenue d'une audience dépend des demandes des parties et de l'appréciation du tribunal." },
        { h: "Procédure ordinaire (procedimiento ordinario)", p: "Voie applicable aux demandes pécuniaires supérieures à 15 000 € et à d'autres matières réservées par la loi. Elle permet une phase probatoire plus complète et constitue la voie habituelle pour les dossiers présentant une certaine complexité technique ou juridique." },
        { h: "Exécution et saisie", p: "Une fois obtenu un jugement définitif, une ordonnance de monitorio ou tout autre titre exécutoire, IJ Creditor poursuit l'exécution : dépôt de la demande d'exécution, demande au tribunal d'enquêter sur le patrimoine du débiteur, et saisie de comptes bancaires, salaires, véhicules, biens immobiliers ou créances envers des tiers, jusqu'à la vente aux enchères publiques si nécessaire —jusqu'au recouvrement effectif ou à une déclaration d'insolvabilité." },
        { h: "Procédure d'insolvabilité (concurso de acreedores)", p: "Lorsque le débiteur entre en procédure d'insolvabilité, le cabinet canalise le dossier via le cadre de l'insolvabilité : déclaration de la créance auprès de l'administrateur judiciaire désigné dans le délai légal, qualification de la créance, suivi du concordat ou de la liquidation, et contestation des actes préjudiciables à la masse. Lorsque des motifs légaux existent, IJ Creditor exerce aussi des actions en extension de responsabilité aux dirigeants." },
      ] },
      { t: "bullets", title: "Notre méthode", items: [
        "Évaluation de la faisabilité judiciaire. Les perspectives de succès sont évaluées et le cabinet recommande la voie appropriée ou, le cas échéant, le non-dépôt de la demande.",
        "Accord du client. Lorsque les honoraires judiciaires sont déjà couverts par le contrat, l'autorisation expresse du client suffit. Sinon, un devis forfaitaire écrit est émis au préalable et requiert l'approbation. Aucune action procédurale n'est engagée sans l'accord du client.",
        "Rédaction et dépôt de la demande. Les avocats du cabinet rédigent l'acte de procédure, réunissent les preuves documentaires et, le cas échéant, proposent des preuves testimoniales et d'expertise.",
        "Gestion procédurale. Représentation juridique directe tout au long : audiences, réponses, recours et tout incident éventuel.",
        "Exécution et saisie. Une fois obtenu un jugement ou une ordonnance exécutoire, la phase d'exécution est engagée jusqu'à la satisfaction effective de la créance.",
        "Information et reddition de comptes au client. Tout au long de la procédure, le client reçoit des mises à jour sur l'état du dossier et sur tout développement pertinent.",
      ] },
      { t: "bullets", title: "Documents dont nous avons besoin du client", items: [
        "Toute la documentation prouvant la créance : factures, contrats, bons de livraison, preuves de prestation du service ou du produit.",
        "Communications antérieures avec le débiteur : correspondance, mises en demeure, réponses.",
        "Données d'identification complètes du débiteur : CIF/NIF espagnol ou équivalent étranger, siège, forme juridique, dirigeants.",
        "Le cas échéant, informations sur la situation patrimoniale du débiteur ou sur toute circonstance procédurale antérieure (procédures en cours, situation d'insolvabilité, etc.).",
        "Pouvoir général ad litem en faveur de l'avoué (procurador) et des avocats désignés par le cabinet, ou, le cas échéant, apud acta.",
      ] },
      { t: "prose", title: "Délais", paras: [
        "Les délais judiciaires dépendent de la procédure, du tribunal compétent et de la réponse du débiteur. À titre indicatif, un monitorio non contesté peut se résoudre en quelques mois. Dans les procédures contestées —procédure verbale, ordinaire, exécution— les délais peuvent s'allonger selon les étapes procédurales requises et la charge de travail du tribunal.",
        "Au début de la procédure, IJ Creditor fournit au client une estimation raisonnable des délais, fondée sur l'expérience du cabinet avec le tribunal concerné et sur le type de procédure envisagé.",
      ] },
      { t: "prose", title: "Réseau d'avocats locaux", paras: [
        "Bien que la représentation juridique de chaque procédure soit pilotée depuis IJ Creditor à Madrid, le cabinet entretient un réseau consolidé d'avocats locaux disposant d'une expérience spécifique dans leurs ressorts respectifs. Lorsque la nature de la procédure, la localisation du débiteur ou la complexité technique du dossier le justifient, IJ Creditor s'appuie sur ces professionnels pour assurer la meilleure représentation dans chaque cas.",
        "La coordination est toujours maintenue depuis le siège central, de sorte que le client conserve un interlocuteur unique pour l'ensemble du dossier.",
      ] },
    ],
  },
  "international-debt-collection": {
    intro: "Pour les clients étrangers dont les débiteurs sont situés dans des pays autres que l'Espagne. IJ Creditor coordonne le dossier depuis Madrid et l'exécute dans le pays du débiteur via un réseau de cabinets partenaires et de correspondants.",
    blocks: [
      { t: "prose", paras: [
        "Les cas où un créancier étranger a un débiteur situé en Espagne ne sont pas traités par ce service. Ces cas constituent le cœur de l'offre du cabinet pour les créanciers étrangers et sont couverts par les pages de recouvrement amiable et judiciaire.",
      ] },
      { t: "prose", title: "Comment fonctionne le réseau", paras: [
        "Chaque dossier est traité dans le pays du débiteur par un cabinet local qui connaît l'environnement juridique, les usages commerciaux et la langue. La coordination, les communications avec le client et le suivi du dossier sont menés depuis Madrid, en anglais, de sorte que le client bénéficie d'un interlocuteur unique pour des dossiers exécutés à travers différentes juridictions. Les correspondants sont sélectionnés selon leur historique, leur appartenance aux mêmes associations sectorielles et l'expérience antérieure d'IJ Creditor avec chaque cabinet.",
      ] },
      { t: "subs", title: "Cadre juridique applicable", items: [
        { h: "Au sein de l'Union européenne", p: "La reconnaissance et l'exécution des jugements espagnols dans d'autres États membres de l'UE sont régies, en règle générale, par le règlement (UE) n° 1215/2012 (Bruxelles I bis) : un jugement espagnol est directement exécutoire dans tout autre État membre sans déclaration d'exequatur distincte. Pour les créances transfrontalières de montant modéré, la procédure européenne d'injonction de payer (règlement (CE) n° 1896/2006) et la procédure européenne de règlement des petits litiges (règlement (CE) n° 861/2007) sont également disponibles, toutes deux permettant un titre exécutoire européen directement effectif dans les autres États membres." },
        { h: "En dehors de l'Union européenne", p: "Pour les débiteurs situés dans des États non membres de l'UE, la reconnaissance et l'exécution des jugements espagnols sont recherchées par exequatur, conformément à la convention internationale applicable lorsqu'elle existe (Convention de Lugano pour la Suisse, la Norvège et l'Islande ; traités bilatéraux avec plusieurs pays d'Amérique latine ; etc.) et, à défaut, en vertu de la loi espagnole 29/2015 sur la coopération juridique internationale en matière civile et du droit de l'État d'exécution. Lorsque les circonstances le conseillent, IJ Creditor peut recommander d'engager la procédure directement dans la juridiction du débiteur via le cabinet correspondant local, ce qui est souvent plus efficace que de saisir la justice en Espagne puis de demander l'exécution à l'étranger." },
      ] },
      { t: "bullets", title: "Types d'actions couverts par le service", items: [
        "Recouvrement amiable transfrontalier. Communications et négociation avec le débiteur via le correspondant local, dans sa langue et selon les usages commerciaux locaux. La première voie tentée et celle qui mène le plus souvent au recouvrement sans action en justice.",
        "Procédures judiciaires dans le pays du débiteur. Lorsque la phase amiable n'aboutit pas, IJ Creditor coordonne avec le correspondant local le dépôt et le suivi de la procédure applicable, jusqu'au jugement et à l'exécution.",
        "Procédures judiciaires en Espagne avec exécution à l'étranger. Lorsqu'il est plus approprié de saisir la justice en Espagne (par ex. en raison des termes du contrat, d'une clause attributive de juridiction ou de biens du débiteur en Espagne), le cabinet assure la représentation juridique en Espagne et coordonne la reconnaissance et l'exécution à l'étranger de la décision définitive.",
        "Insolvabilité transfrontalière. Si le débiteur étranger devient insolvable, IJ Creditor coordonne avec le correspondant local la déclaration de la créance et le suivi ultérieur, conformément au règlement (UE) 2015/848 le cas échéant.",
      ] },
    ],
  },
  "credit-solvency-reports": {
    intro: "Rapports commerciaux, patrimoniaux et de solvabilité sur des entreprises et des particuliers, espagnols et étrangers, établis à partir de sources vérifiables — afin que le décideur dispose d'informations suffisantes et recoupées pour décider avec discernement.",
    blocks: [
      { t: "bullets", title: "Quatre usages typiques", items: [
        "Analyse avant octroi de crédit. Avant d'accepter un nouveau client, d'ouvrir une ligne de paiement différé ou de conclure une opération d'une certaine taille, un rapport dresse le profil financier, patrimonial et de conformité de la contrepartie, permettant de fixer la limite de risque ou de demander des garanties.",
        "Suivi actif du risque du portefeuille clients. Pour les entreprises aux portefeuilles B2B larges ou concentrés, des rapports périodiques permettent d'anticiper la dégradation patrimoniale, les ouvertures d'insolvabilité, les changements de direction ou les premiers signes de défaut.",
        "Évaluation de faisabilité avant recouvrement. Avant d'investir temps et honoraires dans une action de recouvrement, un rapport dresse le profil de solvabilité et de patrimoine du débiteur. S'il est défavorable, le client s'épargne le coût d'une procédure sans rendement réaliste.",
        "Appui aux dossiers de recouvrement en cours. Lorsque IJ Creditor a déjà un dossier ouvert, un rapport spécifique peut l'étayer : vérification du statut social, localisation d'entreprises ayant changé d'adresse, identification de biens pour garantie ou exécution. La demande est faite avec l'autorisation préalable du client et le coût est répercuté avec un devis préalable.",
      ] },
      { t: "subs", title: "Types de rapport", items: [
        { h: "Rapport commercial de base", p: "Données d'identification et de registre de l'entreprise, forme juridique, capital social, dirigeants actuels et historique récent, activité et, le cas échéant, derniers comptes annuels déposés. Utile comme vérification initiale de la solvabilité formelle d'une contrepartie." },
        { h: "Rapport patrimonial", p: "Identification des biens enregistrés du débiteur : immeubles au registre foncier, véhicules, navires, participations, marques et autres actifs. Essentiel pour évaluer les perspectives d'exécution et de saisie en cas de défaut." },
        { h: "Rapport étendu et vérifications spécifiques", p: "Combine ce qui précède avec des vérifications spécifiques demandées par le client : présence dans des systèmes d'information sur le crédit au titre de l'article 20 LOPDGDD, procédures d'insolvabilité antérieures, liens avec des groupes de sociétés, identification du bénéficiaire effectif lorsqu'un intérêt légitime est établi, exposition aux sanctions internationales ou tout autre point pertinent." },
        { h: "Rapport de faisabilité du recouvrement", p: "Synthèse, sous l'angle juridique, de ce qui précède, appliquée à un dossier de recouvrement précis : perspectives réalistes de recouvrement, voies recommandées et, le cas échéant, recommandation de ne pas agir en justice. C'est le rapport qui précède toute action judiciaire gérée par le cabinet." },
      ] },
      { t: "prose", title: "Sources utilisées", paras: ["Chaque rapport est établi à partir d'informations recoupées issues de deux types de sources :"] },
      { t: "bullets", items: [
        "Registres publics accessibles selon la loi applicable : registre du commerce espagnol, registre foncier, registre des biens meubles, BORME, Journal officiel de l'État et autres registres administratifs. Lorsque la consultation exige de démontrer un intérêt légitime —comme pour le registre foncier— IJ Creditor demande l'information dans le respect de la législation correspondante.",
        "Fournisseurs spécialisés d'information commerciale, espagnols et internationaux, qui agrègent des données recoupées sur des entreprises et des particuliers et les mettent à disposition des professionnels du secteur via des contrats de service.",
      ] },
      { t: "prose", paras: [
        "IJ Creditor ne tient pas ses propres bases de données d'information commerciale sur les entreprises ou les particuliers. Les informations fournies proviennent dans tous les cas des sources ci-dessus et sont identifiées dans chaque rapport.",
        "Lorsque le sujet du rapport est un particulier ou que les données demandées sont soumises à des restrictions d'accès particulières —notamment celles relatives à la solvabilité patrimoniale au titre de l'article 20 de la loi organique 3/2018 (LOPDGDD) et de la jurisprudence du Tribunal suprême espagnol sur les fichiers de crédit, ou la consultation du Registre central espagnol des bénéficiaires effectifs— le service n'est fourni que lorsqu'il existe une base légale, une finalité légitime et un accès autorisé par les règles applicables. Dans ces cas, le cabinet vérifie au préalable la légitimité de la consultation et la porte au client avant de procéder.",
      ] },
    ],
  },
};

const it: Record<ServiceSlug, ServicePage> = {
  "out-of-court-debt-collection": {
    intro: "La prima via che IJ Creditor tenta in ogni pratica: ottenere il pagamento prima dell'azione giudiziaria e, ove possibile, preservare il rapporto commerciale. Oltre l'80% delle pratiche affidate allo studio si risolve in questa fase, senza deposito di una causa.",
    blocks: [
      { t: "prose", title: "Onorari", paras: [
        "Il servizio è prestato a success fee. Lo studio applica una commissione sull'importo effettivamente recuperato, calcolata secondo le condizioni concordate con il cliente nel contratto di mandato e in funzione dell'importo, dell'anzianità del credito, della complessità della pratica e delle informazioni disponibili sul debitore. Se non si recupera nulla, non si fatturano onorari variabili.",
        "Determinate azioni o costi di terzi —come report di informazioni commerciali, burofax spagnoli certificati, certificazioni di registro o altri servizi esterni necessari alla gestione— possono comportare un costo aggiuntivo, in ogni caso con informazione preventiva al cliente e approvazione espressa.",
      ] },
      { t: "prose", title: "Supervisione legale del processo", paras: [
        "Il lavoro stragiudiziale è svolto da un team composto principalmente da avvocati e, in ogni pratica, supervisionato caso per caso da un avvocato dello studio. È ciò che evita gli errori tipici del recupero gestito senza formazione giuridica: comunicazioni contrarie al GDPR, diffide mal redatte che non interrompono la prescrizione, decisioni che precludono una successiva azione giudiziaria o l'inosservanza dei termini e delle formalità previsti dal diritto spagnolo ed europeo.",
      ] },
      { t: "prose", title: "Due funzioni integrate", paras: [
        "IJ Creditor combina all'interno del dipartimento stragiudiziale due funzioni specializzate, applicate congiuntamente e in successione a ciascuna pratica secondo le sue esigenze: la riconciliazione dei saldi e il recupero amichevole. In pratica non sono compartimenti separati: molte pratiche che arrivano come semplice fattura insoluta rivelano, una volta avviato il dialogo con il debitore, una situazione contabile che richiede una riconciliazione; e molte che iniziano come riconciliazioni si concludono come recupero amichevole degli importi confermati come esigibili.",
      ] },
      { t: "prose", title: "Riconciliazione dei saldi", paras: [
        "Quando è necessario chiarire con il debitore l'effettiva composizione del credito prima di richiederne il pagamento —per dubbi su pagamenti già accreditati, note di credito in sospeso, sconti commerciali non ancora applicati, errori di imputazione, IVA conteggiata due volte o discrepanze di fatturazione— IJ Creditor agisce, per conto del creditore, come interlocutore tra le parti in modalità di chiarimento. Le comunicazioni con il debitore identificano sempre il creditore per conto del quale lo studio agisce e collocano il processo in modalità di chiarimento contabile, non di pressione.",
        "I registri del cliente vengono incrociati con la documentazione giustificativa fornita dal debitore —ricevute di pagamento, note di credito, evidenze bancarie— e si reclama solo il saldo confermato come esigibile dopo la riconciliazione. La funzione si applica sia ai debitori aziendali (B2B) sia ai privati (B2C) ed è particolarmente utile quando il cliente desidera recuperare il credito preservando il rapporto commerciale: la riconciliazione riduce il conflitto e apre la strada a soluzioni rapide e ragionevoli per entrambe le parti.",
      ] },
      { t: "prose", title: "Recupero amichevole", paras: [
        "Quando la composizione del credito è chiara e si richiede una gestione amichevole, lo studio cura il recupero diretto: comunicazioni con il debitore, diffide ove opportuno, negoziazione di piani di pagamento o rateizzazioni e chiusura della pratica con la soddisfazione del credito.",
        "L'importo richiesto è quello comunicato dal cliente; lo studio non lo contesta di propria iniziativa. Se, durante la gestione, il debitore solleva di propria iniziativa contestazioni o discrepanze, IJ Creditor le registra, le trasmette al cliente con il parere professionale dello studio sulla loro coerenza, e la decisione su come procedere resta al cliente. Ogni proposta di accordo —piano di pagamento, rateizzazione o rinuncia ragionevole— è portata al creditore con tutte le informazioni necessarie per decidere; l'approvazione finale spetta sempre al creditore.",
      ] },
      { t: "bullets", title: "Come lavoriamo", items: [
        "Acquisizione. Il cliente invia le pratiche nel formato più comodo —di solito file digitali: fogli di calcolo, esportazioni da ERP o altro supporto idoneo. Lo studio richiede, lungo il percorso, eventuali dati o documenti aggiuntivi necessari.",
        "Esame interno e apertura della pratica. Il team valuta ogni caso, individua i rischi legali e apre la pratica sotto la corrispondente supervisione legale.",
        "Comunicazioni con il debitore. Lettere di diffida, burofax spagnoli certificati, contatto elettronico o telefonico, a seconda del caso. Ogni comunicazione è esaminata da un avvocato per garantire valore probatorio, conformità al GDPR e, ove applicabile, l'effetto giuridico di interruzione della prescrizione.",
        "Riconciliazione, negoziazione o accordo. Quando la pratica richiede di chiarire la composizione del credito, si avvia la riconciliazione dei saldi prima di richiederne il pagamento. Una volta confermato, lo studio lavora con il debitore verso una chiusura: pagamento integrale, piano di pagamento, rate o rinuncia ragionevole. Le proposte che richiedono l'approvazione del cliente sono presentate in modo motivato.",
        "Incasso e rendicontazione. Gli importi recuperati sono custoditi su un conto bancario separato e versati al creditore con la cadenza e nel formato concordati. Per impostazione predefinita, la rendicontazione è mensile.",
        "Chiusura o escalation. Se la via amichevole riesce, la pratica viene chiusa. In caso contrario, IJ Creditor redige una relazione di fattibilità giudiziaria e, in base al risultato, consiglia il cliente sui passi successivi.",
      ] },
      { t: "prose", title: "Informazioni che ci sono utili", paras: [
        "Lo studio lavora con ciò che il cliente può fornire, richiedendo eventuali dati aggiuntivi lungo il percorso. Non è necessario fornire tutto in anticipo. Se il cliente può fornire fin dall'inizio, senza apprezzabile sforzo amministrativo, l'informazione completa di ciascun credito, la pratica si apre più rapidamente.",
      ] },
      { t: "bullets", items: [
        "Fatture insolute con le relative scadenze e causali.",
        "Contratto con il debitore, se presente.",
        "Bolle di consegna o prove della prestazione del servizio o del prodotto.",
        "Comunicazioni precedenti con il debitore.",
        "Identificazione completa del debitore (CIF/NIF spagnolo o equivalente estero, sede, persona o ufficio di contatto, telefono ed e-mail).",
        "Qualsiasi altra circostanza rilevante, come pagamenti parziali ricevuti o note di credito in sospeso.",
      ] },
      { t: "prose", title: "Tempistiche", paras: [
        "Dopo la ricezione della pratica con i documenti, l'apertura e il primo contatto con il debitore avvengono in tempi brevi. La durata complessiva della fase amichevole dipende dalla complessità della pratica, dalla solvibilità e disponibilità del debitore e dalla funzione attivata: le pratiche più semplici si chiudono in poche settimane, mentre quelle che richiedono una riconciliazione contabile o la negoziazione di un piano di pagamento possono richiedere alcuni mesi.",
        "Se, trascorso un periodo ragionevole, la via amichevole non consente di soddisfare il credito, si valuta con il cliente l'opportunità di passare in giudizio, sempre preceduta da una relazione di fattibilità giudiziaria.",
      ] },
    ],
  },
  "judicial-debt-collection": {
    intro: "La via attivata quando la fase amichevole è esaurita, o quando non è percorribile fin dall'inizio. IJ Creditor assume la rappresentanza legale diretta nel procedimento più adatto a ciascuna situazione, fino a sentenza, esecuzione e recupero effettivo.",
    blocks: [
      { t: "prose", title: "Relazione di fattibilità giudiziaria", paras: [
        "Prima di raccomandare un'azione giudiziaria, IJ Creditor redige —ove possibile— una relazione di fattibilità giudiziaria. La relazione valuta la solidità e la validità della documentazione, la solvibilità e la reperibilità del debitore, i termini di prescrizione applicabili e le prospettive realistiche di successo in giudizio. Il suo scopo è evitare di sottoporre il cliente al costo e all'impegno di un procedimento che, viste le circostanze, non dovrebbe essere avviato.",
        "Se la relazione sconsiglia il deposito, ciò viene comunicato al cliente in modo motivato. Il lavoro intellettuale dell'avvocato sulla relazione non viene mai fatturato. Quando sono necessarie informazioni esterne a pagamento —report patrimoniali sul debitore, certificazioni di registro, ricerche specifiche in banche dati pubbliche o private— tale costo è ribaltato sul cliente, previa approvazione espressa.",
      ] },
      { t: "prose", title: "Onorari", paras: [
        "Nella maggior parte dei casi, gli onorari giudiziali sono già coperti dalle tariffe concordate con il cliente nel contratto di mandato firmato all'inizio del rapporto. In tal caso, prima di avviare il procedimento è richiesta solo l'autorizzazione espressa del cliente a procedere; si applicano le tariffe già concordate e non serve un nuovo preventivo.",
        "Quando gli onorari giudiziali non sono coperti dal contratto, IJ Creditor invia al cliente un preventivo forfettario per iscritto prima di qualsiasi azione, calcolato in base al procedimento, all'importo richiesto e alla complessità prevista, e chiede l'approvazione espressa per continuare.",
        "In entrambi i casi, le voci accessorie legate al procedimento sono indicate in anticipo, comprese le spese di giudizio applicabili e gli esborsi prevedibili.",
      ] },
      { t: "prose", title: "Risoluzione alternativa delle controversie (MASC)", paras: [
        "Dall'entrata in vigore della legge organica spagnola 1/2025, la maggior parte dei procedimenti civili e commerciali richiede la prova di un previo tentativo di un metodo alternativo di risoluzione delle controversie (MASC) —negoziazione, mediazione, conciliazione, offerta vincolante o qualsiasi altra forma prevista dalla legge— prima che si possa depositare una domanda. La legge prevede anche eccezioni: procedure di insolvenza, procedimenti cambiari, esecuzione, misure cautelari preventive e alcuni procedimenti di volontaria giurisdizione. Dove il requisito si applica, la domanda non è ammessa senza prova del previo tentativo MASC.",
        "IJ Creditor gestisce questo requisito in ogni pratica in cui si applica. La forma abituale è una notifica formale al debitore, tipicamente tramite burofax spagnolo con una proposta di pagamento specifica. Il burofax consente di documentare sia l'invio sia, tramite la posta spagnola, la consegna e il contenuto integrale della comunicazione, provando così il tentativo richiesto dalla legge. Il costo è concordato con il cliente.",
      ] },
      { t: "subs", title: "Vie procedurali disponibili a seconda della materia", intro: "Il procedimento specifico che IJ Creditor avvierà in ciascun caso dipende dall'oggetto della domanda e dalle condizioni fissate dal codice di procedura civile spagnolo per ciascuna via. Non tutte le domande ammettono ogni procedimento —ad esempio, un'azione di risoluzione del contratto non ammette il procedimento d'ingiunzione (monitorio). Lo studio valuta, caso per caso, quale procedimento sia giuridicamente possibile e commercialmente più appropriato.", items: [
        { h: "Procedimento d'ingiunzione (monitorio)", p: "Via standard per crediti pecuniari liquidi, determinati, esigibili e azionabili, senza limite massimo. Una volta ammesso, il tribunale ingiunge al debitore di pagare entro venti giorni o di opporsi. Se il debitore non risponde, il creditore ottiene un titolo esecutivo e la pratica passa direttamente all'esecuzione. Se il debitore si oppone, il procedimento si trasforma —a seconda dell'importo— in procedimento verbale od ordinario." },
        { h: "Procedimento verbale (juicio verbal)", p: "Via applicabile a domande pecuniarie fino a 15.000 € e ad altre materie specifiche elencate dal codice di procedura civile. È più agile del procedimento ordinario; lo svolgimento di un'udienza dipende dalle richieste delle parti e da quanto il tribunale ritenga opportuno." },
        { h: "Procedimento ordinario (procedimiento ordinario)", p: "Via applicabile a domande pecuniarie superiori a 15.000 € e ad altre materie riservate dalla legge. Consente una fase istruttoria più completa ed è la via abituale per pratiche di una certa complessità tecnica o giuridica." },
        { h: "Esecuzione e pignoramento", p: "Una volta ottenuta una sentenza definitiva, un'ingiunzione monitoria o qualsiasi altro titolo esecutivo, IJ Creditor procede all'esecuzione: deposito dell'istanza esecutiva, richiesta al tribunale di indagare sul patrimonio del debitore e pignoramento di conti correnti, stipendi, veicoli, immobili o crediti verso terzi, fino all'asta pubblica se necessario —fino al recupero effettivo o a una dichiarazione di insolvenza." },
        { h: "Procedura di insolvenza (concurso de acreedores)", p: "Quando il debitore entra in procedura di insolvenza, lo studio incanala la pratica nel quadro concorsuale: insinuazione del credito presso il curatore nominato entro il termine di legge, qualificazione del credito, monitoraggio del concordato o della liquidazione e impugnazione degli atti pregiudizievoli alla massa. Ove sussistano i presupposti di legge, IJ Creditor promuove anche azioni di estensione di responsabilità agli amministratori." },
      ] },
      { t: "bullets", title: "Come lavoriamo", items: [
        "Valutazione della fattibilità giudiziaria. Si valutano le prospettive di successo e lo studio raccomanda la via appropriata o, se del caso, il non deposito della domanda.",
        "Approvazione del cliente. Quando gli onorari giudiziali sono già coperti dal contratto, è sufficiente l'autorizzazione espressa del cliente. In caso contrario, si emette in anticipo un preventivo forfettario scritto che richiede approvazione. Nessuna azione procedurale è intrapresa senza l'approvazione del cliente.",
        "Redazione e deposito della domanda. Gli avvocati dello studio redigono l'atto, raccolgono le prove documentali e, se opportuno, propongono prove testimoniali e peritali.",
        "Gestione procedurale. Rappresentanza legale diretta per tutta la durata: udienze, repliche, impugnazioni ed eventuali incidenti.",
        "Esecuzione e pignoramento. Ottenuta una sentenza o un provvedimento esecutivo, si avvia la fase esecutiva fino all'effettiva soddisfazione del credito.",
        "Informazione e rendicontazione al cliente. Durante tutto il procedimento il cliente riceve aggiornamenti sullo stato della pratica e su qualsiasi sviluppo rilevante.",
      ] },
      { t: "bullets", title: "Documentazione che ci serve dal cliente", items: [
        "Tutta la documentazione che prova il credito: fatture, contratti, bolle di consegna, prove della prestazione del servizio o del prodotto.",
        "Comunicazioni precedenti con il debitore: corrispondenza, diffide, risposte.",
        "Dati identificativi completi del debitore: CIF/NIF spagnolo o equivalente estero, sede, forma giuridica, amministratori.",
        "Ove disponibili, informazioni sulla situazione patrimoniale del debitore o su eventuali circostanze procedurali precedenti (procedimenti pendenti, situazione di insolvenza, ecc.).",
        "Procura generale alle liti a favore del procuratore (procurador) e degli avvocati designati dallo studio, o, se del caso, apud acta.",
      ] },
      { t: "prose", title: "Tempistiche", paras: [
        "Le tempistiche giudiziarie dipendono dal procedimento, dal tribunale competente e dalla risposta del debitore. A titolo orientativo, un monitorio non opposto può risolversi in pochi mesi. Nei procedimenti contenziosi —verbale, ordinario, esecuzione— i tempi possono allungarsi a seconda delle fasi procedurali richieste e del carico di lavoro del tribunale.",
        "All'avvio del procedimento, IJ Creditor fornisce al cliente una stima ragionevole dei tempi, basata sull'esperienza dello studio con il tribunale competente e sul tipo di procedimento previsto.",
      ] },
      { t: "prose", title: "Rete di avvocati locali", paras: [
        "Sebbene la rappresentanza legale di ogni procedimento sia guidata da IJ Creditor a Madrid, lo studio mantiene una rete consolidata di avvocati locali con esperienza specifica nei rispettivi circondari giudiziari. Quando la natura del procedimento, l'ubicazione del debitore o la complessità tecnica della materia lo rendono opportuno, IJ Creditor si avvale di questi professionisti per assicurare la migliore rappresentanza in ciascun caso.",
        "Il coordinamento è sempre mantenuto dalla sede centrale, così che il cliente conservi un unico punto di contatto per l'intera pratica.",
      ] },
    ],
  },
  "international-debt-collection": {
    intro: "Per clienti esteri i cui debitori si trovano in Paesi diversi dalla Spagna. IJ Creditor coordina la pratica da Madrid e la esegue nel Paese del debitore tramite una rete di studi partner e corrispondenti.",
    blocks: [
      { t: "prose", paras: [
        "I casi in cui un creditore estero ha un debitore situato in Spagna non sono gestiti tramite questo servizio. Quei casi sono il cuore dell'offerta dello studio per i creditori esteri e sono trattati nelle pagine di recupero stragiudiziale e giudiziale.",
      ] },
      { t: "prose", title: "Come opera la rete", paras: [
        "Ogni pratica è gestita nel Paese del debitore da uno studio locale che conosce il contesto giuridico, gli usi commerciali e la lingua. Coordinamento, comunicazioni con il cliente e monitoraggio della pratica sono condotti da Madrid, in inglese, così che il cliente disponga di un unico punto di contatto per pratiche eseguite in diverse giurisdizioni. I corrispondenti sono selezionati per track record, per l'appartenenza alle stesse associazioni di settore e per la precedente esperienza di IJ Creditor con ciascuno studio.",
      ] },
      { t: "subs", title: "Quadro giuridico applicabile", items: [
        { h: "All'interno dell'Unione europea", p: "Il riconoscimento e l'esecuzione delle sentenze spagnole in altri Stati membri dell'UE sono disciplinati, di regola, dal regolamento (UE) n. 1215/2012 (Bruxelles I bis): una sentenza spagnola è direttamente esecutiva in qualsiasi altro Stato membro senza una separata dichiarazione di esecutività. Per crediti transfrontalieri di importo modesto sono inoltre disponibili il procedimento europeo d'ingiunzione di pagamento (regolamento (CE) n. 1896/2006) e il procedimento europeo per le controversie di modesta entità (regolamento (CE) n. 861/2007), entrambi idonei a produrre un titolo esecutivo europeo direttamente efficace negli altri Stati membri." },
        { h: "Al di fuori dell'Unione europea", p: "Per debitori situati in Stati non UE, il riconoscimento e l'esecuzione delle sentenze spagnole si ottengono tramite exequatur, secondo la convenzione internazionale applicabile ove esistente (Convenzione di Lugano per Svizzera, Norvegia e Islanda; trattati bilaterali con vari Paesi dell'America Latina; ecc.) e, in loro mancanza, ai sensi della legge spagnola 29/2015 sulla cooperazione giuridica internazionale in materia civile e del diritto dello Stato di esecuzione. Quando le circostanze lo consigliano, IJ Creditor può raccomandare di avviare il procedimento direttamente nella giurisdizione del debitore tramite lo studio corrispondente locale, spesso più efficiente rispetto ad agire in Spagna e poi chiedere l'esecuzione all'estero." },
      ] },
      { t: "bullets", title: "Tipi di azione coperti dal servizio", items: [
        "Recupero stragiudiziale transfrontaliero. Comunicazioni e negoziazione con il debitore tramite il corrispondente locale, nella sua lingua e secondo gli usi commerciali locali. La prima via tentata e quella che più spesso porta al recupero senza azione giudiziaria.",
        "Procedimenti giudiziari nel Paese del debitore. Quando la fase amichevole non produce risultato, IJ Creditor coordina con il corrispondente locale il deposito e il monitoraggio del procedimento applicabile, fino a sentenza ed esecuzione.",
        "Procedimenti giudiziari in Spagna con esecuzione all'estero. Quando è più appropriato agire in Spagna (ad es. per i termini del contratto, una clausola di giurisdizione o beni del debitore in Spagna), lo studio assume la rappresentanza legale in Spagna e coordina il riconoscimento e l'esecuzione all'estero della decisione definitiva.",
        "Insolvenza transfrontaliera. Se il debitore estero entra in insolvenza, IJ Creditor coordina con il corrispondente locale l'insinuazione del credito e il successivo monitoraggio, conformemente al regolamento (UE) 2015/848 ove applicabile.",
      ] },
    ],
  },
  "credit-solvency-reports": {
    intro: "Report commerciali, patrimoniali e di solvibilità su imprese e privati, spagnoli ed esteri, redatti da fonti verificabili — perché chi decide disponga di informazioni sufficienti e riscontrate per decidere con criterio.",
    blocks: [
      { t: "bullets", title: "Quattro usi tipici", items: [
        "Analisi pre-credito. Prima di accettare un nuovo cliente, aprire una linea a pagamento differito o concludere un'operazione di una certa dimensione, un report profila la situazione finanziaria, patrimoniale e di compliance della controparte, consentendo di fissare il limite di rischio o di richiedere garanzie.",
        "Monitoraggio attivo del rischio del portafoglio clienti. Per imprese con portafogli B2B ampi o concentrati, report periodici consentono di anticipare il deterioramento patrimoniale, le aperture di insolvenza, i cambi di amministrazione o i primi segnali di insolvenza.",
        "Valutazione di fattibilità prima del recupero. Prima di investire tempo e onorari in un'azione di recupero, un report profila la solvibilità e il patrimonio del debitore. Se sfavorevole, si risparmia al cliente il costo di un procedimento senza ritorno realistico.",
        "Supporto a pratiche di recupero in corso. Quando IJ Creditor ha già una pratica aperta, un report specifico può sostenerla: verifica dello stato societario, localizzazione di imprese che hanno cambiato sede, identificazione di beni per garanzia o esecuzione. La richiesta è effettuata con previa autorizzazione del cliente e il costo è ribaltato con preventivo preventivo.",
      ] },
      { t: "subs", title: "Tipi di report", items: [
        { h: "Report commerciale di base", p: "Dati identificativi e di registro dell'impresa, forma giuridica, capitale sociale, amministratori attuali e storia recente, attività e, ove disponibile, l'ultimo bilancio depositato. Utile come verifica iniziale della solvibilità formale di una controparte." },
        { h: "Report patrimoniale", p: "Identificazione dei beni registrati del debitore: immobili al registro immobiliare, veicoli, imbarcazioni, partecipazioni, marchi e altri beni. Essenziale per valutare le prospettive di esecuzione e pignoramento in caso di insolvenza." },
        { h: "Report esteso e verifiche specifiche", p: "Combina quanto sopra con verifiche specifiche richieste dal cliente: presenza in sistemi di informazione creditizia ai sensi dell'articolo 20 LOPDGDD, precedenti procedure di insolvenza, collegamenti a gruppi societari, identificazione del titolare effettivo ove sussista un interesse legittimo, esposizione a sanzioni internazionali o qualsiasi altro punto rilevante." },
        { h: "Report di fattibilità del recupero", p: "Sintesi, in chiave giuridica, di quanto sopra, applicata a una pratica di recupero specifica: prospettive realistiche di incasso, vie consigliate e, se del caso, raccomandazione di non agire. È il report che precede ogni azione giudiziaria gestita dallo studio." },
      ] },
      { t: "prose", title: "Fonti utilizzate", paras: ["Ogni report è redatto da informazioni riscontrate provenienti da due tipi di fonti:"] },
      { t: "bullets", items: [
        "Registri pubblici accessibili ai sensi della legge applicabile: Registro delle imprese spagnolo, Registro immobiliare, Registro dei beni mobili, BORME, Gazzetta ufficiale dello Stato e altri registri amministrativi. Dove la consultazione richiede di dimostrare un interesse legittimo —come per il Registro immobiliare— IJ Creditor richiede le informazioni nel rispetto della normativa corrispondente.",
        "Fornitori specializzati di informazioni commerciali, spagnoli e internazionali, che aggregano dati riscontrati su imprese e privati e li mettono a disposizione dei professionisti del settore tramite contratti di servizio.",
      ] },
      { t: "prose", paras: [
        "IJ Creditor non mantiene proprie banche dati di informazioni commerciali su imprese o privati. Le informazioni fornite provengono in ogni caso dalle fonti sopra indicate e sono identificate in ciascun report.",
        "Quando oggetto del report è un privato o i dati richiesti sono soggetti a particolari restrizioni di accesso —in particolare quelle relative alla solvibilità patrimoniale ai sensi dell'articolo 20 della legge organica 3/2018 (LOPDGDD) e della giurisprudenza del Tribunale supremo spagnolo sui registri creditizi, o la consultazione del Registro centrale spagnolo dei titolari effettivi— il servizio è prestato solo in presenza di una base giuridica, una finalità legittima e un accesso autorizzato dalle norme applicabili. In tali casi, lo studio verifica preventivamente la legittimità della consultazione e la porta al cliente prima di procedere.",
      ] },
    ],
  },
};

const content: Partial<Record<Locale, Partial<Record<ServiceSlug, ServicePage>>>> = {
  en,
  de,
  fr,
  it,
};

export function getServicePage(locale: Locale, slug: ServiceSlug): ServicePage {
  return content[locale]?.[slug] ?? en[slug];
}
