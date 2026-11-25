import type { Locale } from "@/lib/i18n";

// Interface texts for the Knowledge Base index and guide pages.
// Guide content itself lives in lib/content/kb.ts.
export type KbUi = {
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  lead: string;
  readGuide: string;
  assistTitle: string;
  allGuides: string;
  disclaimer: string;
};

const ui: Record<Locale, KbUi> = {
  en: {
    eyebrow: "Knowledge Base",
    metaTitle: "Spanish Debt Collection Law Guides",
    metaDescription:
      "Permanent guides on Spanish debt collection law for foreign creditors: how recovery works, timeframes, documents needed and cross-border enforcement.",
    title: "Permanent guides on Spanish debt collection law",
    intro:
      "A static, didactic Knowledge Base instead of a news blog. Permanent content, not news: each guide answers, in a self-contained way, a specific question a foreign creditor asks about recovering debt in Spain.",
    lead:
      "Each guide is a pillar page designed to answer a precise question of the foreign creditor: how Spanish debt collection works, how long it takes, whether travel is required, what documents are needed, whether a home-country judgment can be enforced in Spain. Each is written to be self-contained and citable.",
    readGuide: "Read guide →",
    assistTitle: "How IJ Creditor Can Assist",
    allGuides: "← All guides",
    disclaimer:
      "These guides provide general information on debt recovery in Spain and do not constitute legal advice. Content updated as of June 2026; recent rules, such as the MASC requirement under Organic Law 1/2025 and procedural thresholds, may change. For advice on a specific case, request a proposal.",
  },
  pt: {
    eyebrow: "Base de conhecimento",
    metaTitle: "Guias sobre cobrança de dívidas em Espanha",
    metaDescription:
      "Guias permanentes sobre o direito espanhol de cobrança para credores estrangeiros: como funciona a recuperação, prazos, documentos necessários e execução transfronteiriça.",
    title: "Guias permanentes sobre o direito espanhol de cobrança",
    intro:
      "Uma base de conhecimento estável e didática, em vez de um blogue de notícias. Cada guia responde, de forma autónoma, a uma pergunta concreta que um credor estrangeiro faz sobre a recuperação de dívidas em Espanha.",
    lead:
      "Cada guia é uma página de referência pensada para responder a uma pergunta precisa do credor estrangeiro: como funciona a cobrança em Espanha, quanto tempo demora, se é preciso deslocar-se, que documentos são necessários, se uma sentença do seu país pode ser executada em Espanha. Cada guia pode ler-se e citar-se de forma independente.",
    readGuide: "Ler guia →",
    assistTitle: "Como a IJ Creditor pode ajudar",
    allGuides: "← Todos os guias",
    disclaimer:
      "Estes guias contêm informação geral sobre a recuperação de dívidas em Espanha e não constituem aconselhamento jurídico. Conteúdo atualizado a junho de 2026; normas recentes, como o requisito MASC da Lei Orgânica 1/2025 e os limiares processuais, podem mudar. Para aconselhamento sobre um caso concreto, peça uma proposta.",
  },
  de: {
    eyebrow: "Wissensdatenbank",
    metaTitle: "Ratgeber zum Inkasso in Spanien",
    metaDescription:
      "Dauerhafte Ratgeber zum spanischen Inkassorecht für ausländische Gläubiger: Ablauf der Beitreibung, Fristen, erforderliche Unterlagen und grenzüberschreitende Vollstreckung.",
    title: "Dauerhafte Ratgeber zum spanischen Inkassorecht",
    intro:
      "Eine beständige, erklärende Wissensdatenbank statt eines Nachrichtenblogs. Jeder Ratgeber beantwortet in sich geschlossen eine konkrete Frage, die sich ausländische Gläubiger zur Forderungsbeitreibung in Spanien stellen.",
    lead:
      "Jeder Ratgeber ist eine Grundlagenseite zu einer genauen Frage ausländischer Gläubiger: wie das Inkasso in Spanien funktioniert, wie lange es dauert, ob eine Reise nötig ist, welche Unterlagen erforderlich sind, ob ein Urteil aus dem eigenen Land in Spanien vollstreckt werden kann. Jeder Ratgeber ist für sich lesbar und zitierfähig.",
    readGuide: "Ratgeber lesen →",
    assistTitle: "Wie IJ Creditor unterstützen kann",
    allGuides: "← Alle Ratgeber",
    disclaimer:
      "Diese Ratgeber enthalten allgemeine Informationen zur Forderungsbeitreibung in Spanien und stellen keine Rechtsberatung dar. Stand: Juni 2026; neue Vorschriften, etwa das MASC-Erfordernis nach dem Organgesetz 1/2025 und verfahrensrechtliche Schwellenwerte, können sich ändern. Für die Beratung in einem konkreten Fall fordern Sie bitte ein Angebot an.",
  },
  fr: {
    eyebrow: "Base de connaissances",
    metaTitle: "Guides du recouvrement de créances en Espagne",
    metaDescription:
      "Guides permanents sur le droit espagnol du recouvrement pour les créanciers étrangers : déroulement, délais, documents nécessaires et exécution transfrontalière.",
    title: "Guides permanents sur le droit espagnol du recouvrement",
    intro:
      "Une base de connaissances stable et pédagogique plutôt qu'un blog d'actualités. Chaque guide répond de façon autonome à une question précise que se pose un créancier étranger sur le recouvrement de créances en Espagne.",
    lead:
      "Chaque guide est une page de référence conçue pour répondre à une question précise du créancier étranger : comment fonctionne le recouvrement en Espagne, combien de temps il prend, s'il faut se déplacer, quels documents sont nécessaires, si un jugement de son pays peut être exécuté en Espagne. Chaque guide se lit et se cite de manière autonome.",
    readGuide: "Lire le guide →",
    assistTitle: "Comment IJ Creditor peut vous aider",
    allGuides: "← Tous les guides",
    disclaimer:
      "Ces guides fournissent des informations générales sur le recouvrement de créances en Espagne et ne constituent pas un conseil juridique. Contenu à jour en juin 2026 ; les règles récentes, comme l'exigence MASC de la loi organique 1/2025 et les seuils procéduraux, peuvent évoluer. Pour un conseil sur un dossier précis, demandez une proposition.",
  },
  it: {
    eyebrow: "Knowledge base",
    metaTitle: "Guide al recupero crediti in Spagna",
    metaDescription:
      "Guide permanenti sul diritto spagnolo del recupero crediti per creditori esteri: come funziona il recupero, tempi, documenti necessari ed esecuzione transfrontaliera.",
    title: "Guide permanenti sul diritto spagnolo del recupero crediti",
    intro:
      "Una knowledge base stabile e didattica al posto di un blog di notizie. Ogni guida risponde in modo autonomo a una domanda concreta che un creditore estero si pone sul recupero dei crediti in Spagna.",
    lead:
      "Ogni guida è una pagina di riferimento pensata per rispondere a una domanda precisa del creditore estero: come funziona il recupero crediti in Spagna, quanto tempo richiede, se occorre viaggiare, quali documenti servono, se una sentenza del proprio paese può essere eseguita in Spagna. Ogni guida si legge e si cita in modo indipendente.",
    readGuide: "Leggi la guida →",
    assistTitle: "Come può aiutarla IJ Creditor",
    allGuides: "← Tutte le guide",
    disclaimer:
      "Queste guide offrono informazioni generali sul recupero crediti in Spagna e non costituiscono consulenza legale. Contenuto aggiornato a giugno 2026; le norme recenti, come il requisito MASC della legge organica 1/2025 e le soglie processuali, possono cambiare. Per una consulenza su un caso specifico, richieda una proposta.",
  },
};

