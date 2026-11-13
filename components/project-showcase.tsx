"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

import type { Project } from "@/config/site";

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
      <div className="flex flex-col gap-3">
        {projects.map((project, index) => {
          const isActive = index === active;

          return (
            <button
              key={project.name}
              type="button"
              aria-pressed={isActive}
              className={`reveal-item group w-full border px-4 py-4 text-left transition-colors duration-300 sm:px-5 sm:py-5 ${
                isActive
                  ? "border-[color:var(--accent)]/35 bg-[color:var(--accent-soft)]"
                  : "border-[color:var(--line)] bg-transparent hover:border-[color:var(--accent)]/25 hover:bg-white/[0.02]"
              }`}
              onClick={() => setActive(index)}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  {project.category}
                </span>
              </div>
              <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-[1.7rem]">
                {project.name}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute sm:text-[15px]">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="border border-[color:var(--line)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-mute"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      <aside className="reveal-item surface sticky top-24 self-start overflow-hidden">
        <div key={current.name} className="detail-rise">
          <div className="relative aspect-[16/10] overflow-hidden bg-soft">
            <Image
              alt={`${current.name} preview`}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              src={current.imageUrl}
              priority={active === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--bg)] via-transparent to-transparent" />
          </div>

          <div className="flex flex-col gap-5 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              <span>{current.year}</span>
              <span className="text-[color:var(--line)]">/</span>
              <span>{current.role}</span>
            </div>

            <div>
              <h4 className="font-display text-3xl font-medium tracking-tight text-ink">
                {current.name}
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed text-mute">
                {current.description}
              </p>
            </div>

            <ul className="space-y-2.5">
              {current.highlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-ink/90"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                className="inline-flex items-center gap-2 bg-accent px-4 py-2.5 text-sm font-medium text-accent-ink shadow-accent transition hover:brightness-110"
                href={current.liveLink}
                target="_blank"
                rel="noreferrer"
              >
                View live
                <GoArrowUpRight size={18} />
              </Link>
              <Link
                className="inline-flex items-center gap-2 border border-[color:var(--line)] px-4 py-2.5 text-sm text-ink transition hover:border-accent/40 hover:text-accent"
                href={current.sourceLink}
                target="_blank"
                rel="noreferrer"
              >
                Source
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
