type Technology = {
  name: string;
  label: string;
  description?: string;
};
type LogoWall = {
  size: "large" | "medium" | "small";
  tech: Technology[];
  slider?: boolean;
  fullWidth?: boolean;
};
const technologies: Technology[] = [
  { name: "css3", label: "CSS3" },
  { name: "html5", label: "HTML5" },
  { name: "javascript", label: "JavaScript" },
  {
    name: "typescript",
    label: "TypeScript",
    description: "Open source programming language",
  },
  {
    name: "react",
    label: "React",
    description: "Open source JavaScript library for building user interfaces",
  },
  {
    name: "astro",
    label: "AstroJS",
    description: "Open source static site generator",
  },
  {
    name: "nextjs",
    label: "NextJS",
    description: "Open source React framework",
  },
  {
    name: "medusajs",
    label: "MedusaJS",
    description: "Open source e-commerce platform",
  },
  {
    name: "wordpress",
    label: "Wordpress",
    description: "Open source content management system",
  },
  {
    name: "php",
    label: "PHP",
  },
  {
    name: "tailwindcss",
    label: "TailwindCSS",
    description: "Open source CSS framework",
  },
  {
    name: "redis",
    label: "Redis",
    description: "Open source in-memory database, used for caching",
  },
  {
    name: "postgres",
    label: "Postgres",
    description: "Open source relational database",
  },
  {
    name: "chakraui",
    label: "ChakraUI",
    description: "Open source CSS framework",
  },
  {
    name: "supabase",
    label: "Supabase",
    description: "Open source postgres based backend",
  },
  {
    name: "blockchain",
    label: "Web3 / Blockchain",
    description: "Open source tech stack for decentralized applications",
  },
  { name: "api", label: "API" },
  { name: "git", label: "Git" },
  { name: "bash", label: "Bash" },
  { name: "nodejs", label: "NodeJS" },
  { name: "graphic-design", label: "Graphic Design" },
  {
    name: "figma",
    label: "Figma",
  },
  {
    name: "figjam",
    label: "FigJam",
  },
  {
    name: "r3f",
    label: "React Three Fiber",
    description: "Open source React based Three.js library",
  },
  {
    name: "vite",
    label: "Vite",
  },
  {
    name: "dokploy",
    label: "Dokploy",
    description:
      "Open source SaaS for Vercel like deployments and application management",
  },
  {
    name: "docker",
    label: "Docker",
    description: "Open source container platform",
  },
  {
    name: "vercel",
    label: "Vercel",
  },
  {
    name: "netlify",
    label: "Netlify",
  },
  {
    name: "fleek",
    label: "Fleek",
  },
  {
    name: "thirdweb",
    label: "ThirdWeb",
  },
  {
    name: "cloudflare",
    label: "Cloudflare Domains",
  },
  {
    name: "docusaurus",
    label: "Docusaurus",
  },
  {
    name: "gatsby",
    label: "Gatsby",
  },
  {
    name: "markdown",
    label: "Markdown",
  },
  {
    name: "canva",
    label: "Canva",
  },
  {
    name: "chakraui",
    label: "ChakraUI",
  },
  {
    name: "spring",
    label: "React Spring",
  },
];

export { technologies };
export type { Technology, LogoWall };
