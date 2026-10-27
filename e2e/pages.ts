import { readFileSync } from "node:fs";

// Every page in the sitemap written by the postbuild, the same list Lighthouse uses
export const pages = [...readFileSync("public/sitemap.xml", "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => new URL(match[1]).pathname
);
