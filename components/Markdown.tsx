import type { ReactNode } from "react";

// Minimal renderer for the long-form content: ## and ### headings, paragraphs,
// "- " and "1. " lists, pipe tables and [text](url) links. Nothing else is needed.

function inline(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <a
        key={`${keyBase}-a${i++}`}
        href={m[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
      >
        {m[1]}
      </a>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

type Node =
  | { t: "h2" | "h3" | "p"; text: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] };

function parse(md: string): Node[] {
  const lines = md.replace(/\r/g, "").split("\n");
  const nodes: Node[] = [];
  let i = 0;
  const cells = (l: string) => l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
  while (i < lines.length) {
    const l = lines[i].trim();
    if (!l) { i++; continue; }
    if (l.startsWith("### ")) { nodes.push({ t: "h3", text: l.slice(4) }); i++; continue; }
    if (l.startsWith("## ")) { nodes.push({ t: "h2", text: l.slice(3) }); i++; continue; }
    if (l.startsWith("|")) {
      const head = cells(l);
      i += 2; // header + separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) { rows.push(cells(lines[i])); i++; }
      nodes.push({ t: "table", head, rows });
      continue;
    }
    const isUl = (s: string) => s.startsWith("- ");
    const isOl = (s: string) => /^\d+\.\s/.test(s);
    if (isUl(l) || isOl(l)) {
      const kind = isUl(l) ? "ul" : "ol";
      const test = kind === "ul" ? isUl : isOl;
      const items: string[] = [];
      while (i < lines.length) {
        const s = lines[i].trim();
        if (!s) { i++; continue; }
        if (!test(s)) break;
        items.push(kind === "ul" ? s.slice(2) : s.replace(/^\d+\.\s+/, ""));
        i++;
      }
      nodes.push({ t: kind, items });
      continue;
    }
    nodes.push({ t: "p", text: l });
    i++;
  }
  return nodes;
}

export default function Markdown({ source }: { source: string }) {
  const nodes = parse(source);
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      {nodes.map((n, k) => {
        const key = `n${k}`;
        switch (n.t) {
          case "h2":
            return <h2 key={key} className="mb-4 mt-10 text-xl font-semibold tracking-tight text-ink first:mt-0">{inline(n.text, key)}</h2>;
          case "h3":
            return <h3 key={key} className="mb-3 mt-6 text-base font-semibold text-ink">{inline(n.text, key)}</h3>;
          case "p":
            return <p key={key} className="mb-5 text-[15px] leading-relaxed text-slate">{inline(n.text, key)}</p>;
          case "ul":
            return (
              <ul key={key} className="mb-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate marker:text-accent">
                {n.items.map((it, j) => <li key={j}>{inline(it, `${key}-${j}`)}</li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={key} className="mb-5 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-slate marker:text-accent">
                {n.items.map((it, j) => <li key={j}>{inline(it, `${key}-${j}`)}</li>)}
              </ol>
            );
          case "table":
            return (
              <div key={key} className="mb-6 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm text-slate">
                  <thead>
                    <tr>
                      {n.head.map((h, j) => (
                        <th key={j} className="border-b border-slate/20 px-3 py-2 font-semibold text-ink">{inline(h, `${key}-h${j}`)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {n.rows.map((r, ri) => (
                      <tr key={ri} className="align-top">
                        {r.map((c, ci) => (
                          <td key={ci} className="border-b border-slate/10 px-3 py-2">{inline(c, `${key}-${ri}-${ci}`)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
