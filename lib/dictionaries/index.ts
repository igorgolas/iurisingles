import type { Locale } from "@/lib/i18n";
import { en, type Dictionary } from "./en";
import { de } from "./de";
import { fr } from "./fr";
import { it } from "./it";

const dictionaries: Record<Locale, Dictionary> = { en, de, fr, it };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };
