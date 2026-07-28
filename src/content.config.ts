import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const bio = defineCollection({
    loader: glob({ pattern: "bio.md", base: "./src/content" }),
    schema: z.object({
        name: z.string(),
        avatar: z.string(),
        shortBio: z.string().optional(),
        institution: z.string().optional(),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        external_url: z.string().optional(),
        image: z.string().optional(),
    }),
});

const education = defineCollection({
    loader: glob({ pattern: "education.md", base: "./src/content" }),
    schema: z.object({
        education: z.array(z.object({
            degree: z.string(),
            institution: z.string(),
            period: z.string(),
            description: z.string().optional(),
            logo: z.string().optional(),
        })).optional(),
        courses: z.array(z.object({
            name: z.string(),
            provider: z.string(),
            year: z.string().optional(),
            url: z.string().optional(),
            description: z.string().optional(),
        })).optional(),
    }),
});

export const collections = {
    'bio': bio,
    'projects': projects,
    'education': education,
};