export function getKbUi(locale: Locale): KbUi {
  return ui[locale] ?? ui.en;
}

// Localised <title> for pages whose visible heading is a plain menu label.
type TitleKey = "about" | "contact" | "faq";
const titles: Record<Locale, Record<TitleKey, string>> = {
  en: {
    about: "About Us: Debt Collection Firm in Madrid",
    contact: "Contact a Debt Collection Lawyer in Madrid",
    faq: "Debt Collection in Spain: FAQ",
  },
  pt: {
    about: "Quem somos: cobrança de dívidas em Madrid",
    contact: "Contacto: cobrança de dívidas em Madrid",
    faq: "Cobrança em Espanha: perguntas frequentes",
  },
  de: {
    about: "Über uns: Inkasso-Kanzlei in Madrid",
    contact: "Kontakt: Inkasso-Anwälte in Madrid",
    faq: "Inkasso in Spanien: häufige Fragen",
  },
  fr: {
    about: "Qui sommes-nous : recouvrement à Madrid",
    contact: "Contact : recouvrement de créances à Madrid",
    faq: "Recouvrement en Espagne : questions fréquentes",
  },
  it: {
    about: "Chi siamo: recupero crediti a Madrid",
    contact: "Contatti: recupero crediti a Madrid",
    faq: "Recupero crediti in Spagna: domande frequenti",
  },
};

export function pageTitle(locale: Locale, key: TitleKey): string {
  return (titles[locale] ?? titles.en)[key];
}
