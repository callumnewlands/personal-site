import styles from "./Footer.module.scss";
import Icon, { GithubFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons";
import { UpworkLogo } from "../svgs";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer_icons}>
                    <a href={"https://github.com/callumnewlands"} aria-label="GitHub" target={"_blank"}>
                        <GithubFilled />
                    </a>
                    <a
                        href={"https://www.linkedin.com/in/callum-newlands-80ab28174/"}
                        aria-label="LinkedIn"
                        target={"_blank"}
                    >
                        <LinkedinFilled />
                    </a>
                    <a
                        href={"https://www.upwork.com/freelancers/~014de11efc605b0708"}
                        aria-label="Upwork"
                        target={"_blank"}
                    >
                        <Icon component={() => <UpworkLogo />} />
                    </a>
                    <a
                        href={"https://www.instagram.com/callumnewlands_archery/"}
                        aria-label="Instagram"
                        target={"_blank"}
                    >
                        <InstagramFilled />
                    </a>
                </div>
                <p>
                    {`All content `}&copy;{` Callum Newlands ${new Date().getFullYear()}`}
                </p>
            </footer>
        </>
    );
}
