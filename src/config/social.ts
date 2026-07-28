import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/anikdascodes",
        linkTitle: `Follow Anik Das on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:anik.das.data.science@gmail.com",
        linkTitle: `Send an email to Anik`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/anikdascodes/",
        linkTitle: `Anik Das on LinkedIn`,
        isActive: true,
    },
    {
        name: "Twitter",
        href: "https://x.com/AnikCodes",
        linkTitle: `Follow Anik Das on X`,
        isActive: true,
    },
    {
        name: "Hashnode",
        href: "https://hashnode.com/@codeanik",
        linkTitle: `Read Anik's blog on Hashnode`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    LinkedIn: "LinkedIn",
    Linkedin: "LinkedIn",
    Twitter: "Twitter",
    Hashnode: "Hashnode",
    RSS: "RSS",
};
