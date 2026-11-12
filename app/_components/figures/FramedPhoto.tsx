import Image from "next/image";
import type { ProjectImage } from "../../../data/project-schema";
import styles from "./FramedPhoto.module.css";
import { cx } from "../../../common/helpers";

type Picture = { photo: ProjectImage; placeholder?: never } | { photo?: never; placeholder: string };

export default function FramedPhoto({
    photo,
    placeholder,
    caption,
    tilt,
    sizes = "(width < 48em) 70vw, 24rem"
}: Picture & { caption?: string; tilt?: "left" | "right"; sizes?: string }) {
    return (
        <figure className={cx(styles.frame, tilt && styles[tilt])}>
            <div className={styles.picture}>
                {photo ? (
                    <Image src={photo.src} alt={photo.alt} fill sizes={sizes} />
                ) : (
                    <p className={styles.placeholder}>{placeholder}</p>
                )}
            </div>
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
}
