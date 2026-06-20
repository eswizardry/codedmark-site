import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    summary: z.string(),
    outcomes: z.array(z.string()).default([]),
    stack: z.array(z.string()),
    previewType: z.enum(['phone', 'terminal', 'window', 'browser']),
    screenshot: z.string().optional(),
    link: z.string().url().optional(),
    linkLabel: z.string().default('Visit site'),
    order: z.number(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['en', 'th', 'th-en']).default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, blog };
