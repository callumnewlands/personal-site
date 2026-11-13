import { readFile } from "node:fs/promises";
import path from "node:path";
import { imageSize } from "image-size";

export const SCREENSHOT_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

export interface SizedImage {
    src: string;
    width: number;
    height: number;
}

/**
 * Reads the width and height of an image under public/, so the page can make room
 * for it before it loads. Only call it at build time, since it reads from the file system.
 *
 * @throws if the file doesn't exist or isn't an image
 */
export async function sizedImage(src: string): Promise<SizedImage> {
    const { width, height } = imageSize(await readFile(path.join(process.cwd(), "public", src)));
    return { src, width, height };
}
