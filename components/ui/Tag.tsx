import * as React from "react";
import styles from "./Tag.module.scss";
import { cx } from "../../common/helpers";

export const tagColours = [
    "purple",
    "rust",
    "teal",
    "olive",
    "pink",
    "amber",
    "blue",
    "red",
    "indigo",
    "orange",
    "green",
    "mustard"
];

export default function Tag({ colour, children }: { colour?: string; children: React.ReactNode }) {
    return <span className={cx(styles.tag, colour && styles[`tag_${colour}`])}>{children}</span>;
}
