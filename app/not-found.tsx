import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found · Mugashra Artistry",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="flex min-h-[70vh] items-center justify-center px-6 text-center"
      style={{ paddingBlock: "var(--fluid-space-section, 4rem)" }}
    >
      <div className="mx-auto max-w-lg">
        {/* Decorative numeral — real message lives in the h1 below */}
        <div
          aria-hidden="true"
          className="animate-hero-eyebrow font-serif leading-none text-accent-text"
          style={{
            fontSize: "clamp(5rem, 3rem + 12vw, 13rem)",
            letterSpacing: "0.04em",
          }}
        >
          404
        </div>

        <h1 className="display-heading animate-hero-title mt-2 text-text">
          This look isn&apos;t in the lookbook.
        </h1>

        <div
          aria-hidden="true"
          className="animate-hero-subtitle mx-auto my-6 h-px w-12 bg-border"
        />

        <p className="animate-hero-subtitle mx-auto max-w-sm text-text-body">
          The page you&apos;re looking for doesn&apos;t exist — it may have
          moved, been renamed, or the link was mistyped.
        </p>

        <div className="animate-hero-actions mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="font-nav bg-accent px-8 py-4 text-white transition-colors duration-300 hover:bg-accent-hover"
          >
            RETURN HOME
          </Link>
          <Link
            href="/portfolio"
            className="font-nav border border-border px-8 py-4 text-text transition-colors duration-300 hover:border-accent-text hover:text-accent-text"
          >
            VIEW PORTFOLIO
          </Link>
        </div>

        <p className="caption-text animate-hero-actions mt-8">
          Still lost? <Link href="/contact" className="accent-link">Get in touch</Link>.
        </p>
      </div>
    </main>
  );
}
