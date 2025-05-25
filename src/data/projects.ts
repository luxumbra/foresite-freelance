export type ProjectStatus = "production" | "development" | "archived";
export type Project = {
  title: string;
  shortTitle?: string;
  slug: string;
  role: string;
  shortDescription: string;
  description: string;
  image?: ImageMetadata;
  github?: string;
  figma?: string;
  link?: string;
  tech: string[];
  status: ProjectStatus;
  year: number;
};
