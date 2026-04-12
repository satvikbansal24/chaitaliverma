import Link from "next/link";
import { CollaborationsFeaturedSection } from "@/components/collaborations-featured-section";
import { CollaborationsSpotlightSection } from "@/components/collaborations-spotlight-section";

export const metadata = {
  title: "Collaborations",
  description:
    "Brand collaborations, spotlight reels, and partners—Chaitali Verma.",
};

export default function CollaborationsPage() {
  return (
    <>
      <div className="border-b border-[var(--green-border)] bg-[var(--beige)]">
        <div className="w-full px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--green-deep)]">
            Collaborations
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-[var(--green-deep)] sm:text-5xl">
            Brands &amp; campaigns
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--green-muted)] sm:text-xl">
            Spotlight reels, a standout Luang Prabang piece for AirAsia, and a
            wider circle of partners.
          </p>
          <Link
            href="/"
            className="mt-10 inline-block text-base font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
          >
            ← Back home
          </Link>
        </div>
      </div>
      <CollaborationsSpotlightSection />
      <CollaborationsFeaturedSection />
    </>
  );
}
