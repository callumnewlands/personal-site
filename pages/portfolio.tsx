import { Button, Divider, Tag, Typography } from "antd";
import Link from "next/link";
import styles from "../styles/portfolio.module.scss";
import { PortfolioItem } from "./portfolio/[portfolioItemId]";
import { tagColours } from "../common/helpers";
import * as React from "react";

const { Title, Text } = Typography;

export const portfolio: PortfolioItem[] = [
    {
        id: "mathsplanner",
        title: "Maths Planner",
        shortDesc: "A full-stack web-application designed and developed for TeachEezy ltd. which generates unique random questions for maths teachers, in the form of lesson starters, which help to reduce teacher workload and improve student learning.",
        desc: `
A full-stack web-application designed and developed for TeachEezy ltd. which **generates unique random questions for maths teachers, in the form of lesson starters**, which help to reduce teacher workload and improve student learning.
    
The application was developed using a **React.js** frontend to ensure high levels of interactivity and useability and a **Java/SpringBoot** backend for running the backend API which can generate infinite question variations from templates encoded in a bespoke system language covering the whole KS3 specification.

During the project, I was the **primary developer** and worked closely with the client and a designer to analyse the problem scope and develop a feature-rich, marketable application which operates as part of a unique system of question creation and feedback to improve student feedback and recall ability.

As well as the infinite question variations generation system, other features developed include: 
* a secure login and account system with school-level control and metrics analysis
* an interactive dashboard for saving and managing starters and class-level information
* a whiteboard sketching interface for explaining answers
* an interactive, intuitive on-boarding tour
* printable question sheets. 

As well as this, a full suite of unit and integration tests were developed to ensure a reliable and robust system.`
        ,
        startDate: "2020",
        endDate: null,
        type: "Full-stack web application",
        tags: [
            "Java",
            "React",
            "Spring Boot",
            "AWS Cognito",
            "Heroku",
            "AntDesign",
            "Cucumber",
            "Liquibase",
            "PostgreSQL",
            "Stripe"
        ],
        featuredImage: "/screenshots/mathsplanner.png",
        link: "https://mathsplanner.app/",
        screenshotsDirectory: "/screenshots/mathsplanner",
        screenshotWidths: [4, 4, 4, 1, 1, 4, 1, 2,]
    }
];

function PortfolioListItem({ item, flip = false }: { item: PortfolioItem; flip?: boolean }) {
    const image = (
        <div className={styles.list_item_image_container}>
            <img src={item.featuredImage} alt={`Screenshot of the ${item.title} application`} />
        </div>
    );

    return (
        <div className={styles.list_item}>
            {flip && image}
            <div className={styles.list_item_description}>
                <Title level={2}>{item.title}</Title>
                <Text>{item.shortDesc}</Text>
                <div className={styles.tags_container}>
                    {item.tags.map((tag, i) => (
                        <Tag color={tagColours[i]} key={tag}>
                            {tag}
                        </Tag>
                    ))}
                </div>
                <Link href={`/portfolio/${item.id}`} passHref={true}>
                    <Button>Read More &gt;</Button>
                </Link>
            </div>
            {!flip && image}
        </div>
    );
}

export default function Portfolio() {
    return (
        <>
            <div className={styles.intro}>
                <Title level={1}>My Work</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque nisi, varius tincidunt pharetra
                    vitae, consectetur in nisi. Mauris lobortis lacinia leo vel lacinia. Nunc rutrum auctor purus eu
                    imperdiet. Praesent dui augue, mattis eu ullamcorper{" "}
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque nisi, varius tincidunt pharetra
                    vitae, consectetur in nisi.{" "}
                </Text>
            </div>
            <Divider />
            <div className={styles.list}>
                {portfolio.map((item, i) => (
                    <PortfolioListItem item={item} flip={i % 2 == 0} />
                ))}
            </div>
        </>
    );
}
