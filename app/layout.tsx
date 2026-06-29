import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { organizationLd, websiteLd } from "@/lib/jsonld";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ijcreditor.com"),
  title: {
    default: `${SITE.shortName} — Debt collection in Spain for foreign creditors`,
    template: `%s — ${SITE.shortName}`,
  },
  description:
    "IJ Creditor is a Madrid law firm recovering debts owed by Spanish debtors for creditors based outside Spain. Out-of-court and judicial debt collection, supervised by lawyers, operating since 1992.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const xl = (await headers()).get("x-locale") ?? "";
  const lang = isLocale(xl) ? xl : defaultLocale;
  return (
    <html lang={lang} className={playfair.variable}>
      <body>
        <JsonLd data={[organizationLd(), websiteLd()]} />
        {children}
      </body>
    </html>
  );
}
