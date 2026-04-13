import Link from "next/link";
import { collaborationColumnHeadingClass } from "@/components/collaborations-heading-classes";
import { CollaborationsBrandsColumn } from "@/components/collaborations-brands-section";
import { InstagramReelEmbed } from "@/components/instagram-reel-embed";
import { LuangPrabangThingsToDo } from "@/components/luang-prabang-things-to-do";
import {
  luangPrabangHighlight,
  luangPrabangThingsToDo,
} from "@/content/collaborations";

export function CollaborationsFeaturedSection() {
  const { permalink, title, description } = luangPrabangHighlight;

  return (
    <section className="border-t border-b border-[var(--green-border)] bg-[var(--beige)]">
      <div className="w-full px-6 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 xl:gap-6 xl:items-start">
          {/* Left: reel (~⅓) */}
          <div className="min-w-0 xl:self-start xl:min-w-0">
            <InstagramReelEmbed
              permalink={permalink}
              title={title}
              compact
              collaborations
            />
          </div>

          {/* Middle: caption + list (~⅓) */}
          <div className="flex min-w-0 flex-col justify-start border-t border-[var(--green-border)] pt-10 xl:self-start xl:border-t-0 xl:border-l xl:border-[var(--green-border)] xl:pl-8 xl:pt-0">
            <h3 className={collaborationColumnHeadingClass}>
              {title}
            </h3>
            <p className="mt-6 text-base leading-relaxed text-[var(--green-muted)] sm:text-lg">
              {description}
            </p>
            <LuangPrabangThingsToDo items={luangPrabangThingsToDo} />
            <Link
              href={permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-base font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
            >
              Open on Instagram →
            </Link>
          </div>

          {/* Right: other collabs (~⅓) */}
          <CollaborationsBrandsColumn />
        </div>
      </div>
    </section>
  );
}
