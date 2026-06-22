import type { Locale } from "@/lib/i18n";
import type { ServiceSlug } from "@/lib/content/services";

export type ServicesIndex = { title: string; intro: string; detail: Record<ServiceSlug, string> };
export type IndustriesIndex = { title: string; intro: string; closing: string[] };

const servicesEn: ServicesIndex = {
  title: "Debt collection and legal services to creditors since 1992",
  intro: "Whatever service is requested, the objective is the same: to find a solution that recovers the debt while preserving, wherever possible, the commercial relationship between the client and the debtor. More than 80% of the cases IJ Creditor takes on are resolved at the out-of-court stage, without filing a claim.",
  detail: {
    "out-of-court-debt-collection": "Success-fee recovery on the amount actually collected: no recovery, no variable fees. The out-of-court work is performed by a team formed mainly by lawyers and supervised, file by file, by a lawyer of the firm, combining balance reconciliation and amicable collection.",
    "judicial-debt-collection": "When the amicable phase does not succeed, IJ Creditor takes direct legal representation in the most suitable procedure —monitorio, verbal, ordinary, enforcement or insolvency— preceded, wherever possible, by a judicial feasibility report and launched under a lump-sum fee agreed in writing.",
    "international-debt-collection": "For foreign clients whose debtors are located outside Spain. IJ Creditor coordinates the case from Madrid and executes it in the debtor's country through its network of correspondents, in both the amicable and, where appropriate, the judicial phase.",
    "credit-solvency-reports": "Commercial, asset and solvency information on companies and individuals, prepared from public registries and specialised providers for credit decisions, portfolio monitoring and recovery feasibility. IJ Creditor does not maintain its own databases.",
  },
};
const industriesEn: IndustriesIndex = {
  title: "Sectors where we recover for foreign creditors with debtors in Spain",
  intro: "IJ Creditor has handled unpaid claims for foreign creditors in virtually all economic sectors with debtors in Spain. It identifies the areas with recurrent experience and specific knowledge of the commercial customs, contractual standards and legal particularities that affect debt collection in Spain.",
  closing: [
    "Each sector has its own default dynamics —debtor profile, invoice nature, customary payment terms, standard contractual guarantees and most efficient claim routes. Sector specialisation allows the firm to quickly recognise the specifics of each case and tailor the collection strategy without delay.",
    "For sectors not listed here, IJ Creditor also handles files through its general service line. Sector specialisation is a complement that adds value where it applies, not a precondition for accessing the service.",
  ],
};

