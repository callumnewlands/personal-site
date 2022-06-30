import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styles from "./NavBar.module.scss";
import Link from "next/link";

const pages: MenuProps["items"] = [
    {
        label: "Portfolio",
        page: "work",
        icon: <MailOutlined />
    },
    {
        label: "About",
        page: "about",
        icon: <AppstoreOutlined />
    },
    {
        label: "Contact",
        page: "contact",
        icon: <AppstoreOutlined />
    }
].map((page: LinkType) => ({
    label: (
        <Link href={`/${page.page}`}>
            <a>{page.label}</a>
        </Link>
    ),
    key: page.page,
    icon: page.icon
}));

interface LinkType {
    label: string;
    page: string;
    icon: JSX.Element;
}

export default function NavBar() {
    const [current, setCurrent] = useState<string>("mail");

    return (
        <div className={styles.header}>
            <Link href={"/"}>
                <a>
                    <h1 className={styles.header_logo}>Logo</h1>
                </a>
            </Link>
            <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" items={pages} />
        </div>
    );
}
