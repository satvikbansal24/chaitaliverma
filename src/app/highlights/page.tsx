import { HighlightsInteractiveMap } from "@/components/highlights-interactive-map";

export const metadata = {
  title: "Highlights",
  description: "Country map with links to Instagram story highlights.",
};

export default function HighlightsPage() {
  return (
    <div className="border-b border-[var(--green-border)] bg-[var(--paper)]">
      <div className="w-full px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <h1 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight text-[var(--green-deep)]">
          Highlights
        </h1>

        <div className="mt-10">
          <HighlightsInteractiveMap />
        </div>
      </div>
    </div>
  );
}
