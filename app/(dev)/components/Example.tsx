import type { ReactElement, ReactNode } from "react";
import styles from "./components.module.css";
import { cx } from "../../../common/helpers";

export interface ExampleData {
    element: ReactElement;
    variants?: ReactElement[];
    width?: "small" | "narrow" | "medium";
    dark?: boolean;
}

const tokens = /((?<=<\/?)[\w.]+)|(\w+(?==))|("[^"]*")/g;
const tokenClasses = [styles.tag, styles.prop, styles.string];

/** Colours the tag names, props and strings in a JSX code snippet. */
function highlight(code: string) {
    const parts: ReactNode[] = [];
    let last = 0;
    for (const match of code.matchAll(tokens)) {
        parts.push(
            code.slice(last, match.index),
            <span key={match.index} className={tokenClasses[match.slice(1).findIndex(Boolean)]}>
                {match[0]}
            </span>
        );
        last = match.index + match[0].length;
    }
    parts.push(code.slice(last));
    return parts;
}

export default function Example({ element, variants, width, dark = false, code }: ExampleData & { code: string }) {
    return (
        <div className={styles.example}>
            <div className={cx(styles.preview, width && styles[width], dark && styles.dark, dark && "on-dark")}>
                {variants ? (
                    <div className={styles.variants}>
                        {element}
                        {variants}
                    </div>
                ) : (
                    element
                )}
            </div>
            <pre className={styles.code}>
                <code>{highlight(code)}</code>
            </pre>
        </div>
    );
}
