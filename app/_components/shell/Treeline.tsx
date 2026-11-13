import styles from "./Treeline.module.css";
import { cx } from "@/common/helpers";

export default function Treeline({ variant = "footer" }: { variant?: "footer" | "band-top" }) {
    return <div className={cx(styles.treeline, styles[variant])} aria-hidden="true" />;
}
