import styles from "./Logo.module.scss";
import { cx } from "../common/helpers";

export default function Logo({ className }: { className?: string }) {
    return (
        <div className={cx(styles.logo, className)}>
            <img src="/logo-vector-green.svg" alt="Callum Newlands Logo" />
            <div className={styles.logo_text}>
                <h1 className={styles.logo_name}>Callum Newlands</h1>
                <h2 className={styles.logo_title}>Software Developer</h2>
            </div>
        </div>
    );
}
