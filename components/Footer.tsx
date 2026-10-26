import { ReactNode } from "react";
import styles from "./Footer.module.scss";
import { GithubIcon, InstagramIcon, LinkedinIcon, UpworkLogo } from "../svgs";
import { SOCIAL_LINKS } from "../common/site";

type SocialPlatform = keyof typeof SOCIAL_LINKS;

const icons: Record<SocialPlatform, ReactNode> = {
    GitHub: <GithubIcon />,
    LinkedIn: <LinkedinIcon />,
    Upwork: <UpworkLogo />,
    Instagram: <InstagramIcon />
};

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_icons}>
                {(Object.entries(SOCIAL_LINKS) as [SocialPlatform, string][]).map(([label, href]) => (
                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                        {icons[label]}
                    </a>
                ))}
            </div>
            <p>
                {`All content `}&copy;{` Callum Newlands 2020–${year}`}
            </p>
        </footer>
    );
}
