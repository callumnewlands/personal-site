// Builds sitemap.xml from the pages next build produced, so new pages are picked up automatically
import { readFile, writeFile } from "node:fs/promises";
import { SITE_URL } from "../common/site.ts";

const readManifest = async (file) => JSON.parse(await readFile(new URL(`../.next/${file}`, import.meta.url), "utf8"));
const pagesManifest = await readManifest("server/pages-manifest.json");
const prerenderManifest = await readManifest("prerender-manifest.json");

// Static pages are built as .html, and pages using getStaticProps are in the prerender manifest
const paths = [
    ...new Set([
        ...Object.keys(pagesManifest).filter((path) => pagesManifest[path].endsWith(".html")),
        ...Object.keys(prerenderManifest.routes)
    ])
]
    .filter((path) => !/^\/(_|404$|500$)/.test(path))
    .sort();

const urls = paths.map((path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n  </url>`).join("\n");
await writeFile(
    new URL("../public/sitemap.xml", import.meta.url),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log(`Generated sitemap.xml with ${paths.length} pages`);
