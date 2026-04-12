import Image from "next/image";
import Link from "next/link";
import { NumberedSection } from "@/components/numbered-section";
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
            <p className="mt-12 max-w-lg text-lg leading-relaxed text-white/80">
              <a href={`mailto:${site.email}`} className="underline-offset-2 hover:underline">
                {site.email}
              </a>
              <br />
              <span>{site.instagramHandle}</span>
              <br />
              <span className="text-white/60">{site.heroContactLine}</span>
            </p>
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
        subtitle="Snapshot for brands—full detail lives in the media kit."
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

      {/* 03 What I write */}
      <NumberedSection
        id="writing"
        number="03"
        kicker="Writing"
        title="What I write"
        subtitle="Long-form travel and food—editorial features and guest pieces."
        tone="white"
      >
        <WritingSection />
      </NumberedSection>

      {/* 04 Services */}
      <NumberedSection
        id="services"
        number="04"
        kicker="Services"
        title="What I create"
        subtitle="Story-led content for audiences who care about place, plate, and people—plus partnerships that fit the journey."
        tone="beige"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {servicePillars.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-[var(--green-border)] bg-[var(--paper)] p-6 shadow-sm"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-[var(--green-deep)] font-serif text-lg font-semibold text-[var(--beige)]">
                {s.n}
              </div>
              <h3 className="mt-5 font-semibold text-[var(--green-deep)]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--green-muted)]">{s.body}</p>
            </div>
          ))}
        </div>
        <Link
          href="/media-kit"
          className="mt-10 inline-block text-sm font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
        >
          Full media kit →
        </Link>
      </NumberedSection>

      {/* 05 About */}
      <NumberedSection
        id="about-preview"
        number="05"
        kicker={site.aboutKicker}
        title={site.aboutHeadline}
        subtitle={site.aboutBody}
        tone="beige"
      >
        <Link
          href="/about"
          className="inline-flex text-sm font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
        >
          Read more →
        </Link>
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
