"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { site } from "@/content/site";

/** Only routes with their own page; Writing & Services live on Home. */
const nav = [
  { href: "/", label: "Home" },
  { href: "/instagram", label: "Social Media" },
  { href: "/highlights", label: "Highlights" },
  { href: "/collaborations", label: "Collaborations" },
  { href: "/media-kit", label: "Media" },
  { href: "/contact", label: "Contact" },
] as const;

function navItemIsActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkBase =
  "rounded-lg px-3 py-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-deep)]";

const linkActive =
  "bg-[var(--green-deep)] text-[var(--beige)] shadow-sm hover:bg-[var(--green-mid)] hover:text-[var(--beige)]";

const linkInactive = "hover:text-[var(--green-mid)]";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--green-border)] bg-[#f2efe6]/95 backdrop-blur-md">
      <div className="flex w-full items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12 lg:py-5">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-[var(--green-deep)] sm:text-xl"
        >
          {site.title}
        </Link>

        {/* Desktop / large screens: unchanged horizontal nav */}
        <nav
          aria-label="Primary"
          className="hidden flex-wrap items-center gap-y-2 text-sm font-semibold uppercase tracking-[0.1em] text-[var(--green-deep)] lg:flex lg:text-[15px]"
        >
          {nav.map((item, i) => {
            const active = navItemIsActive(pathname, item.href);
            return (
              <Fragment key={item.href}>
                {i > 0 ? (
                  <span
                    aria-hidden
                    className="mx-3 inline-block h-[0.85em] w-px shrink-0 self-center bg-[var(--green-deep)]/25 lg:mx-4"
                  />
                ) : null}
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`${linkBase} ${
                    active ? linkActive : linkInactive
                  }`}
                >
                  {item.label}
                </Link>
              </Fragment>
            );
          })}
        </nav>

        {/* Mobile / tablet: menu control (below lg) */}
        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-[var(--green-deep)] transition hover:bg-[var(--green-deep)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-deep)] lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-primary-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        id="mobile-primary-nav"
        className={`border-t border-[var(--green-border)] bg-[#f2efe6]/98 lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <nav
          aria-label="Primary"
          className="flex flex-col gap-1 px-4 py-3 sm:px-8"
        >
          {nav.map((item) => {
            const active = navItemIsActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`block w-full text-left text-sm font-semibold uppercase tracking-[0.1em] ${linkBase} ${
                  active ? linkActive : linkInactive
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
