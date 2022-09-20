import React, { useCallback, useEffect, useRef, useState } from "react";
import Icon, { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Contact, PersonLaptop, Portfolio } from "../svgs";

const pages: MenuProps["items"] = [
    {
        label: "Portfolio",
        page: "portfolio",
        icon: <Icon component={() => <Portfolio />} />
    },
    {
        label: "About",
        page: "about",
        icon: <Icon component={() => <PersonLaptop />} />
    },
    {
        label: "Contact Me",
        page: "contact",
        icon: <Icon component={() => <Contact />} />
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
    const router = useRouter();
    const [current, setCurrent] = useState<string>("mail");

    const isHomePage = router.route.match("^/$");

    const ref = useRef<HTMLDivElement>(null);
    const shadowDef = "0 0 4px 0 rgba(0, 0, 0, 0.25)";
    const getHomePageStyles = useCallback(() => {
        let backgroundColor, boxShadow;
        if (typeof window === "undefined") {
            backgroundColor = "transparent";
            boxShadow = "none";
        } else {
            backgroundColor = (window.scrollY || window.pageYOffset) >= window.innerHeight ? "white" : "transparent";
            boxShadow = (window.scrollY || window.pageYOffset) >= window.innerHeight - 100 ? shadowDef : "none";
        }
        return { backgroundColor, boxShadow };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref?.current) {
                return;
            } else if (!isHomePage) {
                ref.current.style.backgroundColor = "white";
                ref.current.style.boxShadow = shadowDef;
                return;
            }
            const style = getHomePageStyles();
            ref.current.style.backgroundColor = style.backgroundColor;
            ref.current.style.boxShadow = style.boxShadow;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    const homePageStyles = getHomePageStyles();

    return (
        <div
            className={styles.header}
            ref={ref}
            style={{
                backgroundColor: isHomePage ? homePageStyles.backgroundColor : "white",
                boxShadow: isHomePage ? homePageStyles.boxShadow : shadowDef
            }}
        >
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
            <Menu
                onClick={(e) => setCurrent(e.key)}
                selectedKeys={[current]}
                mode="horizontal"
                items={pages}
                className={styles.header_menu}
                overflowedIndicator={<MenuOutlined />}
            />
        </div>
    );
}
