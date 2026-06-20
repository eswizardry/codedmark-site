import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    previewType: z.enum(['phone', 'terminal', 'window', 'browser']),
    order: z.number(),
  }),
});

export const collections = { work };
