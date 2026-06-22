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

const fr: FaqContent = {
  title: "Questions fréquentes",
  intro: "Les questions les plus fréquemment posées par les clients et les visiteurs. Si votre question n'a pas de réponse ici, contactez le cabinet via le formulaire « Demander une proposition » ou la page Contact.",
  items: [
    { q: "Comment fonctionnent vos honoraires ?", a: [
      "Le travail amiable est rendu aux honoraires de résultat : une commission sur le montant effectivement recouvré, sans coût initial. Si rien n'est recouvré, aucun honoraire variable n'est facturé.",
      "Certaines actions spécifiques ou coûts de tiers —rapports d'information commerciale, burofax espagnols, certifications de registre ou services externes nécessaires à la gestion— peuvent entraîner un coût supplémentaire, dans tous les cas avec information préalable et approbation expresse du client.",
      "Pour l'action judiciaire, les honoraires sont convenus par écrit dans un devis fermé avant toute action, calculés selon le type de procédure et le montant en jeu.",
    ]},
    { q: "Que se passe-t-il si vous ne recouvrez rien ?", a: [
      "En phase amiable, les honoraires variables ne sont dus que lorsque le client recouvre des montants. Avant de passer en justice, un rapport de faisabilité judiciaire sans frais est établi pour évaluer les perspectives de succès. Si le rapport déconseille le dépôt, la recommandation est communiquée au client de façon motivée.",
    ]},
    { q: "Y a-t-il un montant minimum pour prendre un dossier ?", a: [
      "Non. Il n'y a pas de seuil minimum. Pour les petits montants, la voie la plus efficace est évaluée en termes de coût-bénéfice ; si une voie donnée n'est pas raisonnable au vu du rapport entre coût attendu et montant réclamé, le cabinet l'explique au client pour qu'il décide en toute connaissance de cause.",
    ]},
    { q: "Traitez-vous aussi des portefeuilles de petits montants ?", a: [
      "Oui. IJ Creditor traite aussi bien des dossiers individuels de valeur élevée que des portefeuilles de nombreux petits montants. Dans chaque cas, la proportionnalité entre coût attendu et perspectives réalistes de recouvrement est évaluée, en recommandant la voie la plus efficace sur le plan économique et juridique.",
      "Dans certains secteurs —transport, location de véhicules, approvisionnements récurrents, services B2B— il est courant de travailler avec de larges portefeuilles de montants petits mais répétitifs, pour lesquels le cabinet dispose de modèles spécifiques de gestion et de rapprochement.",
    ]},
    { q: "Dois-je me rendre en Espagne pour recouvrer une créance sur un débiteur espagnol ?", a: [
      "Non. Le bureau de Madrid gère le dossier directement du début à la fin. Vous communiquez avec le cabinet en anglais ; le cabinet communique avec le débiteur en espagnol, en personne lorsque cela apporte une valeur ajoutée. Pour l'action judiciaire, le cabinet utilise une procuration notariée signée dans votre pays, généralement apostillée au titre de la Convention de La Haye.",
    ]},
    { q: "Combien de temps faut-il pour recouvrer une créance en Espagne ?", a: [
      "Les délais en phase amiable dépendent de la complexité du dossier, de la solvabilité et de la disposition du débiteur et de la fonction activée. Les dossiers simples se clôturent en quelques semaines ; ceux qui exigent un rapprochement des soldes ou la négociation d'un plan de paiement peuvent prendre quelques mois. La majorité des dossiers confiés à IJ Creditor se résolvent au stade amiable. L'action judiciaire dépend de la procédure et du tribunal.",
    ]},
    { q: "Un jugement espagnol peut-il être exécuté contre un débiteur dans un autre pays de l'UE ?", a: [
      "Oui. En vertu du règlement (UE) 1215/2012 (Bruxelles I bis), un titre exécutoire espagnol est reconnu et exécuté directement dans tout autre État membre de l'UE, sans exequatur. Le tribunal de l'État membre reçoit le jugement certifié et le certificat Bruxelles I bis et procède à l'exécution selon le droit procédural local. Le cabinet gère le volet espagnol et coordonne avec ses partenaires dans l'État d'exécution.",
    ]},
    { q: "Un jugement étranger peut-il être exécuté en Espagne ?", a: [
      "Oui. Si le jugement a été rendu dans un État membre de l'UE, Bruxelles I bis s'applique —reconnaissance et exécution directes sans exequatur. Si le jugement provient d'un pays hors UE, la reconnaissance et l'exécution passent par la procédure espagnole d'exequatur au titre de la loi 29/2015 sur la coopération juridique internationale en matière civile et des conventions internationales applicables.",
    ]},
    { q: "Quelle est la différence entre rapprochement des soldes et recouvrement ?", a: [
      "Le rapprochement des soldes est l'étape où le cabinet agit comme interlocuteur technique entre créancier et débiteur pour clarifier la composition réelle de la créance avant de réclamer le paiement : paiements déjà imputés, avoirs en attente, remises commerciales, erreurs d'imputation ou divergences comptables.",
      "Le recouvrement est l'étape où la créance est claire et où le cabinet gère le paiement amiable.",
      "En pratique, les deux fonctions s'appliquent de manière intégrée : de nombreux dossiers qui débutent comme de simples créances révèlent ensuite une situation comptable nécessitant un rapprochement, et beaucoup qui débutent comme des rapprochements se terminent par le recouvrement amiable des montants confirmés comme exigibles.",
    ]},
    { q: "Quelle supervision juridique s'applique en phase amiable ?", a: [
      "Tout le travail amiable chez IJ Creditor est supervisé par un avocat du cabinet. L'équipe est composée majoritairement d'avocats, et chaque communication avec le débiteur —lettres, mises en demeure, burofax— est examinée selon des critères juridiques afin d'assurer la valeur probante, la conformité au RGPD et, lorsque la loi l'applique, l'effet possible d'interruption de la prescription.",
    ]},
    { q: "Le débiteur peut-il se plaindre du processus de recouvrement ?", a: [
      "IJ Creditor exerce l'ensemble de son activité conformément au droit espagnol et européen applicable, y compris les règles de protection des données, de consommation et de déontologie. Les communications avec le débiteur sont menées selon des critères de proportionnalité, de traçabilité et de supervision juridique, en évitant toute pratique incompatible avec le cadre légal applicable.",
      "L'activité est dûment documentée et adaptée à la nature de chaque dossier —débiteur professionnel ou particulier, portée nationale ou internationale, phase amiable ou judiciaire— afin de réduire le risque inutile tant pour le client créancier que pour le cabinet.",
    ]},
    { q: "Qu'est-ce qu'un burofax ?", a: [
      "Le burofax est le service postal certifié de référence en Espagne, apportant une preuve juridique à la fois du contenu et de la remise d'une communication. Il est admis comme preuve en justice que le débiteur a été formellement notifié et, le cas échéant, a l'effet juridique d'interrompre la prescription. Le cabinet l'utilise chaque fois que le dossier l'exige.",
    ]},
    { q: "Qu'est-ce que le MASC et pourquoi est-ce important ?", a: [
      "MASC signifie « Medio Adecuado de Solución de Controversias » — méthode alternative de résolution des litiges. À la suite de la loi organique espagnole 1/2025, dans la plupart des procédures civiles et commerciales, une tentative documentée de MASC doit être prouvée avant de déposer une demande en justice. La loi prévoit aussi des exceptions, dont les procédures d'insolvabilité, la procédure de change, l'exécution, les mesures conservatoires préalables et certaines procédures gracieuses. Le cabinet effectue la tentative MASC lorsqu'elle est requise, en laissant une trace documentée afin qu'elle compte pour la recevabilité procédurale.",
    ]},
    { q: "Qu'est-ce que le concurso de acreedores et comment affecte-t-il ma créance ?", a: [
      "Le concurso de acreedores est la procédure espagnole d'insolvabilité pour les entreprises et les particuliers incapables de faire face à leurs obligations. Une fois ouverte, les créanciers doivent déclarer leurs créances à l'administrateur judiciaire désigné et la phase amiable s'arrête. Le cabinet représente les créanciers étrangers dans les procédures d'insolvabilité espagnoles : déclaration des créances, classification (privilégiée, ordinaire, subordonnée), suivi du concordat ou de la liquidation et, le cas échéant, action en extension de responsabilité contre les dirigeants.",
      "Les questions d'insolvabilité sont exclues du régime général du MASC ; les actions sont menées directement via la procédure d'insolvabilité.",
    ]},
    { q: "Comment le client est-il tenu informé ?", a: [
      "Le cabinet rend compte au client au rythme et dans le format convenus pour chaque dossier. Par défaut, le reporting est mensuel et inclut l'état de chaque dossier, les actions menées, les montants recouvrés et restants.",
      "En outre, IJ Creditor met à disposition de ses clients une application en ligne permettant de consulter en temps réel l'état de leurs dossiers : statut de chaque créance, montants recouvrés, solde restant, dernières actions et évolution globale du portefeuille.",
      "Tout événement procédural ou amiable pertinent est communiqué au client au moment où il se produit, sans attendre le rapport périodique.",
    ]},
    { q: "Que deviennent les montants recouvrés ?", a: [
      "Les montants recouvrés pour le client sont conservés sur un compte bancaire distinct des actifs du cabinet, conformément aux règles du barreau espagnol, et sont transférés au client au rythme et selon la méthode prévus.",
      "Le cabinet facture ses honoraires sur les montants effectivement encaissés et reverse le solde au client.",
    ]},
  ],
};

