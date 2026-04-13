"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { getYourGuideModal } from "@/content/site";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function GetYourGuideModal({ open, onClose }: Props) {
  const titleId = useId();
  const [copied, setCopied] = useState(false);

  const copyCode = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(getYourGuideModal.discountCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-[var(--green-deep)]/50 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[101] w-full max-w-md rounded-2xl border border-[var(--green-border)] bg-[var(--paper)] p-6 shadow-xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-[var(--green-muted)] transition hover:bg-[var(--beige)] hover:text-[var(--green-deep)]"
          aria-label="Close"
        >
          <span aria-hidden className="text-xl leading-none">
            ×
          </span>
        </button>

        <h2
          id={titleId}
          className="pr-8 font-serif text-xl font-semibold text-[var(--green-deep)] sm:text-2xl"
        >
          GetYourGuide
        </h2>
        <p className="mt-2 text-sm text-[var(--green-muted)]">
          Copy your discount code, then download the app to book tours and activities.
        </p>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green-muted)]">
            Discount code
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <code className="rounded-lg border border-[var(--green-border)] bg-[var(--beige)] px-3 py-2 font-mono text-base font-semibold tracking-wide text-[var(--green-deep)] sm:text-lg">
              {getYourGuideModal.discountCode}
            </code>
            <button
              type="button"
              onClick={copyCode}
              className="rounded-full border border-[var(--green-border)] bg-[var(--green-deep)] px-4 py-2 text-sm font-semibold text-[var(--beige)] transition hover:bg-[var(--green-mid)]"
            >
              {copied ? "Copied" : "Copy code"}
            </button>
          </div>
        </div>

        <div className="mt-8">
          <a
            href={getYourGuideModal.appDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--green-deep)] px-5 py-3 text-center text-sm font-semibold text-[var(--beige)] transition hover:bg-[var(--green-mid)]"
          >
            Download the GetYourGuide app
          </a>
        </div>
      </div>
    </div>
  );
}
