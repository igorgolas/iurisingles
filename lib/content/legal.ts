import type { Locale } from "@/lib/i18n";
import type { Block } from "@/lib/content/services";

export type LegalPage = { title: string; blocks: Block[] };

const legalNoticeEn: LegalPage = {
  title: "Legal notice",
  blocks: [
    { t: "prose", title: "1. Ownership of the website", paras: [
      "This website, https://ijcreditor.com (the “Website”), is owned by Iuris Justitia Creditor, S.L., with Spanish tax ID (CIF) B80508716 and registered office at Paseo de la Castellana 120, 6th floor left, 28046 Madrid, registered at the Commercial Registry of Madrid, Volume 5778, Folio 35, Section 8, Sheet M-94521, Entry 1.",
      "You can contact us by email at ijcreditor@ijcreditor.es or by telephone on +34 915 77 47 30.",
    ] },
    { t: "prose", title: "2. Terms of use", paras: [
      "Access to and use of the Website are subject to this Legal Notice. Browsing or using the Website implies full acceptance of these terms; if you do not agree with them, you should not use the Website. The purpose of the Website is to provide information about the firm's business activities and the services it offers.",
      "Iuris Justitia Creditor may modify the Website and these terms at any time, without prior notice, and updates them regularly. Access is free of charge and, except for restricted areas, does not require prior registration. The user undertakes to use the Website diligently and lawfully, and not to use it for unlawful purposes or in a way that harms the rights or interests of third parties.",
      "Iuris Justitia Creditor reserves the right to modify the structure and content of the Website at any time and to limit or deny access where appropriate. While it makes its best efforts to keep the information accurate and up to date, it does not guarantee that access will be uninterrupted or error-free.",
    ] },
    { t: "prose", title: "3. Links", paras: [
      "The Website may contain links to third-party sites not managed by Iuris Justitia Creditor. The firm exercises no control over such sites and is not responsible for their content. Links are provided for reference only, and their inclusion does not imply endorsement.",
    ] },
    { t: "prose", title: "4. Intellectual and industrial property", paras: [
      "All intellectual and industrial property rights over the Website —visual appearance, graphic design, navigation architecture, source code, photographs, software, databases, trademarks, distinctive signs and logos— belong to Iuris Justitia Creditor or to third parties who have authorised their use.",
      "Only personal, non-commercial use of the firm's own content for informational purposes is authorised. Reproduction, distribution, public communication, transformation or any commercial use of all or part of the content is prohibited without the firm's prior express authorisation. Unauthorised use or infringement of these rights will give rise to the liabilities established by law.",
    ] },
    { t: "prose", title: "5. Limitation of liability", paras: [
      "Access to and use of the Website are the sole responsibility of the user. Iuris Justitia Creditor is not liable for any damage arising from: the lack of availability or proper functioning of the Website or its content; the lack of usefulness, accuracy or validity of the content for the user's needs; the presence of viruses or other harmful components, or security breaches caused by third parties; or, in general, any use of the Website contrary to these terms.",
    ] },
    { t: "prose", title: "6. Cookies", paras: [
      "This Website uses its own and third-party cookies. Details of the cookies used, their purpose and how to manage or disable them are set out in the Cookies Policy, available at https://ijcreditor.com/cookies.",
    ] },
    { t: "prose", title: "7. Personal data protection", paras: [
      "The controller of the personal data collected through the Website is Iuris Justitia Creditor, S.L. Data is processed in accordance with Regulation (EU) 2016/679 (GDPR), Organic Law 3/2018 (LOPDGDD) and applicable data-protection law. Data protection matters can be addressed to protecciondedatos@noxdata.es.",
      "Providing data through the forms is voluntary and is based on the user's consent. Data is used only for the purpose for which it was collected, and users may exercise their rights of access, rectification, erasure, portability, objection and restriction. The firm also processes the IP address of users to analyse network traffic and produce usage statistics under Article 6(1)(f) GDPR; this information is anonymous to the firm. Full details are in the Privacy Policy.",
    ] },
    { t: "prose", title: "8. Applicable law and jurisdiction", paras: [
      "These terms are governed by Spanish law. For the resolution of any dispute relating to the Website, Iuris Justitia Creditor and the user, expressly waiving any other jurisdiction, submit to the courts and tribunals of the city of Madrid (Spain).",
      "This is an English translation of the Spanish-language legal notice; in the event of any discrepancy, the Spanish version prevails.",
    ] },
  ],
};

const privacyEn: LegalPage = {
  title: "Privacy policy",
  blocks: [
    { t: "prose", title: "Controller", paras: [
      "The controller of your personal data is Iuris Justitia Creditor, S.L. (IJ Creditor), with Spanish tax ID (CIF) B80508716 and registered office at Paseo de la Castellana 120, 6th floor left, 28046 Madrid. Contact email: ijcreditor@ijcreditor.es. For data protection matters you may also write to protecciondedatos@noxdata.es.",
    ] },
    { t: "prose", title: "What data we process", paras: [
      "Through the forms on this Website we process the data you provide: identification and contact data (such as name, company, email, telephone and country) and, in the case of a proposal request, data about the case and any documents you choose to upload. We also process technical data such as your IP address.",
    ] },
    { t: "bullets", title: "Purposes", items: [
      "To handle your consultation and prepare a first case assessment.",
      "To manage and, where applicable, formalise the engagement of the firm's services.",
      "To send you commercial communications, only where you have specifically opted in.",
      "To analyse traffic and usage in order to maintain and improve the Website.",
    ] },
    { t: "bullets", title: "Legal basis", items: [
      "The adoption of pre-contractual measures taken at your request and, where applicable, the performance of the engagement (Article 6(1)(b) GDPR).",
      "Your consent, for optional commercial communications (Article 6(1)(a) GDPR), which you may withdraw at any time.",
      "The firm's legitimate interest in the security of the Website and in analysing traffic (Article 6(1)(f) GDPR).",
    ] },
    { t: "prose", title: "Recipients and processors", paras: [
      "Your data is not sold or transferred to third parties for their own purposes. It may be processed on the firm's behalf by service providers acting as data processors —in particular website hosting, email delivery for the contact forms and web-analytics providers— always under a data-processing agreement. Within the firm, access is limited to those who need it to handle your request. Where the case requires cross-border action, data may be shared with the firm's correspondents for the sole purpose of handling the matter.",
    ] },
    { t: "prose", title: "International transfers", paras: [
      "Some of the firm's service providers may process data outside the European Economic Area. In that case, the transfer is carried out with the appropriate safeguards required by data-protection law, such as the European Commission's standard contractual clauses.",
    ] },
    { t: "prose", title: "Retention", paras: [
      "Personal data is kept for the time necessary to fulfil the purpose for which it was collected and to comply with applicable legal obligations. Thereafter, it is blocked for the legally established periods before deletion.",
    ] },
    { t: "bullets", title: "Your rights", items: [
      "Access your personal data; request the rectification of inaccurate data; request its erasure.",
      "Request the restriction of processing; object to processing; request the portability of your data.",
      "Withdraw, at any time, any consent given, without affecting the lawfulness of prior processing.",
    ] },
    { t: "prose", paras: [
      "You may exercise these rights by writing to protecciondedatos@noxdata.es, indicating the right you wish to exercise. You also have the right to lodge a complaint with the Spanish Data Protection Agency (Agencia Española de Protección de Datos, www.aepd.es) if you consider that your rights have not been properly safeguarded.",
    ] },
    { t: "prose", title: "Cookies", paras: [
      "This Website uses cookies as described in the Cookies Policy, available at https://ijcreditor.com/cookies. Analytics cookies are only installed if you accept them through the cookie banner.",
      "This is an English translation of the Spanish-language privacy policy; in the event of any discrepancy, the Spanish version prevails.",
    ] },
  ],
};

