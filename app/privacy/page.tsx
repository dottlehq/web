import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Dottle",
  description:
    "How Dottle collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mb-12 text-sm text-zinc-400">
              Last updated: April 15, 2026
            </p>

            <div className="flex flex-col gap-10 text-base leading-relaxed text-zinc-600">
            <p>
              Dottle (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is a
              microlearning application designed for short, focused learning
              sessions. Dottle is the data controller for your personal data.
              This Privacy Policy explains what data we collect, how we use it,
              and your rights.
            </p>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-zinc-900">
                1. Data we collect
              </h2>
              <p>We collect only the data necessary to operate the product:</p>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed text-zinc-600">
                <li>
                  <span className="font-medium text-zinc-900">
                    Account data:
                  </span>{" "}
                  Sign in via Apple ID and a basic identifier provided by Apple
                </li>
                <li>
                  <span className="font-medium text-zinc-900">
                    Usage data:
                  </span>{" "}
                  Interactions with content (cards, threads, topics), app
                  navigation, and feature usage
                </li>
                <li>
                  <span className="font-medium text-zinc-900">
                    Device and technical data:
                  </span>{" "}
                  IP address, device type, and OS version
                </li>
                <li>
                  <span className="font-medium text-zinc-900">
                    Notifications:
                  </span>{" "}
                  Push notification tokens, if enabled
                </li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-zinc-900">
                2. How we use data and legal basis
              </h2>
              <p>We use this data to:</p>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed text-zinc-600">
                <li>Provide and operate the app</li>
                <li>Personalize content and recommendations</li>
                <li>Improve performance and usability</li>
                <li>Monitor and fix errors</li>
              </ul>
              <p>Under GDPR, we process your data based on:</p>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed text-zinc-600">
                <li>
                  <span className="font-medium text-zinc-900">Contract</span> —
                  to provide the service
                </li>
                <li>
                  <span className="font-medium text-zinc-900">
                    Legitimate interest
                  </span>{" "}
                  — to improve and secure the product
                </li>
              </ul>
              <p>We do not use your data for advertising.</p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-zinc-900">
                3. Data sharing and retention
              </h2>
              <p>
                We do not sell your personal data. Data is processed within our
                own infrastructure and is not shared with third parties for
                commercial purposes. We retain data only as long as necessary
                to operate the service. You can request deletion of your data at
                any time.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-zinc-900">
                4. Your rights
              </h2>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed text-zinc-600">
                <li>Access your data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion</li>
                <li>Restrict or object to processing</li>
                <li>Receive a copy of your data</li>
              </ul>
              <p>
                To exercise your rights, contact{" "}
                <a
                  href="mailto:privacy@dottle.me"
                  className="font-medium text-zinc-900 transition hover:text-zinc-600"
                >
                  privacy@dottle.me
                </a>
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-zinc-900">
                5. Security and age restriction
              </h2>
              <p>
                We implement reasonable technical and organizational measures to
                protect your data. Dottle is intended for users aged 16 and older.
                We do not knowingly collect data from users under 16.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-zinc-900">
                6. Changes and contact
              </h2>
              <p>
                We may update this policy from time to time and will update the
                &ldquo;Last updated&rdquo; date accordingly. For any
                privacy-related questions, contact{" "}
                <a
                  href="mailto:privacy@dottle.me"
                  className="font-medium text-zinc-900 transition hover:text-zinc-600"
                >
                  privacy@dottle.me
                </a>
              </p>
            </section>
            </div>
          </article>
        </div>
    </main>
  );
}
