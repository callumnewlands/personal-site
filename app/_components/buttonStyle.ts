import styles from "./Button.module.css";
import { cx } from "../../common/helpers";

export type ButtonStyle = { variant?: "primary"; dark?: boolean } | { variant: "secondary"; dark?: never };

export function buttonClassName(variant: "primary" | "secondary" = "primary", dark = false, className?: string) {
    return cx(styles.button, styles[variant], dark && styles.dark, dark && "on-dark", className);
}
