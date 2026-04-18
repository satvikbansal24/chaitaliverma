import type { ReactNode } from "react";

type Props = {
  id?: string;
  number: string;
  /** Small caps label above the title; omit to hide */
  kicker?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  /** beige | paper | white */
  tone?: "beige" | "paper" | "white";
};

const toneClass = {
  beige: "bg-[var(--beige)]",
  paper: "bg-[var(--paper)]",
  white: "bg-white",
};

export function NumberedSection({
  id,
  number,
  kicker,
  title,
  subtitle,
  children,
  className = "",
  tone = "paper",
}: Props) {
  return (
    <section
      id={id}
      className={`border-b border-[var(--green-border)] ${toneClass[tone]} ${className}`}
    >
      <div className="w-full px-6 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="relative lg:flex lg:gap-10">
          <div
            className="pointer-events-none hidden select-none font-serif text-[clamp(4rem,14vw,9rem)] font-semibold leading-none text-[var(--sage)] opacity-[0.35] lg:block"
            aria-hidden
          >
            {number}
          </div>
          <div className="min-w-0 flex-1 lg:pt-4">
            {kicker ? (
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--green-deep)]">
                {kicker}
              </p>
            ) : null}
            <h2
              className={`font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-tight text-[var(--green-deep)] ${kicker ? "mt-3" : ""}`}
            >
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-3 max-w-2xl text-[var(--green-muted)]">{subtitle}</p>
            ) : null}
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
