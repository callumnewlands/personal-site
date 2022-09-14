import * as React from "react";
import styles from "./MoodBoardGrid.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Typography } from "antd";

const { Title, Text } = Typography;

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
}

function propsToImageComponent(props?: MoodBoardImageProps): React.ReactNode {
    const image = (
        <Image
            src={props?.src || ""}
            alt={props?.alt}
            layout={"responsive"}
            objectFit={"cover"}
            objectPosition={"top"}
            placeholder={"blur"}
            quality={100}
        />
    );

    if (props) {
        if (props.link) {
            return (
                <Link href={props.link}>
                    <a>{image}</a>
                </Link>
            );
        } else {
            return image;
        }
    }
    return undefined;
}

export default function MoodBoardGrid({
    title,
    description,
    topLeft,
    topCentre,
    topRight,
    bottomLeft,
    bottomRight
}: MoodBoardGridProps) {
    return (
        <div className={styles.mood_board}>
            <div className={styles.mood_board_layout}>
                <div className={styles.mood_board_layout_description}>
                    <Title level={2}>{title}</Title>
                    <Text>{description}</Text>
                </div>
                <div className={styles.mood_board_layout_bottom_right}>{propsToImageComponent(bottomRight)}</div>
                <div className={styles.mood_board_layout_top_centre}>{propsToImageComponent(topCentre)}</div>
                <div className={styles.mood_board_layout_top_left}>{propsToImageComponent(topLeft)}</div>
                <div className={styles.mood_board_layout_top_right}>{propsToImageComponent(topRight)}</div>
                <div className={styles.mood_board_layout_bottom_left}>{propsToImageComponent(bottomLeft)}</div>
            </div>
        </div>
    );
}
