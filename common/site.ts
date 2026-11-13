// No imports here, it's also used by scripts/build-seo-assets.mjs
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://cnewlands.dev").replace(/\/$/, "");
export const SITE_NAME = "Callum Newlands, Freelance Developer";
export const EMAIL = "callum@cnewlands.dev";

export const SOCIAL_LINKS = {
    GitHub: "https://github.com/callumnewlands",
    LinkedIn: "https://www.linkedin.com/in/callum-newlands-80ab28174/",
    Upwork: "https://www.upwork.com/freelancers/~014de11efc605b0708",
    Instagram: "https://www.instagram.com/callumnewlands_archery/"
};

/**
 * Turns a path from the site root into a full URL on {@link SITE_URL}, for places
 * that need one, such as structured data.
 */
export function absoluteUrl(path: string) {
    return SITE_URL + path;
}

/**
 * Maps a page's path to the path of its Open Graph (OG) image.
 *
 * @example ogImagePath("/portfolio/mathsplanner") // "/og/portfolio-mathsplanner.jpg"
 */
export function ogImagePath(path: string) {
    const slug = path === "/" ? "home" : path.slice(1).replace(/\//g, "-");
    return `/og/${slug}.jpg`;
}
