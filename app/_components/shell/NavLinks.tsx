"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import { cx } from "../../../common/helpers";

/** Maps whether a nav link is active to its aria-current value, so screen readers announce the current page. */
function current(active: boolean) {
    return active ? "page" : undefined;
}

export default function NavLinks() {
    const pathname = usePathname() ?? "";

    return (
        <ul role="list" className={styles.links}>
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
                <Link href="/contact" className={styles.contact} aria-current={current(pathname === "/contact")}>
                    Contact
                </Link>
            </li>
        </ul>
    );
}
