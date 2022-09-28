import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                {`All content `}&copy;{` Callum Newlands ${new Date().getFullYear()}`}
            </footer>
        </>
    );
}
