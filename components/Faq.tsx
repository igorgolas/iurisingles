"use client";

import { useState } from "react";

export type QA = { q: string; a: string[] };

export default function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate/10">
      {items.map((it, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="text-base font-medium text-ink">{it.q}</span>
            <span aria-hidden className="flex-none text-accent">{open === i ? "–" : "+"}</span>
          </button>
          {open === i ? (
            <div className="space-y-3 pb-6">
              {it.a.map((p, j) => (
                <p key={j} className="text-[15px] leading-relaxed text-slate">{p}</p>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
