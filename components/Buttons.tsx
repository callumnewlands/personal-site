import * as React from "react";
import styles from "./Buttons.module.scss";
import { Button } from "antd";
import Link from "next/link";

interface CustomButtonProps {
    children?: React.ReactNode;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    newTab?: boolean;
}

export function CustomButton({
    children,
    href = undefined,
    newTab = false,
    onClick = () => {},
    additionalClasses = undefined
}: CustomButtonProps & { additionalClasses?: string }) {
    if (href) {
        return (
            <div className={styles.button_container + " " + additionalClasses}>
                <Link href={href} passHref>
                    <Button
                        type={"primary"}
                        size={"large"}
                        href={href}
                        onClick={onClick}
                        target={newTab ? "_blank" : undefined}
                    >
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

export function FullWidthButton(props: CustomButtonProps) {
    return <CustomButton {...props} additionalClasses={styles.button_container_full_width} />;
}
