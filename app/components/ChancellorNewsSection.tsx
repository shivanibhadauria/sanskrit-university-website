import { GradientMedia } from "./Placeholder";
import { QuoteIcon } from "./icons";

const news = [
  {
    source: "The Times of India",
    title: "Sanskriti University Ranked Top in Innovation",
    date: "Dec 12, 2024",
    gradient: "from-sky-300 to-blue-500",
  },
  {
    source: "Hindustan Times",
    title: "New Research Center Inaugurated by Education Minister",
    date: "Nov 28, 2024",
    gradient: "from-amber-300 to-orange-500",
  },
  {
    source: "Education World",
    title: "University Wins National Excellence Award 2024",
    date: "Oct 15, 2024",
    gradient: "from-emerald-300 to-teal-500",
  },
];

export default function ChancellorNewsSection() {
  return (
    <section className="bg-[#f6f8fc] text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-12">
          {/* Chancellor's Desk */}
          <div>
            <h2 className="text-2xl font-bold">Chancellor&apos;s Desk</h2>
            <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white ring-2 ring-amber-400">
                    SG
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">Dr. Sachin Gupta</p>
                    <p className="text-sm text-zinc-500">Chancellor</p>
                  </div>
                </div>
                <QuoteIcon className="h-9 w-9 text-amber-400/80" />
              </div>
              <p className="mt-6 italic leading-relaxed text-zinc-600">
                &ldquo;Our mission is to create an environment that fosters
                intellectual curiosity and encourages students to challenge the
                status quo. We are committed to excellence in education and
                research.&rdquo;
              </p>
            </div>
          </div>

          {/* In The News */}
          <div>
            <h2 className="text-2xl font-bold">In The News</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {news.map((item) => (
                <article
                  key={item.title}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <GradientMedia gradient={item.gradient} className="h-36 w-full" />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-rose-500">
                      {item.source}
                    </p>
                    <h3 className="mt-2 font-bold leading-snug text-zinc-800">
                      {item.title}
                    </h3>
                    <p className="mt-auto border-t border-zinc-100 pt-3 text-xs text-zinc-400">
                      {item.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
