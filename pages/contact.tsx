import React from "react";
import { Typography } from "antd";
import ContactForm from "../components/ContactForm";
import styles from "../styles/contact.module.scss";
import Head from "next/head";

const { Title } = Typography;

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact | Callum Newlands | Freelance Web and Desktop Application Developer</title>
                <meta name="keywords" />
                <meta
                    name="description"
                    content="Contact page to get in touch with Callum Newlands regarding development work, web-development or full-stack development."
                />
            </Head>
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
                            className={styles.about_header_illustrations}
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
