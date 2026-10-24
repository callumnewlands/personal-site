import ContactForm from "../components/ContactForm";
import styles from "../styles/contact.module.scss";
import Seo from "../components/Seo";
import { Title } from "../components/ui/Typography";
import { pages } from "../data/pages";

export default function ContactPage() {
    return (
        <>
            <Seo {...pages.contact} />
            <div className={styles.contact_page}>
                <Title className={styles.contact_title}>Contact Me</Title>
                <div className={styles.contact_header}>
                    <div className={styles.contact_header_panel}>
                        <p>Need a developer? Have a question or idea? Just want to say “Hi”? </p>
                        <p>Get in touch!</p>
                    </div>
                    <div className={styles.contact_header_panel + " " + styles.contact_header_panel_image}>
                        <img
                            src="/illustrations/contact.svg"
                            alt="Illustrations of a person throwing a paper aeroplane."
                        />
                    </div>
                </div>
                <div className={styles.contact_form_container}>
                    <ContactForm />
                </div>
            </div>
        </>
    );
}
