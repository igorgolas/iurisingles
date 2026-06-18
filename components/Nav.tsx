"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { locales, type Locale } from "@/lib/i18n";
import type { NavEntry } from "@/lib/nav-model";

export default function Nav({
  items,
  homeHref,
  menuLabel,
  locale,
}: {
  items: NavEntry[];
  homeHref: string;
  menuLabel: string;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || `/${locale}`;
  const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "";

  return (
    <header className="sticky top-0 z-40 border-b border-slate/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-20 px-6 py-5">
        <Link href={homeHref} className="flex items-center" aria-label={`${SITE.name} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt={SITE.name} width={600} height={163} className="h-12 w-auto md:h-14" />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-5 xl:flex">
          {items.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className="flex items-center gap-1 py-2 text-sm text-slate transition-colors hover:text-ink">
                  {item.label}
                  <span aria-hidden className="text-[10px]">▾</span>
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-[24rem] -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="rounded-lg border border-slate/10 bg-white p-2 shadow-lg">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block rounded-md px-3 py-2.5 hover:bg-slate/5">
                        <span className="block text-sm font-medium text-ink">{c.label}</span>
                        {c.summary ? (
                          <span className="mt-0.5 block text-xs leading-snug text-slate">{c.summary}</span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.cta ? (
              <Link key={item.href} href={item.href} className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
                {item.label}
              </Link>
            ) : (
              <Link key={item.href} href={item.href} className="py-2 text-sm text-slate transition-colors hover:text-ink">
                {item.label}
              </Link>
            )
          )}
          <span className="ml-1 flex items-center gap-1 border-l border-slate/15 pl-3 text-xs">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}${rest}`}
                className={l === locale ? "font-semibold text-accent" : "text-slate/70 hover:text-ink"}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </span>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-md border border-slate/20 px-3 py-2 text-sm xl:hidden"
          aria-expanded={open}
        >
          {menuLabel}
        </button>
      </div>

      {/* Mobile panel */}
      {open ? (
        <div className="border-t border-slate/10 bg-white xl:hidden">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            {items.map((item) => (
              <div key={item.href} className="border-b border-slate/10 py-2 last:border-0">
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm font-medium text-ink">
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="ml-3 mt-1 space-y-1">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block py-1 text-sm text-slate">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-3 flex items-center gap-3 pt-2 text-xs">
              {locales.map((l) => (
                <Link key={l} href={`/${l}${rest}`} onClick={() => setOpen(false)} className={l === locale ? "font-semibold text-accent" : "text-slate/70"}>
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
