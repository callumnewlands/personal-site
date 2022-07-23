import { Typography } from "antd";
import styles from "../styles/about.module.scss";
import React from "react";
import ImageDivider from "../components/ImageDivider";
import CustomVerticalTimeline from "../components/CustomVerticalTimeline";

const { Title, Text } = Typography;

export default function AboutPage() {

    const timelineData = [
        {
            date: "2011 -- present",
            title: "Creative Director",
            location: "Miami, FL",
            description: "Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
        },
        {
            date: "2010 -- 2011",
            title: "Art Director",
            location: "San Francisco, CA",
            description: "Creative Direction, User Experience, Visual Design, SEO, Online Marketing"
        }
    ];

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
                    <img
                        src="/about_large.svg"
                        className={styles.about_header_illustrations}
                        alt="Illustrations of a person coding, playing with a target, working out and playing the guitar."
                    />
                </div>
            </div>
            <ImageDivider
                imagePath={"/archery.jpg"}
                imageAlt={"Photo of me shooting a bow with trees in the background"}
                title={"My Story"}
                text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque nisi, varius tincidunt " +
                    "pharetra vitae, consectetur in nisi. Mauris lobortis lacinia leo vel lacinia. Nunc rutrum auctor " +
                    "purus eu imperdiet. Praesent dui augue, mattis eu ullamcorper. Nunc neque nisi, varius tincidunt " +
                    "pharetra vitae, consectetur in nisi. Mauris lobortis lacinia leo vel lacinia. Nunc rutrum auctor " +
                    "purus eu imperdiet. Praesent dui augue, mattis eu ullamcorper."
                }
            />
            <div className={styles.about_left_panel}>
                <CustomVerticalTimeline data={timelineData} />
            </div>
            <p>Under Construction</p>
        </>
    );
}
