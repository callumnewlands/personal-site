import type { ReactElement } from "react";
import { highlight, jsxSource } from "./jsx-source";
import styles from "./components.module.css";
import { cx } from "../../../common/helpers";

export interface ExampleData {
    element: ReactElement | ReactElement[];
    variants?: ReactElement[];
    width?: "small" | "narrow" | "medium";
    dark?: boolean;
}

export default function Example({ element, variants, width, dark = false }: ExampleData) {
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
                <code>
                    {highlight(jsxSource(element), {
                        tag: styles.tag,
                        prop: styles.prop,
                        string: styles.string
                    })}
                </code>
            </pre>
        </div>
    );
}
