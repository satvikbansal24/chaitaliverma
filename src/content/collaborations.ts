/**
 * Collaborations page: spotlight reels, featured work, and brand partners.
 *
 * Other-collab logos: PNG files in `public/collabs/`. Each `logoSrc` must match the
 * filename exactly (case-sensitive on Linux deploys). Edit a path if your file name differs.
 */

export type CollaborationSpotlight = {
  slug: string;
  headline: string;
  permalink: string;
  excerpt: string;
};

export const collaborationSpotlights: readonly CollaborationSpotlight[] = [
  {
    slug: "boond",
    headline: "Boond Fragrance",
    permalink: "https://www.instagram.com/reels/DJHX694zGtm/",
    excerpt:
      "Heritage distillation and fragrance craft: stories rooted in tradition and fair work.",
  },
  {
    slug: "airasia",
    headline: "AirAsia",
    permalink: "https://www.instagram.com/reels/DE43GAApo29/",
    excerpt:
      "Route and destination storytelling with airlines: experiences that feel lived-in, not staged.",
  },
  {
    slug: "zomunk",
    headline: "ZoMunk",
    permalink: "https://www.instagram.com/chaitali.verma/reel/DQZImVSkrx4",
    excerpt:
      "Europe travel hacks and slow discovery: practical, cinematic, and audience-first.",
  },
  {
    slug: "airbnb-mumbai",
    headline: "AirBnb",
    permalink: "https://www.instagram.com/reel/DUN3x5qCCub/",
    excerpt:
      "Airbnb’s Mumbai guidebook: exploring the city like a local—street food, art walks, and neighbourhoods beyond the usual lists.",
  },
  {
    slug: "vivo-x300-goa",
    headline: "Vivo",
    permalink: "https://www.instagram.com/reels/DRkARwgkrYG/",
    excerpt:
      "Goa beyond the beaches: villages, mangroves, and everyday moments captured on the vivo X300.",
  },
  {
    slug: "liril-adulting",
    headline: "Liril",
    permalink: "https://www.instagram.com/reels/DJ9QNSnp9Qe/",
    excerpt:
      "A fresh take on adulting: slowing down, play, and reset with Liril—because daily rituals deserve a little joy.",
  },
];

export const luangPrabangReelStats = [
  { label: "Views", value: "25M+" },
  { label: "Likes", value: "1.4M+" },
  { label: "Shares", value: "1.3M+" },
] as const;

export const luangPrabangHighlight = {
  permalink: "https://www.instagram.com/reels/DHgJ840J3DA/",
  title: "Luang Prabang: Standout Reel",
  description:
    "Recent work for AirAsia spotlighting Luang Prabang, a UNESCO World Heritage Site in Laos. Place-first storytelling and visuals helped audiences discover a city many had never heard of. The CEO of AirAsia also used it as a case study at the World Tourism Conference.",
} as const;

/** Field-notes style list for the Luang Prabang column; optional `mention` renders as a handle chip. */
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
  /** Render larger: fine detail or small marks in the asset. */
  priority?: boolean;
  /** Slightly smaller tile: busy or oversized marks. */
  compact?: boolean;
  /** A bit smaller than default cloud size (not as small as `compact`). */
  compactSoft?: boolean;
};

export const collaborationBrands: CollaborationBrand[] = [
  { name: "SK-II", logoSrc: "/collabs/sk2.png", compact: true },
  { name: "Airbnb", logoSrc: "/collabs/airbnb.png" },
  { name: "Egypt", logoSrc: "/collabs/egypt.png", priority: true },
  { name: "Fastrack", logoSrc: "/collabs/fastrack.png" },
  { name: "AirAsia", logoSrc: "/collabs/airasia.png", priority: true },
  { name: "Mokobara", logoSrc: "/collabs/mokobara.png", priority: true },
  { name: "Vivo", logoSrc: "/collabs/vivo.png", compact: true },
  { name: "Farmley", logoSrc: "/collabs/farmley.png", priority: true },
  { name: "IDFC FIRST Bank", logoSrc: "/collabs/idfc-first-bank.png" },
  { name: "Soch", logoSrc: "/collabs/soch.png" },
  { name: "Simple", logoSrc: "/collabs/simple.png" },
  { name: "Liril", logoSrc: "/collabs/liril.png" },
  { name: "Nomad eSIM", logoSrc: "/collabs/nomad-esim.png", priority: true },
  { name: "Oppo", logoSrc: "/collabs/oppo.png", priority: true },
  { name: "Perfora", logoSrc: "/collabs/perfora.png" },
  { name: "MakeMyTrip", logoSrc: "/collabs/mmt.png", compactSoft: true },
  { name: "ITC", logoSrc: "/collabs/itc.png" },
];
