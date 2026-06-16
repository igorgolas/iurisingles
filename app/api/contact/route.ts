import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Resend not configured yet: accept and log so the form works pre-launch.
  if (!apiKey || !to || !from) {
    console.log("[contact] (Resend not configured) submission:", payload);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New website enquiry (${String(payload.variant ?? "contact")})`,
      text: Object.entries(payload)
        .map(([k, v]) => `${k}: ${String(v)}`)
        .join("\n"),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Email failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
