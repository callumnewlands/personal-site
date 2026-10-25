// Imported by the prebuild script, so no imports/JSX

export const TITLE_SUFFIX = "Callum Newlands | Freelance Web and Desktop Application Developer";

export interface PageMeta {
    path: string;
    title: string;
    description: string;
    ogHeading: string;
}

export const pages: Record<"home" | "about" | "portfolio" | "contact", PageMeta> = {
    home: {
        path: "/",
        title: TITLE_SUFFIX,
        description:
            "I'm Callum Newlands, a freelance full-stack developer who builds web and desktop applications. See examples of my work and how I can help with your project.",
        ogHeading: "Freelance Full-stack Developer"
    },
    about: {
        path: "/about",
        title: `About Me | ${TITLE_SUFFIX}`,
        description:
            "I'm Callum Newlands, a freelance full-stack developer. Here's my story, my experience and education, and my awards.",
        ogHeading: "About Me"
    },
    portfolio: {
        path: "/portfolio",
        title: `Portfolio | ${TITLE_SUFFIX}`,
        description:
            "Examples of web and desktop applications I've designed and built, from full-stack web apps to static websites.",
        ogHeading: "My Work"
    },
    contact: {
        path: "/contact",
        title: `Contact | ${TITLE_SUFFIX}`,
        description:
            "Get in touch about a new project or a quote. I'm a freelance full-stack developer and I'll reply as soon as I can.",
        ogHeading: "Contact Me"
    }
};
