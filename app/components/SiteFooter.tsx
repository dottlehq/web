import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/30 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-start">
          <Link href="/privacy" className="transition hover:text-white/60">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition hover:text-white/60">
            Terms of Service
          </Link>
          <a
            href="mailto:support@dottle.me"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-white/45 transition hover:border-white/18 hover:bg-white/[0.07] hover:text-white/80"
          >
            <span className="text-[10px] font-medium uppercase tracking-widest text-white/35 transition group-hover:text-white/50">
              Support
            </span>
            <span className="h-3 w-px shrink-0 bg-white/15" aria-hidden />
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/55 transition group-hover:text-white/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 opacity-70"
                aria-hidden
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              support@dottle.me
            </span>
          </a>
        </div>
        <span>© {new Date().getFullYear()} Dottle</span>
      </div>
    </footer>
  );
}
