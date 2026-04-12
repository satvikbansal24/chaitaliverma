"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center bg-[var(--beige)] px-6 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--green-deep)]">
        Something went wrong
      </p>
      <p className="mt-4 max-w-md text-[var(--green-muted)]">{error.message}</p>
      {error.digest ? (
        <p className="mt-2 text-xs text-[var(--green-muted)]">Digest: {error.digest}</p>
      ) : null}
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 rounded-full bg-[var(--green-deep)] px-6 py-2.5 text-sm font-semibold text-[var(--beige)] hover:bg-[var(--green-mid)]"
      >
        Try again
      </button>
    </div>
  );
}
