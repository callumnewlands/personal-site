import { readFileSync } from "node:fs";

// Same list Lighthouse uses, so new pages get tested without editing this
export const pages = [...readFileSync("public/sitemap.xml", "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => new URL(match[1]).pathname
);
