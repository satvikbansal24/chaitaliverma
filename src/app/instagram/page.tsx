import { InstagramCategorySection } from "@/components/instagram-category-section";
import { PageHero } from "@/components/page-hero";
import { heritagePosts, travelReels } from "@/content/site";

export const metadata = {
  title: "Social Media",
  description: "Destinations, local heritage, and experiential storytelling: reels from Chaitali Verma.",
};

export default function InstagramPage() {
  return (
    <>
      <PageHero kicker="Stories I've told" title="Social Media" />
      <InstagramCategorySection
        id="postcards"
        isFirst
        belowPageHero
        title="Destinations - Postcards from the Road"
        items={travelReels}
        tone="beige"
        linkLabel="Watch on Instagram →"
      />
      <InstagramCategorySection
        id="heritage"
        title="Local Heritage - Roots and Belonging"
        items={heritagePosts}
        tone="paper"
        linkLabel="View on Instagram →"
      />
      <InstagramCategorySection
        id="experiential"
        title="Experiential Storytelling"
        items={heritagePosts}
        tone="beige"
        linkLabel="View on Instagram →"
      />
    </>
  );
}
