import styles from "./ContactForm.module.scss";
import { Button, Form, Input, Radio, Result } from "antd";
import { useState } from "react";

function encode(data: { [key: string]: string }) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
        .join(`&`);
}

export default function ContactForm() {
    const formName = "Contact Form";

    enum Page {
        Form,
        Success,
        Error
    }

    const [currentPage, setCurrentPage] = useState<Page>(Page.Form);
    const [error, setError] = useState<Error | null>(null);
    const showForm = () => {
        setError(null);
        setCurrentPage(Page.Form);
    };
    const showSuccess = () => {
        setError(null);
        setCurrentPage(Page.Success);
    };
    const showError = (error: Error) => {
        setError(error);
        setCurrentPage(Page.Error);
    };

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

    const successPage = (
        <Result
            status="success"
            title="Message Sent Successfully!"
            subTitle="Thanks for your inquiry, I'll aim to get back to you as soon as possible."
            extra={[
                <Button type="primary" onClick={showForm}>
                    Send Another Message
                </Button>
            ]}
        />
    );
    const errorPage = (
        <Result
            status="error"
            title="There was an error submitting your form:"
            subTitle={error ? "Details:" + error : "No further details available."}
            extra={[
                <Button type="primary" onClick={showForm}>
                    Try Again
                </Button>
            ]}
        />
    );

    const formPage = (
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
            <Form.Item label="What are you inquiring about?" name="inquiry" initialValue={radioOptions[0].value}>
                <Radio.Group className={styles.options_buttons_container}>
                    {radioOptions.map((o, i) => (
                        <Radio.Button key={"inquiry_option_" + i} value={o.value}>
                            {o.label}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Name" name={"name"} rules={[{ required: true, message: `Please enter your name.` }]}>
                <Input placeholder="Joe Smith" />
            </Form.Item>
            <Form.Item label="Email" name={"email"} rules={[{ required: true, message: `Please enter your email.` }]}>
                <Input placeholder="email@example.com" />
            </Form.Item>
            <Form.Item
                label="Message"
                name={"message"}
                rules={[{ required: true, message: `Please enter your message.` }]}
            >
                <Input.TextArea placeholder="Your message" rows={5} />
            </Form.Item>
            <Form.Item className={styles.button_right}>
                <Button type="primary" htmlType={"submit"}>
                    Send Message &gt;
                </Button>
            </Form.Item>
        </Form>
    );

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
            {currentPage === Page.Success ? successPage : currentPage === Page.Error ? errorPage : formPage}
        </>
    );
}
