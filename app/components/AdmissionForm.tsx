"use client";

import { useState } from "react";
import { BoltIcon, ChevronDownIcon } from "./icons";

const states = [
  "Uttar Pradesh",
  "Delhi",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "West Bengal",
  "Rajasthan",
  "Other",
];

const programs = [
  "Engineering & Technology",
  "Management",
  "Law",
  "Medical & Allied Sciences",
  "Pharmacy",
  "Agriculture",
  "Arts & Humanities",
  "Commerce",
];

const inputClasses =
  "w-full rounded-md border border-zinc-200 bg-zinc-50/60 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20";

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    state: "",
    program: "",
  });

  function update(field: keyof typeof form) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/40 backdrop-blur-sm">
      {/* Fast track header */}
      <div className="flex items-center justify-between px-3 py-2">
        <span className="flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] text-indigo-400">
          <BoltIcon className="h-3.5 w-3.5" />
          FAST TRACK
        </span>
        <span className="font-mono text-[10px] tracking-wider text-zinc-600">
          APP-2025-V1
        </span>
      </div>

      {/* White card */}
      <div className="rounded-xl bg-white p-6 sm:p-7">
        <h2 className="text-center text-2xl font-bold text-zinc-900">
          Admissions Open 2025
        </h2>
        <p className="mt-1.5 text-center text-sm text-zinc-500">
          Take the first step towards your career
        </p>

        {submitted ? (
          <div className="mt-8 flex flex-col items-center gap-2 rounded-lg bg-blue-50 px-6 py-10 text-center">
            <p className="text-lg font-bold text-blue-900">Thank you, {form.name || "applicant"}!</p>
            <p className="text-sm text-blue-700">
              Our admissions team will reach out to you shortly.
            </p>
          </div>
        ) : (
          <form className="mt-6 space-y-3.5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3.5">
              <input
                className={inputClasses}
                type="text"
                placeholder="Name *"
                required
                value={form.name}
                onChange={update("name")}
              />
              <input
                className={inputClasses}
                type="tel"
                placeholder="Mobile *"
                required
                value={form.mobile}
                onChange={update("mobile")}
              />
              <input
                className={inputClasses}
                type="email"
                placeholder="Email *"
                required
                value={form.email}
                onChange={update("email")}
              />
              <SelectField
                placeholder="State *"
                options={states}
                value={form.state}
                onChange={update("state")}
              />
            </div>

            <SelectField
              placeholder="Select Program Interest *"
              options={programs}
              value={form.program}
              onChange={update("program")}
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-[#1e398f] py-3.5 text-base font-bold text-white shadow-lg shadow-blue-900/20 transition-colors hover:bg-[#1a2f7a]"
            >
              Register Now
            </button>

            <p className="text-center text-[11px] leading-snug text-zinc-400">
              By registering, you agree to receive communications from Sanskriti
              University.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function SelectField({
  placeholder,
  options,
  value,
  onChange,
}: {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="relative">
      <select
        required
        value={value}
        onChange={onChange}
        className={`${inputClasses} cursor-pointer pr-9 ${
          value ? "text-zinc-800" : "text-zinc-400"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-zinc-800">
            {option}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
    </div>
  );
}
