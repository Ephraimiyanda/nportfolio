"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
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

const outlineButtonClass =
  "reveal-item rounded-full border-[0.5px] border-black/10 px-4 py-6 text-base transition-[box-shadow,border-color,background-color] duration-250 ease-in-out hover:shadow-sm hover:shadow-black/30 sm:px-6 sm:text-lg dark:border-white/15 dark:hover:shadow-white/40";

const introParts: Array<{ text: string; accent?: boolean }> = [
  { text: "I'm " },
  { text: "Ephraim Iyanda", accent: true },
  { text: ", a passionate " },
  { text: "Frontend Developer", accent: true },
  {
    text: " driven by clean, modern UI and a love of web animations. I build ",
  },
  { text: "performant, visually-stunning", accent: true },
  { text: " interfaces." },
];

function IntroCopy() {
  return introParts.flatMap((part, partIndex) =>
    part.text.split(/(\s+)/).map((token, tokenIndex) => {
      const key = `${partIndex}-${tokenIndex}`;

      if (!token.trim()) {
        return <span key={key}>{token}</span>;
      }

      return (
        <span
          key={key}
          className={
            part.accent
              ? "inline-block whitespace-nowrap text-black dark:text-white"
              : "inline-block whitespace-nowrap"
          }
        >
          {Array.from(token).map((char, charIndex) => (
            <span key={charIndex} className="intro-char inline-block">
              {char}
            </span>
          ))}
        </span>
      );
    }),
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
      },
      onComplete: () => {
        gsap.set(targets, { clearProps: "transform" });
      },
    },
  );
}

export default function Home() {
  const introRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLUListElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutActionsRef = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = introRef.current;
      const projects = projectsRef.current;
      const stack = stackRef.current;
      const about = aboutRef.current;
      const actions = aboutActionsRef.current;

      if (intro) {
        reveal(intro.querySelectorAll(".intro-char"), {
          trigger: intro,
          start: "top 80%",
          from: { y: 20 },
          to: {
            y: 0,
            duration: 0.3,
            stagger: 0.02,
            ease: "power2.out",
          },
        });
      }

      if (projects?.children.length) {
        reveal(projects.children, {
          trigger: projects,
          start: "top 85%",
          from: { y: 40 },
          to: {
            y: 0,
            duration: 0.9,
            stagger: 0.25,
            ease: "power2.out",
          },
        });
      }

      if (stack?.children.length) {
        reveal(stack.children, {
          trigger: stack,
          start: "top 85%",
          from: { x: -30 },
          to: {
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
        });
      }

      if (about) {
        reveal(about.querySelectorAll("p"), {
          trigger: about,
          start: "top 85%",
          from: { y: 30 },
          to: {
            y: 0,
            duration: 0.8,
            stagger: 0.25,
            ease: "power3.out",
          },
        });
      }

      if (actions?.children.length) {
        reveal(actions.children, {
          trigger: actions,
          start: "top 90%",
          from: { scale: 0.9 },
          to: {
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
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

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 py-8 md:py-10">
      <section className="w-full py-2">
        <h1
          ref={introRef}
          className="max-w-[43rem] break-keep text-2xl font-semibold leading-relaxed text-default-500"
        >
          <IntroCopy />
        </h1>
      </section>

      <section className="w-full py-4 sm:py-6" id="projects">
        <h2 className="mb-8 py-4 text-2xl font-bold">Projects_</h2>
        <div
          ref={projectsRef}
          className="flex w-full flex-col items-center justify-between gap-4 py-2 sm:grid sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.projects.map((project) => (
            <ProjectCard
              key={project.name}
              className="reveal-item"
              description={project.description}
              imgUrl={project.imageUrl}
              liveLink={project.liveLink}
              name={project.name}
            />
          ))}
        </div>
      </section>

      <section className="w-full overflow-x-clip py-4 sm:py-6" id="skills">
        <h3 className="mb-8 py-4 text-2xl font-bold">Stack_</h3>
        <ul
          ref={stackRef}
          className="flex flex-col flex-wrap gap-4 sm:flex-row sm:gap-8"
        >
          {siteConfig.skills.technicalSkills.map((skill) => (
            <li
              key={skill.name}
              className="reveal-item flex items-center justify-normal gap-4 sm:gap-3"
            >
              <SimpleIcon color={skill.color} iconName={skill.icon} size={25} />
              <span className="text-default-500">{skill.name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="w-full py-4 sm:py-6" id="about">
        <h3 className="mb-8 py-4 text-2xl font-bold">My Story_</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-normal gap-10 md:flex-row">
            <Image
              alt="Ephraim Iyanda"
              className="float-left h-full max-h-[300px] w-[180px]"
              radius="none"
              src={siteConfig.aboutImg}
            />
            <div className="flex flex-col justify-between gap-4 md:w-1/2">
              <div ref={aboutRef} className="flex w-full flex-col gap-4">
                <p className="reveal-item text-xl text-default-500">
                  The fascination of being able to create things through coding
                  piqued my interest. I realised I could just do things. That
                  idea became the inspiration that’s carried me through my web
                  development career.
                </p>
                <p className="reveal-item text-xl text-default-500">
                  When I&apos;m not coding, you can find me on the basketball
                  court — either watching or playing. I will break your ankle,
                  don&apos;t play with me. Arsenal for life. I also love art and
                  standup comedy.
                </p>
              </div>
              <div
                ref={aboutActionsRef}
                className="flex items-start justify-normal gap-4"
              >
                <Button
                  as={Link}
                  className={outlineButtonClass}
                  endContent={<GoArrowUpRight size={24} />}
                  href="mailto:iyandaephraim@gmail.com"
                  variant="bordered"
                >
                  Let’s talk
                </Button>
                <Button
                  as={Link}
                  className={outlineButtonClass}
                  endContent={<PiReadCvLogo size={24} />}
                  href={siteConfig.resume}
                  variant="bordered"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-4 sm:py-6">
        <h4 className="mb-8 py-4 text-2xl font-bold">Experience_</h4>
        <ExperienceTimeline />
      </section>

      <section className="mb-10 w-full py-4 sm:py-6" id="contact">
        <h5 className="mb-4 py-4 text-center text-2xl font-bold">
          Want to talk?
        </h5>
        <ContactForm />
      </section>
    </div>
  );
}
