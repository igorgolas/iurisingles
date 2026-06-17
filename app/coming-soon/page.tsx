import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming soon",
  robots: { index: false, follow: false },
};

export default function ComingSoon() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="Iuris Justitia Creditor" className="h-20 w-auto" />

      <h1 className="mt-10 text-2xl font-semibold text-ink sm:text-3xl">
        Our new website is on its way
      </h1>
      <p className="mt-4 max-w-xl text-slate">
        IJ Creditor recovers debts owed by Spanish debtors for creditors based outside
        Spain. Our international site is being finalised. In the meantime, you can reach
        us directly and we will respond promptly.
      </p>

      <div className="mt-8 space-y-1 text-sm text-slate">
        <p>
          <a className="text-accent underline" href="mailto:ijcreditor@ijcreditor.es">
            ijcreditor@ijcreditor.es
          </a>
        </p>
        <p>+34 915 77 47 30</p>
        <p>Paseo de la Castellana 120, 28046 Madrid, Spain</p>
      </div>

      <p className="mt-10 text-xs uppercase tracking-wider text-slate/70">
        Iuris Justitia Creditor · Debt collection in Spain · Since 1992
      </p>
    </main>
  );
}
