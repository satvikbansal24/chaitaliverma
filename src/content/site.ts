/**
 * Site copy — Chaitali Verma portfolio. Edit metrics, links, and images here.
 */

/** Hero collage — first item is the large panel; put your clearest / highest-res shot there. */
export type HeroImage = {
  src: string;
  alt: string;
  /** Optional CSS `object-position` with `object-cover` (focal point so faces / text stay in frame). */
  objectPosition?: string;
};

export const site = {
  title: "Chaitali Verma",
  roleLine: "Food · Travel · Culture",
  /** Home hero — short intro (full story on About / media kit) */
  heroParagraphs: [
    "I'm Chaitali Verma—I travel slow and offbeat, chasing immersive local moments: people, food, and the stories behind each place (from Sri Lanka to Italy to Vietnam and beyond).",
    "Bold visuals and real human stories. I share destinations through culture and community—mindful exploration that lifts heritage and local voices.",
  ] as const,
  /**
   * Hero right panel — order: [0] = large featured (clearest photo), [1–4] = 2×2 grid (next clearest first).
   * Files in public/
   */
  heroImages: [
    {
      src: "/Chaitali_Profile Pic.JPG",
      alt: "Chaitali Verma",
      objectPosition: "center 28%",
    },
    { src: "/chaitali_cave.jpeg", alt: "Chaitali at a cave", objectPosition: "center 40%" },
    { src: "/chaitali_rome.jpeg", alt: "Chaitali in Rome", objectPosition: "center 40%" },
    { src: "/chaitali_srilanka.jpeg", alt: "Chaitali in Sri Lanka", objectPosition: "center 40%" },
    { src: "/chaitali_swim.jpeg", alt: "Chaitali swimming", objectPosition: "center 35%" },
  ] as const satisfies readonly HeroImage[],
  tagline: "Places tasted slowly, and the people who make them unforgettable.",
  description:
    "Chaitali shares travel and food through reels, photos, and long-form notes—markets at dawn, family recipes, and coastlines that feel like a pause.",
  aboutLead:
    "From neighborhood bakeries to jungle treks and cities you haven’t seen on a postcard—stories stay grounded in the people who make each place feel real.",
  creatorName: "Chaitali Verma",
  email: "vermachaitali@gmail.com",
  instagramHandle: "@chaitali.verma",
  social: {
    instagram: "https://www.instagram.com/chaitali.verma/",
    youtube: "https://youtube.com/",
    newsletter: "https://example.com/newsletter",
  },
  quote:
    "I’m drawn to the in-between moments—the ferry, the kitchen table, the conversation that turns a trip into a story worth returning to.",
  /** About band (home section) */
  aboutKicker: "About",
  aboutHeadline: "Heritage, food & people",
  aboutBody:
    "From neighborhood bakeries to jungle treks and cities you haven't seen on a postcard—stories stay grounded in the people who make each place feel real.",
} as const;

/** Home “What I write” — long-form editorial (add more entries later if needed). */
export const featuredWriting = {
  title: "Goan Food You Cannot Miss When in Goa",
  publication: "Soul Travelling",
  url: "https://www.soultravelling.in/post/goan-food-you-cannot-miss-when-in-goa",
  excerpt:
    "Beyond the beach bars—a guide to Goan food that carries the state's stories, from chorizo and cafreal to xacuti and bolo sans rival.",
  /** Optional hero image — file in public/ (intrinsic pixels; layout scales, no crop) */
  image: "/writing-goan-food.png",
  imageWidth: 1024,
  imageHeight: 1024,
  imageAlt: "Coils of Goan chouriço (chorizo)—spiced, cured sausages tied in strings",
} as const;

export type StoryTag = "travel" | "food" | "community" | "people";

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  tags: StoryTag[];
  href: string;
  platform: "YouTube" | "Instagram" | "Newsletter" | "Blog";
  year: number;
};

/** Home “Featured work” grid — portfolio highlights */
export type PortfolioItem = {
  slug: string;
  title: string;
  excerpt: string;
  tags: StoryTag[];
  platform: "Instagram" | "YouTube" | "Newsletter" | "Blog";
  year: number;
  href: string;
  /** Optional subline under the card (e.g. reel stats) */
  statLine?: string;
  /** large = left tall card; small = right stack */
  size: "large" | "small";
};