const cookiesEn: LegalPage = {
  title: "Cookies policy",
  blocks: [
    { t: "prose", title: "What are cookies?", paras: [
      "Cookies are small files downloaded to your device when you visit certain websites. They allow the site to store information about your browsing, making the interaction between you and the Website faster and more useful.",
    ] },
    { t: "prose", title: "Cookies used on this website", paras: [
      "This Website does not use cookies for advertising or profiling. Beyond the technical cookies strictly necessary for the site to function, it uses third-party analytics cookies, which are only installed if you accept them through the cookie banner shown on your first visit:",
    ] },
    { t: "bullets", items: [
      "Google Analytics (provider: Google) — measures how visitors use the site (pages viewed, approximate location, device) to improve it. IP addresses are anonymised.",
      "Microsoft Clarity (provider: Microsoft) — captures anonymised usage data such as page interactions and aggregated heatmaps to help improve the site.",
    ] },
    { t: "prose", title: "Consent and how to disable cookies", paras: [
      "Strictly necessary cookies do not require consent. Analytics cookies are installed only if you accept them; if you reject them, no analytics cookies are set and no usage data is sent to these providers. You can change or withdraw your choice at any time by clearing this site's data in your browser, which will cause the cookie banner to be shown again.",
      "In addition, all modern browsers allow you to manage or block cookies through their settings (usually under “Options”, “Preferences” or “Privacy”).",
      "This is an English translation of the Spanish-language cookies policy; in the event of any discrepancy, the Spanish version prevails.",
    ] },
  ],
};

type Set = { legalNotice: LegalPage; privacy: LegalPage; cookies: LegalPage };
const en: Set = { legalNotice: legalNoticeEn, privacy: privacyEn, cookies: cookiesEn };

const legalNoticeDe: LegalPage = {
  title: "Impressum",
  blocks: [
    { t: "prose", title: "1. Inhaber der Website", paras: [
      "Diese Website, https://ijcreditor.com (die „Website“), wird betrieben von Iuris Justitia Creditor, S.L., mit spanischer Steuernummer (CIF) B80508716 und Sitz am Paseo de la Castellana 120, 6. Stock links, 28046 Madrid, eingetragen im Handelsregister von Madrid, Band 5778, Blatt 35, Abschnitt 8, Seite M-94521, Eintrag 1.",
      "Sie können uns per E-Mail an ijcreditor@ijcreditor.es oder telefonisch unter +34 915 77 47 30 erreichen.",
    ] },
    { t: "prose", title: "2. Nutzungsbedingungen", paras: [
      "Der Zugang zur und die Nutzung der Website unterliegen diesem Impressum. Das Surfen oder Nutzen der Website bedeutet die vollständige Annahme dieser Bedingungen; sind Sie nicht einverstanden, sollten Sie die Website nicht nutzen. Zweck der Website ist es, über die Geschäftstätigkeit der Kanzlei und die angebotenen Leistungen zu informieren.",
      "Iuris Justitia Creditor kann die Website und diese Bedingungen jederzeit ohne Vorankündigung ändern und aktualisiert sie regelmäßig. Der Zugang ist kostenlos und erfordert, abgesehen von geschützten Bereichen, keine vorherige Registrierung. Der Nutzer verpflichtet sich, die Website sorgfältig und rechtmäßig zu nutzen und sie nicht für rechtswidrige Zwecke oder in einer Weise zu verwenden, die Rechte oder Interessen Dritter verletzt.",
      "Iuris Justitia Creditor behält sich vor, Struktur und Inhalt der Website jederzeit zu ändern und den Zugang gegebenenfalls einzuschränken oder zu verweigern. Die Kanzlei bemüht sich nach Kräften, die Informationen aktuell und korrekt zu halten, garantiert jedoch nicht, dass der Zugang ununterbrochen oder fehlerfrei ist.",
    ] },
    { t: "prose", title: "3. Links", paras: [
      "Die Website kann Links zu Websites Dritter enthalten, die nicht von Iuris Justitia Creditor verwaltet werden. Die Kanzlei hat keine Kontrolle über solche Websites und ist für deren Inhalt nicht verantwortlich. Links werden nur als Referenz bereitgestellt; ihre Aufnahme bedeutet keine Billigung.",
    ] },
    { t: "prose", title: "4. Geistiges und gewerbliches Eigentum", paras: [
      "Alle Rechte des geistigen und gewerblichen Eigentums an der Website —visuelles Erscheinungsbild, grafische Gestaltung, Navigationsarchitektur, Quellcode, Fotografien, Software, Datenbanken, Marken, Kennzeichen und Logos— stehen Iuris Justitia Creditor oder Dritten zu, die ihre Nutzung gestattet haben.",
      "Gestattet ist nur die persönliche, nicht kommerzielle Nutzung der eigenen Inhalte der Kanzlei zu Informationszwecken. Die Vervielfältigung, Verbreitung, öffentliche Wiedergabe, Umgestaltung oder jede kommerzielle Nutzung des gesamten Inhalts oder von Teilen davon ist ohne vorherige ausdrückliche Genehmigung der Kanzlei untersagt. Eine unbefugte Nutzung oder Verletzung dieser Rechte führt zu den gesetzlich vorgesehenen Haftungsfolgen.",
    ] },
    { t: "prose", title: "5. Haftungsbeschränkung", paras: [
      "Der Zugang zur und die Nutzung der Website erfolgen in alleiniger Verantwortung des Nutzers. Iuris Justitia Creditor haftet nicht für Schäden aus: der fehlenden Verfügbarkeit oder Funktionsfähigkeit der Website oder ihrer Inhalte; der fehlenden Nützlichkeit, Richtigkeit oder Gültigkeit der Inhalte für die Bedürfnisse des Nutzers; dem Vorhandensein von Viren oder anderen schädlichen Komponenten oder durch Dritte verursachten Sicherheitsverletzungen; oder allgemein jeder gegen diese Bedingungen verstoßenden Nutzung der Website.",
    ] },
    { t: "prose", title: "6. Cookies", paras: [
      "Diese Website verwendet eigene und Cookies Dritter. Einzelheiten zu den verwendeten Cookies, ihrem Zweck und zur Verwaltung oder Deaktivierung finden Sie in der Cookie-Richtlinie unter https://ijcreditor.com/cookies.",
    ] },
    { t: "prose", title: "7. Schutz personenbezogener Daten", paras: [
      "Verantwortlicher für die über die Website erhobenen personenbezogenen Daten ist Iuris Justitia Creditor, S.L. Die Verarbeitung erfolgt gemäß der Verordnung (EU) 2016/679 (DSGVO), dem Organgesetz 3/2018 (LOPDGDD) und dem anwendbaren Datenschutzrecht. Datenschutzanliegen können an protecciondedatos@noxdata.es gerichtet werden.",
      "Die Angabe von Daten über die Formulare ist freiwillig und stützt sich auf die Einwilligung des Nutzers. Die Daten werden nur für den Zweck verwendet, für den sie erhoben wurden, und die Nutzer können ihre Rechte auf Auskunft, Berichtigung, Löschung, Übertragbarkeit, Widerspruch und Einschränkung ausüben. Die Kanzlei verarbeitet zudem die IP-Adresse der Nutzer zur Analyse des Netzverkehrs und zur Erstellung von Nutzungsstatistiken nach Art. 6 Abs. 1 lit. f DSGVO; diese Information ist für die Kanzlei anonym. Einzelheiten finden Sie in der Datenschutzerklärung.",
    ] },
    { t: "prose", title: "8. Anwendbares Recht und Gerichtsstand", paras: [
      "Diese Bedingungen unterliegen spanischem Recht. Für die Beilegung etwaiger Streitigkeiten im Zusammenhang mit der Website unterwerfen sich Iuris Justitia Creditor und der Nutzer unter ausdrücklichem Verzicht auf jeden anderen Gerichtsstand den Gerichten der Stadt Madrid (Spanien).",
      "Dies ist eine englische bzw. deutsche Übersetzung des spanischsprachigen Impressums; bei Abweichungen ist die spanische Fassung maßgeblich.",
    ] },
  ],
};

