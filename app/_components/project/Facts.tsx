import styles from "./Facts.module.css";

export default function Facts({ facts }: { facts: { label: string; value: string }[] }) {
    return (
        <div className={styles.container}>
            <dl className={styles.facts}>
                {facts.map((fact) => (
                    <div key={fact.label}>
                        <dt className="caption">{fact.label}</dt>
                        <dd>{fact.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
