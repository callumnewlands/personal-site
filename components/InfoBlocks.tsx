import * as React from "react";
import styles from "./InfoBlocks.module.scss";
import { Typography } from "antd";

interface InfoBlockProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

interface InfoBlocksProps {
    data: InfoBlockProps[];
}

const { Title, Text } = Typography;

export function InfoBlock({ icon, title, content }: InfoBlockProps) {
    return (
        <div className={styles.block}>
            {icon}
            <Title level={5}>{title}</Title>
            <Text>{content}</Text>
        </div>
    );
}

export default function InfoBlocks({ data }: InfoBlocksProps) {
    return (
        <div className={styles.blocks_list}>
            {data.map((item) => (
                <InfoBlock {...item} />
            ))}
        </div>
    );
}
