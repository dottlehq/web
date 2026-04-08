import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="bg-zinc-950 px-6 py-6 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-white transition hover:text-white/80"
        >
          Dottle
        </Link>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5 text-sm text-white/40">
            <Link href="/privacy" className="transition hover:text-white/70">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white/70">
              Terms
            </Link>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/50">
            <div className="relative flex h-1.5 w-1.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: "#5D3FD3" }}
              />
              <span
                className="relative inline-flex h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#5D3FD3" }}
              />
            </div>
            Coming soon to iOS
          </div>
        </div>
      </nav>
    </header>
  );
}
