import { PlayIcon } from "./icons";

const items = [
  { 
    title: "Annual Sports Meet", 
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Convocation Ceremony", 
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    title: "Cultural Night", 
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop" 
  },
];

export default function LifeAtSU() {
  return (
    <section id="life-at-su" className="bg-white text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-2xl font-bold sm:text-3xl">Life @ SU</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.title}
              type="button"
              className="group relative block aspect-[16/10] overflow-hidden rounded-2xl text-left"
              aria-label={`Play ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />

              {/* Play button */}
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-zinc-900 shadow-lg transition-transform group-hover:scale-110">
                <PlayIcon className="ml-0.5 h-6 w-6" />
              </span>

              <span className="absolute bottom-4 left-4 text-lg font-bold text-white drop-shadow">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
