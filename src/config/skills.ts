export interface SkillItem {
    /** Display name of the skill */
    name: string;
    /** Icon id from https://skillicons.dev (see the full list in their README) */
    icon: string;
}

export interface SkillCategory {
    title: string;
    skills: SkillItem[];
}

// TODO: Adjust categories and skills to match your real stack.
// Icon ids come from https://skillicons.dev — e.g. "python", "js", "react".
export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: "python" },
            { name: "JavaScript", icon: "js" },
            { name: "TypeScript", icon: "ts" },
            { name: "C", icon: "c" },
        ],
    },
    {
        title: "Web & Frameworks",
        skills: [
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
            { name: "React", icon: "react" },
            { name: "Astro", icon: "astro" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Node.js", icon: "nodejs" },
        ],
    },
    {
        title: "Data & Databases",
        skills: [
            { name: "MySQL", icon: "mysql" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "PostgreSQL", icon: "postgres" },
        ],
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "VS Code", icon: "vscode" },
            { name: "Linux", icon: "linux" },
            { name: "Docker", icon: "docker" },
        ],
    },
];
