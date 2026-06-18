import Link from "next/link";
import { getLocale } from "@/lib/server-locale";
import { getDictionary } from "@/lib/dictionaries";
import { withLocale } from "@/lib/i18n";

export default async function CtaBand({ text }: { text?: string }) {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  return (
    <section className="mt-16 border-t border-slate/10 bg-slate/[0.03]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-[15px] leading-relaxed text-slate">{text ?? dict.cta.band}</p>
        <Link
          href={withLocale(locale, "/request-a-proposal")}
          className="flex-none rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          {dict.common.requestProposal}
        </Link>
      </div>
    </section>
  );
}
