import React from "react";
import { Typography } from "antd";
import ContactForm from "../components/ContactForm";
import styles from "../styles/contact.module.scss";

const { Title } = Typography;

export default function ContactPage() {
    return (<>
            <Title>Contact Me</Title>
            <div className={styles.contact_page}>
                <div className={styles.contact_header}>
                    <div className={styles.contact_header_panel}>
                        <p>Need a developer? Have a question or idea? Just want to say “Hi”? </p>
                        <p>Get in touch!</p>
                    </div>
                    <div className={styles.contact_header_panel + " " + styles.contact_header_panel_image}>
                        <img
                            src="/illustrations/contact.svg"
                            className={styles.about_header_illustrations}
                            alt="Illustrations of a person throwing a paper aeroplane."
                        />
                    </div>
                </div>
                <ContactForm />
            </div>
        </>

    );
}
