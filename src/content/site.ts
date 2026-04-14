/**
 * Site copy: Chaitali Verma portfolio. Edit metrics, links, and images here.
 */

/** Hero collage: first item is the large panel; put your clearest / highest-res shot there. */
export type HeroImage = {
  src: string;
  alt: string;
  /** Optional CSS `object-position` with `object-cover` (focal point so faces / text stay in frame). */
  objectPosition?: string;
};

export const site = {
  title: "Chaitali Verma",
  roleLine: "Food · Travel · Culture",
  /** Home hero: short intro (full story on Media page) */
  heroParagraphs: [
    "Hi, I'm Chaitali! A travel content creator who documents and encourages her audience to explore popular destinations differently through offbeat activities, local culture and slow travelling.",
    "For me, the people and their heritage are the true heartbeat of a place, and it is in highlighting these that I find the most joy in.",
    "Whether it's planting paddy in Vietnam, singing old Egyptian songs with locals, dancing with strangers in Italy, or learning the centuries-old Degh Bhapka process in Kannauj, my work celebrates travel as both adventure and cultural education.",
  ] as const,
  /**
   * Hero right panel: order [0] = large featured (clearest photo), [1–4] = 2×2 grid (next clearest first).
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
    "Chaitali shares travel and food through reels, photos, and long-form notes: markets at dawn, family recipes, and coastlines that feel like a pause.",
  aboutLead:
    "From neighborhood bakeries to jungle treks and cities you haven’t seen on a postcard. Stories stay grounded in the people who make each place feel real.",
  creatorName: "Chaitali Verma",
  email: "vermachaitali@gmail.com",
  instagramHandle: "@chaitali.verma",
  social: {
    instagram: "https://www.instagram.com/chaitali.verma/",
    youtube: "https://youtube.com/",
    newsletter: "https://example.com/newsletter",
  },
  quote:
    "I’m drawn to the in-between moments: the ferry, the kitchen table, the conversation that turns a trip into a story worth returning to.",
  /** About band (home section) */
  aboutKicker: "About",
  aboutHeadline: "Heritage, food & people",
  aboutBody:
    "From neighborhood bakeries to jungle treks and cities you haven't seen on a postcard. Stories stay grounded in the people who make each place feel real.",
} as const;

/** Home “What I write”: long-form editorial cards (order = display left to right). */
export type FeaturedWriting = {
  title: string;
  publication: string;
  url: string;
  excerpt: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
};

export const featuredWritings: readonly FeaturedWriting[] = [
  {
    title: "Goan Food You Cannot Miss When in Goa",
    publication: "Soul Travelling",
    url: "https://www.soultravelling.in/post/goan-food-you-cannot-miss-when-in-goa",
    excerpt:
      "Beyond the beach bars: a guide to Goan food that carries the state's stories, from chorizo and cafreal to xacuti and bolo sans rival.",
    image: "/writing-goan-food.png",
    imageWidth: 1024,
    imageHeight: 1024,
    imageAlt:
      "Coils of Goan chouriço (chorizo), spiced, cured sausages tied in strings",
  },
  {
    title: "Delhi's Christmas Markets, Page 106",
    publication: "Air India magazine · Dec 2025",
    /** Flipsnack player: opens at the article page (hash = December 2025 issue). */
    url: "https://namasteaimagazine.com/emagazine/air-india/december-2025/assets/iframe.html?hash=RUM4RUE2RUVGQjUrem41ZW1uanpobQ==&startPage=106",
    excerpt:
      "Visitors can find delightful knick-knacks at Delhi’s annual Christmas markets—warm lights, crafts, and seasonal finds worth slowing down for.",
    image: "/writing-air-india-dec-2025.png",
    imageWidth: 460,
    imageHeight: 364,
    imageAlt:
      "Hands holding a silver snowflake ornament in front of a lit Christmas tree",
  },
];

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

