import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";
import { cx } from "@/common/helpers";

export default function SectionHeading({
    level = 2,
    size = "section",
    id,
    intro,
    children
}: {
    level?: 2 | 3;
    size?: "section" | "chapter" | "panel";
    id?: string;
    intro?: ReactNode;
    children: ReactNode;
}) {
    const Heading = `h${level}` as const;
    return (
        <hgroup className={cx(styles.heading, styles[size])}>
            <Heading id={id} className={`${size}-title`}>
                {children}
            </Heading>
            {intro && <p className={size === "panel" ? "lead-size" : undefined}>{intro}</p>}
        </hgroup>
    );
}