const privacyDe: LegalPage = {
  title: "Datenschutzerklärung",
  blocks: [
    { t: "prose", title: "Verantwortlicher", paras: [
      "Verantwortlicher für Ihre personenbezogenen Daten ist Iuris Justitia Creditor, S.L. (IJ Creditor), mit spanischer Steuernummer (CIF) B80508716 und Sitz am Paseo de la Castellana 120, 6. Stock links, 28046 Madrid. Kontakt-E-Mail: ijcreditor@ijcreditor.es. In Datenschutzangelegenheiten können Sie auch an protecciondedatos@noxdata.es schreiben.",
    ] },
    { t: "prose", title: "Welche Daten wir verarbeiten", paras: [
      "Über die Formulare dieser Website verarbeiten wir die von Ihnen angegebenen Daten: Identifikations- und Kontaktdaten (wie Name, Unternehmen, E-Mail, Telefon und Land) und, im Falle einer Angebotsanfrage, Daten zum Fall sowie etwaige von Ihnen hochgeladene Dokumente. Wir verarbeiten zudem technische Daten wie Ihre IP-Adresse.",
    ] },
    { t: "bullets", title: "Zwecke", items: [
      "Bearbeitung Ihrer Anfrage und Erstellung einer ersten Falleinschätzung.",
      "Verwaltung und gegebenenfalls Begründung des Mandats der Kanzlei.",
      "Versand kommerzieller Mitteilungen, nur wenn Sie ausdrücklich zugestimmt haben.",
      "Analyse von Verkehr und Nutzung zur Pflege und Verbesserung der Website.",
    ] },
    { t: "bullets", title: "Rechtsgrundlage", items: [
      "Die Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage und gegebenenfalls die Erfüllung des Mandats (Art. 6 Abs. 1 lit. b DSGVO).",
      "Ihre Einwilligung für optionale kommerzielle Mitteilungen (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit widerrufen können.",
      "Das berechtigte Interesse der Kanzlei an der Sicherheit der Website und an der Verkehrsanalyse (Art. 6 Abs. 1 lit. f DSGVO).",
    ] },
    { t: "prose", title: "Empfänger und Auftragsverarbeiter", paras: [
      "Ihre Daten werden nicht verkauft oder zu eigenen Zwecken an Dritte weitergegeben. Sie können im Auftrag der Kanzlei von Dienstleistern als Auftragsverarbeiter verarbeitet werden —insbesondere Website-Hosting, E-Mail-Versand für die Kontaktformulare und Web-Analyse-Anbieter—, stets auf Grundlage eines Auftragsverarbeitungsvertrags. Innerhalb der Kanzlei ist der Zugang auf diejenigen beschränkt, die ihn zur Bearbeitung Ihrer Anfrage benötigen. Wo der Fall ein grenzüberschreitendes Vorgehen erfordert, können Daten ausschließlich zum Zweck der Fallbearbeitung an die Korrespondenten der Kanzlei weitergegeben werden.",
    ] },
    { t: "prose", title: "Internationale Übermittlungen", paras: [
      "Einige Dienstleister der Kanzlei können Daten außerhalb des Europäischen Wirtschaftsraums verarbeiten. In diesem Fall erfolgt die Übermittlung mit den nach dem Datenschutzrecht erforderlichen geeigneten Garantien, etwa den Standardvertragsklauseln der Europäischen Kommission.",
    ] },
    { t: "prose", title: "Aufbewahrung", paras: [
      "Personenbezogene Daten werden so lange aufbewahrt, wie es zur Erfüllung des Zwecks, für den sie erhoben wurden, und zur Einhaltung gesetzlicher Pflichten erforderlich ist. Danach werden sie für die gesetzlich vorgesehenen Fristen gesperrt, bevor sie gelöscht werden.",
    ] },
    { t: "bullets", title: "Ihre Rechte", items: [
      "Auskunft über Ihre personenbezogenen Daten; Berichtigung unrichtiger Daten; Löschung.",
      "Einschränkung der Verarbeitung; Widerspruch gegen die Verarbeitung; Übertragbarkeit Ihrer Daten.",
      "Jederzeitiger Widerruf einer erteilten Einwilligung, ohne die Rechtmäßigkeit der vorherigen Verarbeitung zu berühren.",
    ] },
    { t: "prose", paras: [
      "Sie können diese Rechte ausüben, indem Sie an protecciondedatos@noxdata.es schreiben und das auszuübende Recht angeben. Sie haben zudem das Recht, eine Beschwerde bei der spanischen Datenschutzbehörde (Agencia Española de Protección de Datos, www.aepd.es) einzureichen, wenn Sie der Ansicht sind, dass Ihre Rechte nicht ordnungsgemäß gewahrt wurden.",
    ] },
    { t: "prose", title: "Cookies", paras: [
      "Diese Website verwendet Cookies wie in der Cookie-Richtlinie unter https://ijcreditor.com/cookies beschrieben. Analyse-Cookies werden nur gesetzt, wenn Sie sie über das Cookie-Banner annehmen.",
      "Dies ist eine Übersetzung der spanischsprachigen Datenschutzerklärung; bei Abweichungen ist die spanische Fassung maßgeblich.",
    ] },
  ],
};

const cookiesDe: LegalPage = {
  title: "Cookie-Richtlinie",
  blocks: [
    { t: "prose", title: "Was sind Cookies?", paras: [
      "Cookies sind kleine Dateien, die beim Besuch bestimmter Websites auf Ihr Gerät heruntergeladen werden. Sie ermöglichen es der Website, Informationen über Ihr Surfverhalten zu speichern und so die Interaktion zwischen Ihnen und der Website schneller und nützlicher zu machen.",
    ] },
    { t: "prose", title: "Auf dieser Website verwendete Cookies", paras: [
      "Diese Website verwendet keine Cookies für Werbung oder Profilbildung. Über die technisch notwendigen Cookies hinaus verwendet sie Analyse-Cookies Dritter, die nur gesetzt werden, wenn Sie sie über das beim ersten Besuch angezeigte Cookie-Banner annehmen:",
    ] },
    { t: "bullets", items: [
      "Google Analytics (Anbieter: Google) — misst, wie Besucher die Website nutzen (aufgerufene Seiten, ungefähre Standortangabe, Gerät), um sie zu verbessern. IP-Adressen werden anonymisiert.",
      "Microsoft Clarity (Anbieter: Microsoft) — erfasst anonymisierte Nutzungsdaten wie Seiteninteraktionen und aggregierte Heatmaps zur Verbesserung der Website.",
    ] },
    { t: "prose", title: "Einwilligung und Deaktivierung von Cookies", paras: [
      "Technisch notwendige Cookies bedürfen keiner Einwilligung. Analyse-Cookies werden nur gesetzt, wenn Sie sie annehmen; lehnen Sie ab, werden keine Analyse-Cookies gesetzt und es werden keine Nutzungsdaten an diese Anbieter gesendet. Sie können Ihre Wahl jederzeit ändern oder widerrufen, indem Sie die Daten dieser Website in Ihrem Browser löschen, woraufhin das Cookie-Banner erneut angezeigt wird.",
      "Darüber hinaus erlauben alle modernen Browser, Cookies über ihre Einstellungen zu verwalten oder zu blockieren (in der Regel unter „Optionen“, „Einstellungen“ oder „Datenschutz“).",
      "Dies ist eine Übersetzung der spanischsprachigen Cookie-Richtlinie; bei Abweichungen ist die spanische Fassung maßgeblich.",
    ] },
  ],
};

