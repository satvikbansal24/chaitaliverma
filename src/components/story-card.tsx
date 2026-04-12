import Link from "next/link";
import type { Story } from "@/content/site";
import { tagLabels } from "@/content/site";

type Props = {
  story: Story;
};

export function StoryCard({ story }: Props) {
  return (
    <article className="flex flex-col rounded-2xl border border-[var(--green-border)] bg-[var(--paper)] p-6 shadow-sm shadow-[var(--green-deep)]/[0.04]">
      <p className="text-xs font-medium uppercase tracking-wide text-[var(--green-muted)]">
        {story.platform} · {story.year}
      </p>
      <h3 className="mt-2 font-serif text-lg font-semibold text-[var(--green-deep)]">
        {story.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--green-muted)]">
        {story.excerpt}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {story.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-[var(--green-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--green-mid)]"
          >
            {tagLabels[t]}
          </span>
        ))}
      </div>
      <Link
        href={story.href}
        className="mt-4 text-sm font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
      >
        Open →
      </Link>
    </article>
  );
}
