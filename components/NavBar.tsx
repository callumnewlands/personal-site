import { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Contact, MenuIcon, PersonLaptop, Portfolio } from "../svgs";
import Logo from "./Logo";
import { cx } from "../common/helpers";

const pages = [
    {
        label: "Portfolio",
        page: "portfolio",
        icon: <Portfolio />
    },
    {
        label: "About",
        page: "about",
        icon: <PersonLaptop />
    },
    {
        label: "Contact Me",
        page: "contact",
        icon: <Contact />
    }
];

export default function NavBar() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const isHomePage = router.pathname === "/";
    const [overMasthead, setOverMasthead] = useState(true);

    useEffect(() => {
        if (!isHomePage) {
            return;
        }
        // clientHeight matches the svh masthead, innerHeight changes as mobile toolbars collapse
        const update = () => setOverMasthead(window.scrollY < document.documentElement.clientHeight);
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [isHomePage]);

    return (
        <header className={cx(styles.header, isHomePage && overMasthead && styles.header_hidden)}>
            <Link href={"/"} aria-label="Callum Newlands home">
                <Logo className={styles.header_logo} />
            </Link>
            <nav className={styles.header_menu} aria-label="Main">
                <button
                    type="button"
                    className={styles.header_menu_toggle}
                    aria-label="Menu"
                    aria-expanded={menuOpen}
                    aria-controls="nav-menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <MenuIcon />
                </button>
                <ul id="nav-menu" className={cx(styles.header_menu_list, menuOpen && styles.header_menu_list_open)}>
                    {pages.map((page) => {
                        const isActive = router.pathname.startsWith(`/${page.page}`);
                        return (
                            <li key={page.page}>
                                <Link
                                    href={`/${page.page}`}
                                    className={cx(styles.header_menu_item, isActive && styles.header_menu_item_active)}
                                    aria-current={isActive ? "page" : undefined}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <span className={styles.header_menu_icon}>{page.icon}</span>
                                    <span className={styles.header_menu_label}>{page.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
