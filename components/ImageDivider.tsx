import styles from "./ImageDivider.module.scss";
import Image from "next/image";
import * as React from "react";
import { Typography } from "antd";

interface ImageDividerProps {
    imagePath: string;
    imageAlt: string;
    title: string;
    text: string;
}

const { Title, Text } = Typography;

export default function ImageDivider({ imagePath, imageAlt, title, text }: ImageDividerProps) {
    return (
        <div className={styles.divider}>
            <div className={styles.divider_image_container}>
                <Image
                    src={imagePath}
                    alt={imageAlt}
                    layout={"fill"}
                    objectFit={"cover"}
                    quality={100}
                />
            </div>
            <div className={styles.divider_text_panel}>
                <div className={styles.divider_text_container}>
                    <Title level={3} className={styles.divider_text_container_title}>
                        {title}
                    </Title>
                    <Text className={styles.divider_text_container_text}>{text}</Text>
                </div>
            </div>
        </div>
    );
}
