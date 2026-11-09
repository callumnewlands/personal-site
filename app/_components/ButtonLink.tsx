import type { ReactNode } from "react";
import Link from "next/link";
import type { ButtonStyle } from "./buttonStyle";
import { buttonClassName } from "./buttonStyle";
import { ArrowIcon, ExternalArrowIcon } from "./icons";

type ButtonLinkProps = ButtonStyle & {
    href: string;
    children: ReactNode;
};

export default function ButtonLink({ href, variant, dark, children }: ButtonLinkProps) {
    const external = href.startsWith("http");
    const className = buttonClassName(variant, dark);
    const icon = variant === "secondary" ? external && <ExternalArrowIcon /> : <ArrowIcon />;

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