/** Home “Featured work” grid: portfolio highlights */
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
      "A full Southeast Asia guide: ethical elephant experiences, golden hour by the river, and local makers you’ll want to remember.",
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
      "Notes from slow days by the water: ferry timetables, hidden coves, and the meals that taste better after a swim.",
    tags: ["travel", "community"],
    href: "/stories",
    platform: "YouTube",
    year: 2025,
  },
  {
    slug: "kitchen-hospitality",
    title: "Kitchens as hospitality",
    excerpt:
      "When a host opens their stove, the story isn’t only the recipe: it’s who gets fed first, and why it matters.",
    tags: ["food", "people", "community"],
    href: "/stories",
    platform: "Newsletter",
    year: 2024,
  },
  {
    slug: "destination-partnerships",
    title: "Working with places, not backdrops",
    excerpt:
      "What values-aligned travel storytelling looks like on the ground: for brands, DMOs, and small operators.",
    tags: ["travel", "people"],
    href: "/media-kit",
    platform: "Blog",
    year: 2024,
  },
  {
    slug: "field-notes",
    title: "Field notes from the next trip",
    excerpt:
      "A running list of rituals, sounds, and meals worth saving before they become a reel or a longer piece.",
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
    hint: "Followers (@chaitali.verma)",
  },
  {
    label: "Standout Reel",
    value: "46M+",
    hint: "Collective Views · Luang Prabang (Mar-25)",
  },
  {
    label: "Content volume",
    value: "562+",
    hint: "Posts · Ongoing",
  },
] as const;

export const servicePillars = [
  {
    n: 1,
    title: "Destinations",
    body: "Itineraries with soul: markets, heritage walks, and under-sung cities (not just icons). Example: a full Luang Prabang guide with ethical elephant experiences and local makers.",
    href: "/instagram#postcards",
  },
  {
    n: 2,
    title: "Local Heritage",
    body: "Bakeries, cacao, regional plates, and the people behind recipes, styled like editorial travel features.",
    href: "/instagram#heritage",
  },
  {
    n: 3,
    title: "Experiential Storytelling",
    body: "Airlines, hospitality, and gear where the story fits the journey: campaigns and long-form work with a lived, human lens.",
    href: "/instagram#experiential",
  },
  {
    n: 4,
    title: "Food",
    body: "Kopitiams, regional must-tries, bakeries, and the stories behind every plate: where I eat and what I order, from KL to Goa and beyond.",
    href: "/instagram#food",
  },
] as const;

export type TravelReel = {
  slug: string;
  permalink: string;
  headline: string;
  excerpt: string;
};

/**
 * Highlights page map: `svgId` must match a `path id` in `public/world-map.svg`.
 * Add entries as you publish more country highlights on Instagram.
 */
export type HighlightMapCountry = {
  svgId: string;
  name: string;
  href: string;
};

export const highlightMapCountries: HighlightMapCountry[] = [
  {
    svgId: "croatia",
    name: "Croatia",
    href: "https://www.instagram.com/stories/highlights/18107984437661229/",
  },
  {
    svgId: "egypt",
    name: "Egypt",
    href: "https://www.instagram.com/stories/highlights/18051755138312544/",
  },
  {
    svgId: "finland",
    name: "Finland",
    href: "https://www.instagram.com/stories/highlights/17873655867475837/",
  },
  {
    svgId: "india",
    name: "India",
    href: "https://www.instagram.com/stories/highlights/18052960267523319/",
  },
  {
    svgId: "sri lanka",
    name: "Sri Lanka",
    href: "https://www.instagram.com/stories/highlights/18079595791740922/",
  },
  {
    svgId: "malaysia",
    name: "Malaysia",
    href: "https://www.instagram.com/stories/highlights/18314660851094209/",
  },
  {
    svgId: "usa",
    name: "USA",
    href: "https://www.instagram.com/stories/highlights/17883353025524103/",
  },
  {
    svgId: "italy",
    name: "Italy",
    href: "https://www.instagram.com/stories/highlights/18002339657809833/",
  },
];

