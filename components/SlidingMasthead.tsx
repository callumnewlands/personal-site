import styles from "./SlidingMasthead.module.scss";
import { Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Logo from "./Logo";
import React, { useRef } from "react";
import Image from "next/image";
import banner from "../public/photos/2JB1835.webp";

function SlidingMasthead() {
    const pageStartRef = useRef<HTMLDivElement>(null);

    const scrollToStart = () => {
        if (!pageStartRef?.current) {
            return;
        }
        pageStartRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };

    return (
        <>
            <div className={styles.masthead}>
                <div className={styles.masthead_background}>
                    <Image
                        src={banner}
                        layout={"fill"}
                        objectFit={"cover"}
                        quality={100}
                        priority={true}
                        placeholder="blur"
                        alt={"Photo of Callum Newlands sitting in from of a screen with a virtual forest scene on it."}
                    />
                </div>

                <div className={styles.masthead_midground}>
                    <div className={styles.text_container}>
                        <h1>Freelance Full-stack Developer</h1>
                    </div>
                </div>

                <div className={styles.masthead_foreground}>
                    <div className={styles.logo_container}>
                        <Logo className={styles.logo} />
                    </div>
                    <Button type={"text"} className={styles.masthead_bottom_button} onClick={scrollToStart}>
                        <h2>
                            <span className={styles.text_container}>Find out how I can help you</span>
                            <br />
                            <DownOutlined />
                        </h2>
                    </Button>
                </div>
            </div>
            <div ref={pageStartRef} className={styles.page_start} />
        </>
    );
}

export default SlidingMasthead;