const de: Set = { legalNotice: legalNoticeDe, privacy: privacyDe, cookies: cookiesDe };

const legalNoticeFr: LegalPage = {
  title: "Mentions légales",
  blocks: [
    { t: "prose", title: "1. Propriétaire du site", paras: [
      "Ce site, https://ijcreditor.com (le « Site »), est la propriété d'Iuris Justitia Creditor, S.L., titulaire de l'identifiant fiscal espagnol (CIF) B80508716 et dont le siège social est Paseo de la Castellana 120, 6e étage gauche, 28046 Madrid, immatriculée au Registre du commerce de Madrid, tome 5778, folio 35, section 8, feuille M-94521, inscription 1.",
      "Vous pouvez nous contacter par e-mail à ijcreditor@ijcreditor.es ou par téléphone au +34 915 77 47 30.",
    ] },
    { t: "prose", title: "2. Conditions d'utilisation", paras: [
      "L'accès au Site et son utilisation sont soumis aux présentes mentions légales. La navigation ou l'utilisation du Site implique l'acceptation pleine et entière de ces conditions ; si vous n'êtes pas d'accord, vous ne devez pas utiliser le Site. Le Site a pour objet de fournir des informations sur les activités du cabinet et les services qu'il propose.",
      "Iuris Justitia Creditor peut modifier le Site et ces conditions à tout moment, sans préavis, et les met à jour régulièrement. L'accès est gratuit et, hormis les zones restreintes, ne requiert pas d'inscription préalable. L'utilisateur s'engage à utiliser le Site avec diligence et licéité, et à ne pas l'employer à des fins illicites ni d'une manière portant atteinte aux droits ou intérêts de tiers.",
      "Iuris Justitia Creditor se réserve le droit de modifier la structure et le contenu du Site à tout moment et de limiter ou refuser l'accès le cas échéant. Le cabinet met tout en œuvre pour maintenir l'information exacte et à jour, mais ne garantit pas que l'accès soit ininterrompu ou exempt d'erreurs.",
    ] },
    { t: "prose", title: "3. Liens", paras: [
      "Le Site peut contenir des liens vers des sites tiers non gérés par Iuris Justitia Creditor. Le cabinet n'exerce aucun contrôle sur ces sites et n'est pas responsable de leur contenu. Les liens sont fournis à titre de référence uniquement et leur inclusion n'implique aucune approbation.",
    ] },
    { t: "prose", title: "4. Propriété intellectuelle et industrielle", paras: [
      "Tous les droits de propriété intellectuelle et industrielle sur le Site —apparence visuelle, conception graphique, architecture de navigation, code source, photographies, logiciels, bases de données, marques, signes distinctifs et logos— appartiennent à Iuris Justitia Creditor ou à des tiers ayant autorisé leur utilisation.",
      "Seule l'utilisation personnelle et non commerciale des contenus propres du cabinet à des fins d'information est autorisée. La reproduction, la distribution, la communication au public, la transformation ou toute utilisation commerciale de tout ou partie du contenu est interdite sans l'autorisation expresse et préalable du cabinet. Toute utilisation non autorisée ou atteinte à ces droits engagera les responsabilités prévues par la loi.",
    ] },
    { t: "prose", title: "5. Limitation de responsabilité", paras: [
      "L'accès au Site et son utilisation relèvent de la seule responsabilité de l'utilisateur. Iuris Justitia Creditor n'est pas responsable des dommages résultant de : l'indisponibilité ou le mauvais fonctionnement du Site ou de son contenu ; le manque d'utilité, d'exactitude ou de validité du contenu au regard des besoins de l'utilisateur ; la présence de virus ou d'autres composants nuisibles, ou des atteintes à la sécurité causées par des tiers ; ou, en général, toute utilisation du Site contraire aux présentes conditions.",
    ] },
    { t: "prose", title: "6. Cookies", paras: [
      "Ce Site utilise des cookies propres et de tiers. Le détail des cookies utilisés, leur finalité et la manière de les gérer ou de les désactiver figurent dans la Politique de cookies, disponible à l'adresse https://ijcreditor.com/cookies.",
    ] },
    { t: "prose", title: "7. Protection des données personnelles", paras: [
      "Le responsable du traitement des données personnelles collectées via le Site est Iuris Justitia Creditor, S.L. Les données sont traitées conformément au règlement (UE) 2016/679 (RGPD), à la loi organique 3/2018 (LOPDGDD) et au droit applicable en matière de protection des données. Les questions de protection des données peuvent être adressées à protecciondedatos@noxdata.es.",
      "La communication de données via les formulaires est volontaire et repose sur le consentement de l'utilisateur. Les données ne sont utilisées que pour la finalité pour laquelle elles ont été collectées, et les utilisateurs peuvent exercer leurs droits d'accès, de rectification, d'effacement, de portabilité, d'opposition et de limitation. Le cabinet traite également l'adresse IP des utilisateurs afin d'analyser le trafic réseau et d'établir des statistiques d'utilisation, au titre de l'article 6, paragraphe 1, point f, du RGPD ; cette information est anonyme pour le cabinet. Les détails figurent dans la Politique de confidentialité.",
    ] },
    { t: "prose", title: "8. Droit applicable et juridiction", paras: [
      "Les présentes conditions sont régies par le droit espagnol. Pour le règlement de tout litige relatif au Site, Iuris Justitia Creditor et l'utilisateur, renonçant expressément à toute autre juridiction, se soumettent aux tribunaux de la ville de Madrid (Espagne).",
      "Ceci est une traduction des mentions légales rédigées en espagnol ; en cas de divergence, la version espagnole prévaut.",
    ] },
  ],
};

