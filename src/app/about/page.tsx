import Link from "next/link";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <div className="border-b border-[var(--green-border)] bg-[var(--beige)]">
      <div className="w-full px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--green-deep)]">
          About
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-[var(--green-deep)] sm:text-5xl lg:text-6xl">
          {site.creatorName}
        </h1>
        <p className="mt-3 text-base font-medium uppercase tracking-[0.15em] text-[var(--green-muted)] sm:text-lg">
          {site.roleLine}
        </p>
        <p className="mt-10 text-xl leading-relaxed text-[var(--green-muted)] sm:text-2xl">
          {site.description}
        </p>
        <p className="mt-8 text-lg leading-relaxed text-[var(--green-muted)] sm:text-xl">
          {site.aboutLead}
        </p>
        <blockquote className="mt-12 w-full rounded-2xl border border-[var(--green-border)] bg-[var(--paper)] p-8 sm:p-10 lg:p-12">
          <p className="font-serif text-xl leading-relaxed text-[var(--green-deep)] sm:text-2xl lg:text-3xl">
            “{site.quote}”
          </p>
          <p className="mt-5 text-base text-[var(--green-muted)] sm:text-lg">— {site.creatorName}</p>
        </blockquote>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/media-kit"
            className="inline-flex rounded-full bg-[var(--green-deep)] px-7 py-3.5 text-base font-semibold text-[var(--beige)] hover:bg-[var(--green-mid)]"
          >
            Media kit
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-[var(--green-border)] bg-[var(--paper)] px-7 py-3.5 text-base font-semibold text-[var(--green-deep)] hover:bg-[var(--green-soft)]"
          >
            Get in touch
          </Link>
        </div>
        <Link
          href="/"
          className="mt-12 inline-block text-base font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
