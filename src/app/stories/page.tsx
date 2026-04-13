import Link from "next/link";
import { StoryCard } from "@/components/story-card";
import { stories } from "@/content/site";

export default function StoriesPage() {
  return (
    <div className="border-b border-[var(--green-border)] bg-[var(--beige)]">
      <div className="w-full px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--green-deep)]">
          Stories & series
        </p>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-[var(--green-deep)] sm:text-4xl">
          Discover stories
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--green-muted)]">
          Themes from Chaitali’s work: tap through to reels, the media kit, or longer notes as they go live.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
        <Link
          href="/"
          className="mt-12 inline-block text-sm font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
