import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";

export const metadata: Metadata = { title: "Privacy policy" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        intro="This is an English translation of the Spanish-language privacy policy; in the event of any discrepancy, the Spanish version prevails."
      />

      <Block title="1. Who is responsible for processing your data?">
        <Prose paragraphs={[
          "The controller of your personal data is IURIS JUSTITIA CREDITOR, S.L. (hereinafter, “IURIS JUSTITIA”), with Spanish tax ID (CIF) B-80508716 and registered office at C/ Claudio Coello 19, 1st floor, 28001 Madrid.",
          "This Privacy Policy governs access to and use of the website https://ijcreditor.com (hereinafter, the “Website”), which IURIS JUSTITIA makes available to internet users (hereinafter, “Users”) interested in the content and services offered by IURIS JUSTITIA on it.",
          "Contact email: ijcreditor@ijcreditor.es.",
        ]} />
      </Block>

      <Block title="2. Recommendations">
        <Prose paragraphs={["Please read carefully and follow these recommendations:"]} />
        <div className="mt-4">
          <Bullets items={[
            "Keep your device equipped with properly updated antivirus software against malware and spyware applications that may endanger your internet browsing and the information stored on your device.",
            "Read and review this Privacy Policy and all legal texts made available by IURIS JUSTITIA on the Website.",
          ]} />
        </div>
      </Block>

      <Block title="3. Information IURIS JUSTITIA collects through the Website">
        <Prose paragraphs={[
          "For the proper functioning of the Website, IURIS JUSTITIA may have access to the following data provided, where applicable, by the User:",
        ]} />
        <div className="mt-4">
          <Bullets items={[
            "Identification data: the user’s name and surname.",
            "Contact data: email and telephone number.",
          ]} />
        </div>
      </Block>

      <Block title="4. On what basis is IURIS JUSTITIA entitled to process your data?">
        <Prose paragraphs={[
          "The legal basis for IURIS JUSTITIA’s processing of Users’ data through this Website is the Users’ consent to the processing of their personal data, as well as the performance of a contract to which the data subject is party or the application, at the data subject’s request, of pre-contractual measures.",
          "IURIS JUSTITIA processes Users’ personal data in order to enable the commercial relationship requested by the user and to send commercial communications and/or newsletters. By accepting this Privacy Policy and ticking the corresponding boxes, the User consents to such processing.",
          "IURIS JUSTITIA takes the protection of your privacy and personal data very seriously. For this reason, your personal data is kept securely and handled with the utmost care, in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (the “General Data Protection Regulation” or “GDPR”).",
          "The User may withdraw their consent at any time by sending a message to ijcreditor@ijcreditor.es, without affecting the lawfulness of processing based on consent prior to its withdrawal.",
        ]} />
      </Block>

      <Block title="5. Purposes of processing your personal data">
        <Prose paragraphs={[
          "The personal data collected by IURIS JUSTITIA may be used for the following purposes, according to the consent given in the relevant registration form:",
        ]} />
        <div className="mt-4">
          <Bullets items={[
            "Providing the services offered through the Website.",
            "Sending you communications or information about IURIS JUSTITIA’s activity by post, telephone, email, SMS/MMS or other equivalent electronic means.",
          ]} />
        </div>
      </Block>

      <Block title="6. Accuracy of the data provided by Users">
        <Prose paragraphs={[
          "The User guarantees the accuracy of the personal data provided and undertakes to notify IURIS JUSTITIA of any changes to it. The User shall in any case be responsible for the accuracy of the data provided, and IURIS JUSTITIA reserves the right to exclude from its services any User who has provided false data, without prejudice to any other legal action that may be appropriate.",
          "Users are advised to protect their data with the utmost diligence using appropriate security tools. IURIS JUSTITIA shall not be liable for any theft, unlawful modification or loss of data.",
          "Any modification or update of the data must be communicated to IURIS JUSTITIA through the means of communication provided for in this Privacy Policy.",
        ]} />
      </Block>

      <Block title="7. Data retention">
        <Prose paragraphs={[
          "Protecting the privacy and personal data of Users is very important to IURIS JUSTITIA, which therefore does everything possible to prevent Users’ data from being used inappropriately. Only authorised personnel have access to Users’ data.",
          "The User’s personal data will be kept for as long as their relationship with IURIS JUSTITIA remains active for the purposes for which it was provided, provided the User has not withdrawn their consent or requested its deletion. Thereafter, where necessary, IURIS JUSTITIA will keep the information blocked for the legally established periods.",
          "IURIS JUSTITIA undertakes to comply with its duty of secrecy and confidentiality regarding personal data in accordance with applicable law.",
        ]} />
      </Block>

      <Block title="8. User rights">
        <Prose paragraphs={["Users have the right to:"]} />
        <div className="mt-4">
          <Bullets items={[
            "Access their personal data;",
            "Request the rectification of any inaccurate data;",
            "Request the erasure of their data;",
            "Request the restriction of the processing of their data;",
            "Object to the processing of their data;",
            "Request the portability of their data;",
            "Not be subject to decisions based solely on the automated processing of data.",
          ]} />
        </div>
        <div className="mt-5">
          <Prose paragraphs={[
            "The User may exercise all these rights at the email address ijcreditor@ijcreditor.es, stating the reason for their request. The User may also send their request by ordinary mail to: C/ Claudio Coello 19, 28001 Madrid. The communication addressed to IURIS JUSTITIA must contain the User’s name and surname and the specific request.",
            "Without prejudice to any other administrative remedy or legal action, the User has the right to lodge a complaint with a Supervisory Authority, in particular in the Member State of their habitual residence, place of work or place of the alleged infringement, if they consider that the processing of their personal data is not compliant.",
          ]} />
        </div>
      </Block>

      <Block title="9. Data security">
        <Prose paragraphs={[
          "Protecting the privacy and personal data of Users is very important to IURIS JUSTITIA. IURIS JUSTITIA has taken all measures within its reach to prevent data from being misused, allowing access only to authorised personnel.",
          "IURIS JUSTITIA maintains appropriate security for the protection of personal data in accordance with applicable law and has established all technical means within its reach to prevent the loss, misuse, alteration, unauthorised access and theft of data provided by the User through the Website, while noting that internet security measures are not impregnable.",
          "IURIS JUSTITIA undertakes to comply with its duty of secrecy and confidentiality regarding personal data in accordance with applicable law, and shall not be liable for any damages arising from the User’s breach of this obligation.",
        ]} />
      </Block>

      <Block title="10. Transfers and/or disclosures to third parties">
        <Prose paragraphs={[
          "You are informed that your personal data will not be transferred to third-party companies. In any event, IURIS JUSTITIA will be responsible for sending communications by post, telephone, email, SMS/MMS or other means.",
        ]} />
      </Block>

      <Block title="11. Questions">
        <Prose paragraphs={[
          "If you have any questions about our Privacy Policy, please contact us by email at ijcreditor@ijcreditor.es.",
          "If you consider that your rights have not been properly safeguarded, you have the right to lodge a complaint with the Spanish Data Protection Agency (Agencia Española de Protección de Datos): telephones 901 100 099 and 912 663 517; postal address C/ Jorge Juan 6, 28001 Madrid; electronic office https://sedeagpd.gob.es/sede-electronica-web/.",
        ]} />
      </Block>

      <Block title="12. Acceptance and consent">
        <Prose paragraphs={[
          "The User declares that they have been informed of the conditions on the protection of personal data, accepting and consenting to the processing of such data by IURIS JUSTITIA in the manner and for the purposes indicated in this Privacy Policy.",
        ]} />
      </Block>
    </>
  );
}
