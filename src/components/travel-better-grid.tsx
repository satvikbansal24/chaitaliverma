import Image from "next/image";

import { travelBetter } from "@/content/site";

export function TravelBetterGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {travelBetter.partners.map((p) => (
        <a
          key={p.id}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--green-border)] shadow-sm transition hover:border-[var(--green-mid)]/40 hover:shadow-md"
        >
          <Image
            src={p.imageSrc}
            alt={p.imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          <span className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-12 font-serif text-lg font-semibold text-white transition group-hover:translate-y-[-2px]">
            {p.cardLabel}{" "}
            <span className="inline-block" aria-hidden>
              ↗
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
