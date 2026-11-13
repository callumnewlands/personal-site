import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { WarningIcon } from "@/app/_components/ui/icons";
import type { Field } from "./enquiry";
import { errorId, inputId } from "./enquiry";
import styles from "./EnquiryForm.module.css";
import { cx } from "@/common/helpers";

// Keeps the last value while its message collapses; `version` changes whenever the value's content does
function useLastShown<T>(value: T | undefined, version: string) {
    const [last, setLast] = useState({ version, value });
    if (value !== undefined && version !== last.version) {
        setLast({ version, value });
    }
    return value ?? last.value;
}

function Collapse({ open, children }: { open: boolean; children: ReactNode }) {
    return (
        <div className={styles.collapse} data-open={open || undefined} inert={!open}>
            <div>{children}</div>
        </div>
    );
}

export function ErrorMessage({ field, message }: { field: Field; message?: string }) {
    const shown = useLastShown(message, message ?? "");
    return (
        <Collapse open={Boolean(message)}>
            {shown && (
                <p id={errorId(field)} className={styles.error}>
                    <WarningIcon />
                    {shown}
                </p>
            )}
        </Collapse>
    );
}

export interface SummaryItem {
    field: Field;
    message: string;
}

interface ErrorSummaryProps {
    errors: SummaryItem[];
    onSelect: (field: Field) => void;
}

// Focus moves here whenever a new list arrives, so pass a new array only on submit
export function ErrorSummary({ errors, onSelect }: ErrorSummaryProps) {
    const ref = useRef<HTMLDivElement>(null);
    const listed = useLastShown(errors.length ? errors : undefined, errors.map(({ message }) => message).join("\n"));

    useEffect(() => {
        if (errors.length) {
            ref.current?.focus();
        }
    }, [errors]);

    return (
        <Collapse open={errors.length > 0}>
            {listed && (
                <div ref={ref} className={cx(styles.alert, styles.summary)} tabIndex={-1}>
                    <h3 className={styles["alert-title"]}>
                        <WarningIcon />
                        {listed.length} things to fix
                    </h3>
                    <ul>
                        {listed.map(({ field, message }) => (
                            <li key={field}>
                                <a
                                    href={`#${inputId(field)}`}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        onSelect(field);
                                    }}
                                >
                                    {message}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Collapse>
    );
}
