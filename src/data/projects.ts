import leal from "../../public/leal.png";
import metagame from "../../public/metagame.png";
import metagamewiki from "../../public/metagame-wiki.png";
import metafest from "../../public/metafest.png";
import metabuilders from "../../public/metabuilders.png";
export type ProjectStatus = "production" | "development" | "archived";
export type Project = {
  title: string;
  slug: string;
  role: string;
  shortDescription: string;
  description: string;
  image?: ImageMetadata;
  github?: string;
  figma?: string;
  link?: string;
  // tags: string[];
  tech: string[];
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    title: "MetaFest: Croatia",
    slug: "metafest-croatia",
    role: "Full Stack Developer",
    shortDescription:
      "Event site for MetaFest: Croatia, built with Astro and Tailwind. Integrated Google Calendar syncing, dual payment systems (crypto + card), and real-time updates via a custom backend.",
    description:
      "Built and deployed the official website for MetaFest: Croatia, a Web3 community event hosted by MetaGame DAO. The site was developed using Astro and TailwindCSS, and optimised for speed and clarity with static site generation.\n\nTo support a dynamic and evolving schedule, I integrated the Google Calendar API via a custom Node.js backend, hosted securely on an encrypted remote server and managed with PM2. The backend fetched updated schedule data every minute, automatically triggering a rebuild and redeploy of the static frontend, ensuring attendees always saw the most up-to-date speaker and event information.\n\nThe site also featured dual-mode ecommerce integration: attendees could purchase tickets via a Croatian card processor or using crypto through a wallet connection. Both flows were designed to offer a consistent and user-friendly experience, regardless of payment method.",
    github: "https://github.com/luxumbra/mf-irl-astro",
    tech: [
      "AstroJS",
      "TailwindCSS",
      "Node",
      "APIs",
      "Fleek",
      "PM2",
      "Git",
      "TypeScript",
    ],
    image: metafest as ImageMetadata,
    link: "https://metafest.xyz",
    status: "archived",
  },
  {
    slug: "lealcarbon",
    title: "LEALcarbon Sustainability App",
    role: "Frontend Dev & UX/UI Designer",
    shortDescription:
      "Multi-step onboarding and sustainability tracking UI with dark mode.",
    description:
      "Worked on a React-based sustainability app designed to help businesses track and manage their carbon footprint. Built onboarding flows, dashboard components, and contributed to visual theme and UX.",
    tech: ["React", "TypeScript", "Astro", "Figma", "TailwindCSS"],
    figma: "https://frst.uk/leal",
    link: "https://frst.uk/leal-preview",
    image: leal as ImageMetadata,
    status: "archived",
  },
  {
    slug: "metagame-wiki",
    title: "MetaGame Wiki",
    role: "Dev, Designer, Maintainer (OSS)",
    shortDescription: "Open-source knowledge base for a community DAO.",
    description:
      "Maintained and developed the frontend of the MetaGame wiki, with a focus on usability, structure, and collaborative editing.",
    tech: ["React", "Markdown", "GitHub Pages"],
    github: "https://github.com/MetaFam/metagame-wiki",
    link: "https://wiki.metagame.wtf/",
    image: metagamewiki as ImageMetadata,
    status: "archived",
  },
  {
    slug: "metagame",
    title: "MetaGame Community Platform",
    role: "Frontend Dev, Designer & OSS Contributor",
    shortDescription:
      "Contributed to the design and frontend of MetaGame, a gamified Web3 community hub.",
    description:
      "MetaGame is a decentralized Web3 community project that blends social coordination with game-like mechanics. I worked on the design and frontend for several key areas, including the onboarding experience, visual style, and community tools.\n\nMy contributions included improving layout, styling and accessibility across pages, refactoring React components, and helping maintain visual consistency. I also collaborated with other contributors on content structure and contributed to the MetaGame Wiki for documentation. The project was fully open-source and driven by a global contributor network.",
    tech: ["React", "Typescript", "ChakraUI", "Github", "Figma", "Web3"],
    github: "https://github.com/MetaFam/TheGame",
    link: "https://metagame.wtf",
    image: metagame as ImageMetadata,
    status: "archived",
  },
  {
    slug: "meta-builders",
    title: "MetaBuilders Website",
    role: "Dev & Design",
    shortDescription:
      "Community-focused web3 site built with full design/dev control.",
    description:
      "Designed and developed a marketing and info site for MetaBuilders – a web3 community. Created component architecture, responsive layouts, and brand visuals.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Figma"],
    github: "https://github.com/luxumbra/meta-builders-website",
    image: metabuilders as ImageMetadata,
    status: "archived",
  },
  {
    slug: "array-finance",
    title: "Array Finance Website",
    role: "Frontend Dev",
    shortDescription:
      "Landing site for a DeFi protocol with fast-loading static pages.",
    description:
      "Implemented the frontend for a DeFi project using modern SSR tooling. Designed for performance and fast onboarding.",
    tech: ["React", "TypeScript", "Astro", "Vite"],
    github: "https://github.com/luxumbra/array-finance-website",
    // image: "",
    status: "archived",
  },
];
