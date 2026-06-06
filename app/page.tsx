import Link from "next/link";
import Navbar from "./components/Navbar";
import AdmissionForm from "./components/AdmissionForm";
import StoriesHighlights from "./components/StoriesHighlights";
import ExcellenceSection from "./components/ExcellenceSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ResearchSection from "./components/ResearchSection";
import ChancellorNewsSection from "./components/ChancellorNewsSection";
import LifeAtSU from "./components/LifeAtSU";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import {
  AwardIcon,
  MedalIcon,
  StarIcon,
  TrophyIcon,
} from "./components/icons";

const stats = [
  { value: "500+", label: "PATENTS FILED" },
  { value: "98%", label: "PLACEMENT RATE" },
  { value: "#1", label: "IN INNOVATION" },
];

const partners = ["Google", "Microsoft", "Amazon", "Tesla", "NASA"];

const rankings = [
  {
    icon: TrophyIcon,
    title: "Rank 8th",
    subtitle: "Top Higher Ed Institute in India",
    card: "from-amber-50 to-amber-100/50 border-amber-200/60",
    iconColor: "text-amber-500",
  },
  {
    icon: MedalIcon,
    title: "Rank 1st",
    subtitle: "Emerging Management Institute",
    card: "from-sky-50 to-blue-100/50 border-sky-200/60",
    iconColor: "text-sky-500",
  },
  {
    icon: AwardIcon,
    title: "AAA+",
    subtitle: "Best B-School Rating 2023-24",
    card: "from-violet-50 to-purple-100/50 border-violet-200/60",
    iconColor: "text-violet-500",
  },
  {
    icon: StarIcon,
    title: "Rank 3rd",
    subtitle: "Among Pvt Universities in UP",
    card: "from-rose-50 to-pink-100/50 border-rose-200/60",
    iconColor: "text-rose-500",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#05080f] text-white">
      {/* ===== Hero ===== */}
      <section id="admissions" className="relative overflow-hidden">
        {/* Decorative background glow / marbled texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 85% 30%, rgba(56,80,160,0.28), transparent 60%), radial-gradient(40% 60% at 95% 75%, rgba(120,90,40,0.18), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 0, transparent 35%), radial-gradient(circle at 70% 60%, rgba(99,102,241,0.12) 0, transparent 40%)",
          }}
        />

        <div className="relative z-10">
          <Navbar />

          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-10 lg:grid-cols-2 lg:gap-10 lg:pt-16">
            {/* Left column */}
            <div>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
                Crafting{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                  Visionaries
                </span>
              </h1>

              <p className="mt-7 max-w-xl border-l-2 border-indigo-500 pl-5 text-lg leading-relaxed text-zinc-400">
                An ecosystem of excellence where cutting-edge research meets
                creative freedom. Redefine what&apos;s possible with our
                interdisciplinary approach.
              </p>

              <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-3xl font-bold text-white sm:text-4xl">
                      {stat.value}
                    </dd>
                    <p className="mt-1.5 text-xs font-medium tracking-wider text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>

              <Link
                href="#"
                className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-zinc-900 shadow-lg shadow-black/30 transition-transform hover:scale-[1.02]"
              >
                View Programs
              </Link>
            </div>

            {/* Right column — admission form */}
            <div className="lg:justify-self-end lg:pl-6">
              <AdmissionForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trusted by + Rankings ===== */}
      <section className="border-t border-white/5 bg-[#080c16]">
        <div className="mx-auto max-w-7xl px-6">
          {/* Partners */}
          <div className="flex flex-col items-start gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-semibold text-white">
              Trusted by industry leaders:
            </span>
            <div className="flex flex-wrap items-center gap-x-9 gap-y-3">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-lg font-semibold tracking-tight text-zinc-500"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          {/* Ranking cards */}
          <div className="grid grid-cols-1 gap-5 pb-12 sm:grid-cols-2 lg:grid-cols-4">
            {rankings.map(({ icon: Icon, title, subtitle, card, iconColor }) => (
              <div
                key={title}
                className={`flex items-center gap-4 rounded-2xl border bg-gradient-to-br p-5 ${card}`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white shadow-sm">
                  <Icon className={`h-7 w-7 ${iconColor}`} />
                </div>
                <div>
                  <p className="text-xl font-bold text-zinc-900">{title}</p>
                  <p className="mt-0.5 text-sm leading-snug text-zinc-600">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stories & Highlights ===== */}
      <StoriesHighlights />

      {/* ===== Latest Updates + Excellence in Every Number ===== */}
      <ExcellenceSection />

      {/* ===== Why Choose Sanskriti? ===== */}
      <WhyChooseSection />

      {/* ===== Cutting Edge Research ===== */}
      <ResearchSection />

      {/* ===== Chancellor's Desk + In The News ===== */}
      <ChancellorNewsSection />

      {/* ===== Life @ SU ===== */}
      <LifeAtSU />

      {/* ===== Testimonials ===== */}
      <Testimonials />

      {/* ===== Footer ===== */}
      <Footer />
    </div>
  );
}
