import { HighlightsInteractiveMap } from "@/components/highlights-interactive-map";
import { PAGE_SECTION_GAP, PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Highlights",
  description: "Country map with links to Instagram story highlights.",
};

export default function HighlightsPage() {
  return (
    <>
      <PageHero kicker="For the Globetrotters" title="Highlights" />
      <div className="border-b border-[var(--green-border)] bg-[var(--beige)]">
        <div className={`w-full px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24 ${PAGE_SECTION_GAP}`}>
          <HighlightsInteractiveMap />
        </div>
      </div>
    </>
  );
}
