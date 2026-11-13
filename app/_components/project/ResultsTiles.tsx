import type { Results } from "@/data/project-schema";
import styles from "./ResultsTiles.module.css";
import { cx } from "@/common/helpers";

export default function ResultsTiles({ tiles, source }: Results) {
    return (
        <div className={styles.container}>
            <ul role="list" className={styles.tiles}>
                {tiles.map((tile) => (
                    <li key={tile.label} className={styles.tile}>
                        <span className="stat">{tile.value}</span>
                        {tile.label}
                    </li>
                ))}
            </ul>
            <p className={cx(styles.source, "caption")}>{source}</p>
        </div>
    );
}
