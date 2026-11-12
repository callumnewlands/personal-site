import { getImageProps } from "next/image";
import type { Marker, ProjectImage } from "../../../data/project-schema";
import frame from "./frame.module.css";
import styles from "./NumberedScreenshot.module.css";
import ScreenshotImage from "./ScreenshotImage";
import { Legend, MarkerHighlight, Markers } from "./ScreenshotMarkers";
import { cx } from "../../../common/helpers";
import { sizedImage } from "../../../common/images";

const zoom = 2.6;
const cropAspect = 16 / 10;

function percent(value: number) {
    return Math.min(Math.max(value, 0), 1) * 100;
}

// Background position that centres the marker in a close-up, kept inside the image
function cropPosition(marker: Marker, aspect: number) {
    const x = (zoom * (marker.x / 100) - 0.5) / (zoom - 1);
    const zoomedHeight = zoom / aspect;
    const y = ((marker.y / 100) * zoomedHeight - 0.5 / cropAspect) / (zoomedHeight - 1 / cropAspect);
    return `${percent(x)}% ${percent(y)}%`;
}

export default async function NumberedScreenshot({ image, markers }: { image: ProjectImage; markers: Marker[] }) {
    const { width, height } = await sizedImage(image.src);
    const crop = getImageProps({
        src: image.src,
        alt: "",
        width: 1000,
        height: Math.round((1000 * height) / width)
    }).props.src;

    return (
        <MarkerHighlight>
            <div className={cx(frame.frame, styles.frame)}>
                <ScreenshotImage
                    image={image}
                    sizes="(width < 48em) 100vw, 72.5rem"
                    overlay={<Markers markers={markers} />}
                />
            </div>
            <figcaption>
                <Legend markers={markers} />
                <ol role="list" className={styles["close-ups"]}>
                    {markers.map((marker, index) => (
                        <li key={marker.text}>
                            <div
                                className={styles.crop}
                                style={{
                                    aspectRatio: cropAspect,
                                    backgroundImage: `url("${crop}")`,
                                    backgroundSize: `${zoom * 100}% auto`,
                                    backgroundPosition: cropPosition(marker, width / height)
                                }}
                                aria-hidden="true"
                            >
                                <span className={styles.number}>{index + 1}</span>
                            </div>
                            <p>{marker.text}</p>
                        </li>
                    ))}
                </ol>
            </figcaption>
        </MarkerHighlight>
    );
}
