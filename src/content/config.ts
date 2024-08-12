import { string } from 'astro/zod';
import { defineCollection, z } from 'astro:content';

const jobsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        name: z.string(),
        title: z.string(),
        text: z.string(),
        logo: image(),
        year_start: z.number(),
        year_end: z.number(),
        url: z.string(),
        content: z.array(z.string()),
      }),
});

const studiesCollection = defineCollection({
    schema: ({ image }) => z.object({
        name: z.string(),
        title: z.string(),
        text: z.string(),
        logo: image(),
        year: z.number(),
        url: z.string(),
        content: z.array(z.string()),
    })
})

export const collections = {
    'jobs': jobsCollection,
    'studies': studiesCollection,
};