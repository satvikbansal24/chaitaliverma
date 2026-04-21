"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Stat = {
  readonly label: string;
  readonly value: string;
  readonly hint: string;
};

type ParsedStat = {
  label: string;
  hint: string;
  target: number;
  unit: "" | "K" | "M";
  hasPlus: boolean;
};

function parseStat(s: Stat): ParsedStat {
  const raw = s.value.trim();
  const hasPlus = raw.endsWith("+");
  const core = hasPlus ? raw.slice(0, -1) : raw;
  if (core.endsWith("M")) {
    return {
      label: s.label,
      hint: s.hint,
      target: Number.parseFloat(core.slice(0, -1)),
      unit: "M",
      hasPlus,
    };
  }
  if (core.endsWith("K")) {
    return {
      label: s.label,
      hint: s.hint,
      target: Number.parseFloat(core.slice(0, -1)),
      unit: "K",
      hasPlus,
    };
  }
  return {
    label: s.label,
    hint: s.hint,
    target: Number.parseFloat(core),
    unit: "",
    hasPlus,
  };
}

function formatStat(n: number, p: ParsedStat): string {
  const rounded = Math.round(n);
  const body = p.unit ? `${rounded}${p.unit}` : `${rounded}`;
  return p.hasPlus ? `${body}+` : body;
}

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

const DURATION_MS = 900;

export function ReachStatsCards({ stats }: { stats: readonly Stat[] }) {
  const parsed = useMemo(() => stats.map(parseStat), [stats]);
  const [displayed, setDisplayed] = useState(() => parsed.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRunRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const runAnimation = useCallback(() => {
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS);
      const eased = easeOutCubic(t);
      setDisplayed(parsed.map((p) => p.target * eased));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayed(parsed.map((p) => p.target));
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [parsed]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            runAnimation();
            obs.disconnect();
            break;
          }
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [runAnimation]);

  return (
    <div ref={containerRef} className="grid gap-5 md:grid-cols-3">
      {parsed.map((p, i) => (
        <div
          key={p.label}
          className="rounded-2xl border border-[var(--green-border)] bg-[var(--beige)]/80 p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green-muted)]">
            {p.label}
          </p>
          <p className="mt-3 font-serif text-3xl font-semibold tabular-nums text-[var(--green-deep)] sm:text-4xl">
            {formatStat(displayed[i] ?? 0, p)}
          </p>
          <p className="mt-2 text-sm leading-snug text-[var(--green-muted)]">{p.hint}</p>
        </div>
      ))}
    </div>
  );
}
