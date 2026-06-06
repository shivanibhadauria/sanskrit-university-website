"use client";

import { useMemo, useState } from "react";
import { ArrowRightIcon, CalendarIcon } from "./icons";

type Category = "Academics" | "Culture" | "Sports" | "Innovation";

type Story = {
  category: Category;
  date: string;
  title: string;
  excerpt: string;
  featured?: boolean;
  /** Optional image under /public; falls back to a gradient placeholder. */
  image?: string;
  gradient: string;
};

const filters = ["All", "Academics", "Culture", "Sports", "Innovation"] as const;

const stories: Story[] = [
  {
    category: "Academics",
    date: "12 Oct 2024",
    title: "Global Leadership Summit 2024: Shaping the Future",
    excerpt:
      "Delegates from over 30 countries gathered to discuss sustainable development goals and the role of youth in global progress.",
    featured: true,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-amber-700 via-rose-900 to-purple-950",
  },
  {
    category: "Culture",
    date: "15 Sep 2024",
    title: "Harmony in Diversity: Annual Cultural Fest",
    excerpt:
      "A vibrant celebration of music, dance, and art bringing together students from every corner of the campus.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop",
    gradient: "from-fuchsia-700 via-purple-900 to-slate-950",
  },
  {
    category: "Sports",
    date: "20 Nov 2024",
    title: "Championship Victory: Football Finals",
    excerpt:
      "The university team lifted the inter-collegiate trophy after a thrilling penalty shootout in the grand finale.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
    gradient: "from-emerald-700 via-green-900 to-slate-950",
  },
  {
    category: "Innovation",
    date: "05 Dec 2024",
    title: "Innovation Fair: Robotics & AI",
    excerpt:
      "Student innovators showcased autonomous robots and AI-driven projects judged by leading industry experts.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    gradient: "from-cyan-700 via-teal-900 to-slate-950",
  },
];

const badgeColors: Record<Category, string> = {
  Academics: "text-sky-300 border-sky-400/40 bg-sky-400/10",
  Culture: "text-amber-300 border-amber-400/40 bg-amber-400/10",
  Sports: "text-orange-300 border-orange-400/40 bg-orange-400/10",
  Innovation: "text-amber-300 border-amber-400/40 bg-amber-400/10",
};

function Thumb({
  story,
  className,
}: {
  story: Story;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${story.gradient} ${className ?? ""}`}
    >
      {story.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 opacity-50 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.35) 0, transparent 30%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.18) 0, transparent 35%)",
          }}
        />
      )}
    </div>
  );
}

export default function StoriesHighlights() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () => (active === "All" ? stories : stories.filter((s) => s.category === active)),
    [active],
  );

  const [feature, ...rest] = visible;

  return (
    <section className="bg-gradient-to-b from-[#0a1336] via-[#080d20] to-[#05080f]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Stories &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Highlights.
            </span>
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {filters.map((filter) => {
              const isActive = active === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                      : "border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content grid */}
        {visible.length === 0 ? (
          <p className="mt-16 text-center text-zinc-400">
            No stories in this category yet — check back soon.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Featured card */}
            {feature && (
              <article className="group relative min-h-[480px] overflow-hidden rounded-3xl border border-white/10 lg:min-h-[560px]">
                <Thumb story={feature} className="absolute inset-0 h-full w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="rounded-md bg-amber-500 px-3 py-1 text-xs font-bold text-black">
                      Featured
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-zinc-200">
                      <CalendarIcon className="h-4 w-4" />
                      {feature.date}
                    </span>
                  </div>
                  <h3 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-300">
                    {feature.excerpt}
                  </p>
                </div>
              </article>
            )}

            {/* Side list */}
            <div className="flex flex-col gap-6">
              {rest.length === 0 ? (
                <div className="flex flex-1 items-center justify-center rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-center text-sm text-zinc-500">
                  That&apos;s the only story in this category right now.
                </div>
              ) : (
                rest.map((story) => (
                  <article
                    key={story.title}
                    className="group flex gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.06]"
                  >
                    <Thumb
                      story={story}
                      className="h-28 w-28 shrink-0 rounded-xl sm:h-32 sm:w-36"
                    />
                    <div className="flex flex-col py-1 pr-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`rounded border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badgeColors[story.category]}`}
                        >
                          {story.category}
                        </span>
                        <span className="text-sm text-zinc-500">{story.date}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold leading-snug text-white">
                        {story.title}
                      </h3>
                      <a
                        href="#"
                        className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm text-zinc-300 transition-colors hover:text-white"
                      >
                        Read more
                        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </article>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
