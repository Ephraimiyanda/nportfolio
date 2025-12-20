import { siIcon } from "@/types";

export type SiteConfig = typeof siteConfig;
export type Skill = {
  name: string;
  icon: siIcon;
  color?: string;
};

export const siteConfig = {
  name: "Ephraim iyanda | portfolio",
  description:
    "A passionate Frontend Developer building performant, visually-stunning web interfaces and web experience experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/#Projects",
    },
    {
      label: "About",
      href: "/#about-me",
    },
    {
      label: "Skills",
      href: "/#skills",
    },
    {
      label: "Contact",
      href: "/#contact-me",
    },
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
      { name: "Javascript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "Typescript", icon: "SiTypescript", color: "#3178C6" },
      { name: "React", icon: "SiReact", color: "#61DBFB" },
      { name: "Next.js", icon: "SiNextdotjs", color: "" },
      { name: "Next UI", icon: "SiNextui", color: "" },
      { name: "Tailwindcss", icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "NodeJs", icon: "SiNodedotjs", color: "#339933" },
      { name: "Express", icon: "SiExpress", color: "" },
      { name: "MongoDb", icon: "SiMongodb", color: "#47A248" },
    ] as Skill[],
  },
  projects: [
    {
      name: "Z-store",
      description:
        "An e-commerce platform which creativity with craftsmanshipcreates fashion that transcends trends and stands the test of time",
      liveLink: "https://z-stores.vercel.app/",
      sourceLink: "https://github.com/Ephraimiyanda/z-store",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1766180153/lfxxusljpfnb0gfki3eh.png",
    },
    {
      name: "Realswitch",
      description:
        "A real estate marketplace for buying, renting and selling homes",
      liveLink: "https://realswitch.netlify.app/",
      sourceLink: "https://github.com/Ephraimiyanda/Real-estate",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1760829583/usje6svm7mt3mekp6kqs.png",
    },
    {
      name: "Kasuwa",
      description:
        "An e-commerce platform for purchasing and selling agro products",
      liveLink: "https://e-gona.vercel.app/",
      sourceLink: "https://github.com/Ephraimiyanda/e-gona",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1760829585/egflnuzglvfigyekmqgz.png",
    },
    {
      name: "ChatAva",
      description: "The landing page for chatAva platform",
      liveLink: "https://chat-ava-web.vercel.app/",
      sourceLink:
        "https://github.com/ShedrachJonah11/ChatAVA-web/tree/Ephraims-branch",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1760829583/ninpreq7twdyva826zsm.png",
    },
    {
      name: "GetLinked",
      description: "get linked hackathon",
      liveLink: "https://getlinked-hackathon-ephraim.netlify.app/",
      sourceLink: "https://github.com/Ephraimiyanda/getLinkedHackathon",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1760829583/hmkztnpwnj7ypylmnwlr.png",
    },
    {
      name: "Evently",
      description:
        "The landing page for evently ,an event planning application",
      liveLink: "https://evently-sable-two.vercel.app/",
      sourceLink: "https://github.com/Ephraimiyanda/evently",
      imageUrl:
        "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1760830149/zki7zgisuu2jtx3iggmv.png",
    },
  ],
  aboutImg:
    "https://res.cloudinary.com/dg0kdnwt1/image/upload/v1761279203/bdfipp6dcuptjf5sjtrt.jpg",
  profileImg:
    "https://res.cloudinary.com/dg0kdnwt1/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1761279205/yhqqskf40vrljvbdmifv.jpg",
  meetingLink: "https://calendly.com/iyandaephraim/30min",
  resume:
    "https://drive.google.com/file/d/1gxzkmANXy2Zhi-V3liI2A_JZ3lKIgoKF/view",
};
