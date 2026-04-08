import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Dottle",
  description: "Terms governing your use of the Dottle app.",
};

export default function TermsPage() {
  return (
    <main className="flex-1 bg-white py-16 pb-24 text-zinc-900">
        <div className="mx-auto max-w-6xl px-6">
          <article className="w-full max-w-[65ch]">
            <p
              className="mb-3 text-xs font-medium uppercase tracking-widest"
              style={{ color: "#5D3FD3" }}
            >
              Legal
            </p>
            <h1 className="mb-2 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mb-12 text-sm text-zinc-400">
              Last updated: April 15, 2026
            </p>

            <div className="flex flex-col gap-10 text-base leading-relaxed text-zinc-600">
              <p>
                Dottle (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is
                a microlearning application designed for short, focused learning
                sessions. By accessing or using the app, you agree to these Terms
                of Service.
              </p>

              <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-zinc-900">
                  1. Use of the service
                </h2>
                <p>
                  You may use Dottle only in compliance with these Terms and
                  applicable laws. You must be at least 16 years old to use the
                  app. You agree not to misuse the service, including attempting
                  to disrupt, interfere with, or gain unauthorized access to the
                  app or its systems.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-zinc-900">
                  2. Accounts
                </h2>
                <p>
                  You access Dottle via Sign in with Apple. You are responsible
                  for maintaining the security of your account and for any
                  activity under it. We may suspend or terminate access if we
                  detect misuse or violations of these Terms.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-zinc-900">
                  3. Content and rights
                </h2>
                <p>
                  All content provided in Dottle, including text, structure, and
                  learning materials, is owned by Dottle or its licensors and is
                  protected by applicable intellectual property laws. You may use
                  the content for personal, non-commercial purposes only. You may
                  not copy, distribute, modify, or create derivative works
                  without permission.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-zinc-900">
                  4. Service availability and disclaimers
                </h2>
                <p>
                  We aim to keep the app available and functional, but we do not
                  guarantee uninterrupted or error-free operation. Features may
                  change, be updated, or removed at any time. Dottle is provided
                  &ldquo;as is&rdquo; without warranties of any kind, express or
                  implied, including fitness for a particular purpose, accuracy,
                  or availability.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-zinc-900">
                  5. Limitation of liability and termination
                </h2>
                <p>
                  To the maximum extent permitted by law, Dottle is not liable
                  for any indirect, incidental, or consequential damages arising
                  from the use of the app. You may stop using the app at any time.
                  We may suspend or terminate access if you violate these Terms
                  or misuse the service.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-zinc-900">
                  6. Changes and contact
                </h2>
                <p>
                  We may update these Terms from time to time. Continued use of
                  the app after updates constitutes acceptance of the revised
                  Terms. For any questions regarding these Terms, contact{" "}
                  <a
                    href="mailto:legal@dottle.me"
                    className="font-medium text-zinc-900 transition hover:text-zinc-600"
                  >
                    legal@dottle.me
                  </a>
                </p>
              </section>
            </div>
          </article>
        </div>
    </main>
  );
}
