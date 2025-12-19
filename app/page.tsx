"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";
import { ProjectCard } from "@/components/project-card";
import { SimpleIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import ExperienceTimeline from "@/components/experience-tl";
import { Button } from "@heroui/button";
import { PiReadCvLogo } from "react-icons/pi";
import { Image } from "@heroui/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import WelcomeLoader from "@/components/welcomeScreen";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const introTextRef = useRef<HTMLParagraphElement | null>(null);
  const aboutTextRef = useRef<HTMLDivElement | null>(null);
  const projectCardsRef = useRef<HTMLDivElement | null>(null);
  const stackListRef = useRef<HTMLUListElement | null>(null);
  const aboutButtonsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!introTextRef.current) return;

    // Select only text nodes (not existing <span> tags)
    const textNodes: ChildNode[] = [];
    const walker = document.createTreeWalker(
      introTextRef.current,
      NodeFilter.SHOW_TEXT
    );
    let node: Node | null;
    //@ts-ignore
    while ((node = walker.nextNode())) textNodes.push(node);

    // Wrap each word, then each letter inside it
    textNodes.forEach((textNode) => {
      const text = textNode.textContent || "";
      const fragment = document.createDocumentFragment();

      text.split(/(\s+)/).forEach((word) => {
        if (word.trim() === "") {
          // Keep whitespace as-is (so wrapping can happen)
          fragment.appendChild(document.createTextNode(word));
          return;
        }

        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block"; // allows word spacing
        wordSpan.style.whiteSpace = "pre"; // keep spaces in word

        word.split("").forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.textContent = char;
          charSpan.style.display = "inline-block"; // animateable
          wordSpan.appendChild(charSpan);
        });

        fragment.appendChild(wordSpan);
      });

      textNode.parentNode?.replaceChild(fragment, textNode);
    });

    // Animate all letter spans
    const letters = introTextRef.current.querySelectorAll("span > span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: introTextRef.current,
          start: "top 80%",
        },
      }
    );

    // About Text Stagger (on scroll)
    if (aboutTextRef.current) {
      const paragraphs = aboutTextRef.current.querySelectorAll("p");
      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: aboutTextRef.current,
            start: "top 85%",
          },
        }
      );
    }
    // Project cards scroll animation
    if (projectCardsRef.current) {
      gsap.fromTo(
        projectCardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: projectCardsRef.current,
            start: "top 85%",
          },
        }
      );
    }

    // Stack list stagger animation
    if (stackListRef.current) {
      gsap.fromTo(
        stackListRef.current.children,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: stackListRef.current,
            start: "top 85%",
          },
        }
      );
    }

    // About buttons fade and scale in
    if (aboutButtonsRef.current) {
      gsap.fromTo(
        aboutButtonsRef.current.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: aboutButtonsRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
      {/* <WelcomeLoader /> */}
      {/* Intro section */}
      <section className="w-full py-2">
        <h1>
          <div className="flex justify-start w-full">
            <div className="max-w-[43rem] w-full">
              <p
                ref={introTextRef}
                className="text-2xl text-default-500 font-semibold leading-relaxed break-keep"
              >
                I&apos;m{" "}
                <span className="text-black dark:text-white">
                  Ephraim Iyanda
                </span>
                , a passionate{" "}
                <span className="text-black dark:text-white">
                  Frontend Developer
                </span>{" "}
                driven by clean, modern UI and a love of web animations. I build{" "}
                <span className="text-black dark:text-white">
                  performant, visually-stunning
                </span>{" "}
                interfaces.
              </p>
            </div>
          </div>
        </h1>
      </section>

      {/* Project section */}
      <section id="projects" className="w-full py-4 sm:py-6">
        <h2 className="text-2xl font-bold py-4 mb-8">Projects_</h2>
        <div
          ref={projectCardsRef}
          className="flex flex-col justify-between items-center sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-4 py-2 w-full"
        >
          {siteConfig.projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              imgUrl={project.imageUrl}
              description={project.description}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </section>

      {/* Skills section */}
      <section id="skills" className="w-full py-4 sm:py-6">
        <h3 className="text-2xl font-bold py-4 mb-8">Stack_</h3>
        <ul
          ref={stackListRef}
          className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8"
        >
          {siteConfig.skills.technicalSkills.map(
            (skill) =>
              skill && (
                <li
                  key={skill.name}
                  className="flex justify-normal items-center gap-4 sm:gap-3"
                >
                  <SimpleIcon
                    iconName={skill.icon}
                    size={25}
                    color={skill.color}
                  />
                  <span className="text-default-500">{skill.name}</span>
                </li>
              )
          )}
        </ul>
      </section>

      {/* About section */}
      <section id="about" className="w-full py-4 sm:py-6">
        <h3 className="text-2xl font-bold py-4 mb-8">My Story_</h3>
        <div className="flex flex-col gap-4">
          <div className="flex justify-normal gap-10 flex-col md:flex-row">
            <Image
              className="h-full max-h-[300px] w-[180px] float-left"
              src={siteConfig.aboutImg}
              radius="none"
              alt="about image"
            />
            <div className="flex justify-between flex-col gap-4 md:w-1/2">
              <div ref={aboutTextRef} className="flex flex-col gap-4 w-full">
                <p className="text-default-500 text-xl">
                  The fascination of being able to create things through coding
                  piqued my interest. I realised I could just do things. That
                  idea became the inspiration that’s carried me through my web
                  development career.
                </p>
                <p className="text-default-500 text-xl">
                  When I&apos;m not coding, you can find me on the basketball
                  court — either watching or playing. I will break your ankle,
                  don&apos;t play with me. Arsenal for life. I also love art and
                  standup comedy.
                </p>
              </div>
              <div ref={aboutButtonsRef}>
                <div className="flex items-start gap-4 justify-normal">
                  <Button
                    as={Link}
                    href="mailto:iyandaephraim@gmail.com"
                    endContent={<GoArrowUpRight size={24} />}
                    variant="bordered"
                    className="px-4 sm:px-6 rounded-full text-base sm:text-lg py-6 border-black/10 dark:border-white/15 border-[0.5px] dark:hover:shadow-white/40 hover:shadow-black/30 hover:shadow-sm ease-in-out transition-all duration-250"
                  >
                    Let’s talk
                  </Button>
                  <Button
                    as={Link}
                    endContent={<PiReadCvLogo size={24} />}
                    href={siteConfig.resume}
                    variant="bordered"
                    className="px-4 sm:px-6 rounded-full text-base sm:text-lg py-6 border-black/10 dark:border-white/15 border-[0.5px] dark:hover:shadow-white/40 hover:shadow-black/30 hover:shadow-sm ease-in-out transition-all duration-250"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section className="w-full py-4 sm:py-6">
        <h4 className="text-2xl font-bold py-4 mb-8">Experience_</h4>
        <ExperienceTimeline />
      </section>

      {/* Contact section */}
      <section id="contact" className="w-full py-4 sm:py-6 mb-10">
        <h5 className="text-2xl text-center font-bold py-4 mb-4">
          Want to talk?
        </h5>
        <ContactForm />
      </section>
    </div>
  );
}
