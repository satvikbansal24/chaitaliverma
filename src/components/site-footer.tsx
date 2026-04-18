import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--green-border)] bg-[#f2efe6]">
      <div className="w-full px-6 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-serif text-lg font-semibold text-[var(--green-deep)]">{site.creatorName}</p>
            <p className="mt-2 text-sm text-[var(--green-muted)]">Food | Travel | Culture</p>
          </div>
          <div className="sm:justify-self-end">
            <p className="text-sm font-semibold text-[var(--green-deep)]">Connect</p>
            <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[var(--green-muted)]">
              <li>
                <a
                  href={site.social.instagram}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--green-deep)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.881 0 1.44 1.44 0 0 1 2.881 0z" />
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-[var(--green-deep)]"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Email
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--green-deep)]">
                  Work with Chaitali
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 text-xs text-[var(--green-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.creatorName}. All rights reserved.
          </p>
          <p className="sm:text-right">
            Designed by{" "}
            <a
              href="https://www.instagram.com/satvikbansal24/"
              className="hover:text-[var(--green-deep)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Satvik Bansal
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
