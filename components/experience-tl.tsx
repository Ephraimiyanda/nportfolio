"use client";

import { siteConfig } from "@/config/site";

export default function ExperienceTimeline() {
  return (
    <div>
      <ul className="relative flex flex-col">
        {siteConfig.experience.map((exp) => (
          <li
            key={`${exp.company}-${exp.date}`}
            className="reveal-item relative border-b border-white/15 py-6 last:border-b-0"
          >
            <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <p className="text-base font-medium uppercase text-mute">
                  {exp.date}
                </p>
              </div>
              <p className="flex-1 text-left text-3xl font-medium uppercase text-ink md:text-center">
                {exp.role}
              </p>
              <p className="flex-1 text-left text-base font-medium text-ink md:text-right">
                {exp.company}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
