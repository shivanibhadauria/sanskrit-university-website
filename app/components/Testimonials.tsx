"use client";

import { useState } from "react";
import { QuoteIcon, StarIcon } from "./icons";

type Audience = "Students" | "Parents" | "Alumni";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  stars: number;
  avatar: string;
};

const data: Record<Audience, Testimonial[]> = {
  Students: [
    {
      quote:
        "The practical exposure here is unmatched. The labs are state-of-the-art and the faculty truly cares about our growth.",
      name: "Aarav Patel",
      role: "B.Tech CS, 3rd Year",
      stars: 5,
      avatar: "from-blue-500 to-indigo-600",
    },
    {
      quote:
        "Sanskriti University gave me the confidence to lead. The campus life is vibrant and full of opportunities.",
      name: "Priya Sharma",
      role: "MBA, Final Year",
      stars: 5,
      avatar: "from-rose-500 to-pink-600",
    },
    {
      quote:
        "Amazing infrastructure and supportive environment. I've made friends for life and learned so much.",
      name: "Rohan Gupta",
      role: "B.Sc Biotechnology",
      stars: 4,
      avatar: "from-emerald-500 to-teal-600",
    },
  ],
  Parents: [
    {
      quote:
        "The transparency and care the university shows toward students is genuinely reassuring as a parent.",
      name: "Meena Sharma",
      role: "Parent",
      stars: 5,
      avatar: "from-amber-500 to-orange-600",
    },
    {
      quote:
        "My daughter has grown tremendously, both academically and personally, since joining Sanskriti.",
      name: "Rakesh Verma",
      role: "Parent",
      stars: 5,
      avatar: "from-violet-500 to-purple-600",
    },
    {
      quote:
        "Regular updates and a safe, well-managed campus give us complete peace of mind.",
      name: "Anita Desai",
      role: "Parent",
      stars: 4,
      avatar: "from-sky-500 to-cyan-600",
    },
  ],
  Alumni: [
    {
      quote:
        "The foundation I built here landed me a role at a top tech firm right after graduation.",
      name: "Karan Mehta",
      role: "Class of 2019",
      stars: 5,
      avatar: "from-indigo-500 to-blue-600",
    },
    {
      quote:
        "The mentorship network stayed with me long after I left campus. It's a lifelong community.",
      name: "Sneha Iyer",
      role: "Class of 2020",
      stars: 5,
      avatar: "from-pink-500 to-rose-600",
    },
    {
      quote:
        "Sanskriti shaped my entrepreneurial mindset — I founded my own startup within two years.",
      name: "Vivek Nair",
      role: "Class of 2018",
      stars: 5,
      avatar: "from-teal-500 to-emerald-600",
    },
  ],
};

const tabs: Audience[] = ["Students", "Parents", "Alumni"];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  const [active, setActive] = useState<Audience>("Students");

  return (
    <section className="bg-gradient-to-b from-[#0a1336] via-[#0a0f24] to-[#05080f]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-amber-400">
              Testimonials
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Stories of{" "}
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            <p className="mt-3 max-w-lg text-zinc-400">
              Hear from the people who make Sanskriti University a vibrant
              community of learners and achievers.
            </p>
          </div>

          {/* Audience toggle */}
          <div className="flex shrink-0 gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active === tab
                    ? "bg-amber-400 text-[#0f1c52]"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {data[active].map((t) => (
            <article
              key={t.name}
              className="relative flex flex-col rounded-2xl bg-white p-7 shadow-xl"
            >
              <QuoteIcon className="absolute right-6 top-6 h-9 w-9 text-amber-300/50" />

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${t.avatar} text-sm font-bold text-white`}
              >
                {initials(t.name)}
              </div>

              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.stars
                        ? "fill-amber-400 text-amber-400"
                        : "fill-zinc-200 text-zinc-200"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 leading-relaxed text-zinc-600">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-zinc-100 pt-4">
                <p className="font-bold text-zinc-900">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
