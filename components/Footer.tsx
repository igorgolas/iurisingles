import Link from "next/link";
import { SERVICES, INDUSTRIES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate/10 bg-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="text-base font-semibold text-white">{SITE.name}</p>
          <p className="mt-3 text-sm leading-relaxed">{SITE.address}</p>
          <p className="mt-2 text-sm">{SITE.phone}</p>
          <p className="text-sm">{SITE.email}</p>
          <p className="mt-3 text-xs text-white/50">NIF {SITE.nif}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-white">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Industries</p>
          <ul className="mt-3 space-y-2 text-sm">
            {INDUSTRIES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-white">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">More</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/knowledge-base" className="hover:text-white">Knowledge Base</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
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
