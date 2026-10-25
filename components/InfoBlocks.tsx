import * as React from "react";
import styles from "./InfoBlocks.module.scss";
import { Text, Title } from "./ui/Typography";

interface InfoBlockProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

interface InfoBlocksProps {
    data: InfoBlockProps[];
}

function InfoBlock({ icon, title, content }: InfoBlockProps) {
    return (
        <>
            <div className={styles.block + " " + styles.block_topper}>
                <div className={styles.block_icon_container}>{icon}</div>
                <Title level={3} className={styles.block_title}>
                    {title}
                </Title>
            </div>
            <div className={styles.block}>
                <div className={styles.block_text}>
                    <Text>{content}</Text>
                </div>
            </div>
        </>
    );
}

export default function InfoBlocks({ data }: InfoBlocksProps) {
    return (
        <div className={styles.blocks_list}>
            {data.map((item) => (
                <InfoBlock key={item.title} {...item} />
            ))}
        </div>
    );
}
