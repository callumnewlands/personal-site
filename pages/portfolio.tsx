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
        shortDesc:
            "A full-stack web-application designed and developed for TeachEezy ltd. which generates unique random" +
            " questions for maths teachers, in the form of lesson starters, which help to reduce teacher workload and " +
            "improve student learning.",
        desc: `
A full-stack web-application designed and developed for TeachEezy ltd. which **generates unique random questions for 
maths teachers, in the form of lesson starters**, which help to reduce teacher workload and improve student learning.
    
The application was developed using a **React.js** frontend to ensure high levels of interactivity and useability and a 
**Java/Spring Boot** backend for running the backend API which can generate infinite question variations from templates 
encoded in a bespoke system language covering the whole KS3 specification.

During the project, I was the **primary developer** and worked closely with the client and a designer to analyse the
problem scope and develop a feature-rich, marketable application which operates as part of a unique system of question 
creation and feedback to improve student feedback and recall ability.

As well as the infinite question variations generation system, other features developed include: 
* A secure login and account system with school-level control and metrics analysis
* An interactive dashboard for saving and managing starters and class-level information
* A whiteboard sketching interface for explaining answers
* An interactive, intuitive on-boarding tour
* Printable question sheets. 

As well as this, a full suite of unit and integration tests were developed to ensure a reliable and robust system.
`,
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
        screenshotWidths: [4, 4, 4, 2, 2, 4, 1, 2]
    },
    {
        id: "forestgenerator",
        title: "Forest Generator",
        shortDesc:
            "An open-source application for procedurally generating and rendering realistic forest scenes using " +
            "L-systems and OpenGL. Created for my MEng Computer Science Individual Project at the University of " +
            "Southampton.",
        desc: `
An open-source application for **generating and rendering realistic forest scenes using L-systems and OpenGL**. Created 
for my MEng Computer Science Individual Project (Part III Dissertation) at the University of Southampton.

Simulation of forest environments has applications from entertainment and art creation to commercial and scientific 
modelling. Due to the unique features and lighting in forests, a forest-specific simulator is desirable, however many 
current forest simulators are proprietary or highly tailored to a particular application. To solve this problem, my 
Part III dissertation involved the design and implementation of a 3D virtual forest simulator which is currently being
used in academic research for the training of AI-based robot-swarm steering algorithms.

The system has over **500 configurable parameters**, and as a result can generate an infinite number of tree species,
terrains and overall forest scenes. The tree models are generated with **L-systems** are distributed throughout the scene 
using an **ecosystem simulation**. The resulting scene is then rendered with a **deferred rendering pipeline**, using a 
Blinn-Phong shading model adapted for leaf transparency; along with high-dynamic-range tone mapping, shadow
mapping and **post-processing shaders** for ambient occlusion and volumetric light scattering.

This work has been submitted to the [Computer Graphics Forum (CGF)](https://onlinelibrary.wiley.com/journal/14678659) 
and a pre-print version of the journal article is currently available on [arXiv](https://arxiv.org/abs/2208.01471). 
A demonstration video can be found on [YouTube](https://youtu.be/82JUq6yR35Y).
`,
        startDate: "2020",
        endDate: "2021",
        type: "Open-source desktop application",
        tags: ["Java", "OpenGL", "LWJGL", "FasterXML: Jackson"],
        featuredImage: "/screenshots/forestgenerator.jpg",
        link: "https://github.com/callumnewlands/ForestGenerator",
        screenshotsDirectory: "/screenshots/forestgenerator",
        screenshotWidths: [4, 1, 1, 1, 2, 2, 2, 2, 4, 4]
    },
    {
        id: "spydify",
        title: "Spydify",
        shortDesc:
            "A web-app which connects to Spotify and shows users visualisations and metrics to help them explore their " +
            "music tastes and find new artists and songs.",
        desc: `
A web-app which **connects to Spotify and shows users visualisations and metrics to help them explore their music tastes 
and find new artists and songs**. 

The primary focus of the application is an **interactive network-graph (web)** of connected tracks or artists based off 
a user's top 3 artists to allow them to explore how their music tastes are connected and suggest similar artists or 
tracks they may want to listen to. As well as this, the application also includes:
 * The ability to create a playlist of the suggested tracks in the graph
 * The ability to play snippets of suggested tracks or artists directly in the application
 * The ability to input custom tracks or artists to see how they are related or receive suggested similar music
 * Visualisations of Spotify's hidden user metrics (such as the average danceability or tempo of your top tracks)
 * Lists of your recent top tracks and artists 
 * A visualisation of the genres your top tracks fit into
  
The application was developed in a group as part of my university degree and achieved a mark of 82% as well as a 
specific commendation from the University's start-up incubation team. My specific role within the team was as a frontend 
developer -- in particular, I developed the graph visualisation component. For displaying the graph, we initially looked
 at 3rd-party libraries, but found that none had the flexibility and features that we wanted. So instead, I developed 
 a custom system for generating graphs, using the D3 data visualisation library. This approach allowed for full control 
 over the layout and functionality of the graph, and meant that we could implement zooming and dynamic fading of graph 
 labels as the zoom level changes.
`,
        startDate: "2020",
        endDate: "2021",
        type: "Full-stack web application",
        tags: ["VueJS", "D3", "Python", "Flask", "Cloud Firestore", "Spotify"],
        featuredImage: "/screenshots/spydify.png",
        link: "https://spydify.web.app/",
        screenshotsDirectory: "/screenshots/spydify",
        screenshotWidths: [4, 4, 4, 4, 2, 1]
    },
    {
        id: "vrl",
        title: "Veterans Rebuilding Life",
        shortDesc:
            "A complete re-design and implementation of a new prototype website for the Veterans Rebuilding Life charity. " +
            "The project involved designing a new web presence for the charity and developing a prototype version of the " +
            "site along with a custom CMS, PayPal integration and SEO optimisation. ",
        desc: `
`,
        startDate: "2021",
        endDate: "2022",
        type: "Website Prototype Re-Design",
        tags: [
            "Strapi",
            "React",
            "TypeScript",
            "UI/UX Design",
            "Figma",
            "Volunteer",
            "PayPal",
            "AWS EC2",
            "AWS S3",
            "MeiliSearch"
        ],
        featuredImage: "/screenshots/vrl.png",
        link: "https://www.figma.com/file/pJ0oCoqXT0SadzyAEYXyaw/Design",
        screenshotsDirectory: "/screenshots/something",
        screenshotWidths: [],
        disablePage: true
    },
    {
        id: "suac",
        title: "Southampton University Archery Club Website",
        shortDesc:
            "A complete re-design and implementation of a new UI/UX WordPress theme for the website and " +
            "content layout reorganisation so that the site is more visually appealing and the information is more " +
            "easily accessible",
        desc: `
This project was carried out as a volunteer for my university archery club. The previous site was looking very dated and
was very hard to find any information on due to it becoming cluttered and disorganised over the previous decade.

To fix it, I carried out a complete re-design and implementation of a new UI/UX WordPress theme for the website and 
content layout reorganisation so that the site is more visually appealing and the information is more easily accessible.

The new design includes lots of images to promote engagement and incorporates more modern-looking design features such 
as flat buttons, a new colour scheme to match the club's rebranded competition kit, and a new multi-level menu navigation
system to better categorise the wealth of information available on the site.  
`,
        startDate: "2020",
        endDate: "2021",
        type: "WordPress Website",
        tags: ["WordPress", "UI/UX Design", "Content Reorganisation", "Volunteer"],
        featuredImage: "/screenshots/suac.png",
        link: "http://archery.susu.org",
        screenshotsDirectory: "/screenshots/suac",
        screenshotWidths: []
    },
    {
        id: "insighthousing",
        title: "InsightHousing",
        shortDesc:
            "A prototype web-based application which uses open data to allow users to compare housing/living " +
            "metrics-of-interest easily and efficiently with a particular focus on first time buyers and people looking " +
            "to relocate.",
        desc: `
A prototype web-based application which uses open data to allow users to compare housing/living metrics-of-interest 
easily and efficiently with a particular focus on first time buyers and people looking to relocate.

The prototype developed for this project (as part of my university degree) allows users to easily digest information 
about different regions of the UK as well as to personalize the experience by filtering the information based on
the metrics that they are interested in.

The application contained the following features:
 * A custom score-based ranking algorithm for each area in the UK
 * Integration of several open datasets to create additional value within the product
 * An interactive map of the UK which can be panned around and zoomed into
 * The ability to toggle which factors are important to filter and update the map and data presented interactively
 * Accessible fonts, colours and designs 
 * The ability to click on a UK council area to bring up a breakdown of the statistics used
 * A three-tier plan-based pricing structure  

Within the group of 4 members, I was the frontend developer and was in charge of designs and developing a React 
application which integrates with the MapBox api, and displays the back-end api data in an interactive and engaging 
manner.
`,
        startDate: "2022",
        endDate: "2022",
        type: "Full-stack web application",
        tags: ["React", "MapBox", "AntDesign", "TypeScript", "Spring Boot", "PostgreSQL", "Open Data"],
        featuredImage: "/screenshots/insighthousing-wide.png",
        link: null,
        screenshotsDirectory: "/screenshots/insighthousing",
        screenshotWidths: [4, 4, 2, 2, 4]
    }
];