const privacyFr: LegalPage = {
  title: "Politique de confidentialité",
  blocks: [
    { t: "prose", title: "Responsable du traitement", paras: [
      "Le responsable du traitement de vos données personnelles est Iuris Justitia Creditor, S.L. (IJ Creditor), titulaire de l'identifiant fiscal espagnol (CIF) B80508716 et dont le siège social est Paseo de la Castellana 120, 6e étage gauche, 28046 Madrid. E-mail de contact : ijcreditor@ijcreditor.es. Pour les questions de protection des données, vous pouvez aussi écrire à protecciondedatos@noxdata.es.",
    ] },
    { t: "prose", title: "Quelles données nous traitons", paras: [
      "Via les formulaires de ce Site, nous traitons les données que vous fournissez : données d'identification et de contact (telles que nom, entreprise, e-mail, téléphone et pays) et, dans le cas d'une demande de proposition, des données sur le dossier ainsi que tout document que vous choisissez de téléverser. Nous traitons également des données techniques telles que votre adresse IP.",
    ] },
    { t: "bullets", title: "Finalités", items: [
      "Gérer votre demande et préparer une première évaluation du dossier.",
      "Gérer et, le cas échéant, formaliser le mandat des services du cabinet.",
      "Vous envoyer des communications commerciales, uniquement si vous y avez spécifiquement consenti.",
      "Analyser le trafic et l'utilisation afin de maintenir et d'améliorer le Site.",
    ] },
    { t: "bullets", title: "Base légale", items: [
      "L'adoption de mesures précontractuelles prises à votre demande et, le cas échéant, l'exécution du mandat (article 6, paragraphe 1, point b, du RGPD).",
      "Votre consentement, pour les communications commerciales facultatives (article 6, paragraphe 1, point a, du RGPD), que vous pouvez retirer à tout moment.",
      "L'intérêt légitime du cabinet à la sécurité du Site et à l'analyse du trafic (article 6, paragraphe 1, point f, du RGPD).",
    ] },
    { t: "prose", title: "Destinataires et sous-traitants", paras: [
      "Vos données ne sont ni vendues ni transférées à des tiers pour leurs propres finalités. Elles peuvent être traitées pour le compte du cabinet par des prestataires agissant comme sous-traitants —notamment l'hébergement du site, l'envoi d'e-mails pour les formulaires de contact et les prestataires d'analyse d'audience—, toujours dans le cadre d'un contrat de sous-traitance. Au sein du cabinet, l'accès est limité aux personnes qui en ont besoin pour traiter votre demande. Lorsque le dossier exige une action transfrontalière, les données peuvent être partagées avec les correspondants du cabinet aux seules fins du traitement du dossier.",
    ] },
    { t: "prose", title: "Transferts internationaux", paras: [
      "Certains prestataires du cabinet peuvent traiter des données en dehors de l'Espace économique européen. Dans ce cas, le transfert est effectué avec les garanties appropriées exigées par le droit de la protection des données, telles que les clauses contractuelles types de la Commission européenne.",
    ] },
    { t: "prose", title: "Conservation", paras: [
      "Les données personnelles sont conservées pendant la durée nécessaire à la réalisation de la finalité pour laquelle elles ont été collectées et au respect des obligations légales applicables. Elles sont ensuite bloquées pendant les délais légaux avant suppression.",
    ] },
    { t: "bullets", title: "Vos droits", items: [
      "Accéder à vos données personnelles ; demander la rectification des données inexactes ; demander leur effacement.",
      "Demander la limitation du traitement ; vous opposer au traitement ; demander la portabilité de vos données.",
      "Retirer à tout moment tout consentement donné, sans affecter la licéité du traitement antérieur.",
    ] },
    { t: "prose", paras: [
      "Vous pouvez exercer ces droits en écrivant à protecciondedatos@noxdata.es, en indiquant le droit que vous souhaitez exercer. Vous avez également le droit d'introduire une réclamation auprès de l'Agence espagnole de protection des données (Agencia Española de Protección de Datos, www.aepd.es) si vous estimez que vos droits n'ont pas été correctement préservés.",
    ] },
    { t: "prose", title: "Cookies", paras: [
      "Ce Site utilise des cookies comme décrit dans la Politique de cookies, disponible à l'adresse https://ijcreditor.com/cookies. Les cookies d'analyse ne sont installés que si vous les acceptez via la bannière de cookies.",
      "Ceci est une traduction de la politique de confidentialité rédigée en espagnol ; en cas de divergence, la version espagnole prévaut.",
    ] },
  ],
};

const cookiesFr: LegalPage = {
  title: "Politique de cookies",
  blocks: [
    { t: "prose", title: "Qu'est-ce qu'un cookie ?", paras: [
      "Les cookies sont de petits fichiers téléchargés sur votre appareil lorsque vous visitez certains sites. Ils permettent au site de stocker des informations sur votre navigation, rendant l'interaction entre vous et le Site plus rapide et plus utile.",
    ] },
    { t: "prose", title: "Cookies utilisés sur ce site", paras: [
      "Ce Site n'utilise pas de cookies de publicité ou de profilage. Au-delà des cookies techniques strictement nécessaires au fonctionnement du site, il utilise des cookies d'analyse de tiers, qui ne sont installés que si vous les acceptez via la bannière de cookies affichée lors de votre première visite :",
    ] },
    { t: "bullets", items: [
      "Google Analytics (fournisseur : Google) — mesure la manière dont les visiteurs utilisent le site (pages vues, localisation approximative, appareil) afin de l'améliorer. Les adresses IP sont anonymisées.",
      "Microsoft Clarity (fournisseur : Microsoft) — capture des données d'utilisation anonymisées telles que les interactions avec les pages et des cartes de chaleur agrégées pour améliorer le site.",
    ] },
    { t: "prose", title: "Consentement et désactivation des cookies", paras: [
      "Les cookies strictement nécessaires ne requièrent pas de consentement. Les cookies d'analyse ne sont installés que si vous les acceptez ; si vous les refusez, aucun cookie d'analyse n'est installé et aucune donnée d'utilisation n'est envoyée à ces fournisseurs. Vous pouvez modifier ou retirer votre choix à tout moment en effaçant les données de ce site dans votre navigateur, ce qui réaffichera la bannière de cookies.",
      "En outre, tous les navigateurs modernes permettent de gérer ou de bloquer les cookies via leurs paramètres (généralement sous « Options », « Préférences » ou « Confidentialité »).",
      "Ceci est une traduction de la politique de cookies rédigée en espagnol ; en cas de divergence, la version espagnole prévaut.",
    ] },
  ],
};

const fr: Set = { legalNotice: legalNoticeFr, privacy: privacyFr, cookies: cookiesFr };

