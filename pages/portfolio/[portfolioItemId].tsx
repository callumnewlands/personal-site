import { portfolio } from "../portfolio";
import { Tag, Typography } from "antd";
import { CustomButton } from "../../components/Buttons";
import { tagColours } from "../../common/helpers";
import * as React from "react";
import styles from "../../styles/portfolio.module.scss";

const glob = require("fast-glob");

const { Title, Text } = Typography;

export interface PortfolioItem {
    id: string;
    title: string;
    shortDesc: string;
    desc: string[];
    startDate: string;
    endDate?: string | null;
    type: string;
    tags: string[];
    featuredImage: string;
    link?: string | null;
    screenshotsDirectory: string;
    screenshotWidths: number[];
}

export default function PortfolioItem({ item, images }: { item: PortfolioItem; images: string[] }) {
    return (
        <>
            <div className={styles.header}>
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
                            {item.desc.map((d, i) => (
                                <Text key={"description-" + i}>{d}</Text>
                            ))}
                        </div>
                        {item.link && (
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
                            styles.screenshot_wrapper + " " + (styles.screenshot_wrapper + item.screenshotWidths?.[i])
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
