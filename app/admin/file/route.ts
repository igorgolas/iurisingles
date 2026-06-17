import { get } from "@vercel/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Streams a private blob to the (already authenticated, via middleware) admin.
export async function GET(req: Request): Promise<Response> {
  const params = new URL(req.url).searchParams;
  const pathname = params.get("p");
  const name = params.get("n") || "document";
  if (!pathname) return new Response("Missing file reference", { status: 400 });

  let result;
  try {
    result = await get(pathname, { access: "public" });
  } catch {
    return new Response("Unable to read file", { status: 502 });
  }
  if (!result || result.statusCode !== 200) {
    return new Response("File not found", { status: 404 });
  }

  return new Response(result.stream, {
    headers: {
      "Content-Type": result.blob.contentType || "application/octet-stream",
      "Content-Disposition": `inline; filename="${name.replace(/"/g, "")}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
