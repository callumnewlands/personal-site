import styles from "./ContactForm.module.scss";
import { Button, Form, Input, Radio } from "antd";

function encode(data: { [key: string]: string }) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
        .join(`&`);
}

export default function ContactForm() {

    const formName = "Contact Form";

    const radioOptions = [
        {
            value: "newProject",
            label: "A New Project"
        },
        {
            value: "existingQuote",
            label: "An Existing Quote"
        },
        {
            value: "consultancy",
            label: "Consultancy"
        },
        {
            value: "feedback",
            label: "Feedback/Suggestions"
        },
        {
            value: "other",
            label: "Something Else"
        }
    ];

    const handleSubmit = (values: { [key: string]: string }) => {
        if (values[`bot-field`] === undefined) {
            delete values[`bot-field`];
        }

        fetch(`/`, {
            method: `POST`,
            headers: { "Content-Type": `application/x-www-form-urlencoded` },
            body: encode({
                "form-name": formName,
                ...values
            })
        })
            .then(() => showSuccess())
            .catch((error) => showError(error));
    };

    const showSuccess = () => {
        console.log(`form submitted successfully`);
    };

    const showError = (error: Error) => {
        console.log(`There was an error submitting the form`);
        console.log(error);
    };

    const netlifyForm = (
        <form name={formName} data-netlify="true" data-netlify-honeypot="bot-field" hidden>
            <fieldset>
                {radioOptions.map((o, i) => (
                    <label>
                        <input key={"inquiry_hidden_" + i} type="radio" name="inquiry" value={o.value} />
                        {o.label}
                    </label>
                ))}
            </fieldset>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message" />
        </form>
    );

    return (
        <>
            {netlifyForm}
            <Form
                layout={"vertical"}
                className={styles.contact_form}
                name={formName}
                method={"POST"}
                onFinish={handleSubmit}
            >
                <Form.Item className={`hidden`} style={{ display: `none` }} name="bot-field">
                    <Input type={`hidden`} />
                </Form.Item>
                <Form.Item
                    label="What are you inquiring about?"
                    name="inquiry"
                    initialValue={radioOptions[0].value}
                >
                    <Radio.Group className={styles.options_buttons_container}>
                        {radioOptions.map((o, i) => (
                            <Radio.Button value={o.value}>{o.label}</Radio.Button>
                        ))}
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Name" name={"name"} required>
                    <Input placeholder="Joe Smith" />
                </Form.Item>
                <Form.Item label="Email" name={"email"} required>
                    <Input placeholder="email@example.com" />
                </Form.Item>
                <Form.Item label="Message" name={"content"} required>
                    <Input.TextArea placeholder="Your message" rows={5} />
                </Form.Item>
                <Form.Item className={styles.button_right}>
                    <Button type="primary">Send Message &gt;</Button>
                </Form.Item>
            </Form>
        </>
    );
}
