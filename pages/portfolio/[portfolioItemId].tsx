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
            <Title>{item.title}</Title>
            <div>
                {item.startDate} -- {item.endDate || "Current"}
            </div>
            <div>{item.type}</div>
            {item.tags.map((tag, i) => (
                <Tag color={tagColours[i]}>{tag}</Tag>
            ))}
            <Text>{item.desc}</Text>
            {item.link && (
                <CustomButton href={item.link} newTab>
                    Visit Site
                </CustomButton>
            )}
            <div className={styles.screenshots}>
                {images.map((src, i) =>
                    <div
                        className={styles.screenshot_wrapper + " " + (styles.screenshot_wrapper + item.screenshotWidths?.[i])}>
                        <img
                            src={src || ""}
                            alt={`Screenshot of the ${item.title} application`}
                        />
                    </div>
                )}
            </div>
        </>
    );
}

interface DynamicPageParams {
    params: { portfolioItemId: string };
}

export async function getStaticProps({ params }: DynamicPageParams) {
    const item = portfolio.find((item) => item.id === params.portfolioItemId);
    const images: string[] = await glob(`public${item?.screenshotsDirectory}/*.{jpg,JPG,jpeg,JPEG,png,PNG,bmp,BMP,svg,SVG}`);
    return {
        props: {
            item,
            images: images.map(src => src.replace("public", ""))
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
