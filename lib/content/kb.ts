import { KB_GUIDES, getGuide as getGuideEn, type KbGuide } from "@/lib/kb";
import type { Locale } from "@/lib/i18n";

type Tr = Omit<KbGuide, "slug">;

const de: Record<string, Tr> = {
  "spanish-payment-order-monitorio": {
    title: "Das spanische Mahnverfahren (Proceso Monitorio)",
    nav: "Das spanische Mahnverfahren (monitorio)",
    summary: "Rechtsgrundlage im Zivilprozessgesetz; wer es beantragen kann; erforderliche Unterlagen; die 20-Tage-Frist; vorherige MASC-Anforderung; Widerspruch; Vollstreckung.",
    body: [
      "Das spanische Mahnverfahren, geregelt in den Artikeln 812 bis 818 des Zivilprozessgesetzes (LEC), ist ein vereinfachter Weg zur Beitreibung fälliger, zahlbarer und durch Urkunden belegter Geldforderungen wie Rechnungen, Verträge, Lieferscheine oder schriftliche Schuldanerkenntnisse. Es gibt keine Höchstgrenze für den Forderungsbetrag. Der Antrag wird beim zuständigen Gericht erster Instanz eingereicht; nach Zulassung wird der Schuldner aufgefordert, innerhalb von zwanzig Werktagen (días hábiles) zu zahlen oder einen begründeten Widerspruch einzulegen. Wird kein Widerspruch eingelegt, kann der Gläubiger unmittelbar zur Vollstreckung übergehen, einschließlich der Pfändung von Bankkonten und anderen Vermögenswerten.",
      "Seit dem 3. April 2025 ist nach Artikel 5 des Organgesetzes 1/2025 und Artikel 403.2 LEC ein vorheriger Versuch einer angemessenen Streitbeilegungsmethode (MASC) in der Regel eine Zulässigkeitsvoraussetzung für das nationale Mahnverfahren, wobei sich die Rechtsprechung zu seinem genauen Umfang noch festigt (das Europäische Mahnverfahren ist ausgenommen). Wenn der Schuldner die Kommunikation eingestellt hat und keinen ernsthaften Einwand erhebt, ist das Verfahren häufig der direkteste Weg, in Spanien einen Vollstreckungstitel zu erlangen.",
    ],
    assist: "Wir prüfen die urkundliche Grundlage der Forderung, erledigen die vorherige MASC-Anforderung und reichen das Mahnverfahren beim zuständigen spanischen Gericht ein und begleiten es.",
  },
  "verbal-proceedings": {
    title: "Verbales Verfahren (Juicio Verbal)",
    nav: "Verbales Verfahren (juicio verbal) für Forderungen unter 15.000 €",
    summary: "Wann dieser Weg statt des monitorio gilt; die Schwelle von 15.000 €; die Verhandlung; Zeitrahmen; Zusammenspiel mit dem monitorio bei Widerspruch.",
    body: [
      "Das verbale Verfahren ist der Erkenntnisweg für Zivilforderungen geringeren Werts und für bestimmte gesetzlich bestimmte Sachverhalte, hauptsächlich geregelt in Artikel 250 LEC. Nach der durch das Königliche Gesetzesdekret 6/2023 eingeführten Reform, in Kraft seit dem 20. März 2024, werden Forderungen von 15.000 € oder weniger in diesem Verfahren entschieden. Es ist auch der Weg, der folgt, wenn ein Schuldner gegen ein Mahnverfahren, dessen Betrag innerhalb dieser Schwelle liegt, begründeten Widerspruch einlegt.",
      "Das Gericht prüft das Vorbringen und die Beweise der Parteien und hält gegebenenfalls eine Verhandlung ab, in der Zeugen, Sachverständige und Urkunden vorgelegt werden können, bevor es ein Urteil erlässt. Obwohl streitiger als das Mahnverfahren, bleibt das verbale Verfahren ein vergleichsweise effizienter Mechanismus zur Beilegung von Handelsstreitigkeiten und zur Beitreibung geschuldeter Beträge.",
    ],
    assist: "Wir vertreten ausländische Gläubiger während des gesamten verbalen Verfahrens in Spanien, von der Bewertung des Streitwerts und des Wegs bis zur Vertretung in der Verhandlung.",
  },
  "ordinary-proceedings": {
    title: "Ordentliches Verfahren (Juicio Ordinario)",
    nav: "Ordentliches Verfahren für Forderungen über 15.000 €",
    summary: "Wann das ordentliche Verfahren gilt; Aufbau (Klage, Klageerwiderung, Vorverhandlung, Hauptverhandlung, Urteil); wann dieser Weg der richtige ist.",
    body: [
      "Das ordentliche Verfahren ist der Erkenntnisweg für höherwertige oder komplexere Forderungen. Nach Artikel 249 LEC werden Forderungen über 15.000 € —zusammen mit bestimmten unabhängig vom Betrag diesem Weg vorbehaltenen Sachverhalten— in diesem Verfahren verhandelt. Es folgt einem vollständigeren Aufbau: Klageschrift, Klageerwiderung, eine Vorverhandlung (audiencia previa) zur Festlegung der Streitpunkte und Beweise, Hauptverhandlung und Urteil.",
      "Es ist der richtige Weg, wenn der Streit von Vertragsauslegung, Haftung, bestrittenen Handelsgeschäften oder erheblichen Beweisfragen abhängt. Obwohl es in der Regel länger dauert als andere Verfahren, erlaubt es dem Gericht, komplexe rechtliche und tatsächliche Fragen eingehend zu prüfen, und ist üblicherweise der Weg, wenn der Schuldner erhebliche Einwände erhebt oder der Streitwert eine umfassende gerichtliche Prüfung rechtfertigt.",
    ],
    assist: "Wir bereiten ordentliche Verfahren für ausländische Gläubiger vor und führen sie, mit Koordination von Fallstrategie, Beweisen und Vertretung vor den spanischen Gerichten.",
  },
  "burofax-formal-demand": {
    title: "Förmliche Mahnschreiben und Burofax",
    nav: "Das spanische Burofax",
    summary: "Was ein Burofax ist; was es beweist (Inhalt und Zustellung); Unterbrechung von Verjährungsfristen; seine Rolle beim Nachweis des vorherigen MASC-Schritts.",
    body: [
      "Das Burofax ist eines der am weitesten verbreiteten Mittel zur förmlichen Zustellung in Spanien, weil es sowohl den Inhalt der Mitteilung als auch ihre Zustellung nachweist, was ihm klare Beweiskraft verleiht. Ein ordnungsgemäß abgefasstes Burofax kann verwendet werden, um Zahlung zu verlangen, den Schuldner in Verzug zu setzen, die Verjährung nach Artikel 1973 des Zivilgesetzbuchs zu unterbrechen und den Versuch des Gläubigers zu belegen, die Angelegenheit vor einem Rechtsstreit beizulegen.",
      "Seit Inkrafttreten des Organgesetzes 1/2025 spielt eine derart dokumentierte Mahnung auch eine Rolle beim Nachweis des nun in der Regel vor Einreichung bestimmter Klagen erforderlichen vorherigen Streitbeilegungsschritts. In etlichen Fällen führt eine förmliche Mahnung zur Zahlung ohne Gerichtsverfahren; und wird ein Rechtsstreit doch nötig, stärkt eine vorherige Mahnung in der Regel die Position des Gläubigers.",
    ],
    assist: "Wir verfassen und versenden Burofax-Mahnungen nach spanischem Recht, abgestimmt darauf, Verjährungsfristen zu unterbrechen und sowohl die Beitreibung als auch gegebenenfalls die MASC-Anforderung zu stützen.",
  },
  "limitation-periods": {
    title: "Verjährungsfristen für Handelsforderungen",
    nav: "Verjährungsfristen für Handelsforderungen im spanischen Recht",
    summary: "Allgemeine Fünfjahresregel (Art. 1964 CC); kürzere branchenspezifische Fristen wie im Transport; wie die Verjährung unterbrochen wird; warum frühes Handeln zählt.",
    body: [
      "Das spanische Recht legt Verjährungsfristen fest, innerhalb derer Gläubiger handeln müssen; lässt man die Frist verstreichen, kann die gerichtliche Beitreibung ausgeschlossen sein. Die allgemeine Verjährungsfrist für persönliche (vertragliche) Ansprüche beträgt nach Artikel 1964.2 des Zivilgesetzbuchs, geändert durch das Gesetz 42/2015, fünf Jahre. Bestimmte Branchen unterliegen kürzeren Fristen: Ansprüche aus einem Vertrag über die Güterbeförderung etwa unterliegen in der Regel einer Frist von einem Jahr (Artikel 79 des Gesetzes 15/2009 und das CMR-Übereinkommen bei internationaler Beförderung).",
      "Die Verjährung kann durch eine förmliche außergerichtliche Mahnung, durch Klage oder durch Anerkenntnis der Schuld durch den Schuldner unterbrochen werden (Artikel 1973 des Zivilgesetzbuchs), was frühes Handeln wichtig macht. Da die anwendbare Frist von der Art der Forderung abhängt, ist Gläubigern zu raten, sie zu prüfen, sobald Zahlungsschwierigkeiten auftreten.",
    ],
    assist: "Wir bestimmen die für jede Forderung anwendbare Verjährungsfrist und handeln rechtzeitig, um sie zu unterbrechen —üblicherweise durch ein dokumentiertes Burofax—, bevor Beitreibungsrechte verloren gehen.",
  },
  "masc-organic-law-1-2025": {
    title: "Angemessene Streitbeilegungsmethoden (MASC) nach dem Organgesetz 1/2025",
    nav: "Alternative Streitbeilegung (MASC) nach dem Organgesetz 1/2025",
    summary: "Was MASC ist; wann es Zulässigkeitsvoraussetzung ist; die anerkannten Mechanismen; gesetzliche Ausnahmen; wie IJ Creditor den Versuch nachweist.",
    body: [
      "Seit dem 3. April 2025 macht das Organgesetz 1/2025 den vorherigen Versuch einer angemessenen Streitbeilegungsmethode (MASC) zur Zulässigkeitsvoraussetzung für die meisten Zivil- und Handelsklagen (Artikel 5 des Gesetzes und Artikel 403.2 LEC): Der Kläger muss in der Regel einen ernsthaften Versuch nachweisen können, den Streit vor Einreichung beizulegen. Zu den anerkannten Mechanismen gehören direkte Verhandlung, Mediation, Schlichtung, ein unabhängiges Sachverständigengutachten und ein vertrauliches verbindliches Angebot (oferta vinculante confidencial).",
      "Die Anforderung erstreckt sich auf das nationale Mahnverfahren, während Vollstreckungsmaßnahmen und bestimmte im Gesetz aufgeführte Sachverhalte (etwa Verfahren zu Grundrechten, Geschäftsfähigkeit oder Wechselinstrumenten) ausgenommen sind. Wird der Versuch nicht nachgewiesen, kann die Klage als unzulässig gelten. Für Gläubiger können diese Mechanismen zudem ein schnelleres und kostengünstigeres Ergebnis bieten und zugleich Geschäftsbeziehungen erhalten. Da das Gesetz jung ist, entwickeln sich die gerichtlichen Kriterien zu seiner Anwendung noch.",
    ],
    assist: "Wir erledigen den MASC-Schritt für ausländische Gläubiger —in der Regel über ein dokumentiertes spanisches Burofax—, damit die anschließende Klage die Zulässigkeitsvoraussetzung erfüllt.",
  },
  "brussels-i-bis-regulation": {
    title: "Verordnung Brüssel Ia (EU-Verordnung 1215/2012)",
    nav: "Verordnung Brüssel Ia (EU 1215/2012)",
    summary: "Zuständigkeit und grenzüberschreitende Vollstreckung von Urteilen in der EU; Abschaffung des Exequaturs zwischen Mitgliedstaaten; die Bescheinigung nach Art. 53; begrenzte Widerspruchsgründe.",
    body: [
      "Die Verordnung Brüssel Ia regelt die Zuständigkeit sowie die Anerkennung und Vollstreckung von Urteilen in Zivil- und Handelssachen in der gesamten Europäischen Union. Sie legt fest, welche Gerichte für einen Streit zuständig sind, und schafft die vorherige Vollstreckbarerklärung (Exequatur) zwischen Mitgliedstaaten ab: Ein in einem Mitgliedstaat ergangenes Urteil ist grundsätzlich in einem anderen vollstreckbar, ohne ein zwischengeschaltetes Anerkennungsverfahren.",
      "Die Vollstreckung erfordert jedoch eine nach Artikel 53 der Verordnung ausgestellte Bescheinigung, und der Schuldner kann der Vollstreckung aus den in der Verordnung genannten begrenzten Gründen widersprechen (zum Beispiel offensichtlicher Verstoß gegen die öffentliche Ordnung). Für Gläubiger, die innerhalb der Europäischen Union tätig sind, bleibt sie eines der wichtigsten Instrumente für die grenzüberschreitende Beitreibung.",
    ],
    assist: "Wir vollstrecken EU-Urteile in Spanien nach Brüssel Ia, beschaffen die erforderliche Bescheinigung und führen die Vollstreckung vor dem zuständigen spanischen Gericht.",
  },
  "exequatur-foreign-judgments": {
    title: "Anerkennung und Vollstreckung ausländischer Urteile (Exequatur)",
    nav: "Exequatur nach dem Gesetz 29/2015",
    summary: "Anerkennung und Vollstreckung von Nicht-EU-Urteilen in Spanien; Gesetz 29/2015; das zuständige Gericht; die geprüften Voraussetzungen; Vollstreckung nach Anerkennung.",
    body: [
      "Stammt ein Urteil aus einem Land außerhalb des Rahmens von Brüssel Ia und regelt kein anderes anwendbares internationales Instrument die Sache, ist in der Regel ein Anerkennungsverfahren (Exequatur) erforderlich, bevor es in Spanien vollstreckt werden kann. Das Gesetz 29/2015 über die internationale Rechtskooperation in Zivilsachen regelt dieses Verfahren, das von den Gerichten erster Instanz verhandelt wird.",
      "Das spanische Gericht prüft eine Reihe von Verfahrens- und Ordre-public-Voraussetzungen —darunter, dass die Verteidigungsrechte gewahrt wurden und das Urteil nicht der spanischen öffentlichen Ordnung widerspricht— ohne die Begründetheit zu überprüfen. Nach der Anerkennung kann das ausländische Urteil in Spanien im Wesentlichen wie ein inländisches vollstreckt werden, sodass Gläubiger Vermögenswerte auf spanischem Gebiet verfolgen können.",
    ],
    assist: "Wir führen Exequaturverfahren für Nicht-EU-Urteile und vollstrecken nach erteilter Anerkennung gegen die Vermögenswerte des Schuldners in Spanien.",
  },
  "insolvency-concurso": {
    title: "Insolvenzverfahren in Spanien (Concurso de Acreedores)",
    nav: "Concurso de acreedores",
    summary: "Das konsolidierte Insolvenzgesetz; Sanierung und Liquidation; Anmeldung der Forderungen beim Insolvenzverwalter; Beitreibungsaussichten für ausländische Gläubiger.",
    body: [
      "Wird ein Schuldner insolvent, müssen Gläubiger unter Umständen an einem förmlichen Insolvenzverfahren teilnehmen, geregelt durch das konsolidierte Insolvenzgesetz (Königliches Gesetzesdekret 1/2020), reformiert durch das Gesetz 16/2022 zur Umsetzung der EU-Restrukturierungsrichtlinie. Der Rahmen sieht sowohl die Sanierung lebensfähiger Unternehmen als auch die Liquidation derjenigen vor, die nicht fortbestehen können.",
      "Gläubiger sollten Insolvenzanträge genau verfolgen, da für die Anmeldung der Forderungen beim Insolvenzverwalter (administración concursal) zwecks Einstufung und Aufnahme strenge Fristen gelten. Wird nicht rechtzeitig gehandelt, kann dies die Beitreibungsaussichten beeinträchtigen. Obwohl die Insolvenz den letztlich beigetriebenen Betrag häufig verringert, bleibt das Verfahren ein wichtiges Mittel zum Schutz der Gläubigerrechte und zur geordneten Verteilung des verfügbaren Vermögens.",
    ],
    assist: "Wir melden die Forderungen unserer Mandanten in spanischen Insolvenzverfahren an und verteidigen sie, überwachen das Verfahren und verfolgen verfügbare Wege zur Verbesserung der Beitreibung.",
  },
  "directors-liability": {
    title: "Haftung der Geschäftsführer für Gesellschaftsschulden",
    nav: "Geschäftsführerhaftung für Gesellschaftsschulden in Spanien",
    summary: "Wann Geschäftsführer persönlich haften; das Kapitalgesellschaftsgesetz; Haftung nach Art. 367 bei unterlassener Auflösung; die individuelle Haftungsklage; verschuldete Insolvenz.",
    body: [
      "Unter bestimmten Umständen können Geschäftsführer persönlich für Gesellschaftsschulden haften. Nach dem Kapitalgesellschaftsgesetz (Königliches Gesetzesdekret 1/2010) müssen Geschäftsführer sorgfältig handeln und die erforderlichen Schritte unternehmen, wenn für die Gesellschaft ein gesetzlicher Auflösungsgrund vorliegt; insbesondere macht Artikel 367 sie gesamtschuldnerisch für nach diesem Grund entstandene Gesellschaftsverbindlichkeiten haftbar, wenn sie die Gesellschafterversammlung nicht einberufen oder nicht innerhalb der gesetzlichen Frist Auflösung oder Insolvenz beantragen.",
      "Gläubiger können auch die individuelle Haftungsklage (Artikel 241) für unmittelbar durch das Verhalten der Geschäftsführer verursachten Schaden erheben, und das Verhalten der Geschäftsführer kann im Insolvenzverfahren geprüft werden (verschuldete Insolvenz). Solche Klagen können die Beitreibungsaussichten verbessern, besonders wenn die Gesellschaft selbst nicht über ausreichendes Vermögen verfügt, und werden häufig bei insolventen Gesellschaften, aufgegebenen Unternehmen oder Anzeichen von Missmanagement erwogen.",
    ],
    assist: "Wir prüfen und erheben Geschäftsführerhaftungsklagen in Spanien, wenn das Gesellschaftsvermögen nicht ausreicht, auch innerhalb von Insolvenzverfahren.",
  },
  "asset-tracing": {
    title: "Vermögensermittlung und Schuldnerrecherche",
    nav: "Schuldnerrecherche und Vermögensermittlung",
    summary: "Wie die Vermögensermittlung in Spanien funktioniert; öffentliche Register; die in der Vollstreckung verfügbaren gerichtlichen Mittel (Art. 589 und 590 LEC); Bewertung der Beitreibungsaussichten.",
    body: [
      "Eine erfolgreiche Beitreibung hängt oft davon ab, Vermögenswerte zu ermitteln, gegen die vollstreckt werden kann, was die Vermögensermittlung zu einem zentralen Teil jeder Strategie macht. Recherchen können auf Gesellschaftsdaten im Handelsregister, Immobilien im Grundbuch, geschäftliche Beteiligungen, die Prozesshistorie und andere öffentlich verfügbare Informationen zurückgreifen.",
      "Innerhalb des Vollstreckungsverfahrens können weitere Informationen über gerichtliche Kanäle erlangt werden: Der Schuldner kann zur Offenlegung seines Vermögens verpflichtet werden (Artikel 589 LEC), und das Gericht kann eine Ermittlung des Schuldnervermögens anordnen und Informationen von öffentlichen Stellen und Finanzinstituten anfordern (Artikel 590 LEC). Eine gründliche Recherche erlaubt Gläubigern häufig, die Beitreibungsaussichten zu bewerten, bevor erhebliche Prozesskosten anfallen.",
    ],
    assist: "Wir führen Vermögens- und Solvenzrecherchen zu spanischen Schuldnern durch und nutzen in der Vollstreckung die verfügbaren gerichtlichen Mittel, um Vermögenswerte zu lokalisieren.",
  },
  "bank-account-attachment": {
    title: "Pfändung von Bankkonten",
    nav: "Bankkontopfändung in Spanien",
    summary: "Wie die Pfändung nach Erlangung eines Vollstreckungstitels abläuft (Art. 588 LEC); das Erfordernis eines Vollstreckungstitels; Zusammenspiel mit anderen Gläubigern und unpfändbaren Beträgen.",
    body: [
      "Die Pfändung von Bankkonten ist eine der wirksamsten Vollstreckungsmaßnahmen nach spanischem Recht. Sobald ein Vollstreckungstitel erlangt wurde, kann das Gericht Finanzinstitute anweisen, vom Schuldner gehaltene Gelder einzufrieren und zu überweisen (Artikel 588 LEC). Da liquide Mittel in der Regel leichter zu verwerten sind als andere Vermögenswerte, können Kontopfändungen schnell Ergebnisse erzielen.",
      "Die Maßnahme ist jedoch nur verfügbar, sobald der Gläubiger einen Vollstreckungstitel besitzt —ein Urteil, ein unwidersprochenes Mahnverfahren oder ein anderes anerkanntes Vollstreckungsinstrument— und wird innerhalb des Vollstreckungsverfahrens durchgeführt, vorbehaltlich der übrigen Gläubiger des Schuldners und der Regeln über unpfändbare Beträge. Die Verfügbarkeit dieser Maßnahme ist einer der praktischen Vorteile der gerichtlichen Beitreibung in Spanien.",
    ],
    assist: "Sobald ein Vollstreckungstitel vorliegt, beantragen und betreiben wir die Pfändung der Bankkonten des Schuldners vor dem spanischen Vollstreckungsgericht.",
  },
  "payment-terms-late-payment": {
    title: "Zahlungsfristen und Regeln zum Zahlungsverzug in Spanien",
    nav: "Zahlungsfristen in Spanien (Gesetz 3/2004, in geänderter Fassung)",
    summary: "Gesetzliche Zahlungsfristen (30/60 Tage); gesetzliche Verzugszinsen; die Pauschale von 40 € für Beitreibungskosten; Gesetz 3/2004 und die EU-Zahlungsverzugsrichtlinie.",
    body: [
      "Handelsgeschäfte in Spanien unterliegen gesetzlichen Zahlungsregeln zum Schutz von Unternehmen vor Zahlungsverzug, die sich hauptsächlich aus dem Gesetz 3/2004 ableiten, das die EU-Zahlungsverzugsrichtlinie (Richtlinie 2011/7/EU) umsetzt. In der Regel beträgt die Standardzahlungsfrist 30 Tage, und die zwischen Unternehmen vereinbarte Frist darf 60 Tage nicht überschreiten.",
      "Bleiben Rechnungen über die anwendbare Frist hinaus unbezahlt, kann der Gläubiger Anspruch auf gesetzliche Verzugszinsen —den Referenzzinssatz der Europäischen Zentralbank zuzüglich acht Prozentpunkten— und auf einen Pauschalbetrag von 40 € als Entschädigung für Beitreibungskosten haben, unbeschadet weiterer angemessener Kosten (Artikel 7 und 8 des Gesetzes). Das Verständnis dieser Vorschriften ist nicht nur für die Beitreibung, sondern auch für die Vertragsgestaltung und das Kreditrisikomanagement wichtig.",
    ],
    assist: "Wir beziffern Hauptforderung, gesetzliche Zinsen und Beitreibungsentschädigung nach dem Gesetz 3/2004 und machen sie als Teil der Beitreibung geltend.",
  },
  "contract-clauses": {
    title: "Vertragsklauseln, die die Beitreibung erleichtern",
    nav: "Vertragsklauseln, die der Beitreibung helfen",
    summary: "Gerichtsstands- und Rechtswahlklauseln; Verzugszinsen; Eigentumsvorbehalt (reserva de dominio); Schuldanerkenntnisse; Sicherheiten; Klauseln zu Beitreibungskosten.",
    body: [
      "Eine wirksame Beitreibung beginnt oft lange vor einem Streit, und gut formulierte Verträge können die Position eines Gläubigers bei Zahlungsschwierigkeiten erheblich verbessern. Besonders nützliche Bestimmungen sind nach spanischer Praxis Gerichtsstands- und Rechtswahlklauseln, Verzugszinsregelungen, Eigentumsvorbehaltsklauseln (reserva de dominio), schriftliche Schuldanerkenntnisse, gültige Zustellungsregelungen, persönliche Sicherheiten und Klauseln zur Zuweisung von Beitreibungskosten.",
      "Insbesondere der Eigentumsvorbehalt kann gegenüber Dritten wirksamer geltend gemacht werden, wenn er dokumentiert und gegebenenfalls eingetragen ist. Unternehmen, die in oder mit Spanien handeln, sind gut beraten, ihre Vertragsunterlagen regelmäßig zu überprüfen, um ihre Rechtsposition zu stärken und das Beitreibungsrisiko zu verringern.",
    ],
    assist: "Wir prüfen und gestalten B2B-Vertragsbedingungen für den Handel mit Spanien und konzentrieren uns auf die Klauseln, die die Position eines Gläubigers im Forderungsfall am meisten stärken.",
  },
  "power-of-attorney": {
    title: "Prozessvollmacht für die Prozessführung in Spanien",
    nav: "Prozessvollmacht für die Prozessführung in Spanien",
    summary: "Die für die Prozessführung in Spanien erforderliche Vollmacht; die Rollen von Anwalt und Prozessbevollmächtigtem; Anforderungen an Beurkundung, Apostille und Übersetzung.",
    body: [
      "Ausländische Gläubiger, die Forderungen in Spanien verfolgen, müssen in der Regel lokale rechtliche Vertreter bestellen, da Gerichtsverfahren typischerweise sowohl einen Anwalt (abogado) als auch einen Prozessbevollmächtigten (procurador) erfordern. Dies wird üblicherweise über eine Prozessvollmacht (poder para pleitos) geregelt, die sie ermächtigt, im Namen des Gläubigers zu handeln.",
      "Das Dokument kann vor einem Notar in der Heimatrechtsordnung des Gläubigers errichtet werden und kann je nach Land die Haager Apostille oder andernfalls die diplomatische Legalisation sowie gegebenenfalls eine beeidigte Übersetzung erfordern. Eine ordnungsgemäß vorbereitete Vollmacht ermöglicht es, das Verfahren ohne vermeidbare Verzögerung einzuleiten, und ist daher einer der ersten praktischen Schritte jeder grenzüberschreitenden Beitreibung.",
    ],
    assist: "Wir stellen die für die spanische Prozessführung erforderliche Mustervollmacht bereit und begleiten den Gläubiger bei Beurkundung, Apostille und Übersetzung, damit die Akte verfahrensbereit ist.",
  },
};

const fr: Record<string, Tr> = {};
const it: Record<string, Tr> = {};

const byLocale: Partial<Record<Locale, Record<string, Tr>>> = { de, fr, it };

export function getGuides(locale: Locale): KbGuide[] {
  const tr = byLocale[locale];
  if (!tr) return KB_GUIDES;
  return KB_GUIDES.map((g) => ({ ...g, ...(tr[g.slug] ?? {}) }));
}

export function getGuideL(locale: Locale, slug: string): KbGuide | undefined {
  const base = getGuideEn(slug);
  if (!base) return undefined;
  const t = byLocale[locale]?.[slug];
  return t ? { ...base, ...t } : base;
}
