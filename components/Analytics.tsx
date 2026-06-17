"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA = process.env.NEXT_PUBLIC_GA_ID;
const CLARITY = process.env.NEXT_PUBLIC_CLARITY_ID;
const KEY = "ijc_consent";

type Consent = "granted" | "denied" | "pending" | "init";

export default function Analytics() {
  const [consent, setConsent] = useState<Consent>("init");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
    setConsent(stored === "granted" ? "granted" : stored === "denied" ? "denied" : "pending");
  }, []);

  // Nothing to load and nothing to consent to.
  if (!GA && !CLARITY) return null;

  function choose(value: "granted" | "denied") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // ignore storage errors
    }
    setConsent(value);
  }

  return (
    <>
      {consent === "granted" ? (
        <>
          {GA ? (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
                strategy="afterInteractive"
              />
              <Script id="ga4-init" strategy="afterInteractive">
                {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA}',{anonymize_ip:true});`}
              </Script>
            </>
          ) : null}
          {CLARITY ? (
            <Script id="clarity-init" strategy="afterInteractive">
              {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY}");`}
            </Script>
          ) : null}
        </>
      ) : null}

      {consent === "pending" ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate/15 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 text-sm text-slate sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl">
              We use analytics cookies to understand how visitors use the site and to
              improve it. You can accept or reject them. See our{" "}
              <a href="/privacy" className="text-accent underline">privacy policy</a>.
            </p>
            <div className="flex flex-none gap-3">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="rounded-md border border-slate/30 px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-slate/5"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
