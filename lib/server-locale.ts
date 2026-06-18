import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";

// Reads the active locale from the request header set by middleware.
export async function getLocale(): Promise<Locale> {
  const value = (await headers()).get("x-locale") ?? "";
  return isLocale(value) ? value : defaultLocale;
}
