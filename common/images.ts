import { readFile } from "node:fs/promises";
import path from "node:path";
import { imageSize } from "image-size";

export const SCREENSHOT_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

export interface SizedImage {
    src: string;
    width: number;
    height: number;
}

// Only call from getStaticProps
export async function sizedImage(src: string): Promise<SizedImage> {
    const { width, height } = imageSize(await readFile(path.join(process.cwd(), "public", src)));
    return { src, width, height };
}
