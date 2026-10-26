import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { pages } from "./pages";

for (const path of pages) {
    test(`renders ${path}`, async ({ page }) => {
        await page.goto(path);
        await expect(page.locator("main")).toBeVisible();
        await expect(page.locator("footer")).toBeVisible();
        await expect(page).toHaveTitle(/Callum Newlands/);
        await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /\S/);
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /^https:\/\/cnewlands\.dev\//);
        await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /\/og\/.+\.jpg$/);
    });

    test(`has no axe violations on ${path}`, async ({ page }) => {
        await page.goto(path);
        const results = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
            .analyze();
        expect(results.violations).toEqual([]);
    });
}

test("loads homepage images", async ({ page }) => {
    await page.goto("/");
    const image = page.locator("main img").first();
    await expect(image).toBeVisible();
    expect(await image.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBeGreaterThan(0);
});

test("has no page for vrl", async ({ request }) => {
    const response = await request.get("/portfolio/vrl");
    expect(response.status()).toBe(404);
});

test("footer links use noopener", async ({ page }) => {
    await page.goto("/");
    for (const link of await page.locator("footer a[target=_blank]").all()) {
        const rel = await link.getAttribute("rel");
        expect(rel).toContain("noopener");
        expect(rel).toContain("noreferrer");
    }
});
