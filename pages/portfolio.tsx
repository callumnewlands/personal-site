import { Button, Divider, Tag, Typography } from "antd";
import Link from "next/link";
import styles from "../styles/portfolio.module.scss";
import { portfolio, PortfolioItem } from "../data/portfolio";
import { tagColours } from "../common/helpers";
import * as React from "react";
import Head from "next/head";

const { Title, Text } = Typography;

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
                        <a href={item?.link} target="_blank" rel="noopener noreferrer" style={{ width: "fit-content" }}>
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
            <Head>
                <title>Portfolio | Callum Newlands | Freelance Web and Desktop Application Developer</title>
                <meta
                    name="description"
                    content="Examples of my previous web and desktop development and design work."
                />
            </Head>
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
