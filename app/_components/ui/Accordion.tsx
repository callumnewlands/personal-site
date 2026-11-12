import styles from "./Accordion.module.css";
import type { AccordionItemProps } from "./AccordionItem";
import AccordionItem from "./AccordionItem";

export default function Accordion({ items }: { items: AccordionItemProps[] }) {
    return (
        <ul role="list" className={styles.accordion}>
            {items.map((item) => (
                <AccordionItem key={item.title} {...item} />
            ))}
        </ul>
    );
}
