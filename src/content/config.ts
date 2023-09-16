import { defineCollection, z } from 'astro:content';

const jobsCollection = defineCollection({
    schema: z.object({
        name: z.string(),
        text: z.string(),
        image: z.string(),
    })
});

export const collections = {
    jobs: jobsCollection,
};