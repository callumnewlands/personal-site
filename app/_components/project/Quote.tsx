import type { Quote as QuoteData } from "../../../data/project-schema";
import styles from "./Quote.module.css";

export default function Quote({ text, name, role }: QuoteData) {
    return (
        <figure className={styles.quote}>
            <blockquote>
                <p>“{text}”</p>
            </blockquote>
            <figcaption>
                {name}, {role}
            </figcaption>
        </figure>
    );
}
