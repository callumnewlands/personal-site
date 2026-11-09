"use client";

import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import type { ButtonStyle } from "./buttonStyle";
import { buttonClassName } from "./buttonStyle";
import { ArrowIcon } from "./icons";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonStyle & {
        loading?: boolean;
        loadingLabel?: string;
    };

export default function Button({
    variant,
    dark,
    loading = false,
    loadingLabel,
    className,
    onClick,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={buttonClassName(variant, dark, className)}
            aria-disabled={loading || undefined}
            onClick={(event) => {
                if (loading) {
                    event.preventDefault();
                    return;
                }
                onClick?.(event);
            }}
        >
            {loading ? (
                <>
                    <span className={styles.spinner} aria-hidden="true" />
                    {loadingLabel ?? children}
                </>
            ) : (
                <>
                    {children}
                    {variant !== "secondary" && <ArrowIcon />}
                </>
            )}
        </button>
    );
}
