import type { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";
import { ArrowIcon, ExternalArrowIcon } from "./icons";
import { cx } from "../../../common/helpers";

type ButtonStyle = { variant?: "primary"; dark?: boolean } | { variant: "secondary"; dark?: never };

type LinkProps = ButtonStyle & { href: string; children: ReactNode };

type ActionProps = ButtonStyle & {
    href?: never;
    type?: "button" | "submit";
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    loading?: boolean;
    loadingLabel?: string;
    children: ReactNode;
};

export default function Button(props: LinkProps | ActionProps) {
    const { variant = "primary", dark = false } = props;
    const className = cx(styles.button, styles[variant], dark && styles.dark, dark && "on-dark");

    if (props.href !== undefined) {
        const external = props.href.startsWith("http");
        const icon = variant === "secondary" ? external && <ExternalArrowIcon /> : <ArrowIcon />;
        return external ? (
            <a href={props.href} className={className}>
                {props.children}
                {icon}
            </a>
        ) : (
            <Link href={props.href} className={className}>
                {props.children}
                {icon}
            </Link>
        );
    }

    return (
        <button
            type={props.type ?? "button"}
            disabled={props.disabled}
            onClick={props.onClick}
            className={className}
            aria-disabled={props.loading || undefined}
        >
            {props.loading ? (
                <>
                    <span className={styles.spinner} aria-hidden="true" />
                    {props.loadingLabel ?? props.children}
                </>
            ) : (
                <>
                    {props.children}
                    {variant !== "secondary" && <ArrowIcon />}
                </>
            )}
        </button>
    );
}
