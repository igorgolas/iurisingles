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
    label: "Transport, Freight Forwarding & Logistics",
    href: "/industries/transport-logistics",
    summary: "Unpaid freight invoices, B2B chain claims, cargo incidents and cross-border transport debt.",
  },
  {
    label: "Manufacturing & Industrial Supply",
    href: "/industries/manufacturing-industrial-supply",
    summary: "Unpaid invoices for machinery, components and industrial materials, with delivery and retention-of-title disputes.",
  },
  {
    label: "Chemicals, Pharma & Medical Devices",
    href: "/industries/chemicals-pharma-medical-devices",
    summary: "High-value, regulated supplies with deferred payment to distributors, pharmacies and hospitals.",
  },
  {
    label: "Construction, Engineering & Public Suppliers",
    href: "/industries/construction-engineering-public-suppliers",
    summary: "Certifications, milestones, subcontracting chains and public-sector payment delays.",
  },
  {
    label: "Textile Manufacturing & Brands",
    href: "/industries/textile",
    summary: "Wholesale and retail supply by textile and fashion manufacturers, with seasonal, returns and markdown disputes.",
  },
  {
    label: "Travel, Car Rental & Mobility",
    href: "/industries/travel-car-rental-mobility",
    summary: "Unpaid rentals, damages, penalties and chargebacks across car rental, travel and corporate mobility.",
  },
  {
    label: "Equipment Rental, Leasing & Asset Recovery",
    href: "/industries/equipment-rental-leasing",
    summary: "Unpaid instalments, termination for breach and recovery of the financed or rented asset.",
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

export type Association = { name: string; href: string };
export const ASSOCIATIONS: Association[] = [
  { name: "European Collectors Association (ECA)", href: "https://europeancollectors.com/" },
  { name: "League International for Creditors (LIC International)", href: "https://lic-international.com/" },
  { name: "American Lawyers Quarterly", href: "https://www.alqlist.com/" },
];
