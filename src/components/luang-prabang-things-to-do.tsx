import { collaborationColumnHeadingClass } from "@/components/collaborations-heading-classes";
import type { LuangPrabangThing } from "@/content/collaborations";

/**
 * Field-notes checklist: heading full width; items in two columns (row order: 1–2, 3–4, …).
 */
export function LuangPrabangThingsToDo({ items }: { items: LuangPrabangThing[] }) {
  return (
    <div
      className="relative mt-8 border-l-2 border-[var(--green-deep)]/25 pl-5"
      aria-labelledby="luang-things-heading"
    >
      <div className="absolute -left-px top-0 h-8 w-2 rounded-r-sm bg-[var(--green-mid)]/35" aria-hidden />
      <h4
        id="luang-things-heading"
        className={collaborationColumnHeadingClass}
      >
        Things to do
      </h4>
      <ol className="mt-5 grid list-none grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5">
            <span
              className="mt-0.5 flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full border border-dashed border-[var(--green-deep)]/70 bg-[var(--beige)] font-serif text-[12px] font-semibold tabular-nums leading-none text-[var(--green-deep)]"
              aria-hidden
            >
              {i + 1}
            </span>
            <span className="min-w-0 text-[12px] leading-snug text-[var(--green-muted)] sm:text-[13px] sm:leading-snug">
              <span className="text-[var(--green-deep)]">{item.line}</span>
              {item.mention ? (
                <span className="ml-1 inline-block rounded-md bg-[var(--green-deep)]/8 px-1.5 py-0.5 font-mono text-[10px] font-medium tracking-tight text-[var(--green-mid)] sm:text-[11px]">
                  {item.mention}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
