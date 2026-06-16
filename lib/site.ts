export const SITE = {
  name: "Iuris Justitia Creditor",
  shortName: "IJ Creditor",
  tagline: "Debt recovery in Spain for international creditors",
  email: "ijcreditor@ijcreditor.es",
  phone: "+34 915 77 47 30",
  address: "Paseo de la Castellana 120, 28046 Madrid, Spain",
};

export const NAV: { label: string; href: string }[] = [
  { label: "Debt recovery in Spain", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: { label: string; href: string; summary: string }[] = [
  {
    label: "Amicable recovery",
    href: "/services/amicable-recovery",
    summary:
      "Pre-litigation collection of Spanish receivables, supervised by lawyers from the first contact.",
  },
  {
    label: "Judicial recovery",
    href: "/services/judicial-recovery",
    summary:
      "Court action in Spain when amicable recovery is exhausted, with a prior viability assessment.",
  },
  {
    label: "Credit & solvency reports",
    href: "/services/credit-reports",
    summary:
      "Asset and solvency information on Spanish debtors before you decide how to proceed.",
  },
];
