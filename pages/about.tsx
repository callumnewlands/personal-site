import { List, Typography } from "antd";
import styles from "../styles/about.module.scss";
import React from "react";
import ImageDivider from "../components/ImageDivider";
import CustomVerticalTimeline, { TimelineElementProps } from "../components/CustomVerticalTimeline";
import archeryImage from "../public/photos/archery.webp";
import Link from "next/link";
import Head from "next/head";

const { Title } = Typography;

export default function AboutPage() {
    const timelineData: TimelineElementProps[] = [
        {
            date: "2020 -- present",
            title: "Full-stack Developer",
            location: "Freelance",
            secondaryLocation: <Link href={"/portfolio"}>Portfolio</Link>,
            description:
                "Frontend Development, Backend Development, User Experience, Visual Design, Codebase Management, CI/CD, Testing"
        },
        {
            date: "2019",
            title: "Summer Intern (Developer)",
            location: "Black Pepper Software",
            description:
                "Software Development, Agile, Story Cards and Estimation, Issue Management, CI/CD, Acceptance Testing"
        },
        {
            date: "2018 -- 2022",
            title: "MEng Computer Science",
            location: "University of Southampton",
            description:
                "Programming, Software Development, Human-Computer Interaction, Databases, AI/Machine Learning," +
                " Deep learning, Computer Hardware, Embedded Programming, Web and Cloud Development, Data Visualisation"
        },
        {
            date: "2016",
            title: "Work Experience",
            location: "Black Pepper Software",
            description: "Employee Shadowing, Development Projects, Software Development, Testing"
        },
        {
            date: "2011 -- 2018",
            title: "Secondary School",
            location: "Lawrence Sheriff School, Rugby",
            description: "Maths, English, Computer Science, Further Maths, Physics, Electronics"
        }
    ];

    const awardsData = [
        {
            title: "First-class MEng Computer Science Degree (Hons.) -- 87%",
            description: (
                <>
                    University of Southampton, School of Electronics and Computer Science (ECS). UCAS: G401. Accredited
                    by the <a href="https://www.bcs.org/">British Computer Society</a> and{" "}
                    <a href="https://www.theiet.org/">Institution of Engineering and Technology.</a>
                </>
            ),
            imagePath: "/other/uos_logo_old.jpg",
            imageAlt: "University of Southampton Logo"
        },
        {
            title: "Dean's List Award for Outstanding Achievement",
            description: "University of Southampton. Awarded for a degree average above 80%.",
            imagePath: "/other/uos_logo_old.jpg",
            imageAlt: "University of Southampton Logo"
        },
        {
            title: "British Computer Society Prize 2021/22",
            description:
                "Awarded to the student achieving the top mark in the year for Part 4 Computer Science at the University of Southampton.",
            imagePath: "/other/BCS_logo.svg",
            imageAlt: "British Computer Society -- The Chartered Institute for IT: Logo"
        },
        {
            title: "ECS Group Design Project Prize 2021/22",
            description:
                "Awarded for a notable MEng group design project (GDP) in Electronics and Computer Science at the University of Southampton.",
            imagePath: "/other/ecs_logo.png",
            imageAlt: "University of Southampton Electronics and Computer Science (ECS) Logo"
        },
        {
            title: "BAE Systems Applied Intelligence Prize 2019",
            description:
                "Awarded to the student achieving the top mark in the year for Part 2 Computer Science at the University of Southampton.",
            imagePath: "/other/bae_logo.png",
            imageAlt: "BAE Systems Applied Intelligence Logo"
        },
        {
            title: "Winton Capital Management Prize 2018/19",
            description:
                "Awarded to the student achieving the top mark in the year for Part 1 Computer Science at the University of Southampton.",
            imagePath: "/other/winton_logo.png",
            imageAlt: "Winton Capital Management Logo"
        },
        {
            title: "Netcraft Prizes 2018, 2019, 2021",
            description:
                "Awarded to the top 10 students in the year for Computer Science at the University of Southampton in Parts 1 and 3, and for being one of the top 50 students in the country in the Computer Science A-level.",
            imagePath: "/other/netcraft_logo.png",
            imageAlt: "Netcraft Logo"
        },
        {
            title: "ECS Excellence Scholarship Award",
            description:
                "1 of 3 available scholarships. Based on pre-University academic performance, and is a recognition of the hard work and achievements that you have made on your journey to higher education. Being a recipient means that, in the view of the judging panel of Admissions Tutors, you had one of the highest achievements of all students coming to ECS that year.",
            imagePath: "/other/ecs_logo.png",
            imageAlt: "University of Southampton Electronics and Computer Science (ECS) Logo"
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
        },
        {
            title: "React2",
            description: "string",
            imagePath: "/illustrations/netliheart.svg",
            imageAlt: "alt"
        },
        {
            title: "HTML2",
            description: "string",
            imagePath: "/logo-vector-green.svg",
            imageAlt: "alt"
        },
        {
            title: "React3",
            description: "string",
            imagePath: "/illustrations/netliheart.svg",
            imageAlt: "alt"
        },
        {
            title: "HTML3",
            description: "string",
            imagePath: "/logo-vector-green.svg",
            imageAlt: "alt"
        }
    ];

    return (
        <>
            <Head>
                <title>About Me | Callum Newlands | Freelance Web and Desktop Application Developer</title>
                <meta
                    name="description"
                    content="About Callum Newlands - His story, awards and achievements, timeline of experience and skills."
                />
            </Head>
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

                <div className={styles.about_header_panel + " " + styles.about_header_panel_illustrations_container}>
                    <img
                        src="/illustrations/about_large.svg"
                        className={styles.about_header_illustrations}
                        alt="Illustrations of a person coding, playing with a target, working out and playing the guitar."
                    />
                </div>
            </div>
            <ImageDivider
                imagePath={archeryImage}
                imageAlt={"Photo of me shooting a bow with trees in the background"}
                title={"My Story"}
                text={
                    "I wrote my first computer program in 2010 and, ever since, my passion for developing great software " +
                    "has only increased. I studied computer science at school and university -- being top of the class " +
                    "in nearly all years -- and I am now working as a part-time, freelance, full-stack developer to " +
                    "support my semi-professional competitive archery career. When I'm not working, playing with new " +
                    "gadgets, or training at the range and gym, you can probably find me playing my Scottish smallpipes, " +
                    "strumming on my guitars or hiking halfway up a mountain with my partner."
                }
            />
            <div className={styles.about_panels}>
                <div className={styles.about_panels_panel + " " + styles.about_panels_panel_left}>
                    <Title level={2}>Experience and Education</Title>
                    <CustomVerticalTimeline data={timelineData} />
                </div>
                <div className={styles.about_panels_panel}>
                    <Title level={2}>Awards and Achievements</Title>
                    <List
                        itemLayout="horizontal"
                        className={styles.awards_list}
                        dataSource={awardsData}
                        renderItem={(item) => (
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
            {/*<Title level={2}>Skills and Technologies</Title>*/}
            {/*<CardGrid data={toolsData} />*/}
        </>
    );
}
