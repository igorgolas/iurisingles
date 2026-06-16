import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Block from "@/components/Block";
import Prose from "@/components/Prose";
import Bullets from "@/components/Bullets";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = { title: "Vehicle Rental" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Vehicle Rental" />
      <Block>
        <Prose paragraphs={[
          "Vehicle rental presents specific particularities affecting collections management: high customer rotation, frequently foreign customer profile, incidents arising from the condition of the vehicle on return (unrecognised damage, refuelling, administrative charges from fines, tolls, excess mileage or disputes over excess/insurance coverage), unpaid rental fees, payment chargebacks, contractually agreed charges and penalties and missed-pickup or charge-bearing cancellations.",
          "The defaulting party may be a private individual, a company with variable fleet needs, a travel agency or a tour operator, which adds complexity to the debtor profile and requires the claim route to be tailored to each case.",
        ]} />
      </Block>
      <Block title="Types of files typically handled">
        <Bullets items={[
        "Recovery of unpaid rental fees.",
        "Recovery of damages not acknowledged by the customer and properly documented by the rental company.",
        "Administrative charges for fines, tolls, refuelling and other unpaid supplemental items.",
        "Claims arising from payment chargebacks and disputes on electronic payments.",
        "Claims arising from excess/insurance coverage and conditions of use of the vehicle.",
        "Recovery from corporate fleet customers and tour operators with open balances.",
        "Cross-border recovery where the debtor is outside Spain.",
        ]} />
      </Block>
      <CtaBand />
    </>
  );
}
