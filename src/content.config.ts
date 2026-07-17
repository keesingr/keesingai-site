import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const perspectives = defineCollection({
  loader: glob({
    base: "./src/content/perspectives",
    pattern: "**/*.{md,mdx}",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(["Executive Brief", "Essay", "Post"]),
    order: z.number(),
    publishedDate: z.coerce.date().optional(),
    originalSource: z.string().optional(),
    originalUrl: z.url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  perspectives,
};