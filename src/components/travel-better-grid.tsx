import Image from "next/image";

import { travelBetter } from "@/content/site";

export function TravelBetterGrid() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
      {travelBetter.partners.map((p) => (
        <a
          key={p.id}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--green-border)] shadow-sm transition hover:border-[var(--green-mid)]/40 hover:shadow-md"
        >
          <Image
            src={p.imageSrc}
            alt={p.imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <span className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8 font-serif text-[13px] font-semibold leading-snug text-white sm:text-sm transition group-hover:translate-y-[-1px]">
            {p.cardLabel}{" "}
            <span className="inline-block shrink-0" aria-hidden>
              ↗
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
