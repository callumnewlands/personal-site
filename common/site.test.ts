import { describe, expect, test } from "vitest";
import { absoluteUrl, ogImagePath, SITE_URL } from "./site";

describe("absoluteUrl", () => {
    test("adds the site url", () => {
        expect(absoluteUrl("/about")).toBe(`${SITE_URL}/about`);
    });

    test("has no trailing slash on the site url", () => {
        expect(SITE_URL.endsWith("/")).toBe(false);
    });
});

describe("ogImagePath", () => {
    test("uses home for the root", () => {
        expect(ogImagePath("/")).toBe("/og/home.jpg");
    });

    test("turns nested paths into one slug", () => {
        expect(ogImagePath("/portfolio/mathsplanner")).toBe("/og/portfolio-mathsplanner.jpg");
    });
});
