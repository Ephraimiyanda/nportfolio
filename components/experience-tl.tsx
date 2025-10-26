"use client";
import React from "react";

const experiences = [
  {
    company: "Freelance",
    role: "Frontend Developer",
    date: "Dec 2024 – Present ",
  },
  {
    company: "Rahapay",
    role: "Frontend Developer",
    date: "May 2024 – Dec 2024",
  },
  {
    company: "Swift Vista",
    role: "Frontend Developer",
    date: "Jan 2024 – Aug 2024",
  },
  {
    company: "HNG Internship",
    role: "Frontend Developer (Intern)",
    date: "Sep 2023 – Oct 2023",
  },
  {
    company: "nHub",
    role: "Frontend Developer (Intern)",
    date: "Aug 2022 – Aug 2023",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="">
      <ul className="flex flex-col gap-4 relative">
        {experiences.map((exp, i) => (
          <li
            key={i}
            className="relative flex justify-between py-2 items-center border-b-[0.5px] border-black/10 dark:border-white/15"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-sm">{exp.company}</p>
            </div>
            <div>
              <p className="text-sm text-default-500">{exp.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
