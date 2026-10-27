import { existsSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";
import { describe, expect, test } from "vitest";
import { portfolio, projectsWithPages } from "./portfolio";
import { SCREENSHOT_EXTENSIONS } from "../common/images";

const publicFile = (path: string) => join(__dirname, "..", "public", path);

test("ids are unique and url safe", () => {
    const ids = portfolio.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
        expect(id).toMatch(/^[a-z0-9-]+$/);
    }
});

describe.each(portfolio)("$id", (item) => {
    test("has its featured image", () => {
        expect(existsSync(publicFile(item.featuredImage))).toBe(true);
    });

    test("ends after it starts", () => {
        if (item.endDate) {
            expect(Number(item.endDate)).toBeGreaterThanOrEqual(Number(item.startDate));
        }
    });
});

describe.each(projectsWithPages)("$id page", (item) => {
    test("has a width for each screenshot, or none", () => {
        const screenshots = readdirSync(publicFile(item.screenshotsDirectory)).filter((file) =>
            SCREENSHOT_EXTENSIONS.has(extname(file).toLowerCase())
        );
        if (item.screenshotWidths.length) {
            expect(item.screenshotWidths).toHaveLength(screenshots.length);
        }
    });
});