export const portfolioFeatured: PortfolioItem[] = [
  {
    slug: "luang-prabang",
    title: "Luang Prabang blew me away",
    excerpt:
      "A full Southeast Asia guide—ethical elephant experiences, golden hour by the river, and local makers you’ll want to remember.",
    tags: ["travel", "community", "food"],
    platform: "Instagram",
    year: 2025,
    href: "/instagram#postcards",
    statLine: "1.4M+ likes · Standout Reel",
    size: "large",
  },
  {
    slug: "goan-bakeries",
    title: "Local Goan bakeries",
    excerpt:
      "Heritage doors, family recipes, and the small bakeries that keep Goan mornings sweet.",
    tags: ["food", "travel", "people"],
    platform: "Instagram",
    year: 2025,
    href: "/stories",
    size: "small",
  },
  {
    slug: "jungle-trek",
    title: "Jungle trek with elephants",
    excerpt:
      "River crossings, green canopies, and a day spent with elephants in the wild.",
    tags: ["travel", "people", "community"],
    platform: "Instagram",
    year: 2025,
    href: "/stories",
    size: "small",
  },
];

export const stories: Story[] = [
  {
    slug: "markets-mornings",
    title: "Markets before the crowds",
    excerpt:
      "How Chaitali plans a morning around produce, pace, and the vendors who remember your order on day two.",
    tags: ["food", "travel", "people"],
    href: "/stories",
    platform: "Instagram",
    year: 2025,
  },
  {
    slug: "coastal-islands",
    title: "Coastlines & island light",
    excerpt:
      "Notes from slow days by the water—ferry timetables, hidden coves, and the meals that taste better after a swim.",
    tags: ["travel", "community"],
    href: "/stories",
    platform: "YouTube",
    year: 2025,
  },
  {
    slug: "kitchen-hospitality",
    title: "Kitchens as hospitality",
    excerpt:
      "When a host opens their stove, the story isn’t only the recipe—it’s who gets fed first, and why it matters.",
    tags: ["food", "people", "community"],
    href: "/stories",
    platform: "Newsletter",
    year: 2024,
  },
  {
    slug: "destination-partnerships",
    title: "Working with places, not backdrops",
    excerpt:
      "What values-aligned travel storytelling looks like on the ground—for brands, DMOs, and small operators.",
    tags: ["travel", "people"],
    href: "/media-kit",
    platform: "Blog",
    year: 2024,
  },
  {
    slug: "field-notes",
    title: "Field notes from the next trip",
    excerpt:
      "A running list of rituals, sounds, and meals worth saving—before they become a reel or a longer piece.",
    tags: ["travel", "food"],
    href: "/instagram#postcards",
    platform: "Instagram",
    year: 2024,
  },
];

export const tagLabels: Record<StoryTag, string> = {
  travel: "Travel",
  food: "Food",
  community: "Community",
  people: "People & stories",
};

export const reachStats = [
  {
    label: "Instagram",
    value: "259K+",
    hint: "followers (@chaitali.verma)",
  },
  {
    label: "Standout Reel",
    value: "1.4M+",
    hint: "likes · Luang Prabang guide (Mar 2025)",
  },
  {
    label: "Content volume",
    value: "562+",
    hint: "posts · ongoing",
  },
] as const;

export const servicePillars = [
  {
    n: 1,
    title: "Destinations",
    body: "Itineraries with soul—markets, heritage walks, and under-sung cities (not just icons). Example: a full Luang Prabang guide with ethical elephant experiences and local makers.",
  },
  {
    n: 2,
    title: "Local Heritage",
    body: "Bakeries, cacao, regional plates, and the people behind recipes—styled like editorial travel features.",
  },
  {
    n: 3,
    title: "Experiential Storytelling",
    body: "Airlines, hospitality, and gear where the story fits the journey—campaigns and long-form work with a lived, human lens.",
  },
] as const;