const it: FaqContent = {
  title: "Domande frequenti",
  intro: "Le domande più frequenti di clienti e visitatori. Se la tua domanda non trova risposta qui, contatta lo studio tramite il modulo « Richiedi una proposta » o la pagina Contatti.",
  items: [
    { q: "Come funzionano i vostri onorari?", a: [
      "Il lavoro stragiudiziale è reso a success fee: una commissione sull'importo effettivamente recuperato, senza costi iniziali. Se non si recupera nulla, non si addebitano onorari variabili.",
      "Determinate azioni specifiche o costi di terzi —report di informazioni commerciali, burofax spagnoli, certificazioni di registro o servizi esterni necessari alla gestione— possono comportare un costo aggiuntivo, in ogni caso con informazione preventiva e approvazione espressa del cliente.",
      "Per l'azione giudiziaria, gli onorari sono concordati per iscritto in un preventivo chiuso prima di qualsiasi azione, calcolati in base al tipo di procedimento e all'importo in gioco.",
    ]},
    { q: "Cosa succede se non recuperate nulla?", a: [
      "In fase stragiudiziale, gli onorari variabili maturano solo quando il cliente recupera importi. Prima di passare in giudizio si redige una relazione di fattibilità giudiziaria senza costi per valutare le prospettive di successo. Se la relazione sconsiglia il deposito, la raccomandazione è comunicata al cliente in modo motivato.",
    ]},
    { q: "Esiste un importo minimo per accettare una pratica?", a: [
      "No. Non c'è una soglia minima. Per importi piccoli si valuta la via più efficiente in termini di costi-benefici; se una determinata via non è ragionevole rispetto al rapporto tra costo atteso e importo richiesto, lo studio lo spiega al cliente affinché decida con piena informazione.",
    ]},
    { q: "Gestite anche portafogli di piccoli importi?", a: [
      "Sì. IJ Creditor gestisce sia singole pratiche di valore elevato sia portafogli di numerosi piccoli importi. In ogni caso si valuta la proporzionalità tra costo atteso e prospettive realistiche di recupero, raccomandando la via più efficiente dal punto di vista economico e giuridico.",
      "In alcuni settori —trasporto, autonoleggio, forniture ricorrenti, servizi B2B— è comune lavorare con ampi portafogli di importi piccoli ma ripetitivi, per i quali lo studio dispone di modelli specifici di gestione e riconciliazione.",
    ]},
    { q: "Devo recarmi in Spagna per recuperare un credito da un debitore spagnolo?", a: [
      "No. L'ufficio di Madrid gestisce la pratica direttamente dall'inizio alla fine. Tu comunichi con lo studio in inglese; lo studio comunica con il debitore in spagnolo, di persona dove aggiunge valore. Per l'azione giudiziaria, lo studio utilizza una procura notarile firmata nel tuo Paese, di norma apostillata ai sensi della Convenzione dell'Aia.",
    ]},
    { q: "Quanto tempo occorre per recuperare un credito in Spagna?", a: [
      "I tempi in fase stragiudiziale dipendono dalla complessità della pratica, dalla solvibilità e disponibilità del debitore e dalla funzione attivata. Le pratiche più semplici si chiudono in settimane; quelle che richiedono una riconciliazione dei saldi o la negoziazione di un piano di pagamento possono richiedere alcuni mesi. La maggior parte delle pratiche affidate a IJ Creditor si risolve in fase stragiudiziale. L'azione giudiziaria dipende dal procedimento e dal tribunale.",
    ]},
    { q: "Una sentenza spagnola può essere eseguita contro un debitore in un altro Paese UE?", a: [
      "Sì. Ai sensi del regolamento (UE) 1215/2012 (Bruxelles I bis), un titolo esecutivo spagnolo è riconosciuto ed eseguito direttamente in qualsiasi altro Stato membro UE, senza exequatur. Il tribunale dello Stato membro riceve la sentenza certificata e il certificato Bruxelles I bis e procede all'esecuzione secondo il diritto processuale locale. Lo studio gestisce il versante spagnolo e si coordina con i suoi partner nello Stato di esecuzione.",
    ]},
    { q: "Una sentenza estera può essere eseguita in Spagna?", a: [
      "Sì. Se la sentenza è stata emessa in uno Stato membro UE, si applica Bruxelles I bis —riconoscimento ed esecuzione diretti senza exequatur. Se la sentenza proviene da un Paese extra-UE, il riconoscimento e l'esecuzione passano per la procedura spagnola di exequatur ai sensi della legge 29/2015 sulla cooperazione giuridica internazionale in materia civile e delle convenzioni internazionali applicabili.",
    ]},
    { q: "Qual è la differenza tra riconciliazione dei saldi e recupero crediti?", a: [
      "La riconciliazione dei saldi è la fase in cui lo studio agisce come interlocutore tecnico tra creditore e debitore per chiarire l'effettiva composizione del credito prima di richiederne il pagamento: pagamenti già imputati, note di credito in sospeso, sconti commerciali, errori di imputazione o discrepanze contabili.",
      "Il recupero crediti è la fase in cui il credito è chiaro e lo studio gestisce il pagamento amichevole.",
      "In pratica, le due funzioni si applicano in modo integrato: molte pratiche che iniziano come semplici crediti rivelano poi una situazione contabile che richiede una riconciliazione, e molte che iniziano come riconciliazioni si concludono come recupero amichevole degli importi confermati come esigibili.",
    ]},
    { q: "Quale supervisione legale si applica nella fase stragiudiziale?", a: [
      "Tutto il lavoro stragiudiziale di IJ Creditor è supervisionato da un avvocato dello studio. Il team è composto principalmente da avvocati e ogni comunicazione con il debitore —lettere, diffide, burofax— è esaminata secondo criteri giuridici per garantire valore probatorio, conformità al GDPR e, ove la legge lo preveda, il possibile effetto di interruzione della prescrizione.",
    ]},
    { q: "Il debitore può presentare un reclamo sul processo di recupero?", a: [
      "IJ Creditor svolge tutta la sua attività in conformità al diritto spagnolo ed europeo applicabile, comprese le norme su protezione dei dati, consumatori e deontologia. Le comunicazioni con il debitore sono condotte secondo criteri di proporzionalità, tracciabilità e supervisione legale, evitando qualsiasi pratica incompatibile con il quadro giuridico applicabile.",
      "L'attività è debitamente documentata e adattata alla natura di ciascuna pratica —debitore aziendale o privato, ambito nazionale o internazionale, fase stragiudiziale o giudiziale— al fine di ridurre rischi inutili sia per il cliente creditore sia per lo studio.",
    ]},
    { q: "Che cos'è un burofax?", a: [
      "Il burofax è il servizio postale certificato di riferimento in Spagna, che fornisce prova giuridica sia del contenuto sia della consegna di una comunicazione. È ammesso come prova in giudizio che il debitore è stato formalmente notificato e, ove applicabile, ha l'effetto giuridico di interrompere la prescrizione. Lo studio lo utilizza ogniqualvolta la pratica lo richieda.",
    ]},
    { q: "Che cos'è il MASC e perché è importante?", a: [
      "MASC sta per « Medio Adecuado de Solución de Controversias » — metodo alternativo di risoluzione delle controversie. A seguito della legge organica spagnola 1/2025, nella maggior parte dei procedimenti civili e commerciali occorre dimostrare un tentativo documentato di MASC prima di depositare una domanda giudiziale. La legge prevede anche eccezioni, tra cui le procedure di insolvenza, il procedimento cambiario, l'esecuzione, le misure cautelari preventive e alcuni procedimenti di volontaria giurisdizione. Lo studio effettua il tentativo MASC ove richiesto, lasciandone traccia documentata affinché valga ai fini del requisito di ammissibilità procedurale.",
    ]},
    { q: "Che cos'è il concurso de acreedores e come incide sul mio credito?", a: [
      "Il concurso de acreedores è la procedura spagnola di insolvenza per imprese e privati che non riescono a far fronte alle proprie obbligazioni. Una volta aperta, i creditori devono insinuare i propri crediti presso il curatore nominato dal tribunale e la fase stragiudiziale si interrompe. Lo studio rappresenta i creditori esteri nelle procedure di insolvenza spagnole: insinuazione dei crediti, classificazione (privilegiato, chirografario, subordinato), monitoraggio del concordato o della liquidazione e, ove applicabile, azione di estensione di responsabilità nei confronti degli amministratori.",
      "Le questioni di insolvenza sono escluse dal regime generale MASC; le azioni sono incanalate direttamente nella procedura di insolvenza.",
    ]},
    { q: "Come viene tenuto informato il cliente?", a: [
      "Lo studio rendiconta al cliente con la cadenza e nel formato concordati per ciascuna pratica. Per impostazione predefinita la rendicontazione è mensile e include lo stato di ogni pratica, le azioni svolte, gli importi recuperati e quelli residui.",
      "Inoltre, IJ Creditor mette a disposizione dei clienti un'applicazione online dalla quale consultare in tempo reale lo stato delle proprie pratiche: stato di ogni credito, importi recuperati, saldo residuo, ultime azioni ed evoluzione complessiva del portafoglio.",
      "Qualsiasi evento giudiziale o stragiudiziale rilevante è comunicato al cliente nel momento in cui si verifica, senza attendere il rendiconto periodico.",
    ]},
    { q: "Cosa succede agli importi recuperati?", a: [
      "Gli importi recuperati per il cliente sono custoditi su un conto bancario separato dal patrimonio dello studio, conformemente alle norme dell'avvocatura spagnola, e sono trasferiti al cliente con la cadenza e secondo le modalità previste.",
      "Lo studio fattura i propri onorari sugli importi effettivamente incassati e versa il saldo al cliente.",
    ]},
  ],
};

