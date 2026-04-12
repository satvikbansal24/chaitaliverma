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
          <div>
            <p className="text-sm font-semibold text-[var(--green-deep)]">Connect</p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--green-muted)]">
              <li>
                <a
                  href={site.social.instagram}
                  className="hover:text-[var(--green-deep)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-[var(--green-deep)]">
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
        <p className="mt-12 text-center text-xs text-[var(--green-muted)]">
          © {new Date().getFullYear()} {site.creatorName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
