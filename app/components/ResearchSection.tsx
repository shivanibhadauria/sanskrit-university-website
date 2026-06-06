import {
  AtomIcon,
  BookOpenIcon,
  CpuIcon,
  DnaIcon,
  DocumentIcon,
  GlobeIcon,
  LightbulbIcon,
} from "./icons";

const stats = [
  { icon: DocumentIcon, value: "2,500+", label: "Research Papers" },
  { icon: LightbulbIcon, value: "2,700+", label: "Patents Filed" },
  { icon: BookOpenIcon, value: "30+", label: "Books Published" },
  { icon: GlobeIcon, value: "12M+", label: "Research Grants" },
];

export default function ResearchSection() {
  return (
    <section className="bg-[#070b1c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Cutting Edge{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Research.
          </span>
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-400">
          We push the boundaries of knowledge. Our interdisciplinary approach
          fosters collaboration between brilliant minds to solve global
          challenges.
        </p>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <Icon className="h-6 w-6 text-indigo-400" />
              <p className="mt-4 text-3xl font-bold">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Bento feature grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 rounded-3xl border border-blue-500/30 bg-blue-500/5 p-6 lg:grid-cols-3">
          {/* Large card */}
          <article className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-[#0b1024] p-8 lg:col-span-2">
            <div
              aria-hidden
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 60% 40%, rgba(99,102,241,0.25) 0, transparent 45%), radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.6) 0, transparent), radial-gradient(1px 1px at 70% 60%, rgba(236,72,153,0.8) 0, transparent), radial-gradient(1.5px 1.5px at 45% 75%, rgba(56,189,248,0.8) 0, transparent), radial-gradient(1px 1px at 85% 25%, rgba(255,255,255,0.5) 0, transparent)",
              }}
            />
            <div className="relative">
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white">
                <CpuIcon className="h-6 w-6" />
              </span>
              <h3 className="text-2xl font-bold">Advanced AI &amp; Robotics</h3>
              <p className="mt-2 max-w-md text-sm text-zinc-400">
                Pioneering autonomous systems and machine learning algorithms.
              </p>
            </div>
          </article>

          {/* Stacked small cards */}
          <div className="flex flex-col gap-6">
            <article className="group relative flex flex-1 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#10243a] to-[#0a1424] p-6">
              <DnaIcon className="mb-2 h-6 w-6 text-teal-400" />
              <h3 className="text-lg font-bold">Bio-Genetics</h3>
              <p className="mt-1 text-xs text-zinc-400">
                Unlocking the secrets of life through genomic research.
              </p>
            </article>
            <article className="group relative flex flex-1 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1340] to-[#0c0a24] p-6">
              <AtomIcon className="mb-2 h-6 w-6 text-sky-400" />
              <h3 className="text-lg font-bold">Quantum Computing</h3>
              <p className="mt-1 text-xs text-zinc-400">
                Next-gen processing power for complex problem solving.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
