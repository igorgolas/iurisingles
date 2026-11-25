import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";

// IndexNow: tells Bing (and other participating engines) which URLs changed.
// The key file is public at /5d35e417dc57b248564803244621f58a.txt, as the protocol requires.
const KEY = "5d35e417dc57b248564803244621f58a";
const HOST = "www.ijcreditor.com";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  if (url.searchParams.get("key") !== KEY) return NextResponse.json({ ok: false }, { status: 403 });
  const only = url.searchParams.get("paths");
  let urlList = sitemap().map((e) => e.url);
  if (only) {
    const wanted = only.split(",").map((p) => p.trim()).filter(Boolean);
    urlList = urlList.filter((u) => wanted.some((p) => u.endsWith(p) || u.includes(p + "/")));
  }
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
  });
  return NextResponse.json({ ok: res.ok, status: res.status, submitted: urlList.length });
}
