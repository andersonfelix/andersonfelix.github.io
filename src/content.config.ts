import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const profile = defineCollection({
  loader: file("src/content/profile.yaml"),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    tagline: z.string(),
    availability: z.string(),
    location: z.string(),
    about: z.array(z.string()),
    email: z.email(),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.url(),
        icon: z.string(),
      }),
    ),
  }),
});

const expertise = defineCollection({
  loader: file("src/content/expertise.yaml"),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  loader: file("src/content/projects.yaml"),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    role: z.string(),
    period: z.string().optional(),
    challenge: z.string(),
    solution: z.string(),
    tags: z.array(z.string()),
    url: z.url().optional(),
  }),
});

const experience = defineCollection({
  loader: file("src/content/experience.yaml"),
  schema: z.object({
    order: z.number(),
    organization: z.string(),
    role: z.string(),
    period: z.string(),
  }),
});

const skills = defineCollection({
  loader: file("src/content/skills.yaml"),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    featured: z.boolean().default(false),
    items: z.array(z.string()),
  }),
});

export const collections = { profile, expertise, projects, experience, skills };
