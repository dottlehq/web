"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/20 px-5 py-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8l3.5 3.5L13 4.5"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-sm text-white/80">
          You&apos;re on the list. We&apos;ll reach out when Dottle is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="h-11 min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/50 focus:bg-white/15"
      />
      <button
        type="submit"
        disabled={loading}
        className="h-11 shrink-0 cursor-pointer rounded-xl bg-white px-5 text-sm font-medium text-zinc-900 transition hover:bg-[#5D3FD3] hover:text-white disabled:opacity-60"
      >
        {loading ? "Sending…" : "Notify me"}
      </button>
    </form>
  );
}
