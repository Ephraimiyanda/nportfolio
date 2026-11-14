import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GoArrowLeft, GoArrowUpRight } from "react-icons/go";

import { getProjectBySlug, siteConfig } from "@/config/site";

export function generateStaticParams() {
  return siteConfig.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const index = siteConfig.projects.findIndex(
    (item) => item.slug === project.slug,
  );
  const previous = siteConfig.projects[index - 1];
  const next = siteConfig.projects[index + 1];

  return (
    <article className="pb-20 pt-4 md:pb-28 md:pt-8">
      <Link
        href="/#work"
        className="mb-8 inline-flex items-center gap-2 text-sm text-mute transition hover:text-accent"
      >
        <GoArrowLeft size={16} />
        Back to work
      </Link>

      <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span className="text-[color:var(--line)]">/</span>
        <span className="text-accent">{project.category}</span>
        <span className="text-[color:var(--line)]">/</span>
        <span>{project.year}</span>
      </div>

      <h1 className="max-w-4xl text-[clamp(2.5rem,7vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.04em] text-ink">
        {project.name}
      </h1>
      <p className="mt-5 max-w-2xl text-lg font-normal leading-relaxed text-mute sm:text-xl">
        {project.summary}
      </p>

      <div className="relative mt-10 aspect-[5/3] overflow-hidden rounded-xl border border-[color:var(--line)] bg-soft shadow-soft md:mx-auto md:aspect-[16/10] md:max-w-3xl lg:max-w-4xl">
        <Image
          alt={`${project.name} preview`}
          className="object-cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 48rem, 56rem"
          src={project.imageUrl}
        />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            Overview
          </p>
          <p className="text-lg font-normal leading-relaxed text-mute">
            {project.description}
          </p>

          <ul className="mt-8 space-y-3">
            {project.highlights.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-[15px] leading-relaxed text-ink"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.025)] p-5 shadow-soft sm:p-6">
          <dl className="space-y-5">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Role
              </dt>
              <dd className="mt-2 text-sm text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Year
              </dt>
              <dd className="mt-2 text-sm text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Stack
              </dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[color:var(--line)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-mute"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="btn-glow inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium"
            >
              View live
              <GoArrowUpRight size={18} />
            </Link>
            <Link
              href={project.sourceLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-4 py-3 text-sm text-ink shadow-soft transition hover:border-accent/40 hover:text-accent"
            >
              Source code
            </Link>
          </div>
        </aside>
      </div>

      <div className="mt-16 grid gap-4 border-t border-[color:var(--line)] pt-8 sm:grid-cols-2">
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group rounded-xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.02)] p-5 shadow-soft transition hover:border-accent/35 hover:bg-[color:var(--accent-soft)]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              Previous
            </p>
            <p className="mt-2 text-xl font-medium tracking-tight text-ink group-hover:text-accent">
              {previous.name}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group rounded-xl border border-[color:var(--line)] bg-[rgba(255,255,255,0.02)] p-5 text-right shadow-soft transition hover:border-accent/35 hover:bg-[color:var(--accent-soft)]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              Next
            </p>
            <p className="mt-2 text-xl font-medium tracking-tight text-ink group-hover:text-accent">
              {next.name}
            </p>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
