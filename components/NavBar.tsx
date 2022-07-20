import React, { useState } from "react";
import { CommentOutlined, SolutionOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styles from "./NavBar.module.scss";
import Link from "next/link";

const pages: MenuProps["items"] = [
    {
        label: "Portfolio",
        page: "work",
        icon: <SolutionOutlined />
    },
    {
        label: "About",
        page: "about",
        icon: <UserOutlined />
    },
    {
        label: "Contact Me",
        page: "contact",
        icon: <CommentOutlined />
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
                    <div className={styles.header_logo}>
                        <img src="/logo-vector-green.svg" alt="Callum Newlands Logo" />
                        <div className={styles.header_logo_text}>
                            <h1>Callum Newlands</h1>
                            <h2>Software Developer</h2>
                        </div>
                    </div>

                </a>
            </Link>
            <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" items={pages}
                  className={styles.header_menu} />
        </div>
    );
}
