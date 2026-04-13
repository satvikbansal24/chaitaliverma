import { CollaborationsFeaturedSection } from "@/components/collaborations-featured-section";
import { CollaborationsSpotlightSection } from "@/components/collaborations-spotlight-section";
import { PAGE_SECTION_GAP, PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Collaborations",
  description:
    "Brand collaborations, spotlight reels, and partners: Chaitali Verma.",
};

export default function CollaborationsPage() {
  return (
    <>
      <PageHero kicker="For Brands & Partners" title="Collaborations" />
      <div className={PAGE_SECTION_GAP}>
        <CollaborationsFeaturedSection belowPageHero />
      </div>
      <CollaborationsSpotlightSection />
    </>
  );
}