export const travelReels: TravelReel[] = [
  {
    slug: "luang-prabang",
    permalink: "https://www.instagram.com/reel/DHgJ840J3DA/",
    headline: "Luang Prabang, Laos",
    excerpt:
      "Golden hour in Laos: temples, the river, and the slow rhythm of the old town…",
  },
  {
    slug: "basina-croatia",
    permalink: "https://www.instagram.com/reel/DVqbOUYiJDG/",
    headline: "Basina, Croatia",
    excerpt:
      "Island light, quiet coves, and the kind of coastal day that lingers…",
  },
  {
    slug: "varkala-kerala",
    permalink: "https://www.instagram.com/reel/DDuLdTnzQw_/",
    headline: "Varkala, India",
    excerpt:
      "A dreamy little town for slow living: cliff beaches, food, and warmth. A great alternative to Goa for nature (not nightlife). I took this trip with @houseofsurfbytripright: yoga, pottery, surfing, boating, and more.",
  },
  {
    slug: "nairobi-cbd",
    permalink: "https://www.instagram.com/reels/CvmeKlBKv16/",
    headline: "Nairobi, Kenya",
    excerpt:
      "A trailer of what’s to come. Nairobi’s CBD is busy, but it’s also home to some of the city’s oldest buildings, businesses, and people: street life, shoe shines, and the real pulse of the city. Concept & creative direction by me; videography by @the20th.photography.",
  },
];

/** Communities, craft & heritage: Instagram posts (reels or feed) */
export const heritagePosts: TravelReel[] = [
  {
    slug: "gucchi-kashmir-pahalgam",
    permalink: "https://www.instagram.com/p/DVQqIr2iPu-/",
    headline: "Gucchi & Kashmiri produce",
    excerpt:
      "Why “exotic” gets hype while our own heritage produce waits: the rare Gucchi mushroom, the communities behind it, and a menu in Pahalgam that champions local Kashmiri food.",
  },
  {
    slug: "boond-kannauj-rose",
    permalink: "https://www.instagram.com/p/DQ6zEOiiMt9/",
    headline: "Rose water, the old way: Kannauj",
    excerpt:
      "Degh Bhapka distillation, fair work, and fragrance the way India has long done it (@boondfragrances). Use code CHAIROSE for a special discount.",
  },
  {
    slug: "choon-paan-sri-lanka",
    permalink: "https://www.instagram.com/reel/DKUW_cDSWrG/",
    headline: "Choon Paans in Sri Lanka",
    excerpt:
      "Beethoven from a tuk-tuk: Sri Lanka’s mobile snack vans, tea-time tradition, and home-baked treats. Almost lost to chains and a music ban until they roared back in COVID. Sugary breads, egg rolls, potato snacks, and a heritage worth keeping alive.",
  },
];

/** Experiential Storytelling section on Social Media */
export const experientialReels: TravelReel[] = [
  {
    slug: "mandalao-luang-prabang",
    permalink: "https://www.instagram.com/reel/DG8QCpMpQ-Q/",
    headline: "Mandalao Elephant Sanctuary, Luang Prabang",
    excerpt:
      "Walk with rescues in the forest: small groups, no bathing or riding. @mandalao_elephants limits daily visitors so elephants can relearn the wild. Book the full-day tour early; your fee supports care, not cruel photo ops.",
  },
  {
    slug: "hipnoetic-wayanad-kerala",
    permalink: "https://www.instagram.com/reels/C8CIiY9pOrp/",
    headline: "Hipnoetic Stays, Wayanad, Kerala",
    excerpt:
      "A wholesome day with @hipnoeticstays: lotus ponds, unforgettable food, and hosts who go past language barriers. My favourite way to feel slow, local Kerala after almost a month in the state.",
  },
  {
    slug: "arcadia-kampot-cambodia",
    permalink: "https://www.instagram.com/reel/DHBU3_IpU19/",
    headline: "Arcadia Backpackers, Kampot, Cambodia",
    excerpt:
      "A water-park hostel by the river: slides, kayaks, evening BBQ boat, river jumps, and foam parties. Dorms or private rooms; a little out of town—worth the trip from Phnom Penh or as a day visit.",
  },
  {
    slug: "the-local-beat-goa",
    permalink: "https://www.instagram.com/reel/DAlUis2KSRC/",
    headline: "The Local Beat, Goa",
    excerpt:
      "DM @thelocalbeat_goa to book. An all-Goan crew builds rafts and platforms you leave behind—pristine coast, no geotagging. Still one of my favourite afternoons: the most Susegaad day on the water.",
  },
];

