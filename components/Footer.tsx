import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate/10 bg-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="text-base font-semibold text-white">{SITE.name}</p>
          <p className="mt-3 text-sm leading-relaxed">{SITE.address}</p>
          <p className="mt-2 text-sm">{SITE.phone}</p>
          <p className="text-sm">{SITE.email}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Legal</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/legal-notice" className="hover:text-white">Legal notice</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-white/50">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