const pt: FaqContent = {
  title: "Perguntas frequentes",
  intro: "As perguntas mais frequentes de clientes e visitantes. Se a sua pergunta não tiver resposta aqui, contacte a sociedade através do formulário « Solicitar uma proposta » ou da página de Contacto.",
  items: [
    { q: "Como funcionam os vossos honorários?", a: [
      "O trabalho extrajudicial é prestado com honorários de êxito: uma comissão sobre o montante efetivamente recuperado, sem custo inicial. Se nada for recuperado, não são cobrados honorários variáveis.",
      "Determinadas ações específicas ou custos de terceiros —relatórios de informação comercial, burofax espanhóis, certidões de registo ou serviços externos necessários à gestão— podem implicar custo adicional, em todos os casos com informação prévia e aprovação expressa do cliente.",
      "Na ação judicial, os honorários são acordados por escrito num orçamento fechado antes de qualquer ação, calculados em função do tipo de procedimento e do montante em causa.",
    ]},
    { q: "E se não recuperarem nada?", a: [
      "Na fase amigável, os honorários variáveis só são devidos quando o cliente recupera montantes. Antes de avançar para tribunal, elabora-se um relatório de viabilidade judicial sem custo, que avalia as perspetivas de êxito. Se o relatório desaconselhar a apresentação da ação, a recomendação é comunicada de forma fundamentada ao cliente.",
    ]},
    { q: "Existe um montante mínimo para aceitar um caso?", a: [
      "Não. Não há limite mínimo. Para montantes pequenos, avalia-se a via mais eficiente em termos de custo-benefício; se uma determinada via não for razoável face à relação entre o custo esperado e o montante reclamado, a sociedade explica-o ao cliente para que decida com informação completa.",
    ]},
    { q: "Também tratam carteiras de pequenos montantes?", a: [
      "Sim. A IJ Creditor trata tanto casos individuais de valor elevado como carteiras de numerosos pequenos montantes. Em cada caso avalia-se a proporcionalidade entre o custo esperado e as perspetivas realistas de recuperação, recomendando a via mais eficiente do ponto de vista económico e jurídico.",
      "Em certos setores —transporte, aluguer de viaturas, fornecimentos recorrentes, serviços B2B— é comum trabalhar com carteiras amplas de montantes pequenos mas repetitivos, para os quais a sociedade dispõe de modelos específicos de gestão e reconciliação.",
    ]},
    { q: "Tenho de me deslocar a Espanha para recuperar um crédito de um devedor espanhol?", a: [
      "Não. O escritório de Madrid gere o caso diretamente do início ao fim. Comunica com a sociedade em inglês; a sociedade comunica com o devedor em espanhol, presencialmente quando acrescenta valor. Para a ação judicial, a sociedade utiliza uma procuração notarial assinada no seu país, normalmente com apostila ao abrigo da Convenção de Haia.",
    ]},
    { q: "Quanto tempo demora a recuperar um crédito em Espanha?", a: [
      "Os prazos na fase amigável dependem da complexidade do caso, da solvência e disposição do devedor e da função ativada. Os casos mais simples encerram-se em semanas; os que exigem reconciliação de saldos ou negociação de um plano de pagamento podem demorar alguns meses. A maioria dos casos confiados à IJ Creditor resolve-se na fase extrajudicial. A ação judicial depende do procedimento e do tribunal.",
    ]},
    { q: "Uma sentença espanhola pode ser executada contra um devedor noutro país da UE?", a: [
      "Sim. Ao abrigo do Regulamento (UE) 1215/2012 (Bruxelas I bis), um título executivo espanhol é reconhecido e executado diretamente em qualquer outro Estado-Membro da UE, sem exequatur. O tribunal do Estado-Membro recebe a sentença certificada e o certificado Bruxelas I bis e procede à execução segundo o direito processual local. A sociedade trata da parte espanhola e coordena com os seus parceiros no Estado de execução.",
    ]},
    { q: "Uma sentença estrangeira pode ser executada em Espanha?", a: [
      "Sim. Se a sentença foi proferida num Estado-Membro da UE, aplica-se Bruxelas I bis —reconhecimento e execução diretos sem exequatur. Se a sentença vem de um país terceiro, o reconhecimento e a execução passam pelo procedimento espanhol de exequatur ao abrigo da Lei 29/2015 sobre cooperação jurídica internacional em matéria civil e das convenções internacionais aplicáveis.",
    ]},
    { q: "Qual é a diferença entre reconciliação de saldos e cobrança?", a: [
      "A reconciliação de saldos é a fase em que a sociedade atua como interlocutor técnico entre credor e devedor para esclarecer a composição real da dívida antes de exigir o pagamento: pagamentos já imputados, notas de crédito pendentes, descontos comerciais, erros de imputação ou divergências contabilísticas.",
      "A cobrança é a fase em que a dívida é clara e a sociedade gere o pagamento amigável.",
      "Na prática, as duas funções aplicam-se de forma integrada: muitos casos que começam como créditos simples revelam depois uma situação contabilística que exige reconciliação, e muitos que começam como reconciliações terminam como cobrança amigável dos montantes confirmados como exigíveis.",
    ]},
    { q: "Que supervisão jurídica se aplica na fase amigável?", a: [
      "Todo o trabalho extrajudicial da IJ Creditor é supervisionado por um advogado da sociedade. A equipa é composta maioritariamente por advogados, e cada comunicação com o devedor —cartas, interpelações formais, burofax— é revista segundo critérios jurídicos para assegurar a validade probatória, a conformidade com o RGPD e, quando a lei o aplica, o possível efeito de interrupção da prescrição.",
    ]},
    { q: "O devedor pode apresentar queixa sobre o processo de cobrança?", a: [
      "A IJ Creditor exerce toda a sua atividade em conformidade com o direito espanhol e europeu aplicável, incluindo as regras de proteção de dados, de consumo e de deontologia. As comunicações com o devedor são conduzidas segundo critérios de proporcionalidade, rastreabilidade e supervisão jurídica, evitando qualquer prática incompatível com o quadro legal aplicável.",
      "A atividade é devidamente documentada e adaptada à natureza de cada processo —devedor empresarial ou particular, âmbito nacional ou internacional, fase amigável ou judicial— a fim de reduzir riscos desnecessários tanto para o cliente credor como para a sociedade.",
    ]},
    { q: "O que é um burofax?", a: [
      "O burofax é o serviço postal certificado de referência em Espanha, que fornece prova jurídica tanto do conteúdo como da entrega de uma comunicação. É admitido como prova em tribunal de que o devedor foi formalmente notificado e, quando aplicável, tem o efeito jurídico de interromper a prescrição. A sociedade utiliza-o sempre que o caso o exija.",
    ]},
    { q: "O que é o MASC e porque é importante?", a: [
      "MASC significa « Medio Adecuado de Solución de Controversias » — método adequado de resolução de litígios. Na sequência da Lei Orgânica espanhola 1/2025, na maioria dos processos civis e comerciais é necessário comprovar uma tentativa documentada de MASC antes de apresentar uma ação em tribunal. A lei prevê também exceções, incluindo os processos de insolvência, o procedimento cambiário, a execução, as providências cautelares prévias e certos processos de jurisdição voluntária. A sociedade realiza a tentativa de MASC quando exigida, deixando registo documentado para que conte para o requisito de admissibilidade processual.",
    ]},
    { q: "O que é o concurso de acreedores e como afeta o meu crédito?", a: [
      "O concurso de acreedores é o processo de insolvência espanhol para empresas e particulares incapazes de cumprir as suas obrigações. Uma vez aberto, os credores devem reclamar os seus créditos ao administrador da insolvência nomeado pelo tribunal e a fase amigável para. A sociedade representa os credores estrangeiros nos processos de insolvência espanhóis: reclamação de créditos, classificação (privilegiado, comum, subordinado), acompanhamento do acordo ou da liquidação e, quando aplicável, ação de extensão de responsabilidade contra os administradores.",
      "As questões de insolvência estão excluídas do regime geral do MASC; as ações são conduzidas diretamente através do processo de insolvência.",
    ]},
    { q: "Como é mantido o cliente informado?", a: [
      "A sociedade presta contas ao cliente na cadência e no formato acordados em cada caso. Por defeito, o reporte é mensal e inclui o estado de cada processo, as ações realizadas, os montantes cobrados e os pendentes.",
      "Além disso, a IJ Creditor disponibiliza aos seus clientes uma aplicação online a partir da qual podem consultar em tempo real o estado dos seus processos: estado de cada crédito, montantes recuperados, saldo pendente, últimas ações e evolução global da carteira.",
      "Qualquer evento processual ou extrajudicial relevante é comunicado ao cliente no momento em que ocorre, sem aguardar o relatório periódico.",
    ]},
    { q: "O que acontece aos montantes recuperados?", a: [
      "Os montantes recuperados para o cliente são guardados numa conta bancária separada do património da sociedade, em conformidade com as regras da Ordem dos Advogados espanhola, e são transferidos para o cliente na cadência e pelo método previstos.",
      "A sociedade fatura os seus honorários sobre os montantes efetivamente cobrados e entrega o saldo ao cliente.",
    ]},
  ],
};
const content: Partial<Record<Locale, FaqContent>> = { en, pt, de, fr, it };

export function getFaq(locale: Locale): FaqContent {
  return content[locale] ?? en;
}
