export const SITE = {
  name: "Iuris Justitia Creditor",
  shortName: "IJ Creditor",
  tagline: "Debt collection in Spain for foreign creditors. Operating from Madrid since 1992.",
  email: "ijcreditor@ijcreditor.es",
  phone: "+34 915 77 47 30",
  address: "Paseo de la Castellana 120, 28046 Madrid, Spain",
  nif: "B80508716",
  since: 1992,
};

export type NavChild = { label: string; href: string; summary?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const SERVICES: NavChild[] = [
  {
    label: "Out-of-court Debt Collection in Spain",
    href: "/services/out-of-court-debt-collection",
    summary:
      "Success-fee recovery before court action, supervised file by file by a lawyer of the firm.",
  },
  {
    label: "Judicial Debt Collection in Spain",
    href: "/services/judicial-debt-collection",
    summary:
      "Direct legal representation in Spanish courts, preceded by a judicial feasibility report.",
  },
  {
    label: "International Debt Collection",
    href: "/services/international-debt-collection",
    summary:
      "For foreign clients with debtors outside Spain, executed through our correspondent network.",
  },
  {
    label: "Credit & Solvency Reports",
    href: "/services/credit-solvency-reports",
    summary:
      "Commercial, asset and solvency information from verifiable public and specialised sources.",
  },
];

export const INDUSTRIES: NavChild[] = [
  {
    label: "Transport & Logistics",
    href: "/industries/transport-logistics",
    summary: "Unpaid freight invoices, B2B chain claims, cargo incidents and insurance.",
  },
  {
    label: "Vehicle Rental",
    href: "/industries/vehicle-rental",
    summary: "Unpaid fees, damage, fines and tolls, chargebacks and fleet customers.",
  },
  {
    label: "Equipment Rental & Leasing",
    href: "/industries/equipment-rental-leasing",
    summary: "Unpaid instalments, termination for breach and recovery of the financed asset.",
  },
  {
    label: "Goods & Services Suppliers",
    href: "/industries/goods-services-suppliers",
    summary: "B2B supplier invoices, balance reconciliation and works-certification disputes.",
  },
];

export const NAV: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", children: SERVICES },
  { label: "Industries", href: "/industries", children: INDUSTRIES },
  { label: "Request a Proposal", href: "/request-a-proposal" },
  { label: "FAQ", href: "/faq" },
  { label: "Knowledge Base", href: "/knowledge-base" },
  { label: "Contact", href: "/contact" },
];
