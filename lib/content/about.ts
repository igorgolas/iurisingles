import type { Locale } from "@/lib/i18n";
import type { Block } from "@/lib/content/services";

export type AboutPage = { title: string; blocks: Block[] };

const en: AboutPage = {
  title: "A Spanish debt collection firm and law office, working for creditors since 1992",
  blocks: [
    { t: "prose", paras: [
      "Iuris Justitia Creditor (IJ Creditor) is a Spanish debt collection firm specialised in commercial debt recovery and in legal services to creditors. It was founded in 1992 and has operated uninterruptedly ever since, with its head office at Paseo de la Castellana 120, in Madrid. The firm covers four service lines: out-of-court debt collection, judicial debt collection in Spain, international debt collection through a correspondent network, and credit & solvency reports.",
      "More than 3,000 companies —Spanish and foreign— have entrusted their unpaid claims to the firm over the years. Activity covers both B2B and, where applicable, B2C claims, applied under the same legal, technical and ethical criteria. More than 80% of cases entrusted to the firm are resolved at the out-of-court stage, without going to court.",
    ] },
    { t: "prose", title: "Debt collection firm and law firm", paras: [
      "IJ Creditor operates simultaneously as a Spanish debt collection firm and as a law firm. The practical consequence of this structure is that every step of the case, including the amicable phase, is supervised by a lawyer of the firm. Each communication with the debtor, each formal demand and each settlement proposal is drafted under legal criteria —evidentiary value, GDPR compliance, potential effect of interrupting limitation periods— and in accordance with applicable procedural law.",
      "The firm covers the entire credit cycle, from clarifying disputed balances when the claim is not clear-cut, to the judicial enforcement of unpaid amounts when court action becomes necessary.",
    ] },
    { t: "prose", title: "How we work", paras: [
      "The purpose of IJ Creditor is always the same: to find a solution that recovers the debt while, whenever possible, preserving the commercial relationship between the client and the debtor. Court proceedings are recommended only when out-of-court dialogue has been exhausted, or where, from the outset, it is not feasible. They are never the default route. This way of working is reflected in the firm's code of conduct, publicly available from this website.",
    ] },
    { t: "prose", title: "Team and network", paras: [
      "The team comprises in-house lawyers, case handlers and commercial-information specialists, all integrated at the Madrid head office. The firm is a member of international debt-collection and creditors’ associations — the European Collectors Association (ECA), the League International for Creditors (LIC International) and American Lawyers Quarterly — through which its correspondent network across multiple jurisdictions is maintained.",
    ] },
    { t: "prose", title: "Regulatory framework", paras: [
      "IJ Creditor's activity is governed simultaneously by the Code of Ethics of the Spanish Bar (Código Deontológico de la Abogacía Española, approved by the General Council of the Spanish Bar in March 2019), the General Statute of the Spanish Bar (Royal Decree 135/2021), and the industry codes of conduct adopted by the debt-collection associations to which the firm belongs.",
      "The relevant general Spanish and European legislation also applies, including the Spanish Civil Code, the Criminal Code, the Civil Procedure Act, Regulation (EU) 2016/679 (GDPR) and Organic Law 3/2018 (LOPDGDD), Law 18/2022 on the creation and growth of enterprises, Law 10/2010 on the prevention of money laundering, and EU legislation applicable to cross-border debt collection.",
    ] },
    { t: "prose", title: "Head office", paras: ["Paseo de la Castellana 120, 28046 Madrid, Spain."] },
  ],
};

