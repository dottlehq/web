import type { Metadata } from "next";
import { Geist } from "next/font/google";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dottle — Learn in short sessions",
  description:
    "Quick cards and in-depth threads on the topics you care about. Short sessions that make it easy to begin — no pressure, no commitments.",
  openGraph: {
    title: "Dottle — Learn in short sessions",
    description:
      "Quick cards and in-depth threads on the topics you care about. Short sessions that make it easy to begin — no pressure, no commitments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-zinc-900">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
