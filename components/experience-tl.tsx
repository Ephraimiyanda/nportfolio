"use client";

import { siteConfig } from "@/config/site";

export default function ExperienceTimeline() {
  return (
    <div>
      <ul className="relative flex flex-col [&>li]:border-b-[0.5px] [&>li]:last:border-none">
        {siteConfig.experience.map((exp) => (
          <li
            key={`${exp.company}-${exp.date}`}
            className="reveal-item relative border-[color:var(--line)] py-6"
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
