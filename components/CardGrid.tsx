import styles from "./CardGrid.module.scss";
import Image from "next/image";
import { Typography } from "antd";

interface CardProps {
    title?: string;
    description?: string;
    imagePath: string;
    imageAlt: string;
}

interface CardGridProps {
    data: CardProps[];
}

const { Title, Text } = Typography;

function Card({ title = undefined, description = undefined, imagePath, imageAlt }: CardProps) {
    return (
        <div className={styles.grid_card}>
            <div className={styles.grid_card_inner} /* Prevents double hover event trigger */>
                <Image
                    src={imagePath}
                    className={styles.grid_card_face + " " + styles.grid_card_face_front}
                    alt={imageAlt}
                    layout={"fill"}
                    objectFit={"contain"}
                />
                <div className={styles.grid_card_face + " " + styles.grid_card_face_back}>
                    <Title level={4}>{title}</Title>
                    <Text>{description}</Text>
                </div>
            </div>
        </div>
    );
}

export default function CardGrid({ data }: CardGridProps) {
    return (
        <div className={styles.grid}>
            {data.map((d) => (
                <Card
                    title={d.title}
                    key={d.title}
                    description={d.description}
                    imagePath={d.imagePath}
                    imageAlt={d.imageAlt}
                />
            ))}
        </div>
    );
}
