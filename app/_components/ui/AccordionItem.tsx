"use client";

import type { ReactNode } from "react";
import { useId, useState } from "react";
import styles from "./Accordion.module.css";

export interface AccordionItemProps {
    title: string;
    content: ReactNode;
}

export default function AccordionItem({ title, content }: AccordionItemProps) {
    const [open, setOpen] = useState(false);
    const id = useId();

    return (
        <li className={styles.item}>
            <h3>
                <button
                    type="button"
                    className={styles.button}
                    aria-expanded={open}
                    aria-controls={id}
                    onClick={() => setOpen(!open)}
                >
                    {title}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path className={styles.vertical} d="M12 5v14" />
                    </svg>
                </button>
            </h3>
            <div id={id} className={styles.answer} hidden={!open}>
                {content}
            </div>
        </li>
    );
}
