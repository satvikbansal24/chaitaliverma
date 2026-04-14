import Link from "next/link";
import { InstagramReelEmbed } from "@/components/instagram-reel-embed";
import { PAGE_SECTION_GAP, PageHero } from "@/components/page-hero";

const CNN_BREAKFAST_CLUB_REEL =
  "https://www.instagram.com/reel/DKLrBsxsOtw/";

export const metadata = {
  title: "Media",
  description:
    "Press mentions, interviews, and appearances: Chaitali Verma.",
};

export default function MediaPage() {
  return (
    <div className="border-b border-[var(--green-border)] bg-[var(--paper)]">
      <PageHero kicker="Press & appearances" title="Media" />
      <div
        className={`w-full px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-24 ${PAGE_SECTION_GAP}`}
      >
        <div className="mx-auto max-w-6xl">
          {/*
            Desktop: kicker + title stack in col 1; reel and caption share row 3 so
            “Why go abroad…” lines up with the top of the embed. Mobile: natural stack order.
          */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-4 lg:items-start">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--green-muted)] lg:col-start-1">
              CNN · The Breakfast Club
            </p>
            <h2 className="font-serif text-3xl font-semibold text-[var(--green-deep)] sm:text-4xl lg:col-start-1">
              Interview
            </h2>
            <div className="flex min-w-0 justify-center sm:justify-start lg:row-start-3 lg:col-start-1">
              <InstagramReelEmbed
                permalink={CNN_BREAKFAST_CLUB_REEL}
                title="CNN The Breakfast Club interview with Chaitali Verma"
                compact
                collaborations
              />
            </div>
            <a
              href={CNN_BREAKFAST_CLUB_REEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline lg:row-start-4 lg:col-start-1"
            >
              Open on Instagram →
            </a>
            <div className="space-y-6 text-xl leading-relaxed text-[var(--green-muted)] sm:text-2xl sm:leading-relaxed lg:row-start-3 lg:col-start-2 lg:self-start">
              <p className="font-serif text-2xl text-[var(--green-deep)] sm:text-3xl sm:leading-snug">
                Why go abroad when the perfect escape is local?
              </p>
              <p>
                This summer, discover the beauty of India with{" "}
                <span className="font-semibold text-[var(--green-deep)]">
                  #TheBreakfastClub
                </span>
                .
              </p>
              <p>
                Join traveler and influencer{" "}
                <a
                  href="https://www.instagram.com/chaitali.verma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
                >
                  @chaitali.verma
                </a>{" "}
                as she highlights scenic destinations across South and West India
                with{" "}
                <a
                  href="https://www.instagram.com/toyaparanoia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
                >
                  @toyaparanoia
                </a>{" "}
                <a
                  href="https://www.instagram.com/sonalmehrotrakapoor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
                >
                  @sonalmehrotrakapoor
                </a>
              </p>
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="mt-14 inline-block text-lg font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
