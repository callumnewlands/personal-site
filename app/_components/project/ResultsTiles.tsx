import type { Results } from "@/data/project-schema";
import styles from "./ResultsTiles.module.css";
import { cx } from "@/common/helpers";

export default function ResultsTiles({ results, source }: { results: Results; source: string }) {
    return (
        <div className={styles.container}>
            <ul role="list" className={styles.tiles}>
                {results.map((result) => (
                    <li key={result.label} className={styles.tile}>
                        <span className="stat">{result.value}</span>
                        {result.label}
                    </li>
                ))}
            </ul>
            <p className={cx(styles.source, "caption")}>{source}</p>
        </div>
    );
}
