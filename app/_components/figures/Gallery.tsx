import type { CaptionedImage } from "../../../data/project-schema";
import styles from "./Gallery.module.css";
import Screenshot from "./Screenshot";
import { evenRows } from "../../../common/helpers";
import { sizedImage } from "../../../common/images";

export default async function Gallery({ screenshots }: { screenshots: CaptionedImage[] }) {
    const sized = await Promise.all(screenshots.map(async (image) => ({ image, ...(await sizedImage(image.src)) })));
    const wide = sized.filter((screenshot) => screenshot.width > screenshot.height);
    const rows = evenRows(
        sized.filter((screenshot) => screenshot.width <= screenshot.height),
        3
    );

    return (
        <div className={styles.gallery}>
            {wide.map(({ image }) => (
                <Screenshot key={image.src} image={image} sizes="(width < 48em) 100vw, 72.5rem" href={image.src} />
            ))}
            {rows.length > 0 && (
                <div className={styles.tall}>
                    {rows.map((row) => (
                        <div key={row[0].image.src} className={styles.row}>
                            {row.map(({ image, width, height }) => (
                                <div key={image.src} style={{ flexGrow: width / height }}>
                                    <Screenshot image={image} sizes="(width < 48em) 50vw, 33vw" href={image.src} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