function PortfolioListItem({ item, flip = false }: { item: PortfolioItem; flip?: boolean }) {
    const image = (
        <div className={styles.list_item_image_container}>
            <img src={item.featuredImage} alt={`Screenshot of the ${item.title} application`} />
        </div>
    );

    const gradient = styles.gradient;
    return (
        <div
            className={styles.list_item}
            style={{ background: `linear-gradient(${flip ? 200 : 160}deg, ${gradient})` }}
        >
            {flip && image}
            <div className={styles.list_item_description}>
                <Title level={2}>{item.title}</Title>
                <Text>{item.shortDesc}</Text>
                <div className={styles.tags_container}>
                    {item.tags.map((tag, i) => (
                        <Tag color={tagColours[i]} key={tag + i}>
                            {tag}
                        </Tag>
                    ))}
                </div>
                {!item?.disablePage ? (
                    <Link href={`/portfolio/${item.id}`} passHref={true}>
                        <Button type={"primary"}>Read More &gt;</Button>
                    </Link>
                ) : (
                    item?.link && (
                        <a href={item?.link} target="_blank" rel="noopener noreferrer" style={{width: "fit-content"}}>
                            <Button type={"default"}>Visit Site</Button>
                        </a>
                    )
                )}
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
                    I have been creating bespoke websites and applications since 2019. I specialise in both frontend and
                    backend application development, and I'm currently working on expanding my user interface/user
                    experience (UI/UX) design skills.
                </Text>
                <Text>
                    Here are a few examples of my most recent development work and projects from the last few years
                    including full-stack web applications, desktop applications and static websites.
                </Text>
            </div>
            <Divider />
            <div className={styles.list}>
                {portfolio.map((item, i) => (
                    <PortfolioListItem item={item} flip={i % 2 == 0} key={`portfolio-item-${i}`} />
                ))}
            </div>
        </>
    );
}
