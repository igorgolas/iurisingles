import { NextResponse } from "next/server";
import { ensureSchema, getSql } from "@/lib/db";
import type { UploadedFile } from "@/lib/uploads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT_PER_HOUR = 5;

function str(v: unknown): string | null {
  return typeof v === "string" && v.trim() !== "" ? v : null;
}

export async function POST(req: Request): Promise<NextResponse> {
  let payload: Record<string, unknown>;
  try {
    payload = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // Honeypot: a hidden field that humans never fill. If it has a value, it's a bot.
  // Respond OK so the bot gets no signal, but process nothing.
  if (str(payload.company_website)) {
    return NextResponse.json({ ok: true });
  }

  const fwd = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "";
  const ip = fwd.split(",")[0].trim() || null;
  const userAgent = req.headers.get("user-agent");

  const files: UploadedFile[] = Array.isArray(payload.files)
    ? (payload.files as UploadedFile[])
    : [];
  const fields: Record<string, unknown> = { ...payload };
  delete fields.files;
  delete fields.company_website;

  // 1) Persist + rate-limit (best-effort: never block the user on a DB error).
  try {
    await ensureSchema();
    const sql = getSql();

    if (ip) {
      const rows = (await sql`
        SELECT count(*)::int AS c FROM leads
        WHERE ip = ${ip} AND created_at > now() - interval '1 hour'
      `) as Array<{ c: number }>;
      if (Number(rows[0]?.c ?? 0) >= RATE_LIMIT_PER_HOUR) {
        // Too many submissions from this IP in the last hour: drop silently.
        return NextResponse.json({ ok: true });
      }
    }

    await sql`INSERT INTO leads (variant, name, company, email, payload, files, ip, user_agent)
      VALUES (
        ${str(fields.variant)},
        ${str(fields.name)},
        ${str(fields.company)},
        ${str(fields.email)},
        ${JSON.stringify(fields)}::jsonb,
        ${JSON.stringify(files)}::jsonb,
        ${ip},
        ${userAgent}
      )`;
  } catch (error) {
    console.error("[lead] database error:", error);
  }

  // 2) Notify by email (best-effort).
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (apiKey && to && from) {
    const origin = new URL(req.url).origin;
    const lines = Object.entries(fields)
      .filter(([, v]) => str(v) !== null)
      .map(([k, v]) => `${k}: ${String(v)}`);
    if (files.length > 0) {
      lines.push("", `Documents attached (${files.length}):`);
      for (const f of files) {
        lines.push(`- ${f.name} (${Math.round(f.size / 1024)} KB)`);
      }
      lines.push("", "The documents are confidential and can be opened from the admin panel.");
    }
    lines.push("", "—", `Sender IP: ${ip ?? "unknown"}`, `Browser: ${userAgent ?? "unknown"}`);
    lines.push("", `Admin panel: ${origin}/admin`);
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          subject: `New website enquiry (${str(fields.variant) ?? "contact"})`,
          text: lines.join("\n"),
        }),
      });
    } catch (error) {
      console.error("[lead] email error:", error);
    }
  }

  return NextResponse.json({ ok: true });
}
