import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VersionPill from "@/components/VersionPill";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${SITE.shortName} — Debt recovery in Spain for international creditors`,
    template: `%s — ${SITE.shortName}`,
  },
  description:
    "IJ Creditor helps companies based outside Spain recover debts owed by Spanish debtors. Amicable and judicial recovery, supervised by lawyers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
