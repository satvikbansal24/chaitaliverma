/**
 * Shared page title strip: small uppercase kicker + large serif title on a paper-white
 * band below the sticky nav. Titles are centered; the block sits toward the bottom of
 * the band so there is breathing room above before the bottom border line.
 */
export function PageHero({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="border-b border-[var(--green-border)] bg-[var(--paper)]">
      <div className="flex min-h-[min(22vh,200px)] w-full flex-col items-center justify-end px-6 pt-6 pb-10 sm:min-h-[min(20vh,220px)] sm:pt-8 sm:pb-12 lg:px-12">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--green-deep)]">
            {kicker}
          </p>
          <h1 className="mt-5 font-serif text-4xl font-semibold text-[var(--green-deep)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

/** Margin-top after the hero before the first main block (sections, copy, etc.). */
export const PAGE_SECTION_GAP = "mt-10 sm:mt-12";
