import Link from "next/link";
import type { PortfolioItem } from "@/content/site";
import { tagLabels } from "@/content/site";

type Props = {
  item: PortfolioItem;
};

export function PortfolioFeaturedCard({ item }: Props) {
  const isLarge = item.size === "large";

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--green-border)] bg-white shadow-sm ${
        isLarge ? "min-h-[420px] lg:min-h-[520px]" : ""
      }`}
    >
      <div
        className={`relative shrink-0 bg-gradient-to-br from-stone-200/90 to-stone-300/80 ${
          isLarge ? "aspect-[4/3] lg:aspect-auto lg:min-h-[220px] lg:flex-1" : "aspect-[16/9]"
        }`}
        aria-hidden
      >
        <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-stone-500/80">
          Image
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[var(--green-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--green-mid)]"
            >
              {tagLabels[t]}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-serif text-lg font-semibold text-[var(--green-deep)] sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--green-muted)]">{item.excerpt}</p>
        <div className="mt-4 flex items-end justify-between gap-4 border-t border-[var(--green-border)] pt-4 text-xs text-[var(--green-muted)]">
          <span className="font-medium uppercase tracking-wide">{item.platform}</span>
          <span>{item.year}</span>
        </div>
        {item.statLine ? (
          <p className="mt-2 text-xs text-[var(--green-mid)]">{item.statLine}</p>
        ) : null}
        <Link
          href={item.href}
          className="mt-4 text-sm font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
        >
          View →
        </Link>
      </div>
    </article>
  );
}
