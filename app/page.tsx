import Image from "next/image";
import WaitlistForm from "./components/WaitlistForm";

const insights = [
  {
    heading: "Every pause gets filled with something",
    body: "Commutes, queues, moments between tasks — the gaps are real and they happen every day. Something always fills them. It just tends to be noise.",
  },
  {
    heading: "But nothing sticks",
    body: "Most short content is easy to consume and easy to forget. It fills time without adding anything. You close the app and nothing remains.",
  },
  {
    heading: "Dottle changes what that time becomes",
    body: "Same short windows. Same low commitment. But instead of noise, you get one idea, one thread, one thing worth knowing.",
  },
];

const formats = [
  {
    label: "Card",
    duration: "1–2 min",
    situation: "A moment between tasks.",
    description:
      "One strong idea, fact, or insight — distilled to its essence. Quick to read, easy to fit into any moment. No context needed, no place to be.",
    accent: "bg-amber-400",
  },
  {
    label: "Thread",
    duration: "8–10 min",
    situation: "A quiet ten minutes.",
    description:
      "A longer, in-depth read on one topic — meant to follow start to finish, with space to develop an idea properly.",
    accent: "bg-sky-400",
  },
  {
    label: "Micro-course",
    badge: "Coming soon",
    duration: "Several sessions",
    situation: "A skill built over time.",
    description:
      "Full learning modules with progress, structure, and a clear sense of what you've gained. For when you want to go deep.",
    accent: "bg-violet-400",
  },
];

const principles = [
  {
    title: "Topics you choose",
    description:
      "Pick what you actually care about — from cognitive science to history to product design. The feed is yours, not an algorithm's guess.",
  },
  {
    title: "Depth you control",
    description:
      "A quick card when you have two minutes. A longer thread when you have ten. The same topic can go as shallow or as deep as you want.",
  },
  {
    title: "Progress without pressure",
    description:
      "Set a daily goal if you want one — or don't. No streaks to protect, no guilt when life gets in the way. Just learning when it fits.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <div className="flex flex-col gap-6 py-16 pb-20">
            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
              Learn something
              <br />
              every time you pause
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-white/60">
              Dottle turns the small gaps in your day into real, accumulated
              knowledge — without asking you to change your habits.
            </p>
            <div id="waitlist" className="mt-2 flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-widest text-white/40">
                Coming soon to iOS
              </p>
              <div className="w-full max-w-sm">
                <WaitlistForm />
              </div>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="relative hidden min-h-[520px] overflow-hidden rounded-xl lg:block lg:mt-6 lg:mb-16">
            <Image
              src="/hero-photo.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 0px, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden py-4" style={{ backgroundColor: "#5D3FD3" }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "Cognitive Biases", "Learning Techniques", "Behavioral Economics",
            "Philosophy", "Neuroscience", "Decision Making", "Psychology",
            "Systems Thinking", "History", "Stoicism", "Product Design",
            "Creativity", "Evolution", "Leadership",
            "Cognitive Biases", "Learning Techniques", "Behavioral Economics",
            "Philosophy", "Neuroscience", "Decision Making", "Psychology",
            "Systems Thinking", "History", "Stoicism", "Product Design",
            "Creativity", "Evolution", "Leadership",
          ].map((topic, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-5 text-sm text-white">
              <span className="h-1 w-1 rounded-full bg-white/40" />
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* Insight */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
            {/* Left: text */}
            <div>
              <div className="mb-14 flex flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#5D3FD3" }}>
                  The problem
                </p>
                <h2 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
                  The time is already there.
                  <br />
                  It just goes nowhere
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-zinc-100">
                {insights.map((item, i) => (
                  <div key={item.heading} className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[2rem_1fr_1.2fr] sm:gap-10">
                    <span className="text-sm text-zinc-300 sm:pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold leading-snug text-zinc-900">
                      {item.heading}
                    </h3>
                    <p className="text-base leading-relaxed text-zinc-500">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: illustration */}
            <div className="relative hidden min-h-[480px] overflow-hidden rounded-2xl lg:block">
              <Image
                src="/problem-photo.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 0px, 380px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="bg-zinc-950 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#5D3FD3" }}>
              How it works
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                  Built around
                  <br />
                  how you actually live
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                {/* Screenshot placeholder */}
                <div className="flex h-48 items-center justify-center border-b border-white/10 bg-white/5">
                  <span className="text-xs text-white/20">Screenshot</span>
                </div>
                {/* Content */}
                <div className="flex flex-col gap-3 p-7">
                  <h3 className="text-lg font-semibold leading-snug text-white">
                    {p.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/50">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
            {/* Left: illustration */}
            <div className="relative hidden min-h-[420px] overflow-hidden rounded-2xl lg:block">
              <Image
                src="/formats-photo.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 0px, 380px"
                className="object-cover"
              />
            </div>

            {/* Right: text */}
            <div className="flex flex-col justify-center gap-10">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: "#5D3FD3" }}>
                  Formats
                </p>
                <h2 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
              Whatever time
              <br />
              you have
                </h2>
              </div>
              <div className="flex flex-col divide-y divide-zinc-100">
                {formats.map((format, i) => (
                  <div key={format.label} className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[2rem_1fr_1.2fr] sm:gap-10">
                    <span className="text-sm text-zinc-300 sm:pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold leading-snug text-zinc-900">
                        {format.label}
                      </h3>
                      {"badge" in format && format.badge ? (
                        <span className="w-fit rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-400">
                          {format.badge}
                        </span>
                      ) : (
                        <span className="text-sm text-zinc-400">{format.duration}</span>
                      )}
                    </div>
                    <p className="text-base leading-relaxed text-zinc-500">
                      {format.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Dottle is on its way.
            <br />
            Be the first to know
          </h2>
          <div className="flex flex-col justify-center gap-3">
            <p className="text-xs font-medium uppercase tracking-widest text-white/40">
              Coming soon to iOS
            </p>
            <div className="w-full max-w-sm">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
