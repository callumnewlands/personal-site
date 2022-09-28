import React, { useCallback, useEffect, useRef, useState } from "react";
import Icon, { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Contact, PersonLaptop, Portfolio } from "../svgs";
import { Property } from "csstype";
import Logo from "./Logo";

type Visibility = Property.Visibility;
type BoxShadow = Property.BoxShadow;
type BackgroundColor = Property.BackgroundColor;

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
    const shadowDef = "0 0 4px 0 rgba(0, 0, 0, 0.25)";
    const homeBackground = "#00000066";
    const standardBackground = "white";

    const ref = useRef<HTMLDivElement>(null);
    const getHomePageStyles = useCallback(() => {
        let backgroundColor : BackgroundColor, boxShadow : BoxShadow, visibility : Visibility;
        if (typeof window === "undefined") {
            backgroundColor = homeBackground;
            boxShadow = "none";
            visibility = "hidden";
        } else {
            backgroundColor = (window.scrollY || window.pageYOffset) >= window.innerHeight ? standardBackground : homeBackground;
            boxShadow = (window.scrollY || window.pageYOffset) >= window.innerHeight - 100 ? shadowDef : "none";
            visibility =  (window.scrollY || window.pageYOffset) >= window.innerHeight ? "visible" : "hidden";
        }
        return { backgroundColor, boxShadow, visibility };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref?.current) {
                return;
            } else if (!isHomePage) {
                ref.current.style.backgroundColor = "white";
                ref.current.style.boxShadow = shadowDef;
                ref.current.style.visibility = "visible";
                return;
            }
            const style = getHomePageStyles();
            ref.current.style.backgroundColor = style.backgroundColor;
            ref.current.style.boxShadow = style.boxShadow;
            ref.current.style.visibility = style.visibility;
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
                backgroundColor: isHomePage ? homePageStyles.backgroundColor : standardBackground,
                boxShadow: isHomePage ? homePageStyles.boxShadow : shadowDef,
                visibility: isHomePage ? homePageStyles.visibility : "visible"
            }}
        >
            <Link href={"/"}>
                <a>
                    <Logo className={styles.header_logo}/>
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
