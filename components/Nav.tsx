"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-10 px-6 py-5">
        <Link href="/" className="flex items-center" aria-label={`${SITE.name} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt={SITE.name}
            width={600}
            height={163}
            className="h-11 w-auto md:h-12"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-5 xl:flex">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 py-2 text-sm text-slate transition-colors hover:text-ink"
                >
                  {item.label}
                  <span aria-hidden className="text-[10px]">▾</span>
                </Link>
                <div className="invisible absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="rounded-lg border border-slate/10 bg-white p-2 shadow-lg">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-md px-3 py-2.5 hover:bg-slate/5"
                      >
                        <span className="block text-sm font-medium text-ink">
                          {c.label}
                        </span>
                        {c.summary ? (
                          <span className="mt-0.5 block text-xs leading-snug text-slate">
                            {c.summary}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.href === "/request-a-proposal" ? (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm text-slate transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-md border border-slate/20 px-3 py-2 text-sm xl:hidden"
          aria-expanded={open}
        >
          Menu
        </button>
      </div>

      {/* Mobile panel */}
      {open ? (
        <div className="border-t border-slate/10 bg-white xl:hidden">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            {NAV.map((item) => (
              <div key={item.href} className="border-b border-slate/10 py-2 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1.5 text-sm font-medium text-ink"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="ml-3 mt-1 space-y-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-sm text-slate"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
