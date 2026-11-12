import type { ReactNode } from "react";
import styles from "./Timeline.module.css";
import { cx } from "../../../common/helpers";

interface Entry {
    date: string;
    title: string;
    text?: string;
    current?: boolean;
    children?: ReactNode;
}

export default function Timeline({ entries }: { entries: Entry[] }) {
    return (
        <div className={styles.container}>
            <ol role="list" className={styles.timeline}>
                {entries.map((entry) => (
                    <li
                        key={`${entry.date}-${entry.title}`}
                        className={cx(styles.entry, entry.current && styles.current)}
                    >
                        <span className={styles.date}>{entry.date}</span>
                        <div>
                            <p className={styles.title}>{entry.title}</p>
                            {entry.text && <p className={styles.text}>{entry.text}</p>}
                            {entry.children && <div className={styles.extra}>{entry.children}</div>}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
