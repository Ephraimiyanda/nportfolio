import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/config/site";

const mediaAspects = [
  "aspect-[4/5]",
  "aspect-[5/4]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[6/5]",
  "aspect-[5/6]",
] as const;

export function ProjectCard({
  project,
  index,
  className = "",
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  const aspect = mediaAspects[index % mediaAspects.length];
  const category = project.category.replace(/\s*•\s*/g, " + ");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`reveal-item group mb-6 block break-inside-avoid sm:mb-8 ${className}`}
    >
      <div
        className={`relative overflow-hidden rounded-xl bg-soft ${aspect}`}
      >
        <Image
          alt={`${project.name} preview`}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          src={project.imageUrl}
        />
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-4 text-sm">
        <h3 className="min-w-0 truncate font-medium tracking-tight text-ink">
          {project.name}
          <span className="font-normal text-mute">
            {" "}
            © {project.year}
          </span>
        </h3>
        <span className="shrink-0 text-mute">{category}</span>
      </div>
    </Link>
  );
}
