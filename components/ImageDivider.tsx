import styles from "./ImageDivider.module.scss";
import Image, { StaticImageData } from "next/image";
import { Text, Title } from "./ui/Typography";

interface ImageDividerProps {
    imagePath: string | StaticImageData;
    imageAlt: string;
    title: string;
    text: string;
}

export default function ImageDivider({ imagePath, imageAlt, title, text }: ImageDividerProps) {
    return (
        <div className={styles.divider}>
            <div className={styles.divider_image_container}>
                <Image
                    src={imagePath}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    quality={80}
                />
            </div>
            <div className={styles.divider_text_panel}>
                <div className={styles.divider_text_container}>
                    <Title level={2} className={styles.divider_text_container_title}>
                        {title}
                    </Title>
                    <Text className={styles.divider_text_container_text}>{text}</Text>
                </div>
            </div>
        </div>
    );
}
