import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowIcon, ExternalArrowIcon } from "./icons";
import styles from "./TextLink.module.css";
import { cx } from "../../../common/helpers";

export default function TextLink({
    href,
    arrow,
    quiet = false,
    children
}: {
    href: string;
    arrow?: "forward" | "back";
    quiet?: boolean;
    children: ReactNode;
}) {
    const content = (
        <>
            {arrow === "back" && (
                <span className={styles.back}>
                    <ArrowIcon />
                </span>
            )}
            {children}
            {arrow === "forward" && <ArrowIcon />}
        </>
    );

    if (href.startsWith("http")) {
        return (
            <a href={href} className={cx(styles.link, quiet && styles.quiet)}>
                {children}
                <ExternalArrowIcon />
            </a>
        );
    }
    return (
        <Link href={href} className={cx(styles.link, arrow && styles.arrow, quiet && styles.quiet)}>
            {content}
        </Link>
    );
}
