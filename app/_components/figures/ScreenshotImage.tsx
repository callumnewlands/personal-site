import type { ReactNode } from "react";
import Image from "next/image";
import type { ProjectImage } from "../../../data/project-schema";
import styles from "./ScreenshotImage.module.css";
import { sizedImage } from "../../../common/images";

export default async function ScreenshotImage({
    image,
    sizes,
    overlay
}: {
    image: ProjectImage;
    sizes: string;
    overlay?: ReactNode;
}) {
    const { width, height } = await sizedImage(image.src);
    return (
        <div className={styles.image}>
            <Image src={image.src} alt={image.alt} width={width} height={height} sizes={sizes} />
            {overlay}
        </div>
    );
}
