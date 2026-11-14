import { siIcon } from "@/types";

export type SiteConfig = typeof siteConfig;

export type Skill = {
  name: string;
  icon: siIcon | "SiCss3" | "SiNextui";
  color?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  tech: string[];
  highlights: string[];
  liveLink: string;
  sourceLink: string;
  imageUrl: string;
};

export const siteConfig = {
  name: "Ephraim Iyanda | Portfolio",
  description:
    "Frontend developer crafting performant, visually stunning interfaces with React, Next.js, and thoughtful motion.",
  url: "https://ephraimiyanda.vercel.app",
  ogImage: "/og-image.png",
  navItems: [
    { label: "Work", href: "/#work" },
    { label: "Stack", href: "/#stack" },
    { label: "Story", href: "/#story" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ],
  links: {
    github: "https://github.com/Ephraimiyanda",
    twitter: "https://x.com/dev_iyanda",
    discord: "https://discord.com/invite/e6YjMKEw",
    linkedIn: "https://www.linkedin.com/in/ephraimiyanda",
  },
  skills: {
    technicalSkills: [
      { name: "HTML", icon: "SiHtml5", color: "#E34F26" },
      { name: "CSS", icon: "SiCss3", color: "#1572B6" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
      { name: "React", icon: "SiReact", color: "#61DBFB" },
      { name: "Next.js", icon: "SiNextdotjs", color: "#FFFFFF" },
      { name: "HeroUI", icon: "SiHeroui", color: "#FFFFFF" },
      { name: "Tailwind", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
      { name: "Express", icon: "SiExpress", color: "#FFFFFF" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    ] as Skill[],
  },
  projects: [
    {
      slug: "z-store",
      name: "Z-store",
      category: "Commerce • Fashion",
      summary:
        "A fashion marketplace where craftsmanship and seasonal collections meet a polished shopping experience.",
      description:
        "Z-store is an e-commerce platform built around enduring style. Product storytelling, collection browsing, and a calm checkout flow sit on a modern React stack so the brand feels premium without feeling heavy.",
      role: "Frontend design & development",
      year: "2025",
      tech: ["Next.js", "React", "Tailwind", "Vercel"],
      highlights: [
        "Collection-led browsing with strong visual hierarchy",
        "Product storytelling tuned for fashion brands",
        "Responsive shopping experience from mobile to desktop",
      ],
      liveLink: "https://z-stores.vercel.app/",
      sourceLink: "https://github.com/Ephraimiyanda/z-store",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1766180153/lfxxusljpfnb0gfki3eh.png",
    },
    {
      slug: "realswitch",
      name: "Realswitch",
      category: "Marketplace • Real Estate",
      summary:
        "A real estate marketplace for discovering homes to buy, rent, or sell with clarity.",
      description:
        "Realswitch brings property discovery into a single marketplace. Listings, search, and decision-making flows are structured so buyers and renters can compare options without noise.",
      role: "Frontend development",
      year: "2024",
      tech: ["React", "CSS", "Netlify"],
      highlights: [
        "Buy, rent, and sell paths in one place",
        "Listing cards that prioritize the property image",
        "Clear marketplace hierarchy for browsing",
      ],
      liveLink: "https://realswitch.netlify.app/",
      sourceLink: "https://github.com/Ephraimiyanda/Real-estate",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1760829583/usje6svm7mt3mekp6kqs.png",
    },
    {
      slug: "kasuwa",
      name: "Kasuwa",
      category: "Agritech • Commerce",
      summary:
        "An agro marketplace for fertilizers and farm inputs with delivery and payment trust built in.",
      description:
        "Kasuwa (e-gona) focuses on plant growth products and farm supplies. Countdown offers, doorstep delivery messaging, and seller-release payment trust make the commerce flow feel safer for buyers.",
      role: "Frontend development",
      year: "2024",
      tech: ["Next.js", "React", "Tailwind"],
      highlights: [
        "Product-focused agro catalog experience",
        "Trust cues around payment release and delivery",
        "Promotional timing surfaces for seasonal offers",
      ],
      liveLink: "https://e-gona.vercel.app/",
      sourceLink: "https://github.com/Ephraimiyanda/e-gona",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1760829585/egflnuzglvfigyekmqgz.png",
    },
    {
      slug: "chatava",
      name: "ChatAva",
      category: "Product • AI Landing",
      summary:
        "A product landing page for ChatAVA, an AI assistant positioned around everyday clarity.",
      description:
        "ChatAva’s marketing surface explains the product vision, packages, and feature tiers. The layout balances device imagery with pricing clarity so visitors understand value before they subscribe.",
      role: "Frontend implementation",
      year: "2024",
      tech: ["Next.js", "React", "Tailwind"],
      highlights: [
        "Vision-led hero with product framing",
        "Feature and package storytelling",
        "Mobile-first device presentation",
      ],
      liveLink: "https://chat-ava-web.vercel.app/",
      sourceLink:
        "https://github.com/ShedrachJonah11/ChatAVA-web/tree/Ephraims-branch",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1760829583/ninpreq7twdyva826zsm.png",
    },
    {
      slug: "getlinked",
      name: "GetLinked",
      category: "Events • Hackathon",
      summary:
        "A campaign site for getlinked Tech Hackathon 1.0 with timeline, rules, and prize narrative.",
      description:
        "GetLinked translates a dense hackathon brief into a digestible landing experience: intro, rules, judging criteria, FAQ, timeline, partners, and prizes. The goal was clarity for participants under event pressure.",
      role: "Frontend development",
      year: "2023",
      tech: ["Next.js", "React", "Netlify"],
      highlights: [
        "Structured sections for rules, judging, and FAQ",
        "Timeline storytelling for registration through demo day",
        "Prize and partner presentation",
      ],
      liveLink: "https://getlinked-hackathon-ephraim.netlify.app/",
      sourceLink: "https://github.com/Ephraimiyanda/getLinkedHackathon",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1760829583/hmkztnpwnj7ypylmnwlr.png",
    },
    {
      slug: "evently",
      name: "Evently",
      category: "SaaS • Event Planning",
      summary:
        "A landing experience for Evently, an all-in-one hub for planning events with less friction.",
      description:
        "Evently positions event planning as a single workspace for guests, tasks, budget, and schedule. The page focuses on advantages, creative collaboration, and responsive support as product promises.",
      role: "Frontend design & development",
      year: "2024",
      tech: ["Next.js", "React", "Vercel"],
      highlights: [
        "Benefit-led sections for planning efficiency",
        "Product narrative for an all-in-one hub",
        "Clean CTA path into the planning story",
      ],
      liveLink: "https://evently-sable-two.vercel.app/",
      sourceLink: "https://github.com/Ephraimiyanda/evently",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1760830149/zki7zgisuu2jtx3iggmv.png",
    },
  ] as Project[],
  experience: [
    {
      company: "Freelance",
      role: "Frontend Developer",
      date: "Dec 2024 – Present",
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
  ],
  aboutImg: "/ephraim-portrait.jpg",
  profileImg: "/ephraim-portrait.jpg",
  meetingLink: "https://calendly.com/iyandaephraim/30min",
  resume:
    "https://drive.google.com/file/d/1gxzkmANXy2Zhi-V3liI2A_JZ3lKIgoKF/view",
};

export function getProjectBySlug(slug: string) {
  return siteConfig.projects.find((project) => project.slug === slug);
}
