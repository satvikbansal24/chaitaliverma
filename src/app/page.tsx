import Image from "next/image";
import Link from "next/link";
import { NumberedSection } from "@/components/numbered-section";
import { TravelBetterGrid } from "@/components/travel-better-grid";
import { WritingSection } from "@/components/writing-section";
import { reachStats, servicePillars, site } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Split hero — full-bleed green; photo grid uses uniform gaps (green shows as gutters) */}
      <section className="border-b border-[var(--green-border)] bg-[var(--green-deep)]">
        <div className="grid min-h-[min(100vh,880px)] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-16">
            <h1 className="font-serif text-5xl font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-[clamp(3rem,6vw,4.25rem)]">
              {site.title}
            </h1>
            <p className="mt-5 text-base font-semibold uppercase tracking-[0.18em] text-white/85 sm:text-lg">
              {site.roleLine}
            </p>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-white/90 sm:text-lg lg:text-[1.125rem] lg:leading-[1.6]">
              {site.heroParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/instagram"
                className="inline-flex items-center justify-center rounded-full border border-white/90 bg-transparent px-8 py-3.5 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 sm:text-lg"
              >
                View work
              </Link>
              <Link
                href="/media-kit"
                className="inline-flex items-center justify-center rounded-full bg-[#f2efe6] px-8 py-3.5 text-base font-semibold uppercase tracking-wide text-[var(--green-deep)] transition hover:bg-white sm:text-lg"
              >
                Media kit
              </Link>
            </div>
            <div className="mt-12 max-w-lg space-y-2 text-lg leading-relaxed text-white/80">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 underline-offset-2 hover:underline"
              >
                <svg
                  className="h-[1.1em] w-[1.1em] shrink-0 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {site.email}
              </a>
              <div>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline-offset-2 hover:underline"
                >
                  <svg
                    className="h-[1.1em] w-[1.1em] shrink-0 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
                  </svg>
                  {site.instagramHandle}
                </a>
              </div>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:h-full lg:min-h-0">
            {site.heroImages.length > 0 ? (
              <div className="grid h-full min-h-[360px] grid-cols-2 gap-3 p-3 lg:min-h-[min(100vh,880px)] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[1fr_1fr] lg:gap-3 lg:p-4">
                <div className="relative col-span-2 aspect-[4/5] min-h-0 overflow-hidden lg:col-span-1 lg:row-span-2 lg:aspect-auto lg:h-full">
                  <Image
                    src={site.heroImages[0].src}
                    alt={site.heroImages[0].alt}
                    fill
                    className="object-cover"
                    style={
                      site.heroImages[0].objectPosition
                        ? { objectPosition: site.heroImages[0].objectPosition }
                        : undefined
                    }
                    priority
                    sizes="(max-width: 1024px) 100vw, 28vw"
                  />
                </div>
                {site.heroImages.slice(1).map((img, i) => (
                  <div
                    key={img.src}
                    className="relative aspect-square min-h-0 overflow-hidden lg:aspect-auto lg:min-h-0 lg:h-full"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                      priority={i < 2}
                      sizes="(max-width: 1024px) 50vw, 22vw"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-full min-h-[360px] flex-col items-center justify-center bg-gradient-to-br from-[#1a3a2f] via-stone-800 to-stone-900 px-6 text-center lg:min-h-full">
                <p className="max-w-xs text-sm leading-relaxed text-white/50">
                  Add photos to <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">public/</code> and list them in{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">heroImages</code> in{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">site.ts</code>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 02 Reach */}
      <NumberedSection
        id="reach"
        number="02"
        kicker="Reach"
        title="By the numbers"
        tone="white"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {reachStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[var(--green-border)] bg-[var(--beige)]/80 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green-muted)]">
                {s.label}
              </p>
              <p className="mt-3 font-serif text-3xl font-semibold text-[var(--green-deep)] sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-[var(--green-muted)]">{s.hint}</p>
            </div>
          ))}
        </div>
      </NumberedSection>

      {/* 03 What I create */}
      <NumberedSection
        id="services"
        number="03"
        title="What I create"
        tone="beige"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {servicePillars.map((s) => (
            <Link
              key={s.n}
              href={s.href}
              className="group block rounded-2xl border border-[var(--green-border)] bg-[var(--paper)] p-6 shadow-sm transition hover:border-[var(--green-mid)]/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-deep)]"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-[var(--green-deep)] font-serif text-lg font-semibold text-[var(--beige)] transition group-hover:bg-[var(--green-mid)]">
                {s.n}
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold leading-snug text-[var(--green-deep)] sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--green-muted)] sm:text-lg">
                {s.body}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/media-kit"
          className="mt-10 inline-block text-sm font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
        >
          Full media kit →
        </Link>
      </NumberedSection>

      {/* 04 What I write */}
      <NumberedSection
        id="writing"
        number="04"
        title="What I write"
        tone="white"
      >
        <WritingSection />
      </NumberedSection>

      {/* 05 Explore like a Local */}
      <NumberedSection
        id="travel-better"
        number="05"
        title={
          <>
            <span className="text-[var(--green-muted)]">Explore like a </span>
            <span className="text-[var(--green-mid)]">Local</span>
          </>
        }
        tone="beige"
      >
        <TravelBetterGrid />
      </NumberedSection>

      {/* CTA */}
      <section className="bg-[var(--green-deep)] px-6 py-16 text-center sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-2xl font-semibold text-[var(--beige)] sm:text-3xl">
            Let&apos;s create something together
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
            Brands, tourism boards, and mission-aligned teams—share your brief and timeline.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#f2efe6] px-8 py-3 text-sm font-semibold text-[var(--green-deep)] transition hover:bg-white"
            >
              Get in touch
            </Link>
            <Link
              href="/media-kit"
              className="inline-flex rounded-full border border-white/80 bg-transparent px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View media kit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
