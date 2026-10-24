// Builds robots.txt, sitemap.xml and the OG images before next build/dev
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import sharp from "sharp";
import { pages } from "../data/pages.ts";
import { projectsWithPages } from "../data/portfolio.ts";
import { ogImagePath, SITE_URL } from "../common/site.ts";

const root = new URL("../", import.meta.url);
const publicDir = new URL("public/", root);

const routes = [
    ...Object.values(pages).map((page) => ({
        path: page.path,
        heading: page.ogHeading,
        subheading: page.path === "/" ? "Web and desktop application development" : "Callum Newlands"
    })),
    ...projectsWithPages.map((item) => ({ path: `/portfolio/${item.id}`, heading: item.title, subheading: item.type }))
];

async function buildSitemap() {
    const urls = routes.map(({ path }) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n  </url>`).join("\n");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
    await writeFile(new URL("sitemap.xml", publicDir), xml);
    await writeFile(
        new URL("robots.txt", publicDir),
        `User-agent: *
Allow: /
Disallow: /__forms.html

Sitemap: ${SITE_URL}/sitemap.xml
`
    );
}

async function loadAssets() {
    const [logo, photo] = await Promise.all([
        readFile(new URL("logo-vector-green.svg", publicDir)),
        readFile(new URL("photos/callum-newlands.jpg", publicDir))
    ]);
    return {
        logo: `data:image/svg+xml;base64,${logo.toString("base64")}`,
        photo: `data:image/jpeg;base64,${photo.toString("base64")}`
    };
}

function ogImage({ heading, subheading }, { logo, photo }) {
    return h(
        "div",
        {
            style: {
                width: "100%",
                height: "100%",
                display: "flex",
                fontFamily: "sans-serif",
                background: "#fafcfc"
            }
        },
        h(
            "div",
            {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "62%",
                    padding: "64px",
                    background: "#44344f",
                    color: "#fafcfc"
                }
            },
            h(
                "div",
                { style: { display: "flex", alignItems: "center", gap: "20px" } },
                h("img", { src: logo, width: 72, height: 72 }),
                h(
                    "div",
                    { style: { display: "flex", flexDirection: "column", fontSize: 30, color: "#5fd3d7" } },
                    h("span", { style: { fontWeight: 700 } }, "Callum Newlands"),
                    h("span", { style: { fontSize: 22 } }, "Software Developer")
                )
            ),
            h(
                "div",
                { style: { display: "flex", flexDirection: "column", gap: "16px" } },
                h(
                    "div",
                    { style: { fontSize: heading.length > 22 ? 56 : 68, fontWeight: 800, lineHeight: 1.1 } },
                    heading
                ),
                h("div", { style: { fontSize: 30, color: "#cdc8d0" } }, subheading)
            ),
            h("div", { style: { fontSize: 24, color: "#5fd3d7" } }, SITE_URL.replace(/^https?:\/\//, ""))
        ),
        h("img", { src: photo, width: 456, height: 630, style: { objectFit: "cover" } })
    );
}

async function buildOgImages() {
    const assets = await loadAssets();
    await mkdir(new URL("og/", publicDir), { recursive: true });
    await Promise.all(
        routes.map(async (route) => {
            const response = new ImageResponse(ogImage(route, assets), { width: 1200, height: 630 });
            const png = Buffer.from(await response.arrayBuffer());
            const jpeg = await sharp(png).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
            await writeFile(new URL(ogImagePath(route.path).slice(1), publicDir), jpeg);
        })
    );
}

await Promise.all([buildSitemap(), buildOgImages()]);
console.log(`Generated robots.txt, sitemap.xml and ${routes.length} OG images`);
