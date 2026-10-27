import * as React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";
import { cx } from "../../common/helpers";

interface StyleProps {
    variant?: "primary" | "default" | "text";
    large?: boolean;
    icon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
}

function buttonClasses({ variant = "default", large, className }: StyleProps) {
    return cx(styles.button, styles[`button_${variant}`], large && styles.button_large, className);
}

function ButtonContent({ icon, children }: StyleProps) {
    return (
        <>
            {icon && <span className={styles.button_icon}>{icon}</span>}
            {children && <span>{children}</span>}
        </>
    );
}

export default function Button({
    variant,
    large,
    icon,
    className,
    children,
    type = "button",
    ...props
}: StyleProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button type={type} className={buttonClasses({ variant, large, className })} {...props}>
            <ButtonContent icon={icon}>{children}</ButtonContent>
        </button>
    );
}

export function LinkButton({ href, newTab, ...props }: StyleProps & { href: string; newTab?: boolean }) {
    if (newTab) {
        return (
            <a href={href} className={buttonClasses(props)} target="_blank" rel="noopener noreferrer">
                <ButtonContent {...props} />
            </a>
        );
    }
    return (
        <Link href={href} className={buttonClasses(props)}>
            <ButtonContent {...props} />
        </Link>
    );
}
