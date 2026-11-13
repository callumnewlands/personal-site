import { expect, test } from "vitest";
import { pages } from "@/data/pages";
import { pageMetadata } from "./metadata";

test("builds metadata from a page entry", () => {
    const metadata = pageMetadata({ ...pages.about, type: "profile" });
    expect(metadata.title).toBe(pages.about.title);
    expect(metadata.description).toBe(pages.about.description);
    expect(metadata.alternates?.canonical).toBe("/about");
    expect(metadata.openGraph).toMatchObject({
        type: "profile",
        url: "/about",
        title: pages.about.title,
        images: { url: "/og/about.jpg", width: 1200, height: 630 }
    });
});
