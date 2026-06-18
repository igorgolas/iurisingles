import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Container from "@/components/Container";
import CtaBand from "@/components/CtaBand";
import { SERVICES } from "@/lib/site";
import { isLocale, withLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export const metadata: Metadata = { title: "Services" };

const DETAIL: Record<string, string[]> = {
  "/services/out-of-court-debt-collection": [
    "Success-fee basis on the amount actually recovered: no recovery, no variable fees. The out-of-court work is performed by a team formed mainly by lawyers and is supervised, file by file, by a lawyer of the firm. IJ Creditor combines two integrated functions —balance reconciliation and amicable debt collection— applied to each case according to what it requires.",
  ],
  "/services/judicial-debt-collection": [
    "When the out-of-court phase does not produce a result, IJ Creditor takes direct legal representation of the case in the procedure that best fits each situation —monitorio, verbal proceedings, ordinary proceedings, enforcement or insolvency proceedings— up to attachment and effective collection. Before recommending court action, the firm prepares —whenever possible— a judicial feasibility report. When court action is recommended, it is launched with a lump-sum fee agreed in writing and approved by the client in advance.",
  ],
  "/services/international-debt-collection": [
    "For foreign clients whose debtors are located in countries other than Spain. IJ Creditor coordinates the case from Madrid and executes it in the debtor's country through its network of correspondents and partner firms. The service covers both the amicable phase and, where appropriate, the judicial phase under the law of the State where the debtor has its domicile or assets.",
  ],
  "/services/credit-solvency-reports": [
    "Commercial, asset and solvency information on companies and individuals, Spanish or foreign, for four typical uses: analysis prior to granting commercial credit, monitoring of risk in an existing customer portfolio, assessment of recovery feasibility before initiating formal collection action, and support to ongoing recovery cases. Each report is prepared from public registries and specialised commercial-information providers. IJ Creditor does not maintain its own databases.",
  ],
};

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Debt collection and legal services to creditors since 1992"
        intro="Whatever service is requested, the objective is the same: to find a solution that recovers the debt while preserving, wherever possible, the commercial relationship between the client and the debtor. More than 80% of the cases IJ Creditor takes on are resolved at the out-of-court stage, without filing a claim."
      />
      <Container className="py-16">
        <div className="space-y-10">
          {SERVICES.map((s) => {
            const slug = s.href.split("/").pop() as keyof typeof dict.services;
            return (
              <div key={s.href} className="border-b border-slate/10 pb-10 last:border-0">
                <h2 className="text-xl font-semibold tracking-tight text-ink">{dict.services[slug].label}</h2>
                <div className="mt-4"><Prose paragraphs={DETAIL[s.href] ?? []} /></div>
                <Link href={withLocale(locale, s.href)} className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
                  {dict.common.learnMore}
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
