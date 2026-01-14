import { defineCollection, z } from 'astro:content';

// Projects collection schema
const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      thumbnail: image(), // Custom thumbnail image (Astro optimizes automatically)
      tags: z.array(z.string()),
      date: z.coerce.date(),
      order: z.number(), // For sorting on portfolio page
      published: z.boolean(),
      // Optional fields for detailed project pages
      client: z.string().optional(),
      role: z.string().optional(),
      timeline: z.string().optional(),
      liveUrl: z.string().url().optional(),
    }),
});

// Export collections for TypeScript inference
export const collections = { projects };
