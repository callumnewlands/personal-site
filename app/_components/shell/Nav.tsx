import Link from "next/link";
import Logo from "./Logo";
import { Container } from "@/app/_components/layout/Layout";
import NavLinks from "./NavLinks";
import styles from "./Nav.module.css";

export default function Nav() {
    return (
        <nav aria-label="Main">
            <Container className={styles.nav}>
                <Link href="/" className={styles.home} aria-label="Callum Newlands, home">
                    <Logo />
                </Link>
                <NavLinks />
            </Container>
        </nav>
    );
}
