import Link from "next/link";

export default function CtaBand({
  text = "Every case is different. The fastest way to know whether IJ Creditor can help is to request a confidential personalised proposal.",
}: {
  text?: string;
}) {
  return (
    <section className="mt-16 border-t border-slate/10 bg-slate/[0.03]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-[15px] leading-relaxed text-slate">{text}</p>
        <Link
          href="/request-a-proposal"
          className="flex-none rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Request a proposal
        </Link>
      </div>
    </section>
  );
}