const de: AboutPage = {
  title: "Eine spanische Inkassokanzlei und Anwaltskanzlei, im Dienst der Gläubiger seit 1992",
  blocks: [
    { t: "prose", paras: [
      "Iuris Justitia Creditor (IJ Creditor) ist eine spanische Inkassokanzlei, spezialisiert auf den gewerblichen Forderungseinzug und auf Rechtsdienstleistungen für Gläubiger. Sie wurde 1992 gegründet und ist seither ununterbrochen tätig, mit Hauptsitz am Paseo de la Castellana 120 in Madrid. Die Kanzlei deckt vier Leistungsbereiche ab: außergerichtlicher Forderungseinzug, gerichtlicher Forderungseinzug in Spanien, internationaler Forderungseinzug über ein Korrespondentennetz sowie Bonitäts- und Solvenzauskünfte.",
      "Mehr als 3.000 Unternehmen —spanische und ausländische— haben der Kanzlei im Laufe der Jahre ihre offenen Forderungen anvertraut. Die Tätigkeit umfasst sowohl B2B- als auch, soweit einschlägig, B2C-Forderungen, nach denselben rechtlichen, technischen und ethischen Maßstäben. Mehr als 80 % der anvertrauten Fälle werden außergerichtlich gelöst, ohne den Gang vor Gericht.",
    ] },
    { t: "prose", title: "Inkassokanzlei und Anwaltskanzlei", paras: [
      "IJ Creditor agiert zugleich als spanische Inkassokanzlei und als Anwaltskanzlei. Die praktische Folge dieser Struktur ist, dass jeder Schritt des Falls, einschließlich der außergerichtlichen Phase, von einem Anwalt der Kanzlei begleitet wird. Jede Mitteilung an den Schuldner, jede förmliche Mahnung und jeder Vergleichsvorschlag wird nach juristischen Maßstäben verfasst —Beweiskraft, DSGVO-Konformität, mögliche Wirkung der Unterbrechung von Verjährungsfristen— und im Einklang mit dem anwendbaren Verfahrensrecht.",
      "Die Kanzlei deckt den gesamten Forderungszyklus ab, von der Klärung strittiger Salden, wenn die Forderung nicht eindeutig ist, bis zur gerichtlichen Vollstreckung offener Beträge, wenn ein gerichtliches Vorgehen erforderlich wird.",
    ] },
    { t: "prose", title: "So arbeiten wir", paras: [
      "Das Ziel von IJ Creditor ist stets dasselbe: eine Lösung zu finden, die die Forderung beitreibt und dabei nach Möglichkeit die Geschäftsbeziehung zwischen Mandant und Schuldner erhält. Ein Gerichtsverfahren wird nur empfohlen, wenn der außergerichtliche Dialog ausgeschöpft ist oder von vornherein nicht in Betracht kommt. Es ist nie der Standardweg. Diese Arbeitsweise spiegelt sich im Verhaltenskodex der Kanzlei wider, der auf dieser Website öffentlich zugänglich ist.",
    ] },
    { t: "prose", title: "Team und Netzwerk", paras: [
      "Das Team besteht aus eigenen Anwälten, Sachbearbeitern und Spezialisten für Wirtschaftsauskünfte, alle am Hauptsitz in Madrid integriert. Die Kanzlei ist Mitglied internationaler Inkasso- und Gläubigerverbände — der European Collectors Association (ECA), der League International for Creditors (LIC International) und American Lawyers Quarterly —, über die ihr Korrespondentennetz über mehrere Rechtsordnungen hinweg aufrechterhalten wird.",
    ] },
    { t: "prose", title: "Rechtlicher Rahmen", paras: [
      "Die Tätigkeit von IJ Creditor unterliegt zugleich dem Standesrecht der spanischen Anwaltschaft (Código Deontológico de la Abogacía Española, vom Generalrat der spanischen Anwaltschaft im März 2019 verabschiedet), dem Allgemeinen Statut der spanischen Anwaltschaft (Königliches Dekret 135/2021) und den Verhaltenskodizes der Inkassoverbände, denen die Kanzlei angehört.",
      "Es gelten zudem die einschlägigen allgemeinen spanischen und europäischen Vorschriften, darunter das spanische Zivilgesetzbuch, das Strafgesetzbuch, das Zivilprozessgesetz, die Verordnung (EU) 2016/679 (DSGVO) und das Organgesetz 3/2018 (LOPDGDD), das Gesetz 18/2022 über Gründung und Wachstum von Unternehmen, das Gesetz 10/2010 zur Verhinderung der Geldwäsche sowie die für den grenzüberschreitenden Forderungseinzug geltenden EU-Vorschriften.",
    ] },
    { t: "prose", title: "Hauptsitz", paras: ["Paseo de la Castellana 120, 28046 Madrid, Spanien."] },
  ],
};

