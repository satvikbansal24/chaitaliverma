import Link from "next/link";
import { InstagramReelEmbed } from "@/components/instagram-reel-embed";
import { travelReels } from "@/content/site";

/**
 * Postcards — grid of Instagram embeds (up to 4 across on wide desktops).
 */
export function ReelsSection() {
  return (
    <section
      id="postcards"
      className="border-y border-[var(--green-border)] bg-[#f7f4ec]"
    >
      <div className="w-full px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <h2 className="text-center font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-tight text-[var(--green-deep)]">
          Postcards from the road
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl:gap-6">
          {travelReels.map((reel) => (
            <article
              key={reel.slug}
              className="flex min-w-0 flex-col border-b border-[var(--green-border)] pb-10 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0"
            >
              <InstagramReelEmbed
                permalink={reel.permalink}
                title={reel.headline}
                compact
              />
              <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-[var(--green-deep)] xl:text-base">
                {reel.headline}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--green-muted)] line-clamp-4">
                {reel.excerpt}
              </p>
              <Link
                href={reel.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
              >
                Watch on Instagram →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
