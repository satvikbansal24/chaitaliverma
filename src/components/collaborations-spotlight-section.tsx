import Link from "next/link";
import {
  collaborationCardTitleClass,
  collaborationSectionTitleClass,
} from "@/components/collaborations-heading-classes";
import { InstagramReelEmbed } from "@/components/instagram-reel-embed";
import { collaborationSpotlights } from "@/content/collaborations";

/**
 * Three spotlight collabs: title + copy above each reel, three columns on xl.
 */
export function CollaborationsSpotlightSection() {
  return (
    <section
      id="spotlight-collabs"
      className="border-b border-[var(--green-border)] bg-[#f7f4ec]"
    >
      <div className="w-full px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <h2 className={collaborationSectionTitleClass}>
          Spotlight Collaborations
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3 xl:gap-6">
          {collaborationSpotlights.map((item) => (
            <article
              key={item.slug}
              className="flex min-w-0 flex-col border-b border-[var(--green-border)] pb-10 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0"
            >
              <h3 className={collaborationCardTitleClass}>{item.headline}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--green-muted)] line-clamp-4">
                {item.excerpt}
              </p>
              <Link
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-sm font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
              >
                Watch on Instagram →
              </Link>
              <div className="mt-5 min-w-0">
                <InstagramReelEmbed
                  permalink={item.permalink}
                  title={item.headline}
                  compact
                  collaborations
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
