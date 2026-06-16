import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Container from "@/components/Container";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = { title: "Request a Proposal" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Get started"
        title="Request a Proposal"
        intro="To have IJ Creditor assess your case, complete the form below. The firm will respond with a first case assessment, the recommended route and the applicable fee model. The consultation does not generate any contractual obligation: if you decide not to proceed, the file is closed at no cost."
      />
      <Block title="Confidentiality and treatment of information">
        <Prose paragraphs={[
          "Information submitted through this form will be processed confidentially. Where, by the legal nature of the consultation or of the engagement, the lawyer's professional duty applies, information will be covered by professional secrecy under applicable law. In any event, access to that information within the firm is limited to those who need to know it in order to prepare the case assessment, in accordance with Regulation (EU) 2016/679 (GDPR) and Organic Law 3/2018 (LOPDGDD). The detailed privacy policy is available from the footer of this site.",
        ]} />
      </Block>
      <Container className="py-6">
        <LeadForm variant="proposal" />
      </Container>
      <Block title="Legal basis for data processing">
        <Prose paragraphs={[
          "Data submitted through this form is processed in order to handle the request, assess the viability of the service and, where applicable, formalise the engagement. The legal basis is the adoption of pre-contractual measures taken at the request of the data subject (Article 6(1)(b) GDPR) and, where applicable, the firm's legitimate interest in processing and responding to the consultation (Article 6(1)(f) GDPR). Before submitting the form, the applicant must confirm that they have read IJ Creditor's privacy policy.",
          "If the applicant also wishes to receive commercial communications not strictly required to handle their consultation, they may opt in via a specific, separate checkbox. That consent is optional, may be revoked at any time and does not affect the processing of the consultation.",
        ]} />
      </Block>
      <Block title="What happens after submission">
        <Prose paragraphs={[
          "IJ Creditor will respond within a reasonable timeframe, normally within a few business days, with a first case assessment, the recommended route and, where appropriate, a fee proposal for the client to decide whether to formalise the engagement.",
        ]} />
      </Block>
    </>
  );
}
