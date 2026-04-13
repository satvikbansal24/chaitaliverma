import { CollaborationsFeaturedSection } from "@/components/collaborations-featured-section";
import { CollaborationsSpotlightSection } from "@/components/collaborations-spotlight-section";

export const metadata = {
  title: "Collaborations",
  description:
    "Brand collaborations, spotlight reels, and partners—Chaitali Verma.",
};

export default function CollaborationsPage() {
  return (
    <>
      <CollaborationsFeaturedSection />
      <CollaborationsSpotlightSection />
    </>
  );
}
