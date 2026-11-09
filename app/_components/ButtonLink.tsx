import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";
import { ArrowIcon, ExternalArrowIcon } from "./icons";
import { cx } from "../../common/helpers";

type ButtonLinkProps = {
    href: string;
    children: ReactNode;
} & ({ variant?: "primary"; dark?: boolean } | { variant: "secondary"; dark?: never });

export default function ButtonLink({ href, variant = "primary", dark = false, children }: ButtonLinkProps) {
    const external = href.startsWith("http");
    const className = cx(styles.button, styles[variant], dark && styles.dark);
    const icon = variant === "primary" ? <ArrowIcon /> : external && <ExternalArrowIcon />;

    if (external) {
        return (
            <a href={href} className={className}>
                {children}
                {icon}
            </a>
        );
    }
    return (
        <Link href={href} className={className}>
            {children}
            {icon}
        </Link>
    );
}
