import { BellIcon } from "./icons";

const updates = [
  {
    date: "DEC 15, 2024",
    isNew: true,
    title: "Ph.D. Entrance Exam 2025 Applications Open",
    tag: "Admission",
  },
  {
    date: "DEC 12, 2024",
    isNew: true,
    title: "Semester End Examinations Schedule Released",
    tag: "Exam",
  },
  {
    date: "DEC 10, 2024",
    title: "Winter Break Notification for All Departments",
    tag: "Notice",
  },
  {
    date: "DEC 08, 2024",
    title: "Guest Lecture by CEO of TechMahindra - Reg Open",
    tag: "Event",
  },
  {
    date: "DEC 05, 2024",
    title: "Library Hours Extended for Exam Preparation",
    tag: "Facility",
  },
];

const stats = [
  { value: "95%", label: "Placement Rate", text: "text-blue-600", bg: "bg-blue-50" },
  { value: "54L", label: "Highest Package", text: "text-amber-500", bg: "bg-amber-50" },
  { value: "2500+", label: "Research Papers", text: "text-purple-600", bg: "bg-purple-50" },
  { value: "300+", label: "Recruiters", text: "text-emerald-600", bg: "bg-emerald-50" },
];

const recruiters = [
  "TCS",
  "Wipro",
  "HCL",
  "IBM",
  "Accenture",
  "Deloitte",
  "Capgemini",
  "Cognizant",
  "Tech Mahindra",
];

export default function ExcellenceSection() {
  return (
    <section id="placements" className="bg-white text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Latest Updates */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <BellIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-2xl font-bold">Latest Updates</h2>
                <p className="text-sm text-zinc-500">
                  Stay informed with campus news
                </p>
              </div>
            </div>

            <ol className="mt-8 space-y-6 border-l border-zinc-200 pl-6">
              {updates.map((u) => (
                <li key={u.title} className="relative">
                  <span
                    className={`absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-white ${
                      u.isNew ? "bg-red-500" : "bg-blue-500"
                    }`}
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold tracking-wide text-zinc-500">
                      {u.date}
                    </span>
                    {u.isNew && (
                      <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-red-600">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1 font-semibold text-zinc-800">{u.title}</h3>
                  <span className="mt-1 inline-block rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500">
                    {u.tag}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Excellence in Every Number */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-amber-500">
              Why Choose Us
            </p>
            <h2 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">
              Excellence in
              <br />
              <span className="text-blue-600">Every Number</span>
            </h2>
            <p className="mt-4 max-w-md text-zinc-500">
              Our commitment to quality education reflects in our achievements.
              Join a community that strives for greatness.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label} className={`rounded-2xl ${s.bg} p-6`}>
                  <p className={`text-3xl font-bold sm:text-4xl ${s.text}`}>
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-zinc-600">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top recruiters bar */}
      <div className="bg-[#1c2e7a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 lg:flex-row lg:items-center">
          <span className="shrink-0 text-sm font-bold uppercase tracking-wide text-amber-400">
            Our Top Recruiters
          </span>
          <div className="flex flex-1 flex-wrap items-center justify-between gap-x-6 gap-y-2 lg:pl-6">
            {recruiters.map((r) => (
              <span
                key={r}
                className="text-lg font-semibold tracking-tight text-blue-100/90"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