export const mediaKit = {
  audience: {
    primaryRegions: "North America, UK, EU, India (diaspora + inbound)",
    interests:
      "Slow travel, regional food, ethical storytelling, boutique hospitality, community-led tourism",
  },
  metrics: [
    { label: "Combined reach", value: "—", hint: "update when ready" },
    { label: "Instagram", value: "—", hint: "followers + engagement" },
    { label: "Avg. watch time (video)", value: "—", hint: "reels & long-form" },
  ],
  collaborationTypes: [
    {
      title: "Destination & experience features",
      body: "Reels, photo essays, and itineraries that foreground hosts, makers, and everyday rituals—never generic skyline filler.",
    },
    {
      title: "Food & craft storytelling",
      body: "Producer spotlights, market walks, and kitchen stories with a people-first lens.",
    },
    {
      title: "Brand & hotel partnerships",
      body: "Campaigns where the property or product is part of a lived narrative—not a logo pasted on a vista.",
    },
  ],
  pastPartners: ["Add partners as you confirm"],
} as const;

export type TravelReel = {
  slug: string;
  permalink: string;
  headline: string;
  excerpt: string;
};

export const travelReels: TravelReel[] = [
  {
    slug: "luang-prabang",
    permalink: "https://www.instagram.com/reel/DHgJ840J3DA/",
    headline: "Luang Prabang, Laos",
    excerpt:
      "Golden hour in Laos—temples, the river, and the slow rhythm of the old town…",
  },
  {
    slug: "basina-croatia",
    permalink: "https://www.instagram.com/reel/DVqbOUYiJDG/",
    headline: "Basina, Croatia",
    excerpt:
      "Island light, quiet coves, and the kind of coastal day that lingers…",
  },
  {
    slug: "kenya-beyond-masai-mara",
    permalink: "https://www.instagram.com/reel/DQ1ZE2LEtSs/",
    headline: "Kenya beyond Masai Mara",
    excerpt:
      "If you’re only visiting Masai Mara, you’re missing out—Hell’s Gate, Sheldrick elephants, Watamu, and Nairobi: loud, layered, and alive. Offbeat gems & hidden corners in the weeks ahead…",
  },
  {
    slug: "dahab-egypt-insta360",
    permalink: "https://www.instagram.com/reel/DP3tHKOkgGo/",
    headline: "Dahab, Egypt",
    excerpt:
      "Drone-looking shots—self-shot with the Insta360 X5. No crew, no drone, just solo-travel tech magic by the Red Sea…",
  },
];

/** Communities, craft & heritage — Instagram posts (reels or feed) */
export const heritagePosts: TravelReel[] = [
  {
    slug: "gucchi-kashmir-pahalgam",
    permalink: "https://www.instagram.com/p/DVQqIr2iPu-/",
    headline: "Gucchi & Kashmiri produce",
    excerpt:
      "Why “exotic” gets hype while our own heritage produce waits—the rare Gucchi mushroom, the communities behind it, and a menu in Pahalgam that champions local Kashmiri food.",
  },
  {
    slug: "boond-kannauj-rose",
    permalink: "https://www.instagram.com/p/DQ6zEOiiMt9/",
    headline: "Rose water, the old way — Kannauj",
    excerpt:
      "Degh Bhapka distillation, fair work, and fragrance the way India has long done it—@boondfragrances. Use code CHAIROSE for a special discount.",
  },
  {
    slug: "anjuna-flea-market-goa",
    permalink: "https://www.instagram.com/p/DV6TPOJEog6/",
    headline: "Anjuna’s Wednesday flea market",
    excerpt:
      "A market rooted in the 1960s traveller trade—tribes from across states, neon merch, shacks, and tapestries. One of Goa’s best, every Wednesday.",
  },
];

export type TravelBetterPartner = {
  id: string;
  cardLabel: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

/** Stays and experiences—swap `href` for your partner or referral URLs when ready. */
export const travelBetter: {
  partners: TravelBetterPartner[];
} = {
  partners: [
    {
      id: "airbnb",
      cardLabel: "Find stays on Airbnb",
      href: "https://www.airbnb.com/",
      imageSrc:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      imageAlt: "A welcoming pool and patio at a vacation rental",
    },
    {
      id: "getyourguide",
      cardLabel: "Tours & tickets on GetYourGuide",
      href: "https://www.getyourguide.com/",
      imageSrc:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      imageAlt: "Open road through mountains at golden hour",
    },
  ],
};
