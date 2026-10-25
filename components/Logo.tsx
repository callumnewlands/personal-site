import styles from "./Logo.module.scss";
import { cx } from "../common/helpers";

export default function Logo({ className }: { className?: string }) {
    return (
        <div className={cx(styles.logo, className)}>
            {/* eslint-disable-next-line @next/next/no-img-element -- next/image doesn't optimise SVGs */}
            <img src="/logo-vector-green.svg" alt="Callum Newlands Logo" width={424} height={299} />
            <div className={styles.logo_text}>
                <span className={styles.logo_name}>Callum Newlands</span>
                <span className={styles.logo_title}>Software Developer</span>
            </div>
        </div>
    );
}
