"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import { cx } from "../../common/helpers";

function current(active: boolean) {
    return active ? "page" : undefined;
}

export default function NavLinks() {
    const pathname = usePathname() ?? "";

    return (
        <ul className={styles.links}>
            <li>
                <Link
                    href="/#work"
                    className={cx(styles.link, "quiet-link")}
                    aria-current={current(pathname.startsWith("/portfolio"))}
                >
                    Work
                </Link>
            </li>
            <li>
                <Link
                    href="/about"
                    className={cx(styles.link, "quiet-link")}
                    aria-current={current(pathname === "/about")}
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    href="/contact"
                    className={cx(styles.contact, "on-dark")}
                    aria-current={current(pathname === "/contact")}
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
}
