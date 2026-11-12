import type { ReactNode } from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

export default function Accordion({ items }: { items: { title: string; content: ReactNode }[] }) {
    return (
        <ul role="list" className={styles.accordion}>
            {items.map((item) => (
                <AccordionItem key={item.title} title={item.title}>
                    {item.content}
                </AccordionItem>
            ))}
        </ul>
    );
}
