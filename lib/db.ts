import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let cached: NeonQueryFunction<false, false> | null = null;

export function getSql(): NeonQueryFunction<false, false> {
  if (cached) return cached;
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) throw new Error("DATABASE_URL is not configured");
  cached = neon(url);
  return cached;
}

let ensured = false;

export async function ensureSchema(): Promise<void> {
  if (ensured) return;
  const sql = getSql();
  await sql`CREATE TABLE IF NOT EXISTS leads (
    id serial PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    variant text,
    name text,
    company text,
    email text,
    payload jsonb NOT NULL DEFAULT '{}'::jsonb,
    files jsonb NOT NULL DEFAULT '[]'::jsonb
  )`;
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS ip text`;
  await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS user_agent text`;
  ensured = true;
}

export type LeadRow = {
  id: number;
  created_at: string;
  variant: string | null;
  name: string | null;
  company: string | null;
  email: string | null;
  payload: Record<string, unknown>;
  files: Array<{ pathname: string; url: string; name: string; size: number; type: string }>;
  ip: string | null;
  user_agent: string | null;
};
