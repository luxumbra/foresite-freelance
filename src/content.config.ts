import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**.*md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      role: z.string(),
      shortDescription: z.string(),
      tech: z.array(z.string()),
      status: z.enum(["production", "development", "archived"]),
      github: z.string().optional(),
      figma: z.string().optional(),
      link: z.string().optional(),
      image: image(),
    }),
});

export const collections = {
  projects,
};
