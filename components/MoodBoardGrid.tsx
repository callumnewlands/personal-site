import * as React from "react";
import styles from "./MoodBoardGrid.module.scss";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { Text, Title } from "./ui/Typography";

interface MoodBoardImageProps {
    src: string | StaticImageData;
    alt: string;
    link: string;
}

interface MoodBoardGridProps {
    title?: string;
    description?: string;
    topLeft?: MoodBoardImageProps;
    topCentre?: MoodBoardImageProps;
    topRight?: MoodBoardImageProps;
    bottomLeft?: MoodBoardImageProps;
    bottomRight?: MoodBoardImageProps;
    priority?: boolean;
}

function propsToImageComponent(props?: MoodBoardImageProps, preload?: boolean): React.ReactNode {
    if (!props) {
        return undefined;
    }
    const image = (
        <Image
            src={props.src}
            alt={props.alt}
            sizes="(max-width: 600px) 90vw, (max-width: 780px) 60vw, 40vw"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
            placeholder={"blur"}
            quality={80}
            preload={preload}
        />
    );
    return props.link ? <Link href={props.link}>{image}</Link> : image;
}

export default function MoodBoardGrid({
    title,
    description,
    topLeft,
    topCentre,
    topRight,
    bottomLeft,
    bottomRight,
    priority = false
}: MoodBoardGridProps) {
    return (
        <div className={styles.mood_board}>
            <div className={styles.mood_board_layout}>
                <div className={styles.mood_board_layout_description}>
                    <Title level={2}>{title}</Title>
                    <Text>{description}</Text>
                </div>
                <div className={styles.mood_board_layout_top_left}>{propsToImageComponent(topLeft, priority)}</div>
                <div className={styles.mood_board_layout_top_centre}>{propsToImageComponent(topCentre, priority)}</div>
                <div className={styles.mood_board_layout_top_right}>{propsToImageComponent(topRight, priority)}</div>
                <div className={styles.mood_board_layout_bottom_left}>
                    {propsToImageComponent(bottomLeft, priority)}
                </div>
                <div className={styles.mood_board_layout_bottom_right}>
                    {propsToImageComponent(bottomRight, priority)}
                </div>
            </div>
        </div>
    );
}
