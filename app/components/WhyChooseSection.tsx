import { GradientMedia } from "./Placeholder";
import {
  CheckCircleIcon,
  DownloadIcon,
  GlobeIcon,
  UsersIcon,
} from "./icons";

const reasons = [
  "World-class Infrastructure",
  "Highly Qualified Faculty",
  "Industry Oriented Curriculum",
  "Excellent Placement Record",
  "Focus on Innovation & Research",
];

const features = [
  {
    icon: GlobeIcon,
    iconWrap: "bg-blue-100 text-blue-600",
    title: "30+ International Ties",
    text: "Collaborations with foreign universities for student exchange programs.",
    gradient: "from-slate-300 to-slate-500",
  },
  {
    icon: UsersIcon,
    iconWrap: "bg-amber-100 text-amber-600",
    title: "Interactive Pedagogy",
    text: "Project-based learning and case studies for practical understanding.",
    gradient: "from-sky-300 to-indigo-500",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Sanskriti?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-500">
            Focus on holistic development, global exposure, and industry-aligned
            curriculum makes us the preferred choice.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Top reasons card */}
          <div className="flex flex-col rounded-2xl bg-gradient-to-b from-[#1c2e7a] to-[#0f1c52] p-7 text-white shadow-xl">
            <h3 className="text-2xl font-bold leading-tight">
              Top Reasons
              <br />
              To Join SU
            </h3>
            <ul className="mt-6 space-y-3.5">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-2.5 text-sm">
                  <CheckCircleIcon className="h-4 w-4 shrink-0 text-amber-400" />
                  <span className="text-blue-50">{reason}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-bold text-[#0f1c52] transition-colors hover:bg-amber-300"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Brochure
            </a>
          </div>

          {/* Feature cards */}
          {features.map(({ icon: Icon, iconWrap, title, text, gradient }) => (
            <div
              key={title}
              className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <GradientMedia gradient={gradient} className="h-44 w-full" />
              <div className="p-6">
                <span
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full ${iconWrap}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
