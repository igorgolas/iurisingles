"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "mt-1 w-full rounded-md border border-slate/20 px-3 py-2 text-sm text-ink outline-none focus:border-accent";
const label = "block text-sm font-medium text-ink";

export default function LeadForm({ variant }: { variant: "proposal" | "contact" }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!(form.elements.namedItem("privacy") as HTMLInputElement)?.checked) {
      return;
    }
    setStatus("sending");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, variant }),
      });
      setStatus(res.ok ? "ok" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

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
        disabled={status === "sending"}
        className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-green-700">Thank you. You will receive a confidential first assessment, normally within a few business days.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-700">Something went wrong. Please email us at ijcreditor@ijcreditor.es.</p>
      ) : null}
    </form>
  );
}
