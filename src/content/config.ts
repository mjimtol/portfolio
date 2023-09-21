import { defineCollection, z } from 'astro:content';

const jobsCollection = defineCollection({
    schema: ({ image }) => z.object({
        name: z.string(),
        text: z.string(),
        logo: image(),
        year: z.number(),
      }),
});

export const collections = {
    jobs: jobsCollection,
};