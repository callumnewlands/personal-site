import React from "react";
import styles from "./Logo.module.scss";

interface LogoProps {
    className?: string;
}

export default function Logo({ className = undefined }: LogoProps) {
    return (
        <div className={styles.logo + " " + className}>
            <img src="/logo-vector-green.svg" alt="Callum Newlands Logo" />
            <div className={styles.logo_text}>
                <h1>Callum Newlands</h1>
                <h2>Software Developer</h2>
            </div>
        </div>
    );
}
