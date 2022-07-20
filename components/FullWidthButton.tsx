import * as React from "react";
import styles from "./FullWidthButton.module.scss";
import { Button } from "antd";
import Link from "next/link";

interface FullWidthButtonProps {
    children?: React.ReactNode;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

export default function FullWidthButton({
                                            children, href = undefined, onClick = () => {
    }
                                        }: FullWidthButtonProps) {
    if (href) {
        return (
            <div className={styles.button_container}>
                <Link href={href} passHref>
                    <Button type={"primary"} size={"large"} href={href} onClick={onClick}>
                        {children}
                    </Button>
                </Link>
            </div>
        );
    }
    return (
        <div className={styles.button_container}>
            <Button type={"primary"} size={"large"} href={href} onClick={onClick}>
                {children}
            </Button>
        </div>
    );
}