const legalNoticeIt: LegalPage = {
  title: "Note legali",
  blocks: [
    { t: "prose", title: "1. Titolare del sito", paras: [
      "Questo sito, https://ijcreditor.com (il « Sito »), è di proprietà di Iuris Justitia Creditor, S.L., con codice fiscale spagnolo (CIF) B80508716 e sede legale in Paseo de la Castellana 120, 6º piano sinistra, 28046 Madrid, iscritta al Registro delle imprese di Madrid, volume 5778, foglio 35, sezione 8, scheda M-94521, iscrizione 1.",
      "Puoi contattarci via e-mail all'indirizzo ijcreditor@ijcreditor.es o per telefono al +34 915 77 47 30.",
    ] },
    { t: "prose", title: "2. Condizioni d'uso", paras: [
      "L'accesso al Sito e il suo utilizzo sono soggetti alle presenti note legali. La navigazione o l'uso del Sito implica la piena accettazione di queste condizioni; in caso di disaccordo, non dovresti utilizzare il Sito. Il Sito ha lo scopo di fornire informazioni sulle attività dello studio e sui servizi offerti.",
      "Iuris Justitia Creditor può modificare il Sito e queste condizioni in qualsiasi momento, senza preavviso, e le aggiorna regolarmente. L'accesso è gratuito e, salvo le aree riservate, non richiede registrazione preventiva. L'utente si impegna a utilizzare il Sito in modo diligente e lecito e a non impiegarlo per finalità illecite né in modo lesivo dei diritti o degli interessi di terzi.",
      "Iuris Justitia Creditor si riserva il diritto di modificare la struttura e il contenuto del Sito in qualsiasi momento e di limitare o negare l'accesso ove opportuno. Lo studio si adopera per mantenere le informazioni accurate e aggiornate, ma non garantisce che l'accesso sia ininterrotto o privo di errori.",
    ] },
    { t: "prose", title: "3. Link", paras: [
      "Il Sito può contenere link a siti di terzi non gestiti da Iuris Justitia Creditor. Lo studio non esercita alcun controllo su tali siti e non è responsabile dei loro contenuti. I link sono forniti solo a titolo di riferimento e la loro inclusione non implica alcuna approvazione.",
    ] },
    { t: "prose", title: "4. Proprietà intellettuale e industriale", paras: [
      "Tutti i diritti di proprietà intellettuale e industriale sul Sito —aspetto visivo, progettazione grafica, architettura di navigazione, codice sorgente, fotografie, software, banche dati, marchi, segni distintivi e loghi— appartengono a Iuris Justitia Creditor o a terzi che ne hanno autorizzato l'uso.",
      "È autorizzato solo l'uso personale e non commerciale dei contenuti propri dello studio a fini informativi. Sono vietate la riproduzione, la distribuzione, la comunicazione al pubblico, la trasformazione o qualsiasi uso commerciale di tutto o parte del contenuto senza la previa ed espressa autorizzazione dello studio. L'uso non autorizzato o la violazione di tali diritti comporterà le responsabilità previste dalla legge.",
    ] },
    { t: "prose", title: "5. Limitazione di responsabilità", paras: [
      "L'accesso al Sito e il suo utilizzo sono di esclusiva responsabilità dell'utente. Iuris Justitia Creditor non è responsabile dei danni derivanti da: indisponibilità o malfunzionamento del Sito o dei suoi contenuti; mancanza di utilità, accuratezza o validità dei contenuti rispetto alle esigenze dell'utente; presenza di virus o altri componenti dannosi, o violazioni della sicurezza causate da terzi; o, in generale, qualsiasi uso del Sito contrario alle presenti condizioni.",
    ] },
    { t: "prose", title: "6. Cookie", paras: [
      "Questo Sito utilizza cookie propri e di terzi. I dettagli sui cookie utilizzati, la loro finalità e le modalità per gestirli o disabilitarli sono indicati nell'Informativa sui cookie, disponibile all'indirizzo https://ijcreditor.com/cookies.",
    ] },
    { t: "prose", title: "7. Protezione dei dati personali", paras: [
      "Il titolare del trattamento dei dati personali raccolti tramite il Sito è Iuris Justitia Creditor, S.L. I dati sono trattati in conformità al regolamento (UE) 2016/679 (GDPR), alla legge organica 3/2018 (LOPDGDD) e alla normativa applicabile in materia di protezione dei dati. Le questioni relative alla protezione dei dati possono essere indirizzate a protecciondedatos@noxdata.es.",
      "Il conferimento di dati tramite i moduli è volontario e si basa sul consenso dell'utente. I dati sono utilizzati solo per la finalità per cui sono stati raccolti e gli utenti possono esercitare i diritti di accesso, rettifica, cancellazione, portabilità, opposizione e limitazione. Lo studio tratta inoltre l'indirizzo IP degli utenti per analizzare il traffico di rete e produrre statistiche d'uso, ai sensi dell'articolo 6, paragrafo 1, lettera f, del GDPR; tale informazione è anonima per lo studio. I dettagli sono nell'Informativa sulla privacy.",
    ] },
    { t: "prose", title: "8. Legge applicabile e foro competente", paras: [
      "Le presenti condizioni sono regolate dalla legge spagnola. Per la risoluzione di qualsiasi controversia relativa al Sito, Iuris Justitia Creditor e l'utente, rinunciando espressamente a qualsiasi altro foro, si sottopongono ai tribunali della città di Madrid (Spagna).",
      "Questa è una traduzione delle note legali redatte in spagnolo; in caso di discrepanza, prevale la versione spagnola.",
    ] },
  ],
};

const privacyIt: LegalPage = {
  title: "Informativa sulla privacy",
  blocks: [
    { t: "prose", title: "Titolare del trattamento", paras: [
      "Il titolare del trattamento dei tuoi dati personali è Iuris Justitia Creditor, S.L. (IJ Creditor), con codice fiscale spagnolo (CIF) B80508716 e sede legale in Paseo de la Castellana 120, 6º piano sinistra, 28046 Madrid. E-mail di contatto: ijcreditor@ijcreditor.es. Per le questioni di protezione dei dati puoi scrivere anche a protecciondedatos@noxdata.es.",
    ] },
    { t: "prose", title: "Quali dati trattiamo", paras: [
      "Tramite i moduli di questo Sito trattiamo i dati che fornisci: dati identificativi e di contatto (come nome, azienda, e-mail, telefono e Paese) e, nel caso di una richiesta di proposta, dati sulla pratica ed eventuali documenti che scegli di caricare. Trattiamo inoltre dati tecnici come il tuo indirizzo IP.",
    ] },
    { t: "bullets", title: "Finalità", items: [
      "Gestire la tua richiesta e preparare una prima valutazione della pratica.",
      "Gestire e, ove applicabile, formalizzare l'incarico dei servizi dello studio.",
      "Inviarti comunicazioni commerciali, solo se hai prestato uno specifico consenso.",
      "Analizzare il traffico e l'uso per mantenere e migliorare il Sito.",
    ] },
    { t: "bullets", title: "Base giuridica", items: [
      "L'adozione di misure precontrattuali su tua richiesta e, ove applicabile, l'esecuzione dell'incarico (articolo 6, paragrafo 1, lettera b, GDPR).",
      "Il tuo consenso, per le comunicazioni commerciali facoltative (articolo 6, paragrafo 1, lettera a, GDPR), che puoi revocare in qualsiasi momento.",
      "Il legittimo interesse dello studio alla sicurezza del Sito e all'analisi del traffico (articolo 6, paragrafo 1, lettera f, GDPR).",
    ] },
    { t: "prose", title: "Destinatari e responsabili del trattamento", paras: [
      "I tuoi dati non sono venduti né trasferiti a terzi per finalità proprie di questi. Possono essere trattati per conto dello studio da fornitori che agiscono come responsabili del trattamento —in particolare hosting del sito, invio di e-mail per i moduli di contatto e fornitori di analisi web—, sempre nell'ambito di un accordo di responsabilità del trattamento. All'interno dello studio, l'accesso è limitato a chi ne ha bisogno per gestire la tua richiesta. Ove la pratica richieda un'azione transfrontaliera, i dati possono essere condivisi con i corrispondenti dello studio al solo scopo di gestire la pratica.",
    ] },
    { t: "prose", title: "Trasferimenti internazionali", paras: [
      "Alcuni fornitori dello studio possono trattare dati al di fuori dello Spazio economico europeo. In tal caso, il trasferimento è effettuato con le garanzie appropriate richieste dalla normativa sulla protezione dei dati, come le clausole contrattuali tipo della Commissione europea.",
    ] },
    { t: "prose", title: "Conservazione", paras: [
      "I dati personali sono conservati per il tempo necessario a soddisfare la finalità per cui sono stati raccolti e ad adempiere agli obblighi di legge applicabili. Successivamente sono bloccati per i periodi previsti dalla legge prima della cancellazione.",
    ] },
    { t: "bullets", title: "I tuoi diritti", items: [
      "Accedere ai tuoi dati personali; chiedere la rettifica dei dati inesatti; chiederne la cancellazione.",
      "Chiedere la limitazione del trattamento; opporti al trattamento; chiedere la portabilità dei tuoi dati.",
      "Revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento precedente.",
    ] },
    { t: "prose", paras: [
      "Puoi esercitare questi diritti scrivendo a protecciondedatos@noxdata.es, indicando il diritto che desideri esercitare. Hai inoltre il diritto di presentare reclamo all'Agenzia spagnola per la protezione dei dati (Agencia Española de Protección de Datos, www.aepd.es) se ritieni che i tuoi diritti non siano stati adeguatamente tutelati.",
    ] },
    { t: "prose", title: "Cookie", paras: [
      "Questo Sito utilizza cookie come descritto nell'Informativa sui cookie, disponibile all'indirizzo https://ijcreditor.com/cookies. I cookie analitici sono installati solo se li accetti tramite il banner dei cookie.",
      "Questa è una traduzione dell'informativa sulla privacy redatta in spagnolo; in caso di discrepanza, prevale la versione spagnola.",
    ] },
  ],
};

