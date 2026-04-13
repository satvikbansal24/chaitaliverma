"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

function navItemIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--green-border)] bg-[#f2efe6]/95 backdrop-blur-md">
      <div className="flex w-full flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5 lg:px-12">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-[var(--green-deep)] sm:text-xl"
        >
          {site.title}
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-y-2 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--green-deep)] sm:text-[15px]"
        >
          {nav.map((item, i) => {
            const active = navItemIsActive(pathname, item.href);
            return (
              <Fragment key={item.href}>
                {i > 0 ? (
                  <span
                    aria-hidden
                    className="mx-3 inline-block h-[0.85em] w-px shrink-0 self-center bg-[var(--green-deep)]/25 sm:mx-4"
                  />
                ) : null}
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "rounded-lg bg-[var(--green-deep)] px-3 py-1.5 text-[var(--beige)] shadow-sm transition hover:bg-[var(--green-mid)] hover:text-[var(--beige)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-deep)]"
                      : "rounded-lg px-3 py-1.5 transition hover:text-[var(--green-mid)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-deep)]"
                  }
                >
                  {item.label}
                </Link>
              </Fragment>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
