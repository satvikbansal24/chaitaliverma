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
  if (b.compact) {
    return "h-[2.25rem] min-h-[2.25rem] w-auto sm:h-[2.65rem] sm:min-h-[2.65rem]";
  }
  if (b.compactSoft) {
    return "h-[2.65rem] min-h-[2.65rem] w-auto sm:h-[3.05rem] sm:min-h-[3.05rem]";
  }
  return cloudSizeClasses[index % cloudSizeClasses.length];
}

function maxWidthClass(b: CollaborationBrand): string {
  if (b.priority) {
    return "max-w-[min(12.5rem,100%)]";
  }
  if (b.compact) {
    return "max-w-[min(8rem,100%)]";
  }
  if (b.compactSoft) {
    return "max-w-[min(9.5rem,100%)]";
  }
  return "max-w-[min(11rem,100%)]";
}

function BrandCell({
  b,
  index,
}: {
  b: CollaborationBrand;
  index: number;
}) {
  return (
    <div
      className="flex min-w-0 max-w-full items-center justify-center px-0.5 py-1 transition-transform duration-200 ease-out will-change-transform hover:z-10 hover:scale-[1.12] hover:-translate-y-px sm:px-1 sm:py-1.5"
    >
      <Image
        src={b.logoSrc}
        alt={b.name}
        width={280}
        height={100}
        className={`max-h-full w-auto max-w-full object-contain object-center ${maxWidthClass(b)} ${logoSizeClass(b, index)}`}
        sizes="(max-width: 1280px) 30vw, 140px"
      />
    </div>
  );
}

/** Right-hand column — top-aligned with reel + caption (no stretch past row). */
export function CollaborationsBrandsColumn() {
  const brands = collaborationBrands;
  const n = brands.length;
  const remainder = n % 3;
  const mainCount = remainder === 0 ? n : n - remainder;
  const main = brands.slice(0, mainCount);
  const tail = brands.slice(mainCount);

  return (
    <div className="flex min-w-0 flex-col border-t border-[var(--green-border)] pt-10 xl:self-start xl:border-t-0 xl:border-l xl:border-[var(--green-border)] xl:pl-8 xl:pt-0">
      <h2 className={`shrink-0 ${collaborationColumnHeadingClass}`}>
        Partnerships
      </h2>

      <div className="mt-6 min-w-0 px-0.5 py-1">
        <div className="grid grid-cols-3 gap-x-1.5 gap-y-5 sm:gap-x-2 sm:gap-y-6 xl:gap-x-2 xl:gap-y-5">
          {main.map((b, i) => (
            <BrandCell key={b.logoSrc} b={b} index={i} />
          ))}
          {tail.length > 0 ? (
            <div className="col-span-3 flex flex-wrap justify-center gap-x-3 gap-y-4 sm:gap-x-4">
              {tail.map((b, i) => (
                <BrandCell key={b.logoSrc} b={b} index={mainCount + i} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
