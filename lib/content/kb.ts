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

const fr: Record<string, Tr> = {
  "spanish-payment-order-monitorio": {
    title: "La procédure d'injonction de payer espagnole (Proceso Monitorio)",
    nav: "La procédure d'injonction de payer espagnole (monitorio)",
    summary: "Base légale dans le code de procédure civile ; qui peut déposer ; documents requis ; le délai de vingt jours ; l'exigence préalable de MASC ; opposition ; exécution.",
    body: [
      "La procédure d'injonction de payer espagnole, régie par les articles 812 à 818 du code de procédure civile (LEC), est une voie simplifiée pour recouvrer des créances pécuniaires échues, exigibles et étayées par des preuves documentaires telles que factures, contrats, bons de livraison ou reconnaissances de dette écrites. Il n'y a pas de montant maximum. La demande est déposée devant le tribunal de première instance compétent ; une fois admise, le débiteur est tenu de payer ou de former une opposition motivée dans un délai de vingt jours ouvrables (días hábiles). En l'absence d'opposition, le créancier peut passer directement à l'exécution, y compris la saisie de comptes bancaires et d'autres biens.",
      "Depuis le 3 avril 2025, en vertu de l'article 5 de la loi organique 1/2025 et de l'article 403.2 LEC, une tentative préalable de méthode adéquate de résolution des litiges (MASC) est, en règle générale, une condition de recevabilité de l'injonction de payer nationale, bien que la jurisprudence sur sa portée exacte se précise encore (l'injonction de payer européenne est exceptée). Lorsque le débiteur a cessé toute communication et ne soulève aucune contestation réelle, la procédure est souvent le moyen le plus direct d'obtenir un titre exécutoire en Espagne.",
    ],
    assist: "Nous évaluons la base documentaire de la créance, traitons l'exigence préalable de MASC, et déposons et suivons l'injonction de payer devant le tribunal espagnol compétent.",
  },
  "verbal-proceedings": {
    title: "Procédure verbale (Juicio Verbal)",
    nav: "Procédure verbale (juicio verbal) pour les créances inférieures à 15 000 €",
    summary: "Quand cette voie s'applique au lieu du monitorio ; le seuil de 15 000 € ; l'audience ; délais ; interaction avec le monitorio en cas d'opposition.",
    body: [
      "La procédure verbale est la voie déclaratoire prévue pour les créances civiles de moindre valeur et pour certaines matières désignées par la loi, régie principalement par l'article 250 LEC. À la suite de la réforme introduite par le décret-loi royal 6/2023, en vigueur depuis le 20 mars 2024, les créances de 15 000 € ou moins sont jugées par cette procédure. C'est aussi la voie qui suit lorsqu'un débiteur forme une opposition motivée à une injonction de payer dont le montant relève de ce seuil.",
      "Le tribunal examine les arguments et les preuves des parties et, le cas échéant, tient une audience au cours de laquelle témoins, experts et documents peuvent être présentés, avant de rendre son jugement. Bien que plus contentieuse que l'injonction de payer, la procédure verbale demeure un mécanisme relativement efficace pour résoudre les litiges commerciaux et recouvrer les sommes dues.",
    ],
    assist: "Nous représentons les créanciers étrangers tout au long de la procédure verbale en Espagne, de l'évaluation de la valeur et de la voie à suivre jusqu'à la représentation à l'audience.",
  },
  "ordinary-proceedings": {
    title: "Procédure ordinaire (Juicio Ordinario)",
    nav: "Procédure ordinaire pour les créances supérieures à 15 000 €",
    summary: "Quand la procédure ordinaire s'applique ; structure (demande, défense, audience préliminaire, procès, jugement) ; quand cette voie est appropriée.",
    body: [
      "La procédure ordinaire est la voie déclaratoire pour les créances de valeur plus élevée ou plus complexes. En vertu de l'article 249 LEC, les créances supérieures à 15 000 € —ainsi que certaines matières réservées à cette voie quel que soit le montant— sont jugées par cette procédure. Elle suit une structure plus complète : acte introductif, défense, audience préliminaire (audiencia previa) pour fixer les points litigieux et les preuves, procès et jugement.",
      "C'est la voie appropriée lorsque le litige porte sur l'interprétation contractuelle, la responsabilité, des transactions commerciales contestées ou des questions de preuve substantielles. Bien qu'elle prenne généralement plus de temps que d'autres procédures, elle permet au tribunal d'examiner en détail des questions juridiques et factuelles complexes, et c'est typiquement la voie lorsque le débiteur soulève des objections substantielles ou que l'enjeu justifie un examen judiciaire approfondi.",
    ],
    assist: "Nous préparons et conduisons la procédure ordinaire pour les créanciers étrangers, en coordonnant la stratégie, les preuves et la représentation devant les tribunaux espagnols.",
  },
  "burofax-formal-demand": {
    title: "Mises en demeure et burofax",
    nav: "Le burofax espagnol",
    summary: "Ce qu'est un burofax ; ce qu'il prouve (contenu et remise) ; interruption de la prescription ; son rôle dans la preuve de l'étape préalable de MASC.",
    body: [
      "Le burofax est l'un des moyens les plus utilisés pour notifier formellement en Espagne, car il prouve à la fois le contenu de la communication et sa remise, ce qui lui confère une valeur probante claire. Un burofax correctement rédigé peut servir à exiger le paiement, mettre le débiteur en demeure, interrompre la prescription au titre de l'article 1973 du code civil et prouver la tentative du créancier de résoudre l'affaire avant tout litige.",
      "Depuis l'entrée en vigueur de la loi organique 1/2025, une mise en demeure documentée de ce type joue aussi un rôle dans la preuve de l'étape préalable de résolution des litiges désormais généralement requise avant le dépôt de certaines demandes. Dans de nombreux cas, une mise en demeure entraîne le paiement sans procédure judiciaire ; et lorsqu'un litige devient nécessaire, une mise en demeure préalable renforce généralement la position du créancier.",
    ],
    assist: "Nous rédigeons et envoyons des burofax de mise en demeure selon le droit espagnol, calibrés pour interrompre la prescription et soutenir à la fois le recouvrement et, le cas échéant, l'exigence de MASC.",
  },
  "limitation-periods": {
    title: "Délais de prescription des créances commerciales",
    nav: "Délais de prescription des créances commerciales en droit espagnol",
    summary: "Règle générale de cinq ans (article 1964 CC) ; délais sectoriels plus courts comme le transport ; comment la prescription est interrompue ; pourquoi agir tôt compte.",
    body: [
      "Le droit espagnol fixe des délais de prescription dans lesquels les créanciers doivent agir ; laisser le délai expirer peut empêcher le recouvrement judiciaire. Le délai de prescription général des actions personnelles (contractuelles) est de cinq ans, en vertu de l'article 1964.2 du code civil, modifié par la loi 42/2015. Certains secteurs sont soumis à des délais plus courts : les créances issues d'un contrat de transport de marchandises, par exemple, sont généralement soumises à un délai d'un an (article 79 de la loi 15/2009, et la Convention CMR en transport international).",
      "La prescription peut être interrompue par une mise en demeure extrajudiciaire formelle, par une action en justice ou par la reconnaissance de la dette par le débiteur (article 1973 du code civil), ce qui rend l'action précoce importante. Comme le délai applicable dépend de la nature de la créance, il est conseillé aux créanciers de le vérifier dès l'apparition de difficultés de paiement.",
    ],
    assist: "Nous confirmons le délai de prescription applicable à chaque créance et agissons à temps pour l'interrompre, généralement par un burofax documenté, avant la perte des droits de recouvrement.",
  },
  "masc-organic-law-1-2025": {
    title: "Méthodes adéquates de résolution des litiges (MASC) selon la loi organique 1/2025",
    nav: "Résolution alternative des litiges (MASC) selon la loi organique 1/2025",
    summary: "Ce qu'est le MASC ; quand il est une condition de recevabilité ; les mécanismes reconnus ; les exceptions légales ; comment IJ Creditor prouve la tentative.",
    body: [
      "Depuis le 3 avril 2025, la loi organique 1/2025 a fait de la tentative préalable d'une méthode adéquate de résolution des litiges (MASC) une condition de recevabilité de la plupart des demandes civiles et commerciales (article 5 de la loi et article 403.2 LEC) : le demandeur doit, en règle générale, pouvoir prouver une tentative réelle de résoudre le litige avant le dépôt. Les mécanismes reconnus comprennent la négociation directe, la médiation, la conciliation, un avis d'expert indépendant et une offre contraignante confidentielle (oferta vinculante confidencial).",
      "L'exigence s'étend à la procédure nationale d'injonction de payer, tandis que les actions d'exécution et certaines matières énumérées dans la loi (telles que les procédures relatives aux droits fondamentaux, à la capacité ou aux effets de commerce) sont exceptées. L'absence de preuve de la tentative peut entraîner l'irrecevabilité de la demande. Pour les créanciers, ces mécanismes peuvent aussi offrir une issue plus rapide et plus économique tout en préservant les relations commerciales. La loi étant récente, les critères judiciaires sur son application se développent encore.",
    ],
    assist: "Nous réalisons l'étape MASC pour les créanciers étrangers —ordinairement via un burofax espagnol documenté— afin que la demande ultérieure satisfasse à la condition de recevabilité.",
  },
  "brussels-i-bis-regulation": {
    title: "Règlement Bruxelles I bis (règlement UE 1215/2012)",
    nav: "Règlement Bruxelles I bis (UE 1215/2012)",
    summary: "Compétence et exécution transfrontalière des jugements dans l'UE ; suppression de l'exequatur entre États membres ; le certificat de l'article 53 ; motifs d'opposition limités.",
    body: [
      "Le règlement Bruxelles I bis régit la compétence ainsi que la reconnaissance et l'exécution des jugements en matière civile et commerciale dans toute l'Union européenne. Il détermine quelles juridictions sont compétentes pour un litige et supprime la déclaration préalable de force exécutoire (exequatur) entre États membres : un jugement rendu dans un État membre est, en principe, exécutoire dans un autre sans procédure de reconnaissance intermédiaire.",
      "L'exécution requiert toutefois un certificat délivré au titre de l'article 53 du règlement, et le débiteur peut s'opposer à l'exécution pour les motifs limités prévus par le règlement (par exemple, contrariété manifeste à l'ordre public). Pour les créanciers opérant au sein de l'Union européenne, il demeure l'un des instruments les plus importants pour le recouvrement transfrontalier.",
    ],
    assist: "Nous exécutons les jugements de l'UE en Espagne selon Bruxelles I bis, en obtenant le certificat nécessaire et en menant l'exécution devant le tribunal espagnol compétent.",
  },
  "exequatur-foreign-judgments": {
    title: "Reconnaissance et exécution des jugements étrangers (Exequatur)",
    nav: "Exequatur selon la loi 29/2015",
    summary: "Reconnaissance et exécution des jugements hors UE en Espagne ; loi 29/2015 ; le tribunal compétent ; les conditions vérifiées ; exécution une fois reconnue.",
    body: [
      "Lorsqu'un jugement provient d'un pays hors du cadre de Bruxelles I bis et qu'aucun autre instrument international applicable ne régit la matière, une procédure de reconnaissance (exequatur) est généralement requise avant qu'il puisse être exécuté en Espagne. La loi 29/2015 sur la coopération juridique internationale en matière civile régit ce processus, jugé par les tribunaux de première instance.",
      "Le tribunal espagnol vérifie un ensemble d'exigences procédurales et d'ordre public —parmi lesquelles le respect des droits de la défense et la non-contrariété du jugement à l'ordre public espagnol— sans réviser le fond. Une fois reconnu, le jugement étranger peut être exécuté en Espagne essentiellement comme un jugement national, permettant aux créanciers de poursuivre des biens situés sur le territoire espagnol.",
    ],
    assist: "Nous menons les procédures d'exequatur pour les jugements hors UE et, une fois la reconnaissance accordée, réalisons l'exécution sur les biens du débiteur en Espagne.",
  },
  "insolvency-concurso": {
    title: "Procédures d'insolvabilité en Espagne (Concurso de Acreedores)",
    nav: "Concurso de acreedores",
    summary: "La loi consolidée sur l'insolvabilité ; restructuration et liquidation ; déclaration des créances à l'administrateur judiciaire ; perspectives de recouvrement pour les créanciers étrangers.",
    body: [
      "Lorsqu'un débiteur devient insolvable, les créanciers peuvent devoir participer à une procédure formelle d'insolvabilité, régie par la loi consolidée sur l'insolvabilité (décret législatif royal 1/2020), réformée par la loi 16/2022 transposant la directive européenne sur la restructuration. Le cadre prévoit à la fois la restructuration des entreprises viables et la liquidation de celles qui ne peuvent continuer.",
      "Les créanciers doivent suivre de près les ouvertures d'insolvabilité, car des délais stricts s'appliquent à la déclaration des créances à l'administrateur judiciaire (administración concursal) en vue de leur classification et de leur inscription. Ne pas agir à temps peut nuire aux perspectives de recouvrement. Bien que l'insolvabilité réduise souvent le montant finalement recouvré, la procédure reste un moyen important de protéger les droits des créanciers et d'assurer une distribution ordonnée des actifs disponibles.",
    ],
    assist: "Nous déclarons et défendons les créances de nos clients dans les procédures d'insolvabilité espagnoles, suivons le processus et explorons toute voie disponible pour améliorer le recouvrement.",
  },
  "directors-liability": {
    title: "Responsabilité des dirigeants pour les dettes sociales",
    nav: "Responsabilité des dirigeants pour les dettes de la société en Espagne",
    summary: "Quand les dirigeants peuvent être personnellement responsables ; la loi sur les sociétés de capitaux ; la responsabilité de l'article 367 en cas de non-dissolution ; l'action individuelle en responsabilité ; insolvabilité coupable.",
    body: [
      "Dans certaines circonstances, les dirigeants peuvent être personnellement responsables des dettes sociales. En vertu de la loi sur les sociétés de capitaux (décret législatif royal 1/2010), les dirigeants doivent agir avec diligence et prendre les mesures requises lorsque la société se trouve dans une cause légale de dissolution ; en particulier, l'article 367 les rend solidairement responsables des obligations sociales nées après cette cause s'ils ne convoquent pas l'assemblée générale ou ne demandent pas la dissolution ou l'insolvabilité dans le délai légal.",
      "Les créanciers peuvent aussi exercer l'action individuelle en responsabilité (article 241) pour le préjudice causé directement par le comportement des dirigeants, et le comportement des dirigeants peut être examiné dans la procédure d'insolvabilité (insolvabilité coupable). De telles actions peuvent améliorer les perspectives de recouvrement, en particulier lorsque la société elle-même manque d'actifs suffisants, et sont fréquemment envisagées dans les cas de sociétés insolvables, d'entreprises abandonnées ou de signes de mauvaise gestion.",
    ],
    assist: "Nous évaluons et engageons les actions en responsabilité des dirigeants en Espagne lorsque les actifs de la société sont insuffisants, y compris dans le cadre de l'insolvabilité.",
  },
  "asset-tracing": {
    title: "Recherche d'actifs et enquête sur le débiteur",
    nav: "Recherche du débiteur et enquête sur les actifs",
    summary: "Comment fonctionne l'enquête sur les actifs en Espagne ; registres publics ; les outils judiciaires disponibles en exécution (articles 589 et 590 LEC) ; évaluation des perspectives de recouvrement.",
    body: [
      "Un recouvrement réussi dépend souvent de l'identification d'actifs contre lesquels diriger l'exécution, ce qui fait de la recherche d'actifs un élément clé de toute stratégie. Les enquêtes peuvent s'appuyer sur les données sociales au registre du commerce, les biens au registre foncier, les intérêts commerciaux, l'historique contentieux et d'autres informations publiquement disponibles.",
      "Dans le cadre de l'exécution, des informations supplémentaires peuvent être obtenues par voie judiciaire : le débiteur peut être tenu de divulguer son patrimoine (article 589 LEC), et le tribunal peut ordonner une enquête sur le patrimoine du débiteur, en demandant des informations à des organismes publics et à des établissements financiers (article 590 LEC). Une enquête approfondie permet souvent aux créanciers d'évaluer les perspectives de recouvrement avant d'engager des frais de procédure substantiels.",
    ],
    assist: "Nous réalisons des enquêtes de patrimoine et de solvabilité sur les débiteurs espagnols et, en exécution, utilisons les outils judiciaires disponibles pour localiser les actifs.",
  },
  "bank-account-attachment": {
    title: "Saisie de comptes bancaires",
    nav: "Saisie de comptes bancaires en Espagne",
    summary: "Comment la saisie est traitée une fois un titre exécutoire obtenu (article 588 LEC) ; l'exigence d'un titre exécutoire ; interaction avec les autres créanciers et montants insaisissables.",
    body: [
      "La saisie de comptes bancaires est l'une des mesures d'exécution les plus efficaces en droit espagnol. Une fois un titre exécutoire obtenu, le tribunal peut ordonner aux établissements financiers de bloquer et de transférer les fonds détenus par le débiteur (article 588 LEC). Les fonds liquides étant généralement plus faciles à réaliser que d'autres actifs, les saisies de comptes peuvent produire des résultats rapidement.",
      "La mesure n'est toutefois disponible qu'une fois que le créancier détient un titre exécutoire —un jugement, une injonction de payer non contestée ou un autre instrument d'exécution reconnu— et est réalisée dans le cadre de l'exécution, sous réserve des autres créanciers du débiteur et des règles sur les montants insaisissables. La disponibilité de cette mesure est l'un des avantages pratiques du recouvrement judiciaire en Espagne.",
    ],
    assist: "Une fois le titre exécutoire en place, nous demandons et menons la saisie des comptes bancaires du débiteur devant le tribunal de l'exécution espagnol.",
  },
  "payment-terms-late-payment": {
    title: "Délais de paiement et règles sur le retard de paiement en Espagne",
    nav: "Délais de paiement en Espagne (loi 3/2004, telle que modifiée)",
    summary: "Délais de paiement légaux (30/60 jours) ; intérêts de retard légaux ; l'indemnité forfaitaire de 40 € ; loi 3/2004 et directive européenne sur le retard de paiement.",
    body: [
      "Les transactions commerciales en Espagne sont soumises à des règles de paiement légales destinées à protéger les entreprises contre le retard de paiement, issues principalement de la loi 3/2004, qui transpose la directive européenne sur le retard de paiement (directive 2011/7/UE). En règle générale, le délai de paiement par défaut est de 30 jours, et le délai convenu entre entreprises ne peut excéder 60 jours.",
      "Lorsque des factures restent impayées au-delà du délai applicable, le créancier peut avoir droit à des intérêts de retard légaux —le taux de référence de la Banque centrale européenne majoré de huit points de pourcentage— et à une somme forfaitaire de 40 € à titre d'indemnité pour frais de recouvrement, sans préjudice de frais raisonnables supplémentaires (articles 7 et 8 de la loi). Comprendre ces dispositions importe non seulement pour le recouvrement mais aussi pour la rédaction des contrats et la gestion du risque de crédit.",
    ],
    assist: "Nous chiffrons le principal, les intérêts légaux et l'indemnité de recouvrement dus au titre de la loi 3/2004 et les réclamons dans le cadre du recouvrement.",
  },
  "contract-clauses": {
    title: "Clauses contractuelles qui facilitent le recouvrement",
    nav: "Clauses contractuelles qui aident au recouvrement",
    summary: "Clauses de juridiction et de loi applicable ; intérêts de retard ; réserve de propriété (reserva de dominio) ; reconnaissances de dette ; garanties ; clauses de frais de recouvrement.",
    body: [
      "Un recouvrement efficace commence souvent bien avant la naissance d'un litige, et des contrats bien rédigés peuvent sensiblement améliorer la position d'un créancier en cas de difficultés de paiement. Parmi les stipulations particulièrement utiles en pratique espagnole figurent les clauses de juridiction et de loi applicable, les clauses d'intérêts de retard, les clauses de réserve de propriété (reserva de dominio), les reconnaissances de dette écrites, les clauses de notification valable, les garanties personnelles et les clauses d'allocation des frais de recouvrement.",
      "La réserve de propriété, en particulier, peut être opposée plus efficacement aux tiers lorsqu'elle est documentée et, le cas échéant, inscrite. Les entreprises qui commercent en Espagne ou avec l'Espagne ont tout intérêt à revoir périodiquement leur documentation contractuelle afin de renforcer leur position juridique et de réduire le risque de recouvrement.",
    ],
    assist: "Nous revoyons et rédigeons les conditions contractuelles B2B pour le commerce avec l'Espagne, en nous concentrant sur les clauses qui renforcent le plus la position d'un créancier en cas de créance.",
  },
  "power-of-attorney": {
    title: "Procuration pour ester en justice en Espagne",
    nav: "Procuration pour ester en justice en Espagne",
    summary: "La procuration nécessaire pour plaider en Espagne ; les rôles de l'avocat et du représentant judiciaire ; exigences de notariat, d'apostille et de traduction.",
    body: [
      "Les créanciers étrangers qui poursuivent des créances en Espagne doivent généralement désigner des représentants locaux, car les procédures judiciaires exigent habituellement à la fois un avocat (abogado) et un représentant judiciaire (procurador). Cela se met en place normalement par une procuration ad litem (poder para pleitos) les autorisant à agir au nom du créancier.",
      "Le document peut être passé devant un notaire dans la juridiction d'origine du créancier et, selon le pays, peut requérir l'apostille de La Haye ou, à défaut, la légalisation diplomatique, accompagnée d'une traduction assermentée le cas échéant. Une procuration correctement préparée permet d'engager la procédure sans retard procédural évitable, et constitue donc l'une des premières étapes pratiques de tout recouvrement transfrontalier.",
    ],
    assist: "Nous fournissons le modèle de procuration requis pour le contentieux espagnol et guidons le créancier dans le notariat, l'apostille et la traduction, afin que le dossier soit prêt à avancer.",
  },
};
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
