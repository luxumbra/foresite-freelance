type Technology = {
  name: string;
  label: string;
};
type LogoWall = {
  size: "large" | "medium" | "small";
  tech: Technology[];
  slider?: boolean;

};
const technologies: Technology[] = [
  { name: "css3", label: "CSS3" },
  { name: "html5", label: "HTML5" },
  { name: "javascript", label: "JavaScript" },
  {
    label: "TypeScript",
    name: "typescript",
  },
  {
    label: "React",
    name: "react",
  },
  {
    label: "AstroJS",
    name: "astro",
  },
  { name: "nextjs", label: "NextJS" },
  {
    label: "Wordpress",
    name: "wordpress",
  },
  {
    label: "PHP",
    name: "php",
  },
  {
    label: "TailwindCSS",
    name: "tailwindcss",
  },
  {
    label: "ChakraUI",
    name: "chakraui",
  },
  { name: "supabase", label: "Supabase" },
  {
    label: "Web3 / Blockchain",
    name: "blockchain",
  },
  { name: "api", label: "API" },
  { name: "git", label: "Git" },
  { name: "bash", label: "Bash" },
  { name: "nodejs", label: "NodeJS" },
  { name: "graphic-design", label: "Graphic Design" },
  {
    label: "Figma",
    name: "figma",
  },
  {
    label: "FigJam",
    name: "figjam",
  },
  {
    label: "React Three Fiber",
    name: "r3f",
  },
  {
    label: "Vite",
    name: "vite",
  },
  {
    label: "Vercel",
    name: "vercel",
  },
  {
    label: "Netlify",
    name: "netlify",
  },
  {
    label: "Fleek",
    name: "fleek",
  },
  {
    label: "ThirdWeb",
    name: "thirdweb",
  },
  {
    label: "Docusaurus",
    name: "docusaurus",
  },
  {
    label: "Gatsby",
    name: "gatsby",
  },
  {
    label: "Markdown",
    name: "markdown",
  },
  {
    label: "Canva",
    name: "canva",
  },
  {
    label: "ThemeUI",
    name: "themeui",
  },
  {
    label: "React Spring",
    name: "spring",
  },
];

export { technologies };
export type { Technology, LogoWall };
