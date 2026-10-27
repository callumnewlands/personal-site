import * as React from "react";
import styles from "./Result.module.scss";
import { CheckCircleIcon, CloseCircleIcon } from "../../svgs";
import { cx } from "../../common/helpers";

interface ResultProps {
    success: boolean;
    title: string;
    message: string;
    children?: React.ReactNode;
}

export default function Result({ success, title, message, children }: ResultProps) {
    return (
        <div className={styles.result} role={success ? "status" : "alert"}>
            <div className={cx(styles.result_icon, success ? styles.result_icon_success : styles.result_icon_error)}>
                {success ? <CheckCircleIcon /> : <CloseCircleIcon />}
            </div>
            <div className={styles.result_title}>{title}</div>
            <div className={styles.result_message}>{message}</div>
            {children && <div className={styles.result_actions}>{children}</div>}
        </div>
    );
}
