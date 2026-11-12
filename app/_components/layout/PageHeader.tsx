import type { ReactNode } from "react";
import styles from "./PageHeader.module.css";

export default function PageHeader({
    title,
    lead,
    children
}: {
    title: ReactNode;
    lead?: ReactNode;
    children?: ReactNode;
}) {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            {lead && <p className="lead">{lead}</p>}
            {children && <div className={styles.actions}>{children}</div>}
        </header>
    );
}
