import type { CaptionedImage, ProjectImage } from "@/data/project-schema";
import frame from "./frame.module.css";
import ScreenshotImage from "./ScreenshotImage";

export default function Screenshot({
    image,
    sizes = "(width < 48em) 100vw, 50vw",
    href
}: {
    image: ProjectImage | CaptionedImage;
    sizes?: string;
    href?: string;
}) {
    const picture = <ScreenshotImage image={image} sizes={sizes} />;
    const caption = "caption" in image ? image.caption : undefined;
    return (
        <figure className={frame.frame}>
            {href ? (
                <a href={href} aria-label={image.alt ? undefined : caption}>
                    {picture}
                </a>
            ) : (
                picture
            )}
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
}
