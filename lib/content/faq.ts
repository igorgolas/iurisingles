import type { Locale } from "@/lib/i18n";

export type QA = { q: string; a: string[] };
export type FaqContent = { title: string; intro: string; items: QA[] };

const en: FaqContent = {
  title: "Frequently Asked Questions",
  intro: "The questions most frequently asked by clients and visitors. If your question is not answered here, please contact the firm through the Request a Proposal form or the Contact page.",
  items: [
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
  ],
};

const de: FaqContent = {
  title: "Häufig gestellte Fragen",
  intro: "Die von Mandanten und Besuchern am häufigsten gestellten Fragen. Wird Ihre Frage hier nicht beantwortet, wenden Sie sich bitte über das Formular „Angebot anfordern“ oder die Kontaktseite an die Kanzlei.",
  items: [
    { q: "Wie funktioniert Ihr Honorar?", a: [
      "Die außergerichtliche Arbeit erfolgt auf Erfolgshonorarbasis: eine Provision auf den tatsächlich beigetriebenen Betrag, ohne Vorkosten. Wird nichts beigetrieben, fallen keine variablen Honorare an.",
      "Bestimmte Maßnahmen oder Kosten Dritter —Wirtschaftsauskünfte, spanische Burofaxe, Registerbescheinigungen oder für die Bearbeitung erforderliche externe Dienste— können zusätzliche Kosten verursachen, in allen Fällen nach vorheriger Information und ausdrücklicher Zustimmung des Mandanten.",
      "Bei Gerichtsverfahren werden die Honorare vor jeder Maßnahme schriftlich in einem Pauschalangebot vereinbart, berechnet nach Verfahrensart und Streitwert.",
    ]},
    { q: "Was, wenn nichts beigetrieben wird?", a: [
      "In der außergerichtlichen Phase fallen variable Honorare nur an, wenn der Mandant Beträge beitreibt. Vor einem gerichtlichen Vorgehen wird ein kostenfreier Bericht zur gerichtlichen Erfolgsaussicht erstellt. Rät der Bericht von einer Klage ab, wird die Empfehlung dem Mandanten begründet mitgeteilt.",
    ]},
    { q: "Gibt es einen Mindestbetrag für die Übernahme eines Falls?", a: [
      "Nein. Es gibt keine Mindestgrenze. Bei kleinen Beträgen wird der effizienteste Weg nach Kosten-Nutzen-Gesichtspunkten geprüft; ist ein bestimmter Weg angesichts des Verhältnisses von erwarteten Kosten und gefordertem Betrag nicht sinnvoll, erläutert die Kanzlei dies dem Mandanten, damit er mit vollständiger Information entscheiden kann.",
    ]},
    { q: "Bearbeiten Sie auch Portfolios mit Kleinbeträgen?", a: [
      "Ja. IJ Creditor bearbeitet sowohl einzelne hochwertige Fälle als auch Portfolios mit zahlreichen Kleinbeträgen. In jedem Fall wird die Verhältnismäßigkeit zwischen erwarteten Kosten und realistischen Einzugsaussichten geprüft und der wirtschaftlich und rechtlich effizienteste Weg empfohlen.",
      "In bestimmten Branchen —Transport, Autovermietung, wiederkehrende Lieferungen, B2B-Dienste— ist die Arbeit mit umfangreichen Portfolios kleiner, aber sich wiederholender Beträge üblich, wofür die Kanzlei spezifische Bearbeitungs- und Abstimmungsmodelle hat.",
    ]},
    { q: "Muss ich nach Spanien reisen, um eine Forderung gegen einen spanischen Schuldner beizutreiben?", a: [
      "Nein. Das Madrider Büro bearbeitet den Fall direkt von Anfang bis Ende. Sie kommunizieren mit der Kanzlei auf Englisch; die Kanzlei kommuniziert mit dem Schuldner auf Spanisch, persönlich, wo es Mehrwert bringt. Für Gerichtsverfahren nutzt die Kanzlei eine in Ihrem Land unterzeichnete notarielle Vollmacht, üblicherweise mit Apostille nach dem Haager Übereinkommen.",
    ]},
    { q: "Wie lange dauert die Beitreibung einer Forderung in Spanien?", a: [
      "Die Fristen in der außergerichtlichen Phase hängen von der Komplexität des Falls, der Solvenz und Bereitschaft des Schuldners und der aktivierten Funktion ab. Einfachere Fälle werden in Wochen abgeschlossen; Fälle, die eine Saldenabstimmung oder die Verhandlung eines Zahlungsplans erfordern, können einige Monate dauern. Die Mehrheit der IJ Creditor anvertrauten Fälle wird außergerichtlich gelöst. Gerichtsverfahren hängen vom Verfahren und vom Gericht ab.",
    ]},
    { q: "Kann ein spanisches Urteil gegen einen Schuldner in einem anderen EU-Land vollstreckt werden?", a: [
      "Ja. Nach der Verordnung (EU) 1215/2012 (Brüssel Ia) wird ein spanischer Vollstreckungstitel in jedem anderen EU-Mitgliedstaat unmittelbar anerkannt und vollstreckt, ohne Exequatur. Das Gericht des Mitgliedstaats erhält das beglaubigte Urteil und die Brüssel-Ia-Bescheinigung und betreibt die Vollstreckung nach lokalem Verfahrensrecht. Die Kanzlei übernimmt die spanische Seite und koordiniert mit ihren Partnern im Vollstreckungsstaat.",
    ]},
    { q: "Kann ein ausländisches Urteil in Spanien vollstreckt werden?", a: [
      "Ja. Wurde das Urteil in einem EU-Mitgliedstaat erlassen, gilt Brüssel Ia —unmittelbare Anerkennung und Vollstreckung ohne Exequatur. Stammt das Urteil aus einem Nicht-EU-Land, erfolgen Anerkennung und Vollstreckung über das spanische Exequaturverfahren nach dem Gesetz 29/2015 über die internationale Rechtskooperation in Zivilsachen und den anwendbaren internationalen Abkommen.",
    ]},
    { q: "Was ist der Unterschied zwischen Saldenabstimmung und Forderungseinzug?", a: [
      "Die Saldenabstimmung ist die Phase, in der die Kanzlei als technischer Ansprechpartner zwischen Gläubiger und Schuldner agiert, um vor der Zahlungsaufforderung die tatsächliche Zusammensetzung der Forderung zu klären: bereits zugeordnete Zahlungen, ausstehende Gutschriften, Handelsrabatte, Zuordnungsfehler oder buchhalterische Abweichungen.",
      "Der Forderungseinzug ist die Phase, in der die Forderung klar ist und die Kanzlei die gütliche Zahlung steuert.",
      "In der Praxis werden beide Funktionen integriert angewandt: Viele Fälle, die als einfache Forderung beginnen, offenbaren später eine buchhalterische Situation, die eine Abstimmung erfordert, und viele, die als Abstimmung beginnen, enden als gütlicher Einzug der als durchsetzbar bestätigten Beträge.",
    ]},
    { q: "Welche juristische Begleitung gilt in der außergerichtlichen Phase?", a: [
      "Die gesamte außergerichtliche Arbeit bei IJ Creditor wird von einem Anwalt der Kanzlei begleitet. Das Team besteht überwiegend aus Anwälten, und jede Mitteilung an den Schuldner —Schreiben, förmliche Mahnungen, Burofaxe— wird nach juristischen Maßstäben geprüft, um Beweiskraft, DSGVO-Konformität und, wo rechtlich einschlägig, die mögliche Wirkung der Unterbrechung von Verjährungsfristen sicherzustellen.",
    ]},
    { q: "Kann sich der Schuldner über das Inkassoverfahren beschweren?", a: [
      "IJ Creditor übt seine gesamte Tätigkeit im Einklang mit dem anwendbaren spanischen und europäischen Recht aus, einschließlich Datenschutz-, Verbraucher- und Berufsregeln. Die Kommunikation mit dem Schuldner erfolgt nach Maßstäben der Verhältnismäßigkeit, Nachvollziehbarkeit und juristischen Begleitung und vermeidet jede mit dem anwendbaren Rechtsrahmen unvereinbare Praxis.",
      "Die Tätigkeit wird ordnungsgemäß dokumentiert und an die Art jeder Akte angepasst —gewerblicher oder privater Schuldner, nationaler oder internationaler Umfang, außergerichtliche oder gerichtliche Phase—, um unnötiges Risiko sowohl für den Gläubiger-Mandanten als auch für die Kanzlei zu verringern.",
    ]},
    { q: "Was ist ein Burofax?", a: [
      "Das Burofax ist Spaniens beweissicherer Einschreibe-Standard, der einen Rechtsnachweis sowohl über den Inhalt als auch über die Zustellung einer Mitteilung liefert. Es wird vor Gericht als Beweis dafür zugelassen, dass der Schuldner förmlich benachrichtigt wurde, und hat gegebenenfalls die Rechtswirkung der Unterbrechung von Verjährungsfristen. Die Kanzlei setzt es ein, wann immer der Fall es erfordert.",
    ]},
    { q: "Was ist MASC und warum ist es wichtig?", a: [
      "MASC steht für „Medio Adecuado de Solución de Controversias“ — alternative Streitbeilegungsmethode. Nach dem spanischen Organgesetz 1/2025 muss in den meisten Zivil- und Handelsverfahren vor Einreichung einer Klage ein dokumentierter MASC-Versuch nachgewiesen werden. Das Gesetz sieht auch Ausnahmen vor, darunter Insolvenzverfahren, das Wechselverfahren, die Vollstreckung, vorläufige Sicherungsmaßnahmen und bestimmte Verfahren der freiwilligen Gerichtsbarkeit. Die Kanzlei erledigt den MASC-Versuch, wo erforderlich, und hinterlässt einen dokumentierten Nachweis, damit er der prozessualen Zulässigkeitsvoraussetzung genügt.",
    ]},
    { q: "Was ist der concurso de acreedores und wie wirkt er sich auf meine Forderung aus?", a: [
      "Der concurso de acreedores ist das spanische Insolvenzverfahren für Unternehmen und Privatpersonen, die ihren Verpflichtungen nicht nachkommen können. Sobald es eröffnet ist, müssen Gläubiger ihre Forderungen beim gerichtlich bestellten Insolvenzverwalter anmelden, und die außergerichtliche Phase endet. Die Kanzlei vertritt ausländische Gläubiger in spanischen Insolvenzverfahren: Anmeldung der Forderungen, Einstufung (bevorrechtigt, gewöhnlich, nachrangig), Begleitung des Vergleichs oder der Liquidation und gegebenenfalls Klage auf Ausdehnung der Haftung gegen die Geschäftsführer.",
      "Insolvenzangelegenheiten sind vom allgemeinen MASC-Regime ausgenommen; die Maßnahmen werden unmittelbar über das Insolvenzverfahren geführt.",
    ]},
    { q: "Wie wird der Mandant informiert?", a: [
      "Die Kanzlei berichtet dem Mandanten im je Fall vereinbarten Rhythmus und Format. Standardmäßig erfolgt der Bericht monatlich und umfasst den Stand jeder Akte, die durchgeführten Maßnahmen sowie eingezogene und offene Beträge.",
      "Zusätzlich stellt IJ Creditor seinen Mandanten eine Online-Anwendung zur Verfügung, über die sie den Stand ihrer Akten in Echtzeit einsehen können: Status jeder Forderung, beigetriebene Beträge, offener Saldo, letzte Maßnahmen und Gesamtentwicklung des Portfolios.",
      "Jedes relevante gerichtliche oder außergerichtliche Ereignis wird dem Mandanten zum Zeitpunkt seines Eintretens mitgeteilt, ohne den periodischen Bericht abzuwarten.",
    ]},
    { q: "Was geschieht mit den beigetriebenen Beträgen?", a: [
      "Für den Mandanten beigetriebene Beträge werden gemäß den Regeln der spanischen Anwaltschaft auf einem vom Vermögen der Kanzlei getrennten Bankkonto verwahrt und dem Mandanten im vorgesehenen Rhythmus und auf die vorgesehene Weise überwiesen.",
      "Die Kanzlei rechnet ihre Honorare gegen die tatsächlich eingezogenen Beträge ab und überweist den Saldo an den Mandanten.",
    ]},
  ],
};

const content: Partial<Record<Locale, FaqContent>> = { en, de };

export function getFaq(locale: Locale): FaqContent {
  return content[locale] ?? en;
}
