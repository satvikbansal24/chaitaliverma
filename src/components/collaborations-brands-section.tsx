import Image from "next/image";
import { collaborationColumnHeadingClass } from "@/components/collaborations-heading-classes";
import type { CollaborationBrand } from "@/content/collaborations";
import { collaborationBrands } from "@/content/collaborations";

/** Non-priority logos — slightly smaller so priority marks stand out. */
const cloudSizeClasses = [
  "h-11 sm:h-[3.25rem]",
  "h-[2.65rem] sm:h-12",
  "h-11 sm:h-[3.1rem]",
  "h-[2.75rem] sm:h-12",
] as const;

/** Larger marks for fine-detail assets (`priority` in content). */
function logoSizeClass(b: CollaborationBrand, index: number): string {
  if (b.priority) {
    return "h-[4.85rem] min-h-[4.85rem] w-auto min-w-[8rem] sm:h-[5.35rem] sm:min-h-[5.35rem] sm:min-w-[9rem]";
  }
  return cloudSizeClasses[index % cloudSizeClasses.length];
}

function maxWidthClass(b: CollaborationBrand): string {
  if (b.priority) {
    return "max-w-[min(12.5rem,48vw)]";
  }
  return "max-w-[min(11rem,46vw)]";
}

/** Right-hand column — top-aligned with reel + caption (no stretch past row). */
export function CollaborationsBrandsColumn() {
  return (
    <div className="flex min-w-0 flex-col border-t border-[var(--green-border)] pt-10 xl:self-start xl:border-t-0 xl:border-l xl:border-[var(--green-border)] xl:pl-8 xl:pt-0">
      <h2 className={`shrink-0 ${collaborationColumnHeadingClass}`}>
        Other partnerships
      </h2>

      <div className="mt-6 flex flex-wrap content-start justify-center gap-x-2 gap-y-5 px-0.5 py-1 sm:gap-x-2.5 sm:gap-y-6 xl:gap-x-2 xl:gap-y-5">
        {collaborationBrands.map((b, i) => (
          <div
            key={b.logoSrc}
            className="flex shrink-0 items-center justify-center px-1 py-1 transition-transform duration-200 ease-out will-change-transform hover:z-10 hover:scale-[1.12] hover:-translate-y-px sm:px-1.5 sm:py-1.5"
          >
            <Image
              src={b.logoSrc}
              alt={b.name}
              width={280}
              height={100}
              className={`w-auto object-contain object-center ${maxWidthClass(b)} ${logoSizeClass(b, i)}`}
              sizes="(max-width: 1280px) 46vw, 200px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