const cookiesIt: LegalPage = {
  title: "Informativa sui cookie",
  blocks: [
    { t: "prose", title: "Cosa sono i cookie?", paras: [
      "I cookie sono piccoli file scaricati sul tuo dispositivo quando visiti determinati siti. Consentono al sito di memorizzare informazioni sulla tua navigazione, rendendo l'interazione tra te e il Sito più rapida e utile.",
    ] },
    { t: "prose", title: "Cookie utilizzati su questo sito", paras: [
      "Questo Sito non utilizza cookie pubblicitari o di profilazione. Oltre ai cookie tecnici strettamente necessari al funzionamento del sito, utilizza cookie analitici di terzi, che sono installati solo se li accetti tramite il banner dei cookie mostrato alla prima visita:",
    ] },
    { t: "bullets", items: [
      "Google Analytics (fornitore: Google) — misura come i visitatori usano il sito (pagine viste, posizione approssimativa, dispositivo) per migliorarlo. Gli indirizzi IP sono anonimizzati.",
      "Microsoft Clarity (fornitore: Microsoft) — acquisisce dati d'uso anonimizzati come le interazioni con le pagine e mappe di calore aggregate per migliorare il sito.",
    ] },
    { t: "prose", title: "Consenso e disattivazione dei cookie", paras: [
      "I cookie strettamente necessari non richiedono consenso. I cookie analitici sono installati solo se li accetti; se li rifiuti, non viene installato alcun cookie analitico e nessun dato d'uso viene inviato a tali fornitori. Puoi modificare o revocare la tua scelta in qualsiasi momento cancellando i dati di questo sito nel browser, il che farà ricomparire il banner dei cookie.",
      "Inoltre, tutti i browser moderni consentono di gestire o bloccare i cookie tramite le loro impostazioni (di solito sotto « Opzioni », « Preferenze » o « Privacy »).",
      "Questa è una traduzione dell'informativa sui cookie redatta in spagnolo; in caso di discrepanza, prevale la versione spagnola.",
    ] },
  ],
};

const it: Set = { legalNotice: legalNoticeIt, privacy: privacyIt, cookies: cookiesIt };

const legalNoticePt: LegalPage = {
  title: "Aviso legal",
  blocks: [
    { t: "prose", title: "1. Titularidade do site", paras: [
      "Este site, https://ijcreditor.com (o « Site »), é propriedade da Iuris Justitia Creditor, S.L., com número fiscal espanhol (CIF) B80508716 e sede no Paseo de la Castellana 120, 6.º esquerdo, 28046 Madrid, inscrita no Registo Comercial de Madrid, tomo 5778, fólio 35, secção 8, folha M-94521, inscrição 1.",
      "Pode contactar-nos por e-mail para ijcreditor@ijcreditor.es ou por telefone para +34 915 77 47 30.",
    ] },
    { t: "prose", title: "2. Condições de utilização", paras: [
      "O acesso ao Site e a sua utilização estão sujeitos a este Aviso Legal. A navegação ou utilização do Site implica a plena aceitação destas condições; se não concordar, não deve utilizar o Site. O Site destina-se a prestar informação sobre as atividades da sociedade e os serviços que oferece.",
      "A Iuris Justitia Creditor pode alterar o Site e estas condições a qualquer momento, sem aviso prévio, e atualiza-as regularmente. O acesso é gratuito e, salvo as áreas restritas, não exige registo prévio. O utilizador compromete-se a utilizar o Site de forma diligente e lícita e a não o empregar para fins ilícitos nem de modo lesivo dos direitos ou interesses de terceiros.",
      "A Iuris Justitia Creditor reserva-se o direito de alterar a estrutura e o conteúdo do Site a qualquer momento e de limitar ou recusar o acesso quando adequado. A sociedade faz o seu melhor para manter a informação exata e atualizada, mas não garante que o acesso seja ininterrupto ou isento de erros.",
    ] },
    { t: "prose", title: "3. Ligações", paras: [
      "O Site pode conter ligações para sites de terceiros não geridos pela Iuris Justitia Creditor. A sociedade não exerce qualquer controlo sobre esses sites e não é responsável pelo seu conteúdo. As ligações são fornecidas apenas a título de referência e a sua inclusão não implica qualquer aprovação.",
    ] },
    { t: "prose", title: "4. Propriedade intelectual e industrial", paras: [
      "Todos os direitos de propriedade intelectual e industrial sobre o Site —aspeto visual, conceção gráfica, arquitetura de navegação, código-fonte, fotografias, software, bases de dados, marcas, sinais distintivos e logótipos— pertencem à Iuris Justitia Creditor ou a terceiros que autorizaram a sua utilização.",
      "Só é autorizada a utilização pessoal e não comercial dos conteúdos próprios da sociedade para fins informativos. É proibida a reprodução, distribuição, comunicação ao público, transformação ou qualquer utilização comercial da totalidade ou de parte do conteúdo sem autorização prévia e expressa da sociedade. A utilização não autorizada ou a violação destes direitos dará origem às responsabilidades estabelecidas por lei.",
    ] },
    { t: "prose", title: "5. Limitação de responsabilidade", paras: [
      "O acesso ao Site e a sua utilização são da exclusiva responsabilidade do utilizador. A Iuris Justitia Creditor não é responsável por danos decorrentes de: indisponibilidade ou mau funcionamento do Site ou do seu conteúdo; falta de utilidade, exatidão ou validade do conteúdo face às necessidades do utilizador; presença de vírus ou outros componentes nocivos, ou violações de segurança causadas por terceiros; ou, em geral, qualquer utilização do Site contrária a estas condições.",
    ] },
    { t: "prose", title: "6. Cookies", paras: [
      "Este Site utiliza cookies próprios e de terceiros. Os detalhes sobre os cookies utilizados, a sua finalidade e a forma de os gerir ou desativar constam da Política de Cookies, disponível em https://ijcreditor.com/cookies.",
    ] },
    { t: "prose", title: "7. Proteção de dados pessoais", paras: [
      "O responsável pelo tratamento dos dados pessoais recolhidos através do Site é a Iuris Justitia Creditor, S.L. Os dados são tratados em conformidade com o Regulamento (UE) 2016/679 (RGPD), a Lei Orgânica 3/2018 (LOPDGDD) e a lei aplicável em matéria de proteção de dados. As questões de proteção de dados podem ser dirigidas a protecciondedatos@noxdata.es.",
      "O fornecimento de dados através dos formulários é voluntário e baseia-se no consentimento do utilizador. Os dados são usados apenas para a finalidade para que foram recolhidos, e os utilizadores podem exercer os seus direitos de acesso, retificação, apagamento, portabilidade, oposição e limitação. A sociedade trata ainda o endereço IP dos utilizadores para analisar o tráfego de rede e produzir estatísticas de utilização, ao abrigo do artigo 6.º, n.º 1, alínea f), do RGPD; esta informação é anónima para a sociedade. Os detalhes constam da Política de Privacidade.",
    ] },
    { t: "prose", title: "8. Lei aplicável e foro", paras: [
      "Estas condições regem-se pela lei espanhola. Para a resolução de qualquer litígio relativo ao Site, a Iuris Justitia Creditor e o utilizador, renunciando expressamente a qualquer outro foro, submetem-se aos tribunais da cidade de Madrid (Espanha).",
      "Esta é uma tradução do aviso legal redigido em espanhol; em caso de divergência, prevalece a versão espanhola.",
    ] },
  ],
};

