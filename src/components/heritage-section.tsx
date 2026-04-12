import Link from "next/link";
import { InstagramReelEmbed } from "@/components/instagram-reel-embed";
import { heritagePosts } from "@/content/site";

/**
 * Communities & heritage — parallel to Postcards, focused on craft, place, and people.
 */
export function HeritageSection() {
  return (
    <section
      id="heritage"
      className="border-b border-[var(--green-border)] bg-[var(--beige)]"
    >
      <div className="w-full px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <h2 className="text-center font-serif text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-tight text-[var(--green-deep)]">
          Roots & belonging
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[var(--green-muted)] sm:text-base">
          Communities, craft, and markets—heritage that stays lived in, not museum-quiet.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4 xl:gap-6">
          {heritagePosts.map((item) => (
            <article
              key={item.slug}
              className="flex min-w-0 flex-col border-b border-[var(--green-border)] pb-10 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0"
            >
              <InstagramReelEmbed
                permalink={item.permalink}
                title={item.headline}
                compact
              />
              <h3 className="mt-4 font-serif text-lg font-semibold leading-snug text-[var(--green-deep)] xl:text-base">
                {item.headline}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--green-muted)] line-clamp-4">
                {item.excerpt}
              </p>
              <Link
                href={item.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
              >
                View on Instagram →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
