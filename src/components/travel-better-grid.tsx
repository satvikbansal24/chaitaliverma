"use client";

import Image from "next/image";
import { useState } from "react";

import { GetYourGuideModal } from "@/components/get-your-guide-modal";
import { travelBetter } from "@/content/site";

const tileClassName =
  "group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[var(--green-border)] shadow-sm transition hover:border-[var(--green-mid)]/40 hover:shadow-md text-left";

export function TravelBetterGrid() {
  const [getYourGuideOpen, setGetYourGuideOpen] = useState(false);

  return (
    <>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {travelBetter.partners.map((p) => {
          const label = (
            <span className="absolute bottom-0 left-0 right-0 px-3 pb-3 pt-8 font-serif text-[13px] font-semibold leading-snug text-white sm:text-sm transition group-hover:translate-y-[-1px]">
              {p.cardLabel}{" "}
              <span className="inline-block shrink-0" aria-hidden>
                {p.id === "getyourguide" ? "→" : "↗"}
              </span>
            </span>
          );

          if (p.id === "getyourguide") {
            return (
              <button
                key={p.id}
                type="button"
                className={tileClassName}
                onClick={() => setGetYourGuideOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={getYourGuideOpen}
              >
                <Image
                  src={p.imageSrc}
                  alt={p.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                {label}
              </button>
            );
          }

          return (
            <a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={tileClassName}
            >
              <Image
                src={p.imageSrc}
                alt={p.imageAlt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              {label}
            </a>
          );
        })}
      </div>
      <GetYourGuideModal
        open={getYourGuideOpen}
        onClose={() => setGetYourGuideOpen(false)}
      />
    </>
  );
}
