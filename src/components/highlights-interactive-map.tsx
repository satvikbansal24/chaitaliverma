/**
 * World landmass SVG: `public/world-map.svg` (Wikimedia Commons, low-resolution world map).
 */
import fs from "fs";
import path from "path";

import { highlightMapCountries } from "@/content/site";

function escapeXmlAttr(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

/**
 * Linked countries must use selectors that beat `#svg2 path` (ID wins over class-only).
 * Light sage = no highlight yet; darker green = linked to an Instagram highlight.
 */
const INJECTED_STYLE = `
<style type="text/css">
  #svg2 {
    background-color: #f5f0e8;
    background-color: var(--beige);
  }
  #svg2 path {
    fill: rgb(168, 185, 176);
  }
  #svg2 a.highlights-country-link {
    cursor: pointer;
    outline: none;
  }
  #svg2 a.highlights-country-link path {
    fill: #4a6358;
    transition: fill 0.2s ease, transform 0.2s ease;
    transform-origin: center;
    transform-box: fill-box;
  }
  #svg2 a.highlights-country-link:hover path,
  #svg2 a.highlights-country-link:focus-visible path {
    fill: #2d5a45;
    transform: scale(1.08);
  }
  @media (prefers-reduced-motion: reduce) {
    #svg2 a.highlights-country-link path {
      transition: fill 0.2s ease;
    }
    #svg2 a.highlights-country-link:hover path,
    #svg2 a.highlights-country-link:focus-visible path {
      transform: none;
    }
  }
</style>`;

function buildInteractiveSvg(): string {
  const svgPath = path.join(process.cwd(), "public/world-map.svg");
  let svg = fs.readFileSync(svgPath, "utf8");

  svg = svg.replace(/<svg([^>]*)>/, `<svg$1>${INJECTED_STYLE}`);

  for (const country of highlightMapCountries) {
    const href = escapeXmlAttr(country.href);
    const re = new RegExp(
      `<path\\s+id="${country.svgId}"\\s+d="([^"]+)"\\s*/>`,
      "g",
    );
    const label = escapeXmlAttr(
      `Open Instagram highlights: ${country.name}`,
    );
    svg = svg.replace(
      re,
      `<a href="${href}" target="_blank" rel="noopener noreferrer" class="highlights-country-link" aria-label="${label}"><path id="${country.svgId}" d="$1" /></a>`,
    );
  }

  return svg;
}

export function HighlightsInteractiveMap() {
  const svgHtml = buildInteractiveSvg();

  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[var(--green-border)] bg-[var(--beige)]">
      <div
        className="[&>svg]:block [&>svg]:h-auto [&>svg]:w-full [&>svg]:max-w-full"
        dangerouslySetInnerHTML={{ __html: svgHtml }}
      />
    </div>
  );
}
