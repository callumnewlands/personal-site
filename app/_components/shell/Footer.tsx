import Link from "next/link";
import Button from "../ui/Button";
import { Container } from "../layout/Layout";
import Logo from "./Logo";
import Treeline from "./Treeline";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "../ui/brand-icons";
import styles from "./Footer.module.css";
import { cx } from "../../../common/helpers";
import { EMAIL, SOCIAL_LINKS } from "../../../common/site";

const year = new Date().getFullYear();

const elsewhere = [
    { name: "LinkedIn", href: SOCIAL_LINKS.LinkedIn, Icon: LinkedInIcon },
    { name: "GitHub", href: SOCIAL_LINKS.GitHub, Icon: GitHubIcon },
    { name: "Instagram", href: SOCIAL_LINKS.Instagram, Icon: InstagramIcon }
];

export default function Footer() {
    return (
        <footer className="on-dark">
            <Treeline />
            <div className={styles.footer}>
                <Container className={styles.top}>
                    <div className={styles.message}>
                        <h2 className={cx(styles.heading, "panel-title")}>Not sure what your product needs next?</h2>
                        <div className={styles.actions}>
                            <Button href="/contact" dark>
                                Send me a message
                            </Button>
                            <address>
                                <a href={`mailto:${EMAIL}`} className="quiet-link">
                                    {EMAIL}
                                </a>
                            </address>
                        </div>
                    </div>
                    <nav aria-label="Footer" className={styles.groups}>
                        <div>
                            <p className={styles.label}>This site</p>
                            <ul role="list" className={styles.list}>
                                <li>
                                    <Link className="quiet-link" href="/#work">
                                        Work
                                    </Link>
                                </li>
                                <li>
                                    <Link className="quiet-link" href="/about">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link className="quiet-link" href="/contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className={styles.label}>Elsewhere</p>
                            <ul role="list" className={styles.list}>
                                {elsewhere.map(({ name, href, Icon }) => (
                                    <li key={name}>
                                        <a className="quiet-link" href={href}>
                                            <Icon />
                                            {name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </Container>
                <Container className={styles.bottom}>
                    <span aria-hidden="true">
                        <Logo dark />
                    </span>
                    <small>&copy; Callum Newlands {year}</small>
                    <Link className="quiet-link" href="/privacy">
                        Privacy
                    </Link>
                </Container>
            </div>
        </footer>
    );
}
