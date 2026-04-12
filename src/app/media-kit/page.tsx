import Link from "next/link";
import { mediaKit, site } from "@/content/site";

export default function MediaKitPage() {
  return (
    <div className="border-b border-[var(--green-border)] bg-[var(--paper)]">
      <div className="w-full px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--green-deep)]">
          For brands & partners
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-[var(--green-deep)] sm:text-5xl lg:text-6xl">
          Media kit
        </h1>
        <p className="mt-8 text-xl leading-relaxed text-[var(--green-muted)] sm:text-2xl">
          Snapshot for collaborators. Update metrics and partner names in{" "}
          <code className="rounded bg-[var(--beige)] px-1.5 py-0.5 text-base text-[var(--green-deep)] ring-1 ring-[var(--green-border)] sm:text-lg">
            src/content/site.ts
          </code>{" "}
          when you have final numbers.
        </p>
        <section className="mt-14 space-y-5">
          <h2 className="font-serif text-2xl font-semibold text-[var(--green-deep)] sm:text-3xl">
            Audience
          </h2>
          <p className="text-lg text-[var(--green-muted)] sm:text-xl">
            <strong className="text-[var(--green-deep)]">Regions:</strong>{" "}
            {mediaKit.audience.primaryRegions}
          </p>
          <p className="text-lg text-[var(--green-muted)] sm:text-xl">
            <strong className="text-[var(--green-deep)]">Interests:</strong>{" "}
            {mediaKit.audience.interests}
          </p>
        </section>
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-semibold text-[var(--green-deep)] sm:text-3xl">
            Metrics
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {mediaKit.metrics.map((m) => (
              <li
                key={m.label}
                className="rounded-2xl border border-[var(--green-border)] bg-[var(--beige)]/60 p-6"
              >
                <p className="font-semibold text-[var(--green-deep)]">{m.label}</p>
                <p className="mt-2 text-3xl font-semibold text-[var(--green-mid)] sm:text-4xl">{m.value}</p>
                <p className="mt-2 text-base text-[var(--green-muted)]">{m.hint}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-semibold text-[var(--green-deep)] sm:text-3xl">
            Collaboration types
          </h2>
          <ul className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {mediaKit.collaborationTypes.map((c) => (
              <li key={c.title}>
                <h3 className="text-lg font-semibold text-[var(--green-deep)] sm:text-xl">{c.title}</h3>
                <p className="mt-3 text-base font-normal leading-relaxed text-[var(--green-muted)] sm:text-lg">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <p className="mt-12 text-lg text-[var(--green-muted)] sm:text-xl">
          <span className="font-semibold text-[var(--green-deep)]">Past partners:</span>{" "}
          {mediaKit.pastPartners.join(" · ")}
        </p>
        <p className="mt-6 text-lg text-[var(--green-muted)] sm:text-xl">
          Contact:{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </p>
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
