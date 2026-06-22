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

const content: Partial<Record<Locale, Set>> = { en, de, fr };

export function getLegal(locale: Locale): Set {
  return content[locale] ?? en;
}