const fr: AboutPage = {
  title: "Un cabinet espagnol de recouvrement et d'avocats, au service des créanciers depuis 1992",
  blocks: [
    { t: "prose", paras: [
      "Iuris Justitia Creditor (IJ Creditor) est un cabinet espagnol de recouvrement spécialisé dans le recouvrement de créances commerciales et dans les services juridiques aux créanciers. Fondé en 1992, il opère sans interruption depuis lors, avec son siège au Paseo de la Castellana 120, à Madrid. Le cabinet couvre quatre lignes de service : recouvrement amiable, recouvrement judiciaire en Espagne, recouvrement international via un réseau de correspondants, et rapports de solvabilité.",
      "Plus de 3 000 entreprises —espagnoles et étrangères— ont confié leurs créances impayées au cabinet au fil des ans. L'activité couvre les créances B2B et, le cas échéant, B2C, selon les mêmes critères juridiques, techniques et éthiques. Plus de 80 % des dossiers confiés au cabinet se résolvent au stade amiable, sans passer devant les tribunaux.",
    ] },
    { t: "prose", title: "Cabinet de recouvrement et cabinet d'avocats", paras: [
      "IJ Creditor agit à la fois comme cabinet espagnol de recouvrement et comme cabinet d'avocats. La conséquence pratique de cette structure est que chaque étape du dossier, y compris la phase amiable, est supervisée par un avocat du cabinet. Chaque communication avec le débiteur, chaque mise en demeure et chaque proposition de règlement est rédigée selon des critères juridiques —valeur probante, conformité au RGPD, effet possible d'interruption de la prescription— et conformément au droit procédural applicable.",
      "Le cabinet couvre l'ensemble du cycle de la créance, de la clarification des soldes contestés lorsque la créance n'est pas évidente, jusqu'à l'exécution judiciaire des montants impayés lorsque l'action en justice devient nécessaire.",
    ] },
    { t: "prose", title: "Notre méthode", paras: [
      "L'objectif d'IJ Creditor est toujours le même : trouver une solution qui recouvre la créance tout en préservant, dans la mesure du possible, la relation commerciale entre le client et le débiteur. L'action judiciaire n'est recommandée que lorsque le dialogue amiable est épuisé ou, d'emblée, n'est pas envisageable. Elle n'est jamais la voie par défaut. Cette façon de travailler se reflète dans le code de conduite du cabinet, accessible publiquement depuis ce site.",
    ] },
    { t: "prose", title: "Équipe et réseau", paras: [
      "L'équipe se compose d'avocats internes, de gestionnaires de dossiers et de spécialistes de l'information commerciale, tous intégrés au siège de Madrid. Le cabinet est membre d'associations internationales de recouvrement et de créanciers — la European Collectors Association (ECA), la League International for Creditors (LIC International) et American Lawyers Quarterly —, par lesquelles est entretenu son réseau de correspondants à travers de multiples juridictions.",
    ] },
    { t: "prose", title: "Cadre réglementaire", paras: [
      "L'activité d'IJ Creditor est régie à la fois par le code de déontologie du barreau espagnol (Código Deontológico de la Abogacía Española, approuvé par le Conseil général du barreau espagnol en mars 2019), le statut général du barreau espagnol (décret royal 135/2021) et les codes de conduite sectoriels adoptés par les associations de recouvrement auxquelles le cabinet appartient.",
      "S'applique également la législation générale espagnole et européenne pertinente, dont le Code civil espagnol, le Code pénal, le code de procédure civile, le règlement (UE) 2016/679 (RGPD) et la loi organique 3/2018 (LOPDGDD), la loi 18/2022 sur la création et la croissance des entreprises, la loi 10/2010 sur la prévention du blanchiment de capitaux, ainsi que la législation de l'UE applicable au recouvrement transfrontalier.",
    ] },
    { t: "prose", title: "Siège", paras: ["Paseo de la Castellana 120, 28046 Madrid, Espagne."] },
  ],
};

