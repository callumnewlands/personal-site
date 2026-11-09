"use client";

import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import { ArrowIcon } from "./icons";
import { cx } from "../../common/helpers";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    sending?: boolean;
}

export default function Button({ sending = false, className, onClick, children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cx(styles.button, styles.primary, className)}
            aria-disabled={sending || undefined}
            onClick={(event) => {
                if (sending) {
                    event.preventDefault();
                    return;
                }
                onClick?.(event);
            }}
        >
            {sending ? (
                <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Sending
                </>
            ) : (
                <>
                    {children}
                    <ArrowIcon />
                </>
            )}
        </button>
    );
}
