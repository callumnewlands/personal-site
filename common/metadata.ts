import type { Metadata } from "next";
import type { PageMeta } from "../data/pages";
import { pages, TITLE_SUFFIX } from "../data/pages";
import { ogImagePath, SITE_NAME, SITE_URL } from "./site";

interface PageMetadataProps extends Pick<PageMeta, "path" | "title" | "description"> {
    type?: "website" | "article" | "profile";
}

function ogImages(path: string) {
    return [{ url: ogImagePath(path), width: 1200, height: 630 }];
}

export const siteMetadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: TITLE_SUFFIX,
    description: pages.home.description,
    authors: [{ name: "Callum Newlands" }],
    openGraph: { siteName: SITE_NAME, type: "website", locale: "en_GB", images: ogImages("/") },
    twitter: { card: "summary_large_image", images: ogImages("/") }
};

export function pageMetadata({ path, title, description, type = "website" }: PageMetadataProps): Metadata {
    const images = ogImages(path);

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: { siteName: SITE_NAME, type, locale: "en_GB", url: path, title, description, images },
        twitter: { card: "summary_large_image", title, description, images }
    };
}
