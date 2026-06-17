import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VersionPill from "@/components/VersionPill";
import { SITE } from "@/lib/site";
import { headers } from "next/headers";

export const metadata: Metadata = {
  metadataBase: new URL("https://iurisingles.vercel.app"),
  title: {
    default: `${SITE.shortName} — Debt collection in Spain for foreign creditors`,
    template: `%s — ${SITE.shortName}`,
  },
  description:
    "IJ Creditor is a Madrid law firm recovering debts owed by Spanish debtors for creditors based outside Spain. Out-of-court and judicial debt collection, supervised by lawyers, operating since 1992.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const gated = (await headers()).get("x-gate") === "1";
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {gated ? null : <Nav />}
        <main>{children}</main>
        {gated ? null : <Footer />}
        {gated ? null : <VersionPill />}
      </body>
    </html>
  );
}
