"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { PiReadCvLogo } from "react-icons/pi";

import { ContactForm } from "@/components/contact-form";
import ExperienceTimeline from "@/components/experience-tl";
import { SimpleIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function SectionHeading({
  index,
  eyebrow,
  title,
  copy,
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </span>
          <span className="h-px flex-1 bg-[color:var(--line)] sm:hidden" />
          <span className="rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-2.5 py-1 font-mono text-[11px] text-faint shadow-soft">
            {index}
          </span>
        </div>
        <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {copy ? (
          <p className="mt-3 max-w-xl text-base leading-relaxed text-mute">
            {copy}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function reveal(
  targets: gsap.TweenTarget,
  {
    trigger,
    start,
    from,
    to,
  }: {
    trigger: Element;
    start: string;
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
  },
) {
  gsap.fromTo(
    targets,
    { opacity: 0, ...from },
    {
      opacity: 1,
      ...to,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        gsap.set(targets, { clearProps: "transform,willChange" });
      },
    },
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLUListElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      const stack = stackRef.current;
      const story = storyRef.current;
      const experience = experienceRef.current;

      if (hero) {
        gsap.fromTo(
          hero.querySelectorAll(".intro-char"),
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.02,
            ease: "power2.out",
            delay: 0.05,
          },
        );

        gsap.fromTo(
          hero.querySelectorAll(".hero-fade"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.28,
          },
        );

        gsap.fromTo(
          hero.querySelectorAll(".hero-panel"),
          { opacity: 0, y: 28, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.45,
            onComplete: () => {
              gsap.set(hero.querySelectorAll(".hero-panel"), {
                clearProps: "transform",
              });
            },
          },
        );
      }

      if (stack?.children.length) {
        reveal(stack.children, {
          trigger: stack,
          start: "top 85%",
          from: { y: 18 },
          to: {
            y: 0,
            duration: 0.55,
            stagger: 0.05,
            ease: "power2.out",
          },
        });
      }

      if (story) {
        reveal(story.querySelectorAll(".reveal-item"), {
          trigger: story,
          start: "top 85%",
          from: { y: 24 },
          to: {
            y: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: "power3.out",
          },
        });
      }

      if (experience) {
        reveal(experience.querySelectorAll(".reveal-item"), {
          trigger: experience,
          start: "top 85%",
          from: { y: 18 },
          to: {
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
        });
      }

      const workItems = document.querySelectorAll("#work .reveal-item");

      if (workItems.length) {
        reveal(workItems, {
          trigger: document.querySelector("#work") as Element,
          start: "top 80%",
          from: { y: 22 },
          to: {
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
          },
        });
      }
    });

    document.documentElement.classList.add("gsap-ready");

    return () => {
      ctx.revert();
      document.documentElement.classList.remove("gsap-ready");
    };
  }, []);

  const brand = "Ephraim Iyanda";
  const focusTags = ["UI Design", "Web Motion", "React", "Next.js"];

  return (
    <div className="flex w-full flex-col gap-24 pb-20 pt-4 md:gap-28 md:pb-28 md:pt-8">
      <section
        ref={heroRef}
        className="relative isolate grid min-h-[78vh] items-center gap-10 overflow-hidden pb-10 pt-12 md:min-h-[82vh] md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:pb-16 md:pt-8"
      >
        <div className="soft-orb -left-16 top-10 h-56 w-56 bg-[rgba(202,232,189,0.16)]" />
        <div className="soft-orb bottom-8 right-[35%] h-40 w-40 bg-[rgba(202,232,189,0.08)] md:right-[42%]" />

        <div className="relative z-10 max-w-2xl">
          <div className="hero-fade mb-6 flex flex-wrap gap-2">
            {focusTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-3.5 py-1.5 text-xs text-mute shadow-soft"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-[clamp(3.2rem,9vw,6.4rem)] font-medium leading-[0.9] tracking-[-0.04em] text-ink">
            {brand.split(" ").map((word, wordIndex, words) => (
              <span key={word} className="inline-block whitespace-nowrap">
                {Array.from(word).map((char, charIndex) => (
                  <span
                    key={`${word}-${charIndex}`}
                    className="intro-char inline-block"
                  >
                    {char}
                  </span>
                ))}
                {wordIndex < words.length - 1 ? "\u00A0" : null}
              </span>
            ))}
          </h1>

          <p className="hero-fade mt-6 max-w-xl text-lg leading-relaxed text-mute sm:text-xl">
            I build{" "}
            <span className="font-medium text-ink">performant</span>,{" "}
            <span className="font-medium text-ink">visually sharp</span> web
            experiences — driven by clean UI and thoughtful animation.
          </p>

          <div className="hero-fade mt-8 flex flex-wrap gap-3">
            <Link
              href="/#work"
              className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
            >
              View work
              <GoArrowUpRight size={18} />
            </Link>
            <Link
              href={siteConfig.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-5 py-3 text-sm text-ink shadow-soft transition hover:border-accent/35 hover:text-accent"
            >
              <PiReadCvLogo size={18} />
              Resume
            </Link>
          </div>
        </div>

        <div className="relative z-10 h-[360px] w-full sm:h-[380px] md:h-[400px]">
          <div className="hero-panel float-soft surface absolute left-0 top-2 w-[88%] rounded-[28px] p-5 sm:w-[80%] md:-left-4 md:top-8 md:w-[78%]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              Currently building
            </p>
            <p className="mt-3 text-lg font-medium tracking-tight text-ink sm:text-xl">
              Interfaces that feel quiet, fast, and intentional.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              Product UIs, landing systems, and motion that supports hierarchy
              instead of competing with it.
            </p>
          </div>

          <div className="hero-panel float-soft-delayed surface absolute right-0 top-[11.5rem] w-[90%] rounded-[28px] p-5 sm:w-[84%] md:top-[12.5rem]">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
              Focus
            </p>
            <ul className="space-y-3">
              {[
                "Design systems & product UI",
                "Scroll storytelling & micro-motion",
                "Frontend architecture with React",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_var(--glow)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-28">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Projects with room to breathe."
          copy="Open a card to read the brief, stack, and highlights — then jump to the live build if you want."
        />
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              index={index}
              project={project}
            />
          ))}
        </div>
      </section>

      <section id="stack" className="scroll-mt-28">
        <SectionHeading
          index="02"
          eyebrow="Stack"
          title="Tools that stay out of the way."
          copy="A focused set of technologies used to ship interfaces that feel fast, clear, and intentional."
        />
        <ul
          ref={stackRef}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {siteConfig.skills.technicalSkills.map((skill) => (
            <li
              key={skill.name}
              className="reveal-item group flex flex-col items-start gap-4 rounded-[22px] border border-[color:var(--line)] bg-[rgba(255,255,255,0.025)] px-4 py-5 shadow-soft transition duration-300 hover:border-accent/30 hover:bg-[color:var(--accent-soft)]"
            >
              <SimpleIcon
                color={skill.color || "currentColor"}
                iconName={skill.icon}
                size={22}
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute transition group-hover:text-ink">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="story" className="scroll-mt-28">
        <SectionHeading
          index="03"
          eyebrow="My story"
          title="Curious enough to just build."
        />
        <div
          ref={storyRef}
          className="grid items-start gap-10 md:grid-cols-[0.75fr_1.25fr]"
        >
          <div className="reveal-item relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[28px] border border-[color:var(--line)] shadow-soft md:max-w-none">
            <Image
              alt="Portrait of Ephraim Iyanda"
              className="object-cover object-[center_20%]"
              fill
              priority
              sizes="(max-width: 768px) 280px, 32vw"
              src={siteConfig.aboutImg}
            />
          </div>
          <div className="flex flex-col gap-6">
            <p className="reveal-item max-w-2xl text-xl leading-relaxed text-mute sm:text-2xl">
              The fascination of being able to create things through coding
              piqued my interest. I realised I could just do things. That idea
              became the inspiration that’s carried me through my web
              development career.
            </p>
            <p className="reveal-item max-w-2xl text-lg leading-relaxed text-mute">
              When I’m not coding, you can find me on the basketball court —
              either watching or playing. I will break your ankle, don’t play
              with me. Arsenal for life. I also love art and standup comedy.
            </p>
            <div className="reveal-item flex flex-wrap gap-3 pt-2">
              <Link
                href="mailto:iyandaephraim@gmail.com"
                className="btn-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              >
                Let’s talk
                <GoArrowUpRight size={18} />
              </Link>
              <Link
                href={siteConfig.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-5 py-3 text-sm text-ink shadow-soft transition hover:border-accent/35 hover:text-accent"
              >
                <PiReadCvLogo size={18} />
                Download resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        ref={experienceRef}
        className="scroll-mt-28"
      >
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="Where the craft got sharper."
        />
        <ExperienceTimeline />
      </section>

      <section id="contact" className="scroll-mt-28 pb-8">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Want to talk?"
        />
        <ContactForm />
      </section>
    </div>
  );
}
