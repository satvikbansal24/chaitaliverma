/**
 * Collaborations page — spotlight reels, featured work, and brand partners.
 *
 * Other-collab logos: PNG files in `public/collabs/`. Each `logoSrc` must match the
 * filename exactly (case-sensitive on Linux deploys). Edit a path if your file name differs.
 */

export const collaborationSpotlights = [
  {
    slug: "boond",
    headline: "Boond Fragrance",
    permalink: "https://www.instagram.com/reels/DJHX694zGtm/",
    excerpt:
      "Heritage distillation and fragrance craft—stories rooted in tradition and fair work.",
  },
  {
    slug: "airasia",
    headline: "AirAsia",
    permalink: "https://www.instagram.com/reels/DE43GAApo29/",
    excerpt:
      "Route and destination storytelling with airlines—experiences that feel lived-in, not staged.",
  },
  {
    slug: "zomunk",
    headline: "ZoMunk",
    permalink: "https://www.instagram.com/chaitali.verma/reel/DQZImVSkrx4",
    excerpt:
      "Europe travel hacks and slow discovery—practical, cinematic, and audience-first.",
  },
] as const;

export const luangPrabangHighlight = {
  permalink: "https://www.instagram.com/reels/DHgJ840J3DA/",
  title: "Luang Prabang — standout reel",
  description:
    "Recent work for AirAsia spotlighting Luang Prabang, a UNESCO World Heritage Site in Laos. The reel passed roughly 25M views, with on the order of 1.4M likes and 1.3M shares—place-first storytelling and visuals that helped audiences discover a city many had never heard of.",
} as const;

/** Field-notes style list for the Luang Prabang column — optional `mention` renders as a handle chip. */
export type LuangPrabangThing = {
  line: string;
  mention?: string;
};

export const luangPrabangThingsToDo: LuangPrabangThing[] = [
  { line: "Mandalao Elephant Sanctuary" },
  { line: "Chant & meditate with monks" },
  { line: "Garavek Storytelling" },
  { line: "Batik Workshop" },
  { line: "Climb Phousi Hill" },
  { line: "Sa Sa Sunset Cruise" },
  { line: "Kuang Si Waterfall" },
  { line: "Buffalo Dairy & Farm" },
  {
    line: "Movie screening of Lao’s first film from 1923 every evening at 6:00 pm",
  },
];

export type CollaborationBrand = {
  name: string;
  /** Public URL under `public/` (e.g. `/collabs/airbnb.png`). */
  logoSrc: string;
  /** Render larger — fine detail or small marks in the asset. */
  priority?: boolean;
};

export const collaborationBrands: CollaborationBrand[] = [
  { name: "Fastrack", logoSrc: "/collabs/fastrack.png" },
  { name: "Airbnb", logoSrc: "/collabs/airbnb.png" },
  { name: "Egypt", logoSrc: "/collabs/egypt.png", priority: true },
  { name: "AirAsia", logoSrc: "/collabs/airasia.png", priority: true },
  { name: "Mokobara", logoSrc: "/collabs/mokobara.png", priority: true },
  { name: "Farmley", logoSrc: "/collabs/farmley.png", priority: true },
  { name: "IDFC FIRST Bank", logoSrc: "/collabs/idfc-first-bank.png" },
  { name: "Soch", logoSrc: "/collabs/soch.png" },
  { name: "Simple", logoSrc: "/collabs/simple.png" },
  { name: "Liril", logoSrc: "/collabs/liril.png" },
  { name: "Nomad eSIM", logoSrc: "/collabs/nomad-esim.png", priority: true },
  { name: "Oppo", logoSrc: "/collabs/oppo.png", priority: true },
  { name: "Perfora", logoSrc: "/collabs/perfora.png" },
];
