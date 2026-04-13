import { InstagramCategorySection } from "@/components/instagram-category-section";
import { heritagePosts, travelReels } from "@/content/site";

export const metadata = {
  title: "Instagram",
  description: "Destinations, local heritage, and experiential storytelling: reels from Chaitali Verma.",
};

export default function InstagramPage() {
  return (
    <>
      <InstagramCategorySection
        id="postcards"
        isFirst
        title="Destinations - Postcards from the Road"
        items={travelReels}
        tone="paper"
        linkLabel="Watch on Instagram →"
      />
      <InstagramCategorySection
        id="heritage"
        title="Local Heritage - Roots and Belonging"
        items={heritagePosts}
        tone="beige"
        linkLabel="View on Instagram →"
      />
      <InstagramCategorySection
        id="experiential"
        title="Experiential Storytelling"
        items={heritagePosts}
        tone="paper"
        linkLabel="View on Instagram →"
      />
    </>
  );
}
