import styles from "./Footer.module.scss";
import { GithubIcon, InstagramIcon, LinkedinIcon, UpworkLogo } from "../svgs";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_icons}>
                    <a
                        href={"https://github.com/callumnewlands"}
                        aria-label="GitHub"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <GithubIcon />
                    </a>
                    <a
                        href={"https://www.linkedin.com/in/callum-newlands-80ab28174/"}
                        aria-label="LinkedIn"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <LinkedinIcon />
                    </a>
                    <a
                        href={"https://www.upwork.com/freelancers/~014de11efc605b0708"}
                        aria-label="Upwork"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <UpworkLogo />
                    </a>
                    <a
                        href={"https://www.instagram.com/callumnewlands_archery/"}
                        aria-label="Instagram"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon />
                    </a>
                </div>
                <p>
                    {`All content `}&copy;{` Callum Newlands 2020–${new Date().getFullYear()}`}
                </p>
            </footer>
        </>
    );
}
