import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

import type { Project } from "@/config/site";

export function ProjectCard({
  project,
  index,
  className = "",
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`reveal-item group flex h-full flex-col overflow-hidden rounded-[28px] border border-[color:var(--line)] bg-[rgba(255,255,255,0.025)] shadow-soft transition duration-300 hover:border-accent/30 hover:bg-[color:var(--accent-soft)] ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-soft">
        <Image
          alt={`${project.name} preview`}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={project.imageUrl}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
            {project.category}
          </span>
        </div>

        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
            {project.name}
          </h3>
          <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-black/20 text-ink transition group-hover:border-accent/40 group-hover:text-accent">
            <GoArrowUpRight size={16} />
          </span>
        </div>

        <p className="text-sm leading-relaxed text-mute">{project.summary}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.tech.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-[color:var(--line)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-mute"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
