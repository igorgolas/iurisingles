"use client";

import { useState } from "react";
import { upload } from "@vercel/blob/client";
import {
  ACCEPT_ATTR,
  ALLOWED_CONTENT_TYPES,
  MAX_FILES,
  MAX_UPLOAD_BYTES,
  type UploadedFile,
} from "@/lib/uploads";
import type { Dictionary } from "@/lib/dictionaries";

type Status = "idle" | "uploading" | "sending" | "ok" | "error";
type T = Dictionary["form"];

const field =
  "mt-1 w-full rounded-md border border-slate/20 px-3 py-2 text-sm text-ink outline-none focus:border-accent";
const label = "block text-sm font-medium text-ink";

export default function LeadForm({ variant, t }: { variant: "proposal" | "contact"; t: T }) {
  const [status, setStatus] = useState<Status>("idle");
  const [fileError, setFileError] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFileError(null);
    setErrorMsg(null);
    const form = e.currentTarget;
    if (!(form.elements.namedItem("privacy") as HTMLInputElement)?.checked) {
      return;
    }

    const input = form.elements.namedItem("documents") as HTMLInputElement | null;
    const selected = input?.files ? Array.from(input.files) : [];
    if (selected.length > MAX_FILES) {
      setFileError(t.errTooMany.replace("{n}", String(MAX_FILES)));
      return;
    }
    for (const f of selected) {
      if (f.size > MAX_UPLOAD_BYTES) {
        setFileError(t.errTooLarge.replace("{name}", f.name));
        return;
      }
      if (f.type && !ALLOWED_CONTENT_TYPES.includes(f.type)) {
        setFileError(t.errType.replace("{name}", f.name));
        return;
      }
    }

    try {
      const uploaded: UploadedFile[] = [];
      if (selected.length > 0) {
        setStatus("uploading");
        for (const f of selected) {
          const res = await upload(f.name, f, {
            access: "private",
            handleUploadUrl: "/api/blob-upload",
            contentType: f.type || undefined,
          });
          uploaded.push({ pathname: res.pathname, url: res.url, name: f.name, size: f.size, type: f.type });
        }
      }

      setStatus("sending");
      const data: Record<string, string> = {};
      new FormData(form).forEach((value, key) => {
        if (key !== "documents") data[key] = String(value);
      });
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, variant, files: uploaded }),
      });
      setStatus(res.ok ? "ok" : "error");
      if (res.ok) form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : String(err));
      console.error("[LeadForm] submission failed:", err);
      setStatus("error");
    }
  }

  const busy = status === "uploading" || status === "sending";

  return (
    <form onSubmit={onSubmit} className="max-w-2xl space-y-8">
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          {t.honeypot}
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {variant === "proposal" ? (
        <>
          <fieldset className="space-y-5">
            <legend className="text-sm font-semibold uppercase tracking-wider text-accent">{t.applicantData}</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={label}>{t.fullName}<input name="name" required className={field} /></label>
              <label className={label}>{t.role}<input name="role" className={field} /></label>
              <label className={label}>{t.companyVat}<input name="company" required className={field} /></label>
              <label className={label}>{t.applicantCountry}<input name="applicantCountry" className={field} /></label>
              <label className={label}>{t.email}<input type="email" name="email" required className={field} /></label>
              <label className={label}>{t.phone}<input name="phone" className={field} /></label>
              <label className={label}>
                {t.language}
                <select name="language" defaultValue="English" className={field}>
                  <option value="English">{t.langOptions.english}</option>
                  <option value="Spanish">{t.langOptions.spanish}</option>
                  <option value="French">{t.langOptions.french}</option>
                  <option value="Italian">{t.langOptions.italian}</option>
                  <option value="German">{t.langOptions.german}</option>
                  <option value="Other">{t.langOptions.other}</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="text-sm font-semibold uppercase tracking-wider text-accent">{t.natureOfCase}</legend>
            <label className={label}>
              {t.description}
              <textarea name="description" rows={5} maxLength={2000} className={field} />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={label}>{t.amount}<input name="amount" className={field} /></label>
              <label className={label}>{t.currency}<input name="currency" defaultValue="EUR" className={field} /></label>
              <label className={label}>{t.debtAge}<input name="debtAge" placeholder={t.debtAgePlaceholder} className={field} /></label>
              <label className={label}>
                {t.debtNature}
                <select name="debtNature" className={field}>
                  <option value="">—</option>
                  <option value="Commercial">{t.debtNatureOptions.commercial}</option>
                  <option value="Professional services">{t.debtNatureOptions.professional}</option>
                  <option value="Transport">{t.debtNatureOptions.transport}</option>
                  <option value="Rental">{t.debtNatureOptions.rental}</option>
                  <option value="Other">{t.debtNatureOptions.other}</option>
                </select>
              </label>
              <label className={label}>{t.debtorName}<input name="debtorName" className={field} /></label>
              <label className={label}>{t.debtorCountry}<input name="debtorCountry" defaultValue="Spain" className={field} /></label>
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold uppercase tracking-wider text-accent">{t.documentsTitle}</legend>
            <p className="text-sm text-slate">{t.documentsHelp.replace("{n}", String(MAX_FILES))}</p>
            <input
              type="file"
              name="documents"
              multiple
              accept={ACCEPT_ATTR}
              className="block w-full text-sm text-slate file:mr-4 file:rounded-md file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:opacity-90"
            />
            {fileError ? <p className="text-sm text-red-700">{fileError}</p> : null}
          </fieldset>
        </>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={label}>{t.company}<input name="company" required className={field} /></label>
          <label className={label}>{t.contactName}<input name="name" required className={field} /></label>
          <label className={label}>{t.emailSimple}<input type="email" name="email" required className={field} /></label>
          <label className={label}>{t.country}<input name="applicantCountry" className={field} /></label>
          <label className={`${label} sm:col-span-2`}>
            {t.message}<textarea name="description" rows={5} required className={field} />
          </label>
        </div>
      )}

      <label className="flex items-start gap-3 text-sm text-slate">
        <input type="checkbox" name="privacy" required className="mt-1" />
        <span>{t.privacy}</span>
      </label>
      <label className="flex items-start gap-3 text-sm text-slate">
        <input type="checkbox" name="marketing" className="mt-1" />
        <span>{t.marketing}</span>
      </label>

      <button
        type="submit"
        disabled={busy}
        className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "uploading" ? t.uploading : status === "sending" ? t.sending : t.send}
      </button>
      {status === "ok" ? <p className="text-sm text-green-700">{t.ok}</p> : null}
      {status === "error" ? (
        <p className="text-sm text-red-700">{t.error}{errorMsg ? <span className="mt-1 block text-xs opacity-70">{errorMsg}</span> : null}</p>
      ) : null}
    </form>
  );
}
