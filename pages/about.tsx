import { Typography } from "antd";
import styles from "../styles/about.module.scss";
import React from "react";
import ImageDivider from "../components/ImageDivider";

const { Title, Text } = Typography;

export default function AboutPage() {
    return (
        <>
            <div className={styles.about_header}>
                <div className={styles.about_header_panel}>
                    <Title>Hi, I'm Callum</Title>
                    <div className={styles.about_header_descriptors}>
                        <span>Developer,</span>
                        <span>Archer,</span>
                        <span>Athlete,</span>
                        <span>Musician</span>
                    </div>
                </div>

                <div className={styles.about_header_panel}>
                    <img src="/about_large.svg" className={styles.about_header_illustrations}
                         alt="Illustrations of a person coding, playing with a target, working out and playing the guitar." />
                </div>
            </div>
            <ImageDivider imagePath={"/archery.jpg"}
                          imageAlt={"Photo of me shooting a bow with trees in the background"} title={"My Story"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque nisi, varius tincidunt pharetra vitae, consectetur in nisi. Mauris lobortis lacinia leo vel lacinia. Nunc rutrum auctor purus eu imperdiet. Praesent dui augue, mattis eu ullamcorper. Nunc neque nisi, varius tincidunt pharetra vitae, consectetur in nisi. Mauris lobortis lacinia leo vel lacinia. Nunc rutrum auctor purus eu imperdiet. Praesent dui augue, mattis eu ullamcorper."} />
            <p>Under Construction</p>
        </>
    );
}
