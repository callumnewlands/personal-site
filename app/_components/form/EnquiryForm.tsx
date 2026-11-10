"use client";

import type { FormEvent, ReactNode } from "react";
import { useRef, useState } from "react";
import Button from "../ui/Button";
import { WarningIcon } from "../ui/icons";
import type { Errors, Field } from "./enquiry";
import {
    FORM_ENDPOINT,
    FORM_NAME,
    SENT_PAGE,
    errorId,
    fields,
    inputId,
    needs,
    validate,
    validateField
} from "./enquiry";
import type { SummaryItem } from "./FormErrors";
import { ErrorMessage, ErrorSummary } from "./FormErrors";
import styles from "./EnquiryForm.module.css";
import { EMAIL } from "../../../common/site";

type Status = "editing" | "sending" | "sent";

function readValues(form: HTMLFormElement) {
    const values: Record<string, string> = {};
    for (const [name, value] of new FormData(form)) {
        values[name] = String(value).trim();
    }
    return values;
}

function focusField(field: Field) {
    const input = document.getElementById(inputId(field));
    input?.closest(`.${styles.field}, fieldset`)?.scrollIntoView({ block: "start" });
    input?.focus({ preventScroll: true });
}

function Step({ number, children }: { number: number; children: ReactNode }) {
    return (
        <li className={styles.step}>
            <span className={styles.number} aria-hidden="true">
                {number}
            </span>
            {children}
        </li>
    );
}

export function EnquirySent({ takeFocus = false }: { takeFocus?: boolean }) {
    return (
        <div className={styles.card}>
            <p className={styles.sent} tabIndex={-1} ref={takeFocus ? (element) => element?.focus() : undefined}>
                Thanks, it&rsquo;s on its way
            </p>
            <p>I usually reply within [TBC].</p>
        </div>
    );
}

export default function EnquiryForm() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<Status>("editing");
    const [errors, setErrors] = useState<Errors>({});
    const [summary, setSummary] = useState<SummaryItem[]>([]);
    const [failures, setFailures] = useState(0);

    const check = (field: Field) => {
        if (!formRef.current) {
            return;
        }
        const error = validateField(field, readValues(formRef.current)[field] ?? "");
        setErrors((current) => {
            const next = { ...current };
            if (error) {
                next[field] = error;
            } else {
                delete next[field];
            }
            return next;
        });
    };

    // Errors only appear when someone leaves a field, but go as soon as it's fixed
    const recheck = (field: Field) => {
        if (errors[field]) {
            check(field);
        }
    };

    const describedBy = (field: Field) => (errors[field] ? errorId(field) : undefined);

    const fieldProps = (field: Field) => ({
        id: inputId(field),
        name: field,
        className: styles.input,
        required: true,
        "aria-invalid": errors[field] ? true : undefined,
        "aria-describedby": describedBy(field),
        onChange: () => recheck(field),
        onBlur: () => check(field)
    });

    const submit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (status === "sending") {
            return;
        }
        const form = event.currentTarget;
        const values = readValues(form);
        const found = validate(values);
        const invalid = fields.flatMap((field) => {
            const message = found[field];
            return message ? [{ field, message }] : [];
        });
        setErrors(found);
        // Kept until the next submit, so it doesn't shift while people fix things
        setSummary(invalid.length > 1 ? invalid : []);
        if (invalid.length === 1) {
            focusField(invalid[0].field);
        }
        if (invalid.length) {
            return;
        }

        setStatus("sending");
        const sent = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(values).toString()
        }).then(
            (response) => response.ok,
            () => false
        );
        if (sent) {
            setStatus("sent");
        } else {
            setStatus("editing");
            setFailures((count) => count + 1);
        }
    };

    if (status === "sent") {
        return <EnquirySent takeFocus />;
    }

    return (
        <form
            ref={(form) => {
                formRef.current = form;
                // Without JavaScript the browser's own validation still runs
                if (form) {
                    form.noValidate = true;
                }
            }}
            className={styles.card}
            name={FORM_NAME}
            method="POST"
            action={SENT_PAGE}
            onSubmit={submit}
        >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="visually-hidden" aria-hidden="true">
                <label>
                    Leave this empty
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
            </p>

            <ErrorSummary errors={summary} onSelect={focusField} />

            <ol className={styles.steps}>
                <Step number={1}>
                    <fieldset aria-describedby={describedBy("need")}>
                        <legend className={styles.question}>What are you looking for?</legend>
                        <div className={styles.options}>
                            {needs.map((need, index) => (
                                <label key={need} className={styles.option}>
                                    <input
                                        type="radio"
                                        name="need"
                                        value={need}
                                        id={index === 0 ? inputId("need") : undefined}
                                        required
                                        onChange={() => recheck("need")}
                                        onBlur={(event) => {
                                            if (event.relatedTarget?.getAttribute("name") !== "need") {
                                                check("need");
                                            }
                                        }}
                                    />
                                    {need}
                                </label>
                            ))}
                        </div>
                        <ErrorMessage field="need" message={errors.need} />
                    </fieldset>
                </Step>

                <Step number={2}>
                    <div className={styles.field}>
                        <label htmlFor={inputId("situation")} className={styles.question}>
                            Tell me a bit about it
                        </label>
                        <textarea {...fieldProps("situation")} />
                        <ErrorMessage field="situation" message={errors.situation} />
                    </div>
                </Step>

                <Step number={3}>
                    <div>
                        <fieldset>
                            <legend className={styles.question}>How can I reach you?</legend>
                            <div className={styles.reply}>
                                <div className={styles.field}>
                                    <label htmlFor={inputId("name")} className={styles.label}>
                                        Your Name
                                    </label>
                                    <input {...fieldProps("name")} autoComplete="name" />
                                    <ErrorMessage field="name" message={errors.name} />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor={inputId("email")} className={styles.label}>
                                        Email
                                    </label>
                                    <input {...fieldProps("email")} type="email" autoComplete="email" />
                                    <ErrorMessage field="email" message={errors.email} />
                                </div>
                            </div>
                        </fieldset>

                        {/* Stays up while it re-sends; the key makes each new failure announce again */}
                        {failures > 0 && (
                            <div key={failures} className={styles.alert} role="alert">
                                <p className={styles["alert-title"]}>
                                    <WarningIcon />
                                    Sorry, something went wrong
                                </p>
                                <p>
                                    You can try to send it again or email me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                                </p>
                            </div>
                        )}

                        <div className={styles.submit}>
                            <Button type="submit" loading={status === "sending"} loadingLabel="Sending">
                                Send it
                            </Button>
                        </div>
                    </div>
                </Step>
            </ol>
        </form>
    );
}
