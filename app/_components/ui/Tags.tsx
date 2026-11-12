import styles from "./Tags.module.css";
import { cx } from "../../../common/helpers";

export default function Tags({ tags, variant = "outline" }: { tags: string[]; variant?: "outline" | "overlay" }) {
    return (
        <ul role="list" className={cx(styles.tags, styles[variant])}>
            {tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                    {tag}
                </li>
            ))}
        </ul>
    );
}
