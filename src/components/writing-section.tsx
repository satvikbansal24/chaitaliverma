import Image from "next/image";
import { featuredWritings } from "@/content/site";

const THUMB_W = 140;

/**
 * Home “What I write”: two tiles side by side on md+; photo left / text right.
 * Image column stretches to the full tile height (no gap under the photo on sm+).
 */
export function WritingSection() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:gap-8">
      {featuredWritings.map(
        ({ publication, title, excerpt, url, image, imageAlt }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid min-h-0 min-w-0 grid-cols-1 overflow-hidden rounded-2xl border border-[var(--green-border)] bg-[var(--beige)]/90 shadow-sm transition hover:border-[var(--green-mid)]/50 sm:grid-cols-[minmax(0,140px)_minmax(0,1fr)] sm:items-stretch"
          >
            <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-[var(--beige)] sm:h-full sm:min-h-0 sm:w-[140px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes={`(max-width: 639px) 100vw, ${THUMB_W}px`}
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center px-4 py-3.5 sm:py-4 sm:pl-3 sm:pr-4">
              <p className="text-[11px] font-semibold uppercase leading-tight tracking-[0.18em] text-[var(--green-muted)] sm:text-xs">
                {publication}
              </p>
              <h3 className="mt-1.5 font-serif text-base font-semibold leading-snug text-[var(--green-deep)] sm:text-lg">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--green-muted)] sm:text-[15px]">
                {excerpt}
              </p>
            </div>
          </a>
        ),
      )}
    </div>
  );
}
