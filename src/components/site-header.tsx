import Link from "next/link";
import { Fragment } from "react";
import { site } from "@/content/site";

/** Only routes with their own page; Writing & Services live on Home. */
const nav = [
  { href: "/", label: "Home" },
  { href: "/instagram", label: "Instagram" },
  { href: "/highlights", label: "Highlights" },
  { href: "/collaborations", label: "Collaborations" },
  { href: "/media-kit", label: "Media kit" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--green-border)] bg-[#f2efe6]/95 backdrop-blur-md">
      <div className="flex w-full flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5 lg:px-12">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-[var(--green-deep)] sm:text-xl"
        >
          {site.title}
        </Link>
        <nav className="flex flex-wrap items-center gap-y-2 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--green-deep)] sm:text-[15px]">
          {nav.map((item, i) => (
            <Fragment key={item.href}>
              {i > 0 ? (
                <span
                  aria-hidden
                  className="mx-3 inline-block h-[0.85em] w-px shrink-0 self-center bg-current sm:mx-4"
                />
              ) : null}
              <Link
                href={item.href}
                className="transition hover:text-[var(--green-mid)]"
              >
                {item.label}
              </Link>
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
}
