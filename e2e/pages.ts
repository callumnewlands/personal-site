import { readFileSync } from "node:fs";

// Aligned with the Lighthouse checks' pages
export const pages = [...readFileSync("public/sitemap.xml", "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => new URL(match[1]).pathname
);
