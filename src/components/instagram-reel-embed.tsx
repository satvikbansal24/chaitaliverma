function parseInstagramEmbedPath(permalink: string): string | null {
  const userReel = permalink.match(/instagram\.com\/[^/]+\/reel\/([^/?#]+)/i)?.[1];
  if (userReel) return `reel/${userReel}`;
  const reelsPlural = permalink.match(/instagram\.com\/reels\/([^/?#]+)/i)?.[1];
  if (reelsPlural) return `reel/${reelsPlural}`;
  const reel = permalink.match(/instagram\.com\/reel\/([^/?#]+)/i)?.[1];
  if (reel) return `reel/${reel}`;
  const post = permalink.match(/instagram\.com\/p\/([^/?#]+)/i)?.[1];
  if (post) return `p/${post}`;
  return null;
}

/**
 * Instagram reel or post iframe embed. Use compact for multi-column postcard grids.
 * Heights are tuned so the embed page fits without an internal scrollbar (IG’s layout is tall).
 */
export function InstagramReelEmbed({
  permalink,
  title,
  compact = false,
  collaborations = false,
}: {
  permalink: string;
  title: string;
  /** Narrow columns: full width of cell, taller iframe for grid */
  compact?: boolean;
  /** Collaborations page: extra-tall iframe so IG embed is less likely to scroll inside */
  collaborations?: boolean;
}) {
  const path = parseInstagramEmbedPath(permalink);
  if (!path) return null;

  const embedSrc = `https://www.instagram.com/${path}/embed/`;

  /** Social Media grid: shorter iframe than before (~740px); IG controls comments inside embed—raise these if any reel shows an inner scrollbar. */
  const compactHeight =
    compact && collaborations
      ? "h-[min(980px,96vh)] xl:h-[min(1080px,97vh)]"
      : compact
        ? "h-[min(600px,74vh)] sm:h-[min(620px,76vh)] xl:h-[min(640px,78vh)]"
        : null;

  const defaultHeight =
    "h-[min(620px,85vh)] sm:h-[min(680px,90vh)]";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-stone-200/90 bg-white shadow-sm ${
        compact ? "max-w-none" : "max-w-[420px]"
      }`}
    >
      {/* Don’t cap height below the iframe; that forces scroll inside the iframe */}
      <div className="relative w-full">
        <iframe
          src={embedSrc}
          title={title}
          className={`block w-full border-0 ${
            compactHeight ?? defaultHeight
          }`}
          loading="lazy"
          allow="clipboard-write; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
