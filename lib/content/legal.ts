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

const content: Partial<Record<Locale, Set>> = { en };

export function getLegal(locale: Locale): Set {
  return content[locale] ?? en;
}
