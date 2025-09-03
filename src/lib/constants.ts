import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/avatar.png';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || '',
  author: {
    avatar,
    name: 'Anik Das',
    headline: 'Data Science Graduate · GenAI & LLMs',
    username: 'anikdascodes',
    location: 'Kolkata, West Bengal, India',
  },
  seo: {
    title: 'Anik Das — Data Science Graduate',
    description: 'BSc Data Science graduate skilled in Python, SQL, ML, Analytics, and data visualization. Passionate about building AI-powered solutions with LLMs.',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@AnikCodes'
    },
    robots: 'index, follow',
  }
};