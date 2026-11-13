"use client";

import { siteConfig } from "@/config/site";

export default function ExperienceTimeline() {
  return (
    <ul className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
      {siteConfig.experience.map((exp) => (
        <li key={`${exp.company}-${exp.date}`} className="reveal-item py-6 sm:py-7">
          <div className="grid gap-3 md:grid-cols-[0.9fr_1.3fr_0.9fr] md:items-baseline md:gap-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              {exp.date}
            </p>
            <p className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
              {exp.role}
            </p>
            <p className="text-sm font-medium text-mute md:text-right">
              {exp.company}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
