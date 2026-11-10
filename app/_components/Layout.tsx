import type { ReactNode } from "react";
import styles from "./Layout.module.css";
import { cx } from "../../common/helpers";

interface ContainerProps {
    narrow?: boolean;
    className?: string;
    children: ReactNode;
}

export function Container({ narrow = false, className, children }: ContainerProps) {
    return <div className={cx(styles.container, narrow && styles.narrow, className)}>{children}</div>;
}

export function Section({ band = false, children }: { band?: boolean; children: ReactNode }) {
    return <section className={cx(styles.section, band && styles.band)}>{children}</section>;
}
