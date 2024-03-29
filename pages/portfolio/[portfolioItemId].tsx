import { portfolio } from "../portfolio";
import { Button, Tag, Typography } from "antd";
import { CustomButton } from "../../components/Buttons";
import { tagColours } from "../../common/helpers";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/portfolio.module.scss";
import { ReadMore } from "../../components/ReadMore";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Head from "next/head";

const glob = require("fast-glob");

const { Title, Text } = Typography;

export interface PortfolioItem {
    id: string;
    title: string;
    shortDesc: string;
    desc: string;
    startDate: string;
    endDate?: string | null;
    type: string;
    tags: string[];
    featuredImage: string;
    link?: string | null;
    screenshotsDirectory: string;
    screenshotWidths: number[];
    disablePage?: boolean;
}

export default function PortfolioItem({ item, images }: { item: PortfolioItem; images: string[] }) {
    return (
        <>
            <Head>
                <title>{item.title} | Callum Newlands | Freelance Web and Desktop Application Developer</title>
                <meta name="description" content={`Information about my work on the ${item.title} application.`} />
            </Head>
            <div className={styles.header}>
                <Link href={"/portfolio"} passHref>
                    <Button icon={<ArrowLeftOutlined />} type={"text"} style={{ paddingLeft: 0, paddingRight: 0 }}>
                        Back to All Projects
                    </Button>
                </Link>
                <div className={styles.item_title}>
                    <Title>{item.title}</Title>
                </div>

                <div className={styles.header_panels}>
                    <div className={styles.header_panels_left}>
                        <div className={styles.date}>
                            {item.startDate} -- {item.endDate || "Current"}
                        </div>
                        <div className={styles.type}>{item.type}</div>
                        <div className={styles.tags_container}>
                            {item.tags.map((tag, i) => (
                                <Tag color={tagColours[i]} key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </div>
                    </div>
                    <div className={styles.header_panels_right}>
                        <div className={styles.description_container}>
                            <ReadMore>
                                <ReactMarkdown>{item.desc}</ReactMarkdown>
                            </ReadMore>
                        </div>
                        {item?.link && (
                            <CustomButton href={item.link} newTab>
                                Visit Site
                            </CustomButton>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.screenshots}>
                {images.map((src, i) => (
                    <div
                        key={"screenshot-img-" + i}
                        className={
                            styles.screenshot_wrapper +
                            " " +
                            styles["screenshot_wrapper_" + (item.screenshotWidths?.[i] || "")]
                        }
                    >
                        <img src={src || ""} alt={`Screenshot of the ${item.title} application`} />
                    </div>
                ))}
            </div>
        </>
    );
}

interface DynamicPageParams {
    params: { portfolioItemId: string };
}

export async function getStaticProps({ params }: DynamicPageParams) {
    const item = portfolio.find((item) => item.id === params.portfolioItemId);
    const images: string[] = await glob(
        `public${item?.screenshotsDirectory}/*.{jpg,JPG,jpeg,JPEG,png,PNG,bmp,BMP,svg,SVG}`
    );
    return {
        props: {
            item,
            images: images.map((src) => src.replace("public", ""))
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: portfolio.map(
            (item: PortfolioItem): DynamicPageParams => ({
                params: {
                    portfolioItemId: item.id
                }
            })
        ),
        fallback: false
    };
}
