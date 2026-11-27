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
  const category = project.category.replace(/\s*•\s*/g, " + ");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`reveal-item glass group flex h-full flex-col gap-4 rounded-2xl border-0 p-3 transition duration-300 sm:p-3.5 ${className}`}
    >
      <div className="relative h-[220px] overflow-hidden rounded-xl bg-soft sm:h-[240px] lg:h-[260px]">
        <Image
          alt={`${project.name} preview`}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={project.imageUrl}
          priority={index < 3}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-0.5 pb-1">
        <div className="flex items-baseline justify-between gap-3 text-sm">
          <h3 className="min-w-0 truncate font-medium tracking-tight text-ink">
            {project.name}
            <span className="font-normal text-mute"> © {project.year}</span>
          </h3>
          <span className="hidden shrink-0 text-mute sm:inline">{category}</span>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-mute">
          {project.summary}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-accent transition group-hover:brightness-110">
          View project
          <GoArrowUpRight size={14} />
        </span>
      </div>
    </Link>
  );
}