const it: AboutPage = {
  title: "Uno studio spagnolo di recupero crediti e studio legale, al servizio dei creditori dal 1992",
  blocks: [
    { t: "prose", paras: [
      "Iuris Justitia Creditor (IJ Creditor) è uno studio spagnolo di recupero crediti specializzato nel recupero di crediti commerciali e nei servizi legali ai creditori. È stato fondato nel 1992 e opera ininterrottamente da allora, con sede al Paseo de la Castellana 120, a Madrid. Lo studio copre quattro linee di servizio: recupero stragiudiziale, recupero giudiziale in Spagna, recupero internazionale tramite una rete di corrispondenti e report commerciali e di solvibilità.",
      "Oltre 3.000 aziende —spagnole ed estere— hanno affidato negli anni i loro crediti insoluti allo studio. L'attività riguarda crediti B2B e, ove applicabile, B2C, secondo gli stessi criteri giuridici, tecnici ed etici. Oltre l'80% delle pratiche affidate allo studio si risolve in fase stragiudiziale, senza ricorrere al tribunale.",
    ] },
    { t: "prose", title: "Studio di recupero crediti e studio legale", paras: [
      "IJ Creditor opera al contempo come studio spagnolo di recupero crediti e come studio legale. La conseguenza pratica di questa struttura è che ogni fase della pratica, inclusa quella stragiudiziale, è supervisionata da un avvocato dello studio. Ogni comunicazione con il debitore, ogni diffida e ogni proposta di accordo è redatta secondo criteri giuridici —valore probatorio, conformità al GDPR, possibile effetto di interruzione della prescrizione— e in conformità al diritto processuale applicabile.",
      "Lo studio copre l'intero ciclo del credito, dal chiarimento dei saldi contestati quando il credito non è chiaro, fino all'esecuzione giudiziale degli importi insoluti quando l'azione giudiziaria diventa necessaria.",
    ] },
    { t: "prose", title: "Come lavoriamo", paras: [
      "Lo scopo di IJ Creditor è sempre lo stesso: trovare una soluzione che recuperi il credito preservando, ove possibile, il rapporto commerciale tra il cliente e il debitore. L'azione giudiziaria è raccomandata solo quando il dialogo stragiudiziale è esaurito o, fin dall'inizio, non è praticabile. Non è mai la via predefinita. Questo modo di lavorare si riflette nel codice di condotta dello studio, pubblicamente disponibile da questo sito.",
    ] },
    { t: "prose", title: "Team e rete", paras: [
      "Il team è composto da avvocati interni, gestori delle pratiche e specialisti di informazioni commerciali, tutti integrati nella sede di Madrid. Lo studio è membro di associazioni internazionali di recupero crediti e di creditori — la European Collectors Association (ECA), la League International for Creditors (LIC International) e American Lawyers Quarterly —, attraverso le quali è mantenuta la sua rete di corrispondenti in molteplici giurisdizioni.",
    ] },
    { t: "prose", title: "Quadro normativo", paras: [
      "L'attività di IJ Creditor è disciplinata al contempo dal codice deontologico dell'avvocatura spagnola (Código Deontológico de la Abogacía Española, approvato dal Consiglio generale dell'avvocatura spagnola nel marzo 2019), dallo statuto generale dell'avvocatura spagnola (regio decreto 135/2021) e dai codici di condotta di settore adottati dalle associazioni di recupero crediti a cui lo studio appartiene.",
      "Si applica inoltre la pertinente legislazione generale spagnola ed europea, tra cui il Codice civile spagnolo, il Codice penale, il codice di procedura civile, il regolamento (UE) 2016/679 (GDPR) e la legge organica 3/2018 (LOPDGDD), la legge 18/2022 sulla creazione e crescita delle imprese, la legge 10/2010 sulla prevenzione del riciclaggio e la legislazione UE applicabile al recupero crediti transfrontaliero.",
    ] },
    { t: "prose", title: "Sede", paras: ["Paseo de la Castellana 120, 28046 Madrid, Spagna."] },
  ],
};

const content: Partial<Record<Locale, AboutPage>> = { en, de, fr, it };

export function getAbout(locale: Locale): AboutPage {
  return content[locale] ?? en;
}
