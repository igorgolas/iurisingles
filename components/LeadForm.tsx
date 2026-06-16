"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function LeadForm({ variant }: { variant: "proposal" | "contact" }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, variant }),
      });
      setStatus(res.ok ? "ok" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-1 w-full rounded-md border border-slate/20 px-3 py-2 text-sm text-ink outline-none focus:border-accent";

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Company
          <input name="company" required className={field} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Contact name
          <input name="name" required className={field} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Email
          <input type="email" name="email" required className={field} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Country
          <input name="country" className={field} />
        </label>
      </div>
      {variant === "proposal" ? (
        <label className="block text-sm font-medium text-ink">
          Approximate amount owed (EUR)
          <input name="amount" className={field} />
        </label>
      ) : null}
      <label className="block text-sm font-medium text-ink">
        Message
        <textarea name="message" rows={5} required className={field} />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-green-700">Thank you. We will be in touch shortly.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-700">
          Something went wrong. Please email us directly.
        </p>
      ) : null}
    </form>
  );
}
