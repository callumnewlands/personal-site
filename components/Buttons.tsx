import * as React from "react";
import styles from "./Buttons.module.scss";
import { LinkButton } from "./ui/Button";
import { cx } from "../common/helpers";

interface FullWidthButtonProps {
    href: string;
    noMargin?: boolean;
    children: React.ReactNode;
}

export function FullWidthButton({ href, noMargin = false, children }: FullWidthButtonProps) {
    return (
        <div className={cx(styles.button_container, noMargin && styles.button_container_no_margin)}>
            <LinkButton variant="primary" large href={href} className={styles.button}>
                {children}
            </LinkButton>
        </div>
    );
}
