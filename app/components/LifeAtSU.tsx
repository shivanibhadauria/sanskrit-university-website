import { GradientMedia } from "./Placeholder";
import { PlayIcon } from "./icons";

const videos = [
  { title: "Annual Sports Meet", gradient: "from-zinc-400 to-zinc-700" },
  { title: "Convocation Ceremony", gradient: "from-sky-400 to-blue-700" },
  { title: "Cultural Night", gradient: "from-rose-400 to-purple-700" },
];

export default function LifeAtSU() {
  return (
    <section className="bg-white text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold sm:text-3xl">Life @ SU</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <button
              key={video.title}
              type="button"
              className="group relative block aspect-[16/10] overflow-hidden rounded-2xl text-left"
              aria-label={`Play ${video.title}`}
            >
              <GradientMedia
                gradient={video.gradient}
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />

              {/* Play button */}
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-zinc-900 shadow-lg transition-transform group-hover:scale-110">
                <PlayIcon className="ml-0.5 h-6 w-6" />
              </span>

              <span className="absolute bottom-4 left-4 text-lg font-bold text-white drop-shadow">
                {video.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