const servicesDe: ServicesIndex = {
  title: "Forderungseinzug und Rechtsdienstleistungen für Gläubiger seit 1992",
  intro: "Welche Leistung auch immer angefragt wird, das Ziel ist stets dasselbe: eine Lösung zu finden, die die Forderung beitreibt und dabei nach Möglichkeit die Geschäftsbeziehung zwischen Mandant und Schuldner erhält. Mehr als 80 % der von IJ Creditor übernommenen Fälle werden außergerichtlich gelöst, ohne Klage.",
  detail: {
    "out-of-court-debt-collection": "Einzug auf Erfolgshonorarbasis auf den tatsächlich eingezogenen Betrag: keine Beitreibung, keine variablen Honorare. Die außergerichtliche Arbeit erfolgt durch ein überwiegend aus Anwälten bestehendes Team und wird fallweise von einem Anwalt der Kanzlei begleitet, mit Saldenabstimmung und gütlichem Einzug.",
    "judicial-debt-collection": "Wenn die gütliche Phase nicht gelingt, übernimmt IJ Creditor die direkte rechtliche Vertretung im geeignetsten Verfahren —monitorio, verbal, ordentlich, Vollstreckung oder Insolvenz—, nach Möglichkeit mit vorausgehendem Bericht zur Erfolgsaussicht und zu einem schriftlich vereinbarten Pauschalhonorar.",
    "international-debt-collection": "Für ausländische Mandanten, deren Schuldner außerhalb Spaniens ansässig sind. IJ Creditor koordiniert den Fall von Madrid aus und führt ihn im Land des Schuldners über sein Korrespondentennetz aus, sowohl in der gütlichen als auch gegebenenfalls in der gerichtlichen Phase.",
    "credit-solvency-reports": "Handels-, Vermögens- und Solvenzinformationen über Unternehmen und Privatpersonen, erstellt aus öffentlichen Registern und spezialisierten Anbietern für Kreditentscheidungen, Portfolioüberwachung und Einzugs-Erfolgsaussicht. IJ Creditor unterhält keine eigenen Datenbanken.",
  },
};
const industriesDe: IndustriesIndex = {
  title: "Branchen, in denen wir für ausländische Gläubiger mit Schuldnern in Spanien beitreiben",
  intro: "IJ Creditor hat offene Forderungen ausländischer Gläubiger in praktisch allen Wirtschaftszweigen mit Schuldnern in Spanien bearbeitet. Die Kanzlei benennt die Bereiche mit wiederkehrender Erfahrung und spezifischer Kenntnis der Handelsgepflogenheiten, Vertragsstandards und rechtlichen Besonderheiten, die den Forderungseinzug in Spanien betreffen.",
  closing: [
    "Jede Branche hat ihre eigene Ausfalldynamik —Schuldnerprofil, Art der Rechnungen, übliche Zahlungsfristen, vertragliche Standardsicherheiten und effizienteste Forderungswege. Die Branchenspezialisierung erlaubt es der Kanzlei, die Besonderheiten jedes Falls schnell zu erkennen und die Einzugsstrategie ohne Verzögerung anzupassen.",
    "Für hier nicht aufgeführte Branchen bearbeitet IJ Creditor Fälle auch über seine allgemeine Leistungslinie. Die Branchenspezialisierung ist eine Ergänzung, die dort Mehrwert bietet, wo sie greift, keine Voraussetzung für den Zugang zur Leistung.",
  ],
};

const servicesFr: ServicesIndex = {
  title: "Recouvrement et services juridiques aux créanciers depuis 1992",
  intro: "Quel que soit le service demandé, l'objectif est le même : trouver une solution qui recouvre la créance tout en préservant, dans la mesure du possible, la relation commerciale entre le client et le débiteur. Plus de 80 % des dossiers pris en charge par IJ Creditor se résolvent au stade amiable, sans dépôt de plainte.",
  detail: {
    "out-of-court-debt-collection": "Recouvrement aux honoraires de résultat sur le montant effectivement encaissé : pas de recouvrement, pas d'honoraires variables. Le travail amiable est réalisé par une équipe composée majoritairement d'avocats et supervisé, dossier par dossier, par un avocat du cabinet, combinant rapprochement des soldes et recouvrement amiable.",
    "judicial-debt-collection": "Lorsque la phase amiable n'aboutit pas, IJ Creditor assure la représentation juridique directe dans la procédure la plus adaptée —monitorio, verbale, ordinaire, exécution ou insolvabilité—, précédée dans la mesure du possible d'un rapport de faisabilité judiciaire et engagée selon un honoraire forfaitaire convenu par écrit.",
    "international-debt-collection": "Pour les clients étrangers dont les débiteurs sont situés hors d'Espagne. IJ Creditor coordonne le dossier depuis Madrid et l'exécute dans le pays du débiteur via son réseau de correspondants, tant en phase amiable qu'en phase judiciaire le cas échéant.",
    "credit-solvency-reports": "Informations commerciales, patrimoniales et de solvabilité sur des entreprises et des particuliers, établies à partir de registres publics et de fournisseurs spécialisés pour les décisions de crédit, le suivi de portefeuille et la faisabilité du recouvrement. IJ Creditor ne tient pas ses propres bases de données.",
  },
};
const industriesFr: IndustriesIndex = {
  title: "Secteurs où nous recouvrons pour des créanciers étrangers ayant des débiteurs en Espagne",
  intro: "IJ Creditor a traité des créances impayées de créanciers étrangers dans pratiquement tous les secteurs économiques ayant des débiteurs en Espagne. Le cabinet identifie les domaines où il dispose d'une expérience récurrente et d'une connaissance spécifique des usages commerciaux, des standards contractuels et des particularités juridiques qui affectent le recouvrement en Espagne.",
  closing: [
    "Chaque secteur a sa propre dynamique d'impayés —profil du débiteur, nature des factures, délais de paiement habituels, garanties contractuelles standard et voies de réclamation les plus efficaces. La spécialisation sectorielle permet au cabinet de reconnaître rapidement les spécificités de chaque dossier et d'adapter sans délai la stratégie de recouvrement.",
    "Pour les secteurs non listés ici, IJ Creditor traite également les dossiers via sa ligne de service générale. La spécialisation sectorielle est un complément qui apporte de la valeur là où elle s'applique, non une condition d'accès au service.",
  ],
};

