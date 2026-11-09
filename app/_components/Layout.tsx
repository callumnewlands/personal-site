import type { ReactNode } from "react";
import styles from "./Layout.module.css";
import { cx } from "../../common/helpers";

export function Container({ narrow = false, children }: { narrow?: boolean; children: ReactNode }) {
    return <div className={cx(styles.container, narrow && styles.narrow)}>{children}</div>;
}

export function Section({ band = false, children }: { band?: boolean; children: ReactNode }) {
    return <section className={cx(styles.section, band && styles.band)}>{children}</section>;
}
