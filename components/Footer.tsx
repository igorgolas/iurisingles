import Link from "next/link";
import { SITE } from "@/lib/site";
import { withLocale, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { navServices, navIndustries } from "@/lib/nav-model";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const services = navServices(locale, dict);
  const industries = navIndustries(locale, dict);
  const more = [
    { label: dict.footer.knowledgeBase, href: withLocale(locale, "/knowledge-base") },
    { label: dict.footer.faq, href: withLocale(locale, "/faq") },
    { label: dict.footer.contact, href: withLocale(locale, "/contact") },
    { label: dict.footer.legalNotice, href: withLocale(locale, "/legal-notice") },
    { label: dict.footer.privacy, href: withLocale(locale, "/privacy") },
    { label: dict.footer.cookies, href: withLocale(locale, "/cookies") },
  ];
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
          <p className="text-sm font-semibold text-white">{dict.footer.services}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.href}><Link href={s.href} className="hover:text-white">{s.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{dict.footer.industries}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {industries.map((s) => (
              <li key={s.href}><Link href={s.href} className="hover:text-white">{s.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{dict.footer.more}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {more.map((m) => (
              <li key={m.href}><Link href={m.href} className="hover:text-white">{m.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-white/50">
          © {new Date().getFullYear()} {SITE.name}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