const privacyPt: LegalPage = {
  title: "Política de privacidade",
  blocks: [
    { t: "prose", title: "Responsável pelo tratamento", paras: [
      "O responsável pelo tratamento dos seus dados pessoais é a Iuris Justitia Creditor, S.L. (IJ Creditor), com número fiscal espanhol (CIF) B80508716 e sede no Paseo de la Castellana 120, 6.º esquerdo, 28046 Madrid. E-mail de contacto: ijcreditor@ijcreditor.es. Para questões de proteção de dados pode também escrever para protecciondedatos@noxdata.es.",
    ] },
    { t: "prose", title: "Que dados tratamos", paras: [
      "Através dos formulários deste Site tratamos os dados que fornece: dados de identificação e de contacto (como nome, empresa, e-mail, telefone e país) e, no caso de um pedido de proposta, dados sobre o caso e quaisquer documentos que opte por carregar. Tratamos ainda dados técnicos como o seu endereço IP.",
    ] },
    { t: "bullets", title: "Finalidades", items: [
      "Tratar o seu pedido e preparar uma primeira avaliação do caso.",
      "Gerir e, quando aplicável, formalizar o mandato dos serviços da sociedade.",
      "Enviar-lhe comunicações comerciais, apenas se tiver consentido especificamente.",
      "Analisar o tráfego e a utilização para manter e melhorar o Site.",
    ] },
    { t: "bullets", title: "Base legal", items: [
      "A adoção de medidas pré-contratuais tomadas a seu pedido e, quando aplicável, a execução do mandato (artigo 6.º, n.º 1, alínea b), do RGPD).",
      "O seu consentimento, para comunicações comerciais facultativas (artigo 6.º, n.º 1, alínea a), do RGPD), que pode retirar a qualquer momento.",
      "O interesse legítimo da sociedade na segurança do Site e na análise do tráfego (artigo 6.º, n.º 1, alínea f), do RGPD).",
    ] },
    { t: "prose", title: "Destinatários e subcontratantes", paras: [
      "Os seus dados não são vendidos nem transferidos para terceiros para finalidades próprias destes. Podem ser tratados por conta da sociedade por prestadores que atuam como subcontratantes —em particular o alojamento do site, o envio de e-mails para os formulários de contacto e os fornecedores de análise web—, sempre ao abrigo de um contrato de subcontratação. Dentro da sociedade, o acesso está limitado a quem dele necessita para tratar o seu pedido. Quando o caso exija uma ação transfronteiriça, os dados podem ser partilhados com os correspondentes da sociedade com o único objetivo de tratar o caso.",
    ] },
    { t: "prose", title: "Transferências internacionais", paras: [
      "Alguns prestadores da sociedade podem tratar dados fora do Espaço Económico Europeu. Nesse caso, a transferência é realizada com as garantias adequadas exigidas pela lei de proteção de dados, como as cláusulas contratuais-tipo da Comissão Europeia.",
    ] },
    { t: "prose", title: "Conservação", paras: [
      "Os dados pessoais são conservados pelo tempo necessário ao cumprimento da finalidade para que foram recolhidos e ao cumprimento das obrigações legais aplicáveis. Posteriormente, são bloqueados pelos prazos legalmente estabelecidos antes do apagamento.",
    ] },
    { t: "bullets", title: "Os seus direitos", items: [
      "Aceder aos seus dados pessoais; solicitar a retificação de dados inexatos; solicitar o seu apagamento.",
      "Solicitar a limitação do tratamento; opor-se ao tratamento; solicitar a portabilidade dos seus dados.",
      "Retirar, a qualquer momento, qualquer consentimento dado, sem afetar a licitude do tratamento anterior.",
    ] },
    { t: "prose", paras: [
      "Pode exercer estes direitos escrevendo para protecciondedatos@noxdata.es, indicando o direito que pretende exercer. Tem também o direito de apresentar reclamação à Agência Espanhola de Proteção de Dados (Agencia Española de Protección de Datos, www.aepd.es) se considerar que os seus direitos não foram devidamente salvaguardados.",
    ] },
    { t: "prose", title: "Cookies", paras: [
      "Este Site utiliza cookies conforme descrito na Política de Cookies, disponível em https://ijcreditor.com/cookies. Os cookies de análise só são instalados se os aceitar através do banner de cookies.",
      "Esta é uma tradução da política de privacidade redigida em espanhol; em caso de divergência, prevalece a versão espanhola.",
    ] },
  ],
};

const cookiesPt: LegalPage = {
  title: "Política de cookies",
  blocks: [
    { t: "prose", title: "O que são cookies?", paras: [
      "Os cookies são pequenos ficheiros descarregados para o seu dispositivo quando visita determinados sites. Permitem ao site armazenar informação sobre a sua navegação, tornando a interação entre si e o Site mais rápida e útil.",
    ] },
    { t: "prose", title: "Cookies utilizados neste site", paras: [
      "Este Site não utiliza cookies de publicidade ou de definição de perfis. Para além dos cookies técnicos estritamente necessários ao funcionamento do site, utiliza cookies de análise de terceiros, que só são instalados se os aceitar através do banner de cookies mostrado na primeira visita:",
    ] },
    { t: "bullets", items: [
      "Google Analytics (fornecedor: Google) — mede como os visitantes usam o site (páginas vistas, localização aproximada, dispositivo) para o melhorar. Os endereços IP são anonimizados.",
      "Microsoft Clarity (fornecedor: Microsoft) — capta dados de utilização anonimizados, como interações com as páginas e mapas de calor agregados, para melhorar o site.",
    ] },
    { t: "prose", title: "Consentimento e desativação de cookies", paras: [
      "Os cookies estritamente necessários não exigem consentimento. Os cookies de análise só são instalados se os aceitar; se os recusar, não é instalado qualquer cookie de análise e nenhum dado de utilização é enviado a estes fornecedores. Pode alterar ou retirar a sua escolha a qualquer momento apagando os dados deste site no seu navegador, o que fará reaparecer o banner de cookies.",
      "Além disso, todos os navegadores modernos permitem gerir ou bloquear cookies através das suas definições (normalmente em « Opções », « Preferências » ou « Privacidade »).",
      "Esta é uma tradução da política de cookies redigida em espanhol; em caso de divergência, prevalece a versão espanhola.",
    ] },
  ],
};

const pt: Set = { legalNotice: legalNoticePt, privacy: privacyPt, cookies: cookiesPt };

const content: Partial<Record<Locale, Set>> = { en, pt, de, fr, it };

export function getLegal(locale: Locale): Set {
  return content[locale] ?? en;
}
