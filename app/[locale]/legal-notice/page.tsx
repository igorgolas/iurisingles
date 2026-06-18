import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";

export const metadata: Metadata = { title: "Legal notice" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Legal notice"
        intro="Legal notice and information on the conditions of use of this website. This is an English translation of the Spanish-language legal notice; in the event of any discrepancy, the Spanish version prevails."
      />

      <Block title="1. Ownership information">
        <Prose paragraphs={[
          "You are informed that this website, https://ijcreditor.com (hereinafter, the “Website”), is owned by IURIS JUSTITIA CREDITOR, S.L. (hereinafter, “IURIS JUSTITIA”), with Spanish tax ID (CIF) B-80508716 and registered office at C/ Claudio Coello 19, 1st floor, 28001 Madrid, registered at the Commercial Registry of Madrid, Volume 5778, Folio 35, Sheet M-94521, Section 8, Entry 1.",
          "Access to and/or use of the Website confers the status of user and implies acceptance, from such access and/or use, of this Legal Notice.",
          "The user (hereinafter, the “User”) may contact IURIS JUSTITIA at the following email address: ijcreditor@ijcreditor.es.",
        ]} />
      </Block>

      <Block title="2. Use of the Website">
        <Prose paragraphs={[
          "The User assumes responsibility for the use of the Website. The Website may provide access to a wide range of texts, graphics, drawings, designs, photographs, multimedia content and information (hereinafter, “Content”) belonging to IURIS JUSTITIA or to third parties, to which the User may have access.",
          "The User undertakes to make appropriate use of the Content and services offered through the Website and, by way of example but not limitation, not to use them to:",
        ]} />
        <div className="mt-4">
          <Bullets items={[
            "Engage in unlawful or illegal activities or activities contrary to good faith and public order.",
            "Cause damage to the physical and logical systems of the Website, its suppliers or third parties.",
            "Introduce or spread computer viruses or any other physical or logical systems capable of causing the damage referred to above.",
            "Attempt to access, use and/or manipulate the data of IURIS JUSTITIA, third-party suppliers and other users.",
            "Reproduce or copy, distribute, make available to the public through any form of public communication, transform or modify the Content, unless authorised by IURIS JUSTITIA.",
            "Remove, conceal or manipulate Content subject to intellectual or industrial property rights and other identifying data of such rights, as well as the technical protection devices or any information mechanisms that may be embedded in the Content.",
          ]} />
        </div>
        <div className="mt-5">
          <Prose paragraphs={[
            "IURIS JUSTITIA warns that the materials contained in this Website have been included for information purposes only and are therefore insufficient to make decisions or adopt positions in a specific case.",
            "The User should bear in mind that the materials contained in this Website may not reflect the most recent legislative or case-law developments on the matters analysed. These materials may also be amended, developed or updated without prior notice.",
            "IURIS JUSTITIA may temporarily suspend access to the Website without prior notice for maintenance, repair, updating or improvement operations. IURIS JUSTITIA is not responsible for the use that Users may make of the Content included on the Website.",
          ]} />
        </div>
      </Block>

      <Block title="3. Intellectual and industrial property">
        <Prose paragraphs={[
          "Each and every intellectual property right over the content and graphic design of this Website (including, by way of example, images, sound, audio, video, software or texts; trademarks or logos, colour combinations, structure and design, selection of materials used, and the computer programs necessary for its operation, access and use) is the exclusive property of IURIS JUSTITIA or of a third party who has authorised IURIS JUSTITIA to use it. IURIS JUSTITIA therefore holds the exclusive right to exploit such content and graphic design.",
          "Accordingly, under Royal Legislative Decree 1/1996 of 12 April approving the consolidated text of the Intellectual Property Act, and Act 17/2001 of 7 December on Trademarks, as well as any other complementary legislation on intellectual and industrial property, the reproduction, transmission, adaptation, translation, distribution or public communication, including making available, or any other form of commercial exploitation and/or modification of all or part of the Website’s content is prohibited without the prior and express authorisation of IURIS JUSTITIA.",
          "IURIS JUSTITIA does not grant any licence or authorisation to use any of its intellectual or industrial property rights or any other property or right related to the Website and/or its services or content.",
          "The User undertakes to respect the intellectual and industrial property rights held by IURIS JUSTITIA. Temporary reproduction and storage of the Website’s content is permitted insofar as strictly necessary to use and display the Website from a personal computer, tablet or telephone.",
          "The legitimacy of the intellectual or industrial property rights over content provided by Users is their sole responsibility, and they shall be liable for any third-party claim arising from the unlawful use of the Website’s content.",
          "Any observation regarding possible infringements of intellectual or industrial property rights, or any of the Website’s content, may be made by email to: ijcreditor@ijcreditor.es.",
        ]} />
      </Block>

      <Block title="4. Data protection">
        <Prose paragraphs={[
          "Use of this Website may require Users to provide personal data. IURIS JUSTITIA processes this information in accordance with applicable law, as set out in its Privacy Policy, available at https://ijcreditor.com/privacy.",
        ]} />
      </Block>

      <Block title="5. Liability and warranties">
        <Prose paragraphs={[
          "IURIS JUSTITIA declares that it has taken all necessary measures, within its means and in light of the current state of technology, to ensure the proper functioning of its Website and the absence of viruses and harmful components. However, IURIS JUSTITIA cannot be held responsible for:",
        ]} />
        <div className="mt-4">
          <Bullets items={[
            "the lack of continuity and availability of the Content and Services;",
            "the presence of errors in such Content or the failure to correct any defects that may exist;",
            "the truthfulness, completeness or currency of the data provided by Users;",
            "the interruption of the Website’s operation or computer failures, telephone faults, disconnections, delays or blockages caused by deficiencies or overloads in telephone lines, data centres, the internet system or other electronic systems occurring during operation;",
            "the presence of viruses or other harmful components, or any damage caused by third parties who breach or infringe IURIS JUSTITIA’s security systems.",
          ]} />
        </div>
        <div className="mt-5">
          <Prose paragraphs={[
            "IURIS JUSTITIA may temporarily suspend access to the Website without prior notice for maintenance, repair, updating or improvement operations. Where circumstances permit, IURIS JUSTITIA will give Users sufficient advance notice of the expected suspension of Services. IURIS JUSTITIA is not responsible for the use that Users may make of the Content included on the Website.",
          ]} />
        </div>
      </Block>

      <Block title="6. Duration and modification">
        <Prose paragraphs={[
          "This Legal Notice is in force indefinitely. IURIS JUSTITIA may make changes to the conditions specified herein, which shall take effect from the moment of their publication.",
          "IURIS JUSTITIA may remove, add or change both the Content and the services it provides, as well as the way in which they appear located or presented. The conditions published at the time the User accesses the IURIS JUSTITIA Website shall be deemed to be in force.",
          "Access to and/or use of the Website is understood as acceptance by the User of this Legal Notice and its conditions and, where applicable, any changes made to them.",
        ]} />
      </Block>

      <Block title="7. Hyperlinks">
        <Prose paragraphs={[
          "IURIS JUSTITIA assumes no responsibility for links to other applications or websites found on the IURIS JUSTITIA Website, which may direct the User to other applications or websites over which IURIS JUSTITIA has no control.",
          "IURIS JUSTITIA is not responsible for the information contained in such third-party links or for any effects that may arise from that information. The inclusion of links to other websites or applications does not imply approval of their content by IURIS JUSTITIA, nor the existence of any association between IURIS JUSTITIA and their owners.",
          "Consequently, the User accesses the Content under their sole responsibility and under the conditions of use governing it.",
        ]} />
      </Block>

      <Block title="8. Severability and interpretation">
        <Prose paragraphs={[
          "This Legal Notice constitutes an agreement between IURIS JUSTITIA and each of its Users.",
          "If a competent authority declares any provision unlawful, invalid or unenforceable, such declaration with respect to one or more clauses shall be without prejudice to the validity of the remaining clauses.",
          "The fact that IURIS JUSTITIA does not require strict compliance with any provision of this Legal Notice does not constitute and may not in any way be construed as a waiver of its right to require strict compliance in the future.",
        ]} />
      </Block>

      <Block title="9. General information">
        <Prose paragraphs={[
          "IURIS JUSTITIA will pursue any breach of this Legal Notice, as well as any improper use of its website, exercising all civil and criminal actions available to it under the law.",
        ]} />
      </Block>

      <Block title="10. Notifications">
        <Prose paragraphs={[
          "IURIS JUSTITIA may send relevant communications through the email address provided by Users in the registration forms or by any other means provided in the User’s contact details.",
        ]} />
      </Block>
    </>
  );
}
