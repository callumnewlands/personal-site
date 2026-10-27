import { expect, test } from "@playwright/test";

// Hard-coded so a page missing from the sitemap fails
const sitemapPages = ["/", "/about", "/portfolio", "/contact", "/portfolio/mathsplanner"];

test("serves robots.txt", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(await response.text()).toContain("Sitemap: https://cnewlands.dev/sitemap.xml");
});

test("serves sitemap.xml", async ({ request }) => {
    const body = await (await request.get("/sitemap.xml")).text();
    for (const path of sitemapPages) {
        expect(body).toContain(`<loc>https://cnewlands.dev${path}</loc>`);
    }
    expect(body).not.toContain("/portfolio/vrl");
});
