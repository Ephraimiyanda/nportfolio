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
      <ul className="flex flex-col relative [&>li]:border-b-[0.5px] [&>li]:last:border-none">
        {experiences.map((exp, i) => (
          <li
            key={i}
            className="relative py-6 border-black/10 dark:border-white/15 "
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 w-full">
              <div className="flex-1">
                <p className="text-base font-medium  text-default-500 uppercase">
                  {exp.date}
                </p>
              </div>
              <p className="text-3xl font-medium text-gray-800 dark:text-white flex-1 md:text-center text-left uppercase">
                {exp.role}
              </p>
              <p className="text-base flex-1 md:text-right text-left font-medium ">
                {exp.company}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