const servicesIt: ServicesIndex = {
  title: "Recupero crediti e servizi legali ai creditori dal 1992",
  intro: "Qualunque sia il servizio richiesto, l'obiettivo è lo stesso: trovare una soluzione che recuperi il credito preservando, ove possibile, il rapporto commerciale tra il cliente e il debitore. Oltre l'80% delle pratiche assunte da IJ Creditor si risolve in fase stragiudiziale, senza deposito di una causa.",
  detail: {
    "out-of-court-debt-collection": "Recupero a success fee sull'importo effettivamente incassato: nessun recupero, nessun onorario variabile. Il lavoro stragiudiziale è svolto da un team composto principalmente da avvocati e supervisionato, pratica per pratica, da un avvocato dello studio, combinando riconciliazione dei saldi e recupero amichevole.",
    "judicial-debt-collection": "Quando la fase amichevole non riesce, IJ Creditor assume la rappresentanza legale diretta nel procedimento più adatto —monitorio, verbale, ordinario, esecuzione o insolvenza—, preceduto ove possibile da una relazione di fattibilità giudiziaria e avviato con un onorario forfettario concordato per iscritto.",
    "international-debt-collection": "Per clienti esteri i cui debitori si trovano fuori dalla Spagna. IJ Creditor coordina la pratica da Madrid e la esegue nel Paese del debitore tramite la sua rete di corrispondenti, sia in fase amichevole sia, se del caso, giudiziale.",
    "credit-solvency-reports": "Informazioni commerciali, patrimoniali e di solvibilità su imprese e privati, redatte da registri pubblici e fornitori specializzati per decisioni di credito, monitoraggio del portafoglio e fattibilità del recupero. IJ Creditor non mantiene proprie banche dati.",
  },
};
const industriesIt: IndustriesIndex = {
  title: "Settori in cui recuperiamo per creditori esteri con debitori in Spagna",
  intro: "IJ Creditor ha gestito crediti insoluti di creditori esteri in pressoché tutti i settori economici con debitori in Spagna. Lo studio individua le aree in cui dispone di esperienza ricorrente e conoscenza specifica degli usi commerciali, degli standard contrattuali e delle particolarità giuridiche che incidono sul recupero crediti in Spagna.",
  closing: [
    "Ogni settore ha la propria dinamica di insolvenza —profilo del debitore, natura delle fatture, termini di pagamento abituali, garanzie contrattuali standard e vie di recupero più efficienti. La specializzazione settoriale consente allo studio di riconoscere rapidamente le specificità di ogni pratica e adattare senza indugio la strategia di recupero.",
    "Per i settori non elencati qui, IJ Creditor gestisce le pratiche anche tramite la sua linea di servizio generale. La specializzazione settoriale è un complemento che aggiunge valore dove si applica, non una condizione per accedere al servizio.",
  ],
};

const servicesIndexByLocale: Partial<Record<Locale, ServicesIndex>> = { en: servicesEn, de: servicesDe, fr: servicesFr, it: servicesIt };
const industriesIndexByLocale: Partial<Record<Locale, IndustriesIndex>> = { en: industriesEn, de: industriesDe, fr: industriesFr, it: industriesIt };

export function getServicesIndex(locale: Locale): ServicesIndex {
  return servicesIndexByLocale[locale] ?? servicesEn;
}
export function getIndustriesIndex(locale: Locale): IndustriesIndex {
  return industriesIndexByLocale[locale] ?? industriesEn;
}
