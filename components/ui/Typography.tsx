import * as React from "react";
import styles from "./Typography.module.scss";
import { cx } from "../../common/helpers";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3;
}

export function Title({ level = 1, className, ...props }: TitleProps) {
    const Heading = `h${level}` as const;
    return <Heading className={cx(styles.title, styles[`title_${level}`], className)} {...props} />;
}

export function Text({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return <p className={cx(styles.text, className)} {...props} />;
}
