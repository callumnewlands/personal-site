import { List, Typography } from "antd";
import styles from "../styles/about.module.scss";
import React from "react";
import ImageDivider from "../components/ImageDivider";
import CustomVerticalTimeline from "../components/CustomVerticalTimeline";
import CardGrid from "../components/CardGrid";

const { Title } = Typography;

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

    const awardsData = [
        {
            title: "First-class MEng Computer Science Degree (Hons.) -- 87%",
            description: <>University of Southampton, School of Electronics and Computer Science (ECS). UCAS: G401.
                Accredited by the <a href="https://www.bcs.org/">British Computer Society</a> and <a
                    href="https://www.theiet.org/">Institution of Engineering and Technology.</a></>,
            imagePath: "/illustrations/netliheart.svg",
            imageAlt: "alt"
        },
        {
            title: "Dean's List Award for Outstanding Achievement",
            description: "University of Southampton. Awarded for a degree average above 80%.",
            imagePath: "/illustrations/netliheart.svg",
            imageAlt: "alt"
        },
        {
            title: "BAE Systems Applied Intelligence Prize",
            description: "Awarded to the student achieving the top mark in the year for Part 2 Computer Science at the University of Southampton",
            imagePath: "/illustrations/netliheart.svg",
            imageAlt: "alt"
        },
        {
            title: "Winton Capital Management Prize",
            description: "Awarded to the student achieving the top mark in the year for Part 1 Computer Science at the University of Southampton",
            imagePath: "/illustrations/netliheart.svg",
            imageAlt: "alt"
        },
        {
            title: "Netcraft Prizes 2018, 2019, 2021",
            description: "Awarded to the top 10 students in the year for Computer Science at the University of Southampton in Parts 1 and 3, and for being one of the top 50 students in the country in the Computer Science A-level.",
            imagePath: "/illustrations/netliheart.svg",
            imageAlt: "alt"
        },
        {
            title: "ECS Excellence Scholarship Award",
            description: "1 of 3 available scholarships. Based on pre-University academic performance, and is a recognition of the hard work and achievements that you have made on your journey to higher education. Being a recipient means that, in the view of the judging panel of Admissions Tutors, you had one of the highest achievements of all students coming to ECS that year.",
            imagePath: "/illustrations/netliheart.svg",
            imageAlt: "alt"
        }
    ];

    const toolsData = [
        {
            title: "React",
            description: "string",
            imagePath: "/illustrations/netliheart.svg",
            imageAlt: "alt"
        },
        {
            title: "HTML",
            description: "string",
            imagePath: "/logo-vector-green.svg",
            imageAlt: "alt"
        }, {
            title: "React",
            description: "string",
            imagePath: "/illustrations/netliheart.svg",
            imageAlt: "alt"
        },
        {
            title: "HTML",
            description: "string",
            imagePath: "/logo-vector-green.svg",
            imageAlt: "alt"
        }, {
            title: "React",
            description: "string",
            imagePath: "/illustrations/netliheart.svg",
            imageAlt: "alt"
        },
        {
            title: "HTML",
            description: "string",
            imagePath: "/logo-vector-green.svg",
            imageAlt: "alt"
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
                        src="/illustrations/about_large.svg"
                        className={styles.about_header_illustrations}
                        alt="Illustrations of a person coding, playing with a target, working out and playing the guitar."
                    />
                </div>
            </div>
            <ImageDivider
                imagePath={"/photos/archery.jpg"}
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
            <div className={styles.about_panels}>

                <div className={styles.about_panels_panel}>
                    <Title level={2}>Experience and Education</Title>
                    <CustomVerticalTimeline data={timelineData} />
                </div>
                <div className={styles.about_panels_panel}>
                    <Title level={2}>Awards and Achievements</Title>
                    <List
                        itemLayout="horizontal"
                        className={styles.awards_list}
                        dataSource={awardsData}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<img src={item.imagePath} alt={item.imageAlt} />}
                                    title={item.title}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <Title level={2}>Skills and Technologies</Title>
            <CardGrid data={toolsData} />
        </>
    );
}
