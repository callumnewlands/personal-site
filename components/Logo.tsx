import Image from "next/image";
import styles from "./Logo.module.scss";
import logo from "../public/logo-vector-green.svg";
import { cx } from "../common/helpers";

export default function Logo({ className }: { className?: string }) {
    return (
        <div className={cx(styles.logo, className)}>
            <Image src={logo} alt="" loading="eager" />
            <div className={styles.logo_text}>
                <span className={styles.logo_name}>Callum Newlands</span>
                <span className={styles.logo_title}>Software Developer</span>
            </div>
        </div>
    );
}
