import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                Made with Netlify <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />
            </footer>
        </>
    );
}
