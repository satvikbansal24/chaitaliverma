import Link from "next/link";
import {
  collaborationCardTitleClass,
  collaborationSectionTitleClass,
} from "@/components/collaborations-heading-classes";
import { InstagramReelEmbed } from "@/components/instagram-reel-embed";
import {
  collaborationSpotlights,
  type CollaborationSpotlight,
} from "@/content/collaborations";

/** Same grid rhythm as Social Media “Local Heritage” (3-up, centered), with a bit more column gap */
const spotlightGridClass =
  "grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-12 xl:gap-14 md:max-w-5xl md:mx-auto";

function SpotlightCard({ item }: { item: CollaborationSpotlight }) {
  return (
    <article className="flex min-w-0 flex-col border-b border-[var(--green-border)] pb-10 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0">
      <h3 className={collaborationCardTitleClass}>{item.headline}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--green-muted)]">
        {item.excerpt}
      </p>
      <div className="mt-5 min-w-0">
        <InstagramReelEmbed
          permalink={item.permalink}
          title={item.headline}
          compact
        />
      </div>
      <Link
        href={item.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-sm font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
      >
        Watch on Instagram →
      </Link>
    </article>
  );
}

/**
 * Spotlight collabs: two rows of three. Short title + summary above each reel; embeds use `compact` only.
 */
export function CollaborationsSpotlightSection() {
  const rowPrimary = collaborationSpotlights.slice(0, 3);
  const rowMore = collaborationSpotlights.slice(3, 6);

  return (
    <section
      id="spotlight-collabs"
      className="border-b border-[var(--green-border)] bg-[#f7f4ec]"
    >
      <div className="w-full px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <h2 className={collaborationSectionTitleClass}>
          Spotlight Collaborations
        </h2>

        <div className={`mt-12 ${spotlightGridClass}`}>
          {rowPrimary.map((item) => (
            <SpotlightCard key={item.slug} item={item} />
          ))}
        </div>

        <div
          className={`mt-16 border-t border-[var(--green-border)] pt-16 ${spotlightGridClass}`}
        >
          {rowMore.map((item) => (
            <SpotlightCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
