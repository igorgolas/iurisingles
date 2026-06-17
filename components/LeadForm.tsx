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

type Status = "idle" | "uploading" | "sending" | "ok" | "error";

const field =
  "mt-1 w-full rounded-md border border-slate/20 px-3 py-2 text-sm text-ink outline-none focus:border-accent";
const label = "block text-sm font-medium text-ink";

export default function LeadForm({ variant }: { variant: "proposal" | "contact" }) {
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

    // Collect and validate any attached documents.
    const input = form.elements.namedItem("documents") as HTMLInputElement | null;
    const selected = input?.files ? Array.from(input.files) : [];
    if (selected.length > MAX_FILES) {
      setFileError(`Please attach at most ${MAX_FILES} files.`);
      return;
    }
    for (const f of selected) {
      if (f.size > MAX_UPLOAD_BYTES) {
        setFileError(`"${f.name}" is larger than 10 MB.`);
        return;
      }
      if (f.type && !ALLOWED_CONTENT_TYPES.includes(f.type)) {
        setFileError(`"${f.name}" is not an accepted file type (PDF, Word, Excel, JPG or PNG).`);
        return;
      }
    }

    try {
      // 1) Upload documents straight to the (private) blob store.
      const uploaded: UploadedFile[] = [];
      if (selected.length > 0) {
        setStatus("uploading");
        for (const f of selected) {
          const res = await upload(f.name, f, {
            access: "private",
            handleUploadUrl: "/api/blob-upload",
            contentType: f.type || undefined,
          });
          uploaded.push({
            pathname: res.pathname,
            url: res.url,
            name: f.name,
            size: f.size,
            type: f.type,
          });
        }
      }

      // 2) Send the form fields plus document references.
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
      {variant === "proposal" ? (
        <>
          <fieldset className="space-y-5">
            <legend className="text-sm font-semibold uppercase tracking-wider text-accent">
              1. Applicant data
            </legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={label}>Full name *<input name="name" required className={field} /></label>
              <label className={label}>Role or position<input name="role" className={field} /></label>
              <label className={label}>Company name and VAT/tax ID *<input name="company" required className={field} /></label>
              <label className={label}>Country of the applicant company<input name="applicantCountry" className={field} /></label>
              <label className={label}>Contact email *<input type="email" name="email" required className={field} /></label>
              <label className={label}>Contact telephone<input name="phone" className={field} /></label>
              <label className={label}>
                Preferred language of communication
                <select name="language" defaultValue="English" className={field}>
                  <option>English</option><option>Spanish</option><option>French</option>
                  <option>Italian</option><option>German</option><option>Other</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="text-sm font-semibold uppercase tracking-wider text-accent">
              2. Nature of the case
            </legend>
            <label className={label}>
              Brief description of the case
              <textarea name="description" rows={5} maxLength={2000} className={field} />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className={label}>Approximate amount of the claim or portfolio<input name="amount" className={field} /></label>
              <label className={label}>Currency of the claim<input name="currency" defaultValue="EUR" className={field} /></label>
              <label className={label}>Approximate age of the debt (oldest invoice)<input name="debtAge" placeholder="e.g. 2024-03" className={field} /></label>
              <label className={label}>
                Nature of the debt
                <select name="debtNature" className={field}>
                  <option value="">—</option><option>Commercial</option><option>Professional services</option>
                  <option>Transport</option><option>Rental</option><option>Other</option>
                </select>
              </label>
              <label className={label}>Debtor name<input name="debtorName" className={field} /></label>
              <label className={label}>Debtor country<input name="debtorCountry" defaultValue="Spain" className={field} /></label>
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold uppercase tracking-wider text-accent">
              3. Supporting documents (optional)
            </legend>
            <p className="text-sm text-slate">
              Attach invoices, contracts, delivery notes or any document that helps assess the case.
              PDF, Word, Excel or images, up to 10 MB each (max {MAX_FILES} files). Files are stored
              confidentially.
            </p>
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
          <label className={label}>Company<input name="company" required className={field} /></label>
          <label className={label}>Contact name<input name="name" required className={field} /></label>
          <label className={label}>Email<input type="email" name="email" required className={field} /></label>
          <label className={label}>Country<input name="applicantCountry" className={field} /></label>
          <label className={`${label} sm:col-span-2`}>
            Message<textarea name="description" rows={5} required className={field} />
          </label>
        </div>
      )}

      <label className="flex items-start gap-3 text-sm text-slate">
        <input type="checkbox" name="privacy" required className="mt-1" />
        <span>I have read and accept IJ Creditor&apos;s privacy policy. *</span>
      </label>
      <label className="flex items-start gap-3 text-sm text-slate">
        <input type="checkbox" name="marketing" className="mt-1" />
        <span>I also wish to receive commercial communications (optional).</span>
      </label>

      <button
        type="submit"
        disabled={busy}
        className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "uploading" ? "Uploading documents…" : status === "sending" ? "Sending…" : "Send"}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-green-700">Thank you. You will receive a confidential first assessment within two business days.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-700">Something went wrong. Please email us at ijcreditor@ijcreditor.es.{errorMsg ? <span className="mt-1 block text-xs opacity-70">{errorMsg}</span> : null}</p>
      ) : null}
    </form>
  );
}
