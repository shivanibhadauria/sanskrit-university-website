import Link from "next/link";
import { PillarIcon } from "./icons";

const navLinks = [
  "About Us",
  "Academics",
  "Admissions",
  "International",
  "Life @ SU",
  "Placement",
  "Research",
];

export default function Navbar() {
  return (
    <header className="relative z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="Sanskriti University home">
          <div className="flex flex-col items-center rounded-[3px] border border-white/25 bg-[#15246a] px-2.5 py-1.5 leading-none shadow-sm">
            <PillarIcon className="mb-0.5 h-3 w-3 text-white/90" />
            <span className="font-serif text-[12px] font-bold tracking-wide text-white">
              SANSKRITI
            </span>
            <span className="font-serif text-[9px] tracking-[0.25em] text-white/85">
              UNIVERSITY
            </span>
            <span className="mt-1 w-full border-t border-white/20 pt-0.5 text-center text-[5px] tracking-[0.15em] text-amber-300/80">
              FOR EXCELLENCE IN LIFE
            </span>
          </div>
        </Link>

        {/* Primary navigation */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((label) => (
            <li key={label}>
              <Link
                href="#"
                className="text-sm font-medium text-zinc-200 transition-colors hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#"
          className="shrink-0 rounded-full bg-amber-400 px-6 py-2.5 text-sm font-bold text-[#1a1f4b] shadow-[0_0_20px_-4px] shadow-amber-400/40 transition-colors hover:bg-amber-300"
        >
          Apply Now
        </Link>
      </nav>
    </header>
  );
}
