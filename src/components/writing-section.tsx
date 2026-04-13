import Image from "next/image";
import { featuredWriting } from "@/content/site";

/**
 * Home “What I write”: image + card; whole block links to the article (no nested anchors).
 * Image uses intrinsic dimensions + object-contain (no cropping).
 */
export function WritingSection() {
  const { publication, title, excerpt, url, image, imageAlt, imageWidth, imageHeight } = featuredWriting;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-[var(--green-border)] bg-[var(--beige)]/90 shadow-sm transition hover:border-[var(--green-mid)]/50"
    >
      <div className="grid md:grid-cols-[minmax(0,auto)_minmax(0,1.15fr)] md:items-center">
        <div className="flex w-full justify-center bg-[var(--beige)] md:max-w-[min(100vw,440px)]">
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="h-auto w-full max-w-full object-contain"
            sizes="(max-width: 768px) 100vw, min(440px, 42vw)"
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--green-muted)]">
            {publication}
          </p>
          <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-[var(--green-deep)] sm:text-2xl">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--green-muted)] sm:text-base">{excerpt}</p>
          <span className="mt-6 inline-flex text-sm font-semibold text-[var(--green-mid)] sm:text-base">
            Read on Soul Travelling →
          </span>
        </div>
      </div>
    </a>
  );
}
