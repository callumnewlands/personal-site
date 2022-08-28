import styles from "./ContactForm.module.scss";
import { Button, Form, Input, Radio } from "antd";

export default function ContactForm() {

    return (
        <Form
            layout={"vertical"}
            className={styles.contact_form}
            data-netlify="true"
            name={"Contact Form"}
            method={"POST"}
        >
            <Form.Item label="What are you inquiring about?" name="inquiry" initialValue={"newProject"}>
                <Radio.Group className={styles.options_buttons_container}>
                    <Radio.Button value="newProject">A New Project</Radio.Button>
                    <Radio.Button value="existingQuote">An Existing Quote</Radio.Button>
                    <Radio.Button value="consultancy">Consultancy</Radio.Button>
                    <Radio.Button value="feedback">Feedback/Suggestions</Radio.Button>
                    <Radio.Button value="other">Something Else</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Name" name={"name"}>
                <Input placeholder="Joe Smith" />
            </Form.Item>
            <Form.Item label="Email" name={"email"}>
                <Input placeholder="email@example.com" />
            </Form.Item>
            <Form.Item label="Message" name={"content"}>
                <Input.TextArea placeholder="Your message" rows={5} />
            </Form.Item>
            <Form.Item className={styles.button_right}>
                <Button type="primary">Send Message &gt;</Button>
            </Form.Item>
        </Form>
    );
}
