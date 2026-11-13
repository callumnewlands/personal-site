// Must match public/__forms.html
export const FORM_NAME = "enquiry";
export const FORM_ENDPOINT = "/__forms.html";
export const SENT_PAGE = "/enquiry-sent.html";

export const needs = [
    "Part-time tech lead",
    "Code review or health check",
    "CI/CD and workflow",
    "New build or MVP",
    "Not sure yet",
    "Something else"
];

export const fields = ["need", "situation", "name", "email"] as const;

export type Field = (typeof fields)[number];
export type Errors = Partial<Record<Field, string>>;

/** Returns the id of a field's input. For the radio group, it's the id of the first option. */
export function inputId(field: Field) {
    return `enquiry-${field}`;
}

/** Returns the id of a field's error message, for the input's `aria-describedby`. */
export function errorId(field: Field) {
    return `enquiry-${field}-error`;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Checks a value against its field's rule, ignoring surrounding spaces, and returns the message to show
 * under the field if it fails.
 *
 * @returns undefined if the value is valid
 */
export function validateField(field: Field, value: string) {
    const trimmed = value.trim();
    switch (field) {
        case "need":
            return needs.includes(trimmed) ? undefined : "Choose what you’re looking for";
        case "situation":
            return trimmed ? undefined : "Tell me a bit about what you need";
        case "name":
            return trimmed ? undefined : "Enter your name";
        case "email":
            return EMAIL_PATTERN.test(trimmed) ? undefined : "Enter an email like name@example.com";
    }
}

/**
 * Checks every field before the form is sent and returns the messages for the ones that fail, keyed by
 * field, or an empty object if everything is valid. A missing value counts as empty.
 */
export function validate(values: Partial<Record<Field, string>>) {
    const errors: Errors = {};
    for (const field of fields) {
        const error = validateField(field, values[field] ?? "");
        if (error) {
            errors[field] = error;
        }
    }
    return errors;
}
