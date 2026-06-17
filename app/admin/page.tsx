import { ensureSchema, getSql, type LeadRow } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const metadata = { title: "Admin — Leads", robots: { index: false, follow: false } };

function fmtDate(value: string): string {
  try {
    return new Date(value).toLocaleString("en-GB", { timeZone: "Europe/Madrid" });
  } catch {
    return value;
  }
}

const HIDE = new Set(["variant", "name", "company", "email", "privacy"]);

export default async function AdminPage() {
  let rows: LeadRow[] = [];
  let error: string | null = null;
  try {
    await ensureSchema();
    const sql = getSql();
    rows = (await sql`SELECT * FROM leads ORDER BY created_at DESC LIMIT 300`) as LeadRow[];
  } catch (e) {
    error = (e as Error).message;
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-ink">Leads</h1>
      <p className="mt-1 text-sm text-slate">
        {error ? "Database error." : `${rows.length} most recent submissions.`}
      </p>
      {error ? (
        <p className="mt-4 rounded-md bg-red-50 p-4 text-sm text-red-700">{error}</p>
      ) : rows.length === 0 ? (
        <p className="mt-6 text-sm text-slate">No submissions yet.</p>
      ) : (
        <div className="mt-6 space-y-6">
          {rows.map((row) => {
            const extra = Object.entries(row.payload || {}).filter(
              ([k, v]) => !HIDE.has(k) && v != null && String(v).trim() !== ""
            );
            return (
              <article key={row.id} className="rounded-lg border border-slate/20 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-base font-semibold text-ink">
                    {row.company || "—"}{" "}
                    <span className="font-normal text-slate">· {row.name || "—"}</span>
                  </h2>
                  <span className="text-xs uppercase tracking-wider text-accent">
                    {row.variant || "contact"} · {fmtDate(row.created_at)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate">
                  {row.email ? (
                    <a className="text-accent underline" href={`mailto:${row.email}`}>{row.email}</a>
                  ) : "no email"}
                </p>
                {(row.ip || row.user_agent) ? (
                  <p className="mt-1 text-xs text-slate/70">
                    IP: {row.ip || "unknown"}{row.user_agent ? ` · ${row.user_agent}` : ""}
                  </p>
                ) : null}

                {extra.length > 0 ? (
                  <dl className="mt-3 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
                    {extra.map(([k, v]) => (
                      <div key={k} className="flex gap-2">
                        <dt className="shrink-0 font-medium text-ink">{k}:</dt>
                        <dd className="text-slate">{String(v)}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {Array.isArray(row.files) && row.files.length > 0 ? (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-ink">Documents</p>
                    <ul className="mt-1 space-y-1 text-sm">
                      {row.files.map((f, i) => (
                        <li key={i}>
                          <a
                            className="text-accent underline"
                            href={`/admin/file?p=${encodeURIComponent(f.pathname)}&n=${encodeURIComponent(f.name)}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {f.name}
                          </a>{" "}
                          <span className="text-slate">({Math.round(f.size / 1024)} KB)</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
}
