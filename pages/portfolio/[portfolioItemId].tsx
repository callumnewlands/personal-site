import { projectsWithPages, PortfolioItem as PortfolioItemData } from "../../data/portfolio";
import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/portfolio.module.scss";
import buttonStyles from "../../components/Buttons.module.scss";
import { ReadMore } from "../../components/ReadMore";
import { LinkButton } from "../../components/ui/Button";
import Tag, { tagColours } from "../../components/ui/Tag";
import { Title } from "../../components/ui/Typography";
import { ArrowLeftIcon } from "../../svgs";
import { cx } from "../../common/helpers";
import { sizedImage, SizedImage } from "../../common/images";
import glob from "fast-glob";

// Rough rendered widths for the screenshot_wrapper_1-4 classes
const SCREENSHOT_SIZES: { [width: number]: string } = {
    1: "(max-width: 700px) 90vw, 25vw",
    2: "(max-width: 700px) 90vw, 45vw",
    3: "(max-width: 700px) 90vw, 70vw",
    4: "90vw"
};

export default function PortfolioItem({ item, images }: { item: PortfolioItemData; images: SizedImage[] }) {
    return (
        <>
            <Head>
                <title>{item.title} | Callum Newlands | Freelance Web and Desktop Application Developer</title>
                <meta name="description" content={`Information about my work on the ${item.title} application.`} />
            </Head>
            <div className={styles.header}>
                <LinkButton href={"/portfolio"} variant="text" icon={<ArrowLeftIcon />} className={styles.back_button}>
                    Back to All Projects
                </LinkButton>
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
                                <Tag colour={tagColours[i % tagColours.length]} key={tag}>
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
                            <div className={buttonStyles.button_container}>
                                <LinkButton
                                    variant="primary"
                                    large
                                    href={item.link}
                                    newTab
                                    className={buttonStyles.button}
                                >
                                    Visit Site
                                </LinkButton>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.screenshots}>
                {images.map((image, i) => (
                    <div
                        key={image.src}
                        className={cx(
                            styles.screenshot_wrapper,
                            styles["screenshot_wrapper_" + item.screenshotWidths?.[i]]
                        )}
                    >
                        <Image
                            {...image}
                            alt={`Screenshot of the ${item.title} application`}
                            sizes={SCREENSHOT_SIZES[item.screenshotWidths?.[i] || 4]}
                            quality={80}
                            preload={i === 0}
                            fetchPriority={i === 0 ? undefined : "low"}
                        />
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
    const item = projectsWithPages.find((item) => item.id === params.portfolioItemId);
    if (!item) {
        return { notFound: true };
    }
    const files: string[] = await glob(`public${item.screenshotsDirectory}/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}`);
    const images = await Promise.all(files.map((file) => sizedImage(file.replace("public", ""))));
    return {
        props: {
            item,
            images
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: projectsWithPages.map((item): DynamicPageParams => ({
            params: {
                portfolioItemId: item.id
            }
        })),
        fallback: false
    };
}
