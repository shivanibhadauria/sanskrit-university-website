import { PillarIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-[#0a1024] text-white">
      <div className="mx-auto max-w-4xl px-6 py-14 text-center">
        {/* Logo */}
        <div className="inline-flex items-center gap-3 rounded-md border border-white/20 bg-[#15246a] px-4 py-2.5">
          <PillarIcon className="h-7 w-7 text-white/90" />
          <div className="text-left leading-none">
            <p className="font-serif text-lg font-bold tracking-wide text-white">
              SANSKRITI
            </p>
            <p className="font-serif text-[11px] tracking-[0.3em] text-white/85">
              UNIVERSITY
            </p>
          </div>
          <span className="ml-2 hidden border-l border-white/20 pl-3 font-serif text-[8px] tracking-[0.2em] text-amber-300/80 sm:block">
            FOR EXCELLENCE
            <br />
            IN LIFE
          </span>
        </div>

        <p className="mx-auto mt-7 max-w-3xl leading-relaxed text-zinc-400">
          Sanskriti University is dedicated to excellence in teaching, learning,
          and research, and to developing leaders in many disciplines who make a
          difference globally.
        </p>

        <hr className="mx-auto mt-10 max-w-5xl border-white/10" />

        <p className="mt-6 text-sm text-zinc-500">
          © 2025 Sanskriti University. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
