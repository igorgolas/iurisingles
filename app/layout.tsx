import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VersionPill from "@/components/VersionPill";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://iurisingles.vercel.app"),
  title: {
    default: `${SITE.shortName} — Debt collection in Spain for foreign creditors`,
    template: `%s — ${SITE.shortName}`,
  },
  description:
    "IJ Creditor is a Madrid law firm recovering debts owed by Spanish debtors for creditors based outside Spain. Out-of-court and judicial debt collection, supervised by lawyers, operating since 1992.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <VersionPill />
      </body>
    </html>
  );
}
