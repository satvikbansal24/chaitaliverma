import Link from "next/link";
import { PAGE_SECTION_GAP, PageHero } from "@/components/page-hero";
import { site } from "@/content/site";

export default function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="Let's Talk" />
      <div className="border-b border-[var(--green-border)] bg-[var(--beige)]">
        <div className={`w-full px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24 ${PAGE_SECTION_GAP}`}>
          <p className="text-xl leading-relaxed text-[var(--green-muted)] sm:text-2xl">
            For collaborations, press, or general inquiries, reach out by email at{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-[var(--green-mid)] underline-offset-4 hover:underline"
            >
              {site.email}
            </a>{" "}
            or on Instagram.
          </p>
          <ul className="mt-10 flex flex-col gap-6 text-[var(--green-muted)] sm:flex-row sm:flex-wrap sm:gap-x-16 sm:gap-y-4 lg:text-xl">
            <li>
              <span className="font-semibold text-[var(--green-deep)]">Email:</span>{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-[var(--green-mid)] underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </li>
            <li>
              <span className="font-semibold text-[var(--green-deep)]">Instagram:</span>{" "}
              <a
                href={site.social.instagram}
                className="font-medium text-[var(--green-mid)] underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile
              </a>
            </li>
          </ul>
          <Link
            href="/"
            className="mt-14 inline-block text-base font-semibold text-[var(--green-mid)] underline-offset-4 hover:underline"
          >
            ← Back home
          </Link>
        </div>
      </div>
    </>
  );
}
