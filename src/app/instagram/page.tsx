import Link from "next/link";
import { HeritageSection } from "@/components/heritage-section";
import { ReelsSection } from "@/components/reels-section";

export const metadata = {
  title: "Instagram",
  description: "Postcards from the road and heritage stories—reels and posts from Chaitali Verma.",
};

export default function InstagramPage() {
  return (
    <>
      <div className="border-b border-[var(--green-border)] bg-[var(--beige)]">
        <div className="w-full px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--green-deep)]">
            Instagram
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-[var(--green-deep)] sm:text-5xl">
            Postcards &amp; heritage
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--green-muted)] sm:text-xl">
            Embedded reels and posts—travel moments, communities, and places worth slowing down for.
          </p>
          <Link
            href="/"
            className="mt-10 inline-block text-base font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
          >
            ← Back home
          </Link>
        </div>
      </div>
      <ReelsSection />
      <HeritageSection />
    </>
  );
}
