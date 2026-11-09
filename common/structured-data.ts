import { absoluteUrl, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "./site";

export const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Callum Newlands",
            jobTitle: "Freelance Full-Stack Developer",
            url: SITE_URL,
            image: absoluteUrl("/photos/callum-newlands.jpg"),
            sameAs: [SOCIAL_LINKS.LinkedIn, SOCIAL_LINKS.GitHub, SOCIAL_LINKS.Upwork],
            description: "Callum Newlands specializes in creating modern, responsive web and desktop applications.",
            alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Southampton"
            }
        },
        {
            "@type": "ProfessionalService",
            "@id": `${SITE_URL}/#service`,
            name: SITE_NAME,
            url: SITE_URL,
            image: absoluteUrl("/og/home.jpg"),
            logo: absoluteUrl("/android-chrome-384x384.png"),
            description: "Freelance full-stack web and desktop application development, UI/UX design and consultancy.",
            founder: { "@id": `${SITE_URL}/#person` },
            areaServed: "GB",
            serviceType: ["Web application development", "Desktop application development", "UI/UX design"],
            sameAs: [SOCIAL_LINKS.Upwork]
        }
    ]
};