/** Food section on Social Media */
export const foodReels: TravelReel[] = [
  {
    slug: "hoko-whai-nam-kopitiam-kl",
    permalink: "https://www.instagram.com/reel/DCRj7SsvRj9/",
    headline: "Hoko Whai Nam Kopitiam, Kuala Lumpur",
    excerpt:
      "@hokowhainamkopitiam in Chinatown, KL: worth the wait for kaya toast and strong iced kopi. I reach for kopitiams over swanky cafes—you can get avocado toast anywhere, but this is the real deal.",
  },
  {
    slug: "vietnam-must-try-foods",
    permalink: "https://www.instagram.com/reels/DHqxddap2oC/",
    headline: "Must-try foods in Vietnam",
    excerpt:
      "Banh xeo from a Hoi An cooking class, kem bo in Dalat, spring rolls everywhere, banh mi picks in Saigon, Hoi An, and Hanoi, Vietnamese pizza in Dalat—and the pistachio coconut latte on @flyairasia.in (zero sugar). Veg options at most stops.",
  },
  {
    slug: "hello-to-the-queen-goa",
    permalink: "https://www.instagram.com/reels/DDcBWM5zK-e/",
    headline: "“Hello to the Queen,” Goa",
    excerpt:
      "The dessert I hunted on every menu after 14 years away from Goa—origins debatable, the joy is not. @shimonfalafelgoa in Arambol does it justice; don’t skip the falafel in pita. Filmed by @photoduffer_films.",
  },
  {
    slug: "favourite-goan-bakeries",
    permalink: "https://www.instagram.com/reels/C6LmVB7pEXo/",
    headline: "My favourite Goan bakeries",
    excerpt:
      "Mr. Baker Panjim, Confetaria De 31 Janeiro Panjim, St Anthony Siolim, Joseph Mapusa—old bakeries with sweets and snacks at honest prices. Tell me yours.",
  },
];

export type TravelBetterPartner = {
  id: string;
  cardLabel: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

/** GetYourGuide tile opens a modal; single smart link for iOS & Android app download. */
export const getYourGuideModal = {
  discountCode: "CHAITALIVERMA5",
  appDownloadUrl: "https://gyg.me/chaitaliverma-app",
} as const;

/** Stays and experiences: swap `href` for your partner or referral URLs when ready. */
export const travelBetter: {
  partners: TravelBetterPartner[];
} = {
  partners: [
    {
      id: "airbnb",
      cardLabel: "Favorite AirBnb Recommendations",
      href: "https://creators.withairbnb.com/mypage/ChaitaliVerma",
      imageSrc:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      imageAlt: "A welcoming pool and patio at a vacation rental",
    },
    {
      id: "getyourguide",
      cardLabel: "Experience deeply with GetYourGuide",
      href: "https://www.getyourguide.com/",
      imageSrc:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      imageAlt: "Open road through mountains at golden hour",
    },
    {
      id: "kiwitaxi",
      cardLabel: "Easy Airport transfers with KiwiTaxi",
      href: "https://kiwitaxi.com/",
      imageSrc:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      imageAlt: "Airport terminal and travelers",
    },
    {
      id: "hostelworld",
      cardLabel: "HostelWorld - Make the most of your Solo trip!",
      href: "https://www.hostelworld.com/",
      imageSrc:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
      imageAlt: "Cozy shared room with bed and warm lamp light",
    },
    {
      id: "sharedeasy",
      cardLabel: "Affordable living in NYC with SharedEasy",
      href: "https://sharedeasy.club/creator-discount/?utm_source=creator&utm_medium=referral&utm_campaign=creators-discount&utm_content=chaitali",
      imageSrc:
        "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
      imageAlt: "New York City skyline over the East River",
    },
  ],
};
