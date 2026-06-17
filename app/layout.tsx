import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VersionPill from "@/components/VersionPill";
import Analytics from "@/components/Analytics";
import { SITE } from "@/lib/site";
import { headers } from "next/headers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ijcreditor.com"),
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
    <html lang="en" className={playfair.variable}>
      <body>
        {gated ? null : <Nav />}
        <main>{children}</main>
        {gated ? null : <Footer />}
        {gated ? null : <VersionPill />}
        {gated ? null : <Analytics />}
      </body>
    </html>
  );
}
