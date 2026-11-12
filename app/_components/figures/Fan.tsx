import Image from "next/image";
import Link from "next/link";
import type { ProjectImage } from "@/data/project-schema";
import styles from "./Fan.module.css";
import { cx } from "@/common/helpers";

// A linked image is named by its label, as its alt can be empty
type FanImage = ProjectImage & ({ href?: never; label?: never } | { href: string; label: string });

export default function Fan({
    images,
    variant = "project"
}: {
    images: [FanImage, FanImage, FanImage];
    variant?: "project" | "masthead";
}) {
    return (
        <div className={cx(styles.fan, styles[variant])}>
            <ul role="list" className={styles.stage}>
                {images.map((image) => {
                    const picture = (
                        <div className={styles.picture}>
                            <Image src={image.src} alt={image.alt} fill sizes="(width < 48em) 80vw, 40vw" />
                        </div>
                    );
                    return (
                        <li key={image.src} className={styles.item}>
                            {image.href ? (
                                <Link href={image.href} className={styles.link} aria-label={image.label}>
                                    {picture}
                                </Link>
                            ) : (
                                picture
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
