import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-semibold tracking-tight text-ink">
            {SITE.shortName}
          </span>
          <span className="text-[11px] uppercase tracking-wider text-slate">
            Debt recovery in Spain
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/request-a-proposal"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Request a proposal
          </Link>
        </nav>
        <Link
          href="/request-a-proposal"
          className="rounded-md bg-accent px-3 py-2 text-sm font-medium text-white md:hidden"
        >
          Proposal
        </Link>
      </div>
    </header>
  );
}
