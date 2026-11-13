import { expect, test } from "@playwright/test";
import { pages } from "./pages";

const sizes = [
    { name: "desktop", viewport: { width: 1280, height: 720 } },
    { name: "narrow", viewport: { width: 390, height: 844 } }
];

// Project pages share one template, so one of them is enough
const shown = pages.filter((path) => !path.startsWith("/portfolio/") || path === "/portfolio/mathsplanner");

// Baselines come from the Linux container in CI, which other machines can't match
test.skip(!process.env.CI, "Visual snapshots only run in CI");

// The redesign replaces these pages, so it gets its own baselines before launch
test.skip(
    [process.env.GITHUB_BASE_REF, process.env.GITHUB_REF_NAME].includes("redesign"),
    "Redesign baselines come before launch"
);

for (const size of sizes) {
    test.describe(size.name, () => {
        test.use({ viewport: size.viewport });

        for (const path of shown) {
            const name = path === "/" ? "home" : path.slice(1).replaceAll("/", "-");

            test(`looks the same on ${path}`, async ({ page }) => {
                await page.goto(path);
                // Scroll the page so lazy images load and the about timeline shows every entry
                await page.evaluate(async () => {
                    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight / 2) {
                        window.scrollTo(0, y);
                        await new Promise((resolve) => {
                            setTimeout(resolve, 100);
                        });
                    }
                    window.scrollTo(0, 0);
                });
                await expect(page.locator(".vertical-timeline-element-content.is-hidden")).toHaveCount(0);
                await page.evaluate(() =>
                    Promise.all([...document.images].map((img) => img.decode().catch(() => undefined)))
                );
                await page.evaluate(() => document.fonts.ready);

                await expect(page).toHaveScreenshot(`${size.name}-${name}.png`, {
                    fullPage: true,
                    // Content that changes on its own, such as the current year
                    mask: [page.locator("[data-volatile]")]
                });
            });
        }
    });
}
