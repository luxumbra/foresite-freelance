import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**.*md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortTitle: z.string().optional(),
      slug: z.string(),
      role: z.string(),
      shortDescription: z.string(),
      tech: z.array(z.string()),
      year: z.union([z.string(), z.number()]).optional(),
      status: z.enum(["production", "development", "archived", "active"]),
      github: z.string().optional(),
      figma: z.string().optional(),
      link: z.string().optional(),
      image: image(),
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**.*md", base: "./src/content/testimonials" }),
  schema: () =>
    z.object({
      client: z.string(),
      project: z.string(),
      shortQuote: z.string().optional(),
    }),
});

export const collections = {
  projects,
  testimonials,
};
