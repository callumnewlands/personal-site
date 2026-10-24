import styles from "./ContactForm.module.scss";
import { FormEvent, useState } from "react";
import Button from "./ui/Button";
import Result from "./ui/Result";

// Must match public/__forms.html
const FORM_NAME = "Contact Form";
const FORM_ENDPOINT = "/__forms.html";

const inquiryOptions = [
    { value: "newProject", label: "A New Project" },
    { value: "existingQuote", label: "An Existing Quote" },
    { value: "consultancy", label: "Consultancy" },
    { value: "feedback", label: "Feedback/Suggestions" },
    { value: "other", label: "Something Else" }
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FieldName = "name" | "email" | "message";
type Errors = Partial<Record<FieldName, string>>;

function validate(values: Record<string, string>): Errors {
    const errors: Errors = {};
    if (!values.name.trim()) {
        errors.name = "Please enter your name.";
    }
    if (!values.email.trim()) {
        errors.email = "Please enter your email.";
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
        errors.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) {
        errors.message = "Please enter your message.";
    }
    return errors;
}

enum Page {
    Form,
    Success,
    Error
}

export default function ContactForm() {
    const [currentPage, setCurrentPage] = useState<Page>(Page.Form);
    const [error, setError] = useState("");
    const [errors, setErrors] = useState<Errors>({});
    const [submitting, setSubmitting] = useState(false);

    const showForm = () => {
        setError("");
        setCurrentPage(Page.Form);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const values = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;

        const validationErrors = validate(values);
        setErrors(validationErrors);
        const firstInvalid = Object.keys(validationErrors)[0];
        if (firstInvalid) {
            event.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(values).toString()
            });
            if (!res.ok) {
                throw new Error(res.status + " " + res.statusText);
            }
            setCurrentPage(Page.Success);
        } catch (e) {
            setError(String(e));
            setCurrentPage(Page.Error);
        } finally {
            setSubmitting(false);
        }
    };

    if (currentPage === Page.Success) {
        return (
            <Result
                success
                title="Message Sent Successfully!"
                message="Thanks for your inquiry, I'll aim to get back to you as soon as possible."
            >
                <Button variant="primary" onClick={showForm}>
                    Send Another Message
                </Button>
            </Result>
        );
    }

    if (currentPage === Page.Error) {
        return (
            <Result
                success={false}
                title="There was an error submitting your form:"
                message={error ? "Details: " + error : "No further details available."}
            >
                <Button variant="primary" onClick={showForm}>
                    Try Again
                </Button>
            </Result>
        );
    }

    const fieldProps = (name: FieldName) => ({
        id: `contact-${name}`,
        name,
        "aria-invalid": errors[name] ? true : undefined,
        "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
        onChange: () => errors[name] && setErrors({ ...errors, [name]: undefined }),
        className: styles.input + (errors[name] ? " " + styles.input_error : "")
    });

    const fieldError = (name: FieldName) =>
        errors[name] && (
            <div id={`contact-${name}-error`} className={styles.field_error}>
                {errors[name]}
            </div>
        );

    return (
        <form
            className={styles.contact_form}
            name={FORM_NAME}
            method="POST"
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            noValidate
        >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className={styles.honeypot} aria-hidden="true">
                <label>
                    Don&apos;t fill this out if you&apos;re human:{" "}
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
            </p>

            <fieldset className={styles.field}>
                <legend className={styles.label}>What are you inquiring about?</legend>
                <div className={styles.options_buttons_container}>
                    {inquiryOptions.map((o, i) => (
                        <label key={o.value} className={styles.radio_button}>
                            <input type="radio" name="inquiry" value={o.value} defaultChecked={i === 0} />
                            <span>{o.label}</span>
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                    Name
                </label>
                <input type="text" placeholder="Joe Smith" autoComplete="name" {...fieldProps("name")} />
                {fieldError("name")}
            </div>

            <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>
                    Email
                </label>
                <input type="email" placeholder="email@example.com" autoComplete="email" {...fieldProps("email")} />
                {fieldError("email")}
            </div>

            <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.label}>
                    Message
                </label>
                <textarea placeholder="Your message" rows={5} {...fieldProps("message")} />
                {fieldError("message")}
            </div>

            <div className={styles.field + " " + styles.button_right}>
                <Button variant="primary" type="submit" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Message >"}
                </Button>
            </div>
        </form>
    );
}
