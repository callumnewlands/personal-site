import type { PortfolioItem as PortfolioItemData } from "../../data/portfolio";
import { projectsWithPages } from "../../data/portfolio";
import { TITLE_SUFFIX } from "../../data/pages";
import Image from "next/image";
import styles from "../../styles/portfolio.module.scss";
import buttonStyles from "../../components/Buttons.module.scss";
import { ReadMore } from "../../components/ReadMore";
import Seo from "../../components/Seo";
import { LinkButton } from "../../components/ui/Button";
import Tag, { tagColours } from "../../components/ui/Tag";
import { Title } from "../../components/ui/Typography";
import { ArrowLeftIcon } from "../../svgs";
import type { SizedImage } from "../../common/images";
import { sizedImage } from "../../common/images";
import { cx } from "../../common/helpers";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";

const SCREENSHOT_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

// Rough rendered widths for the screenshot_wrapper_1-4 classes
const SCREENSHOT_SIZES: { [width: number]: string } = {
    1: "(max-width: 700px) 90vw, 25vw",
    2: "(max-width: 700px) 90vw, 45vw",
    3: "(max-width: 700px) 90vw, 70vw",
    4: "90vw"
};

interface PortfolioItemProps {
    item: PortfolioItemData;
    descHtml: string;
    images: SizedImage[];
}

export default function PortfolioItem({ item, descHtml, images }: PortfolioItemProps) {
    return (
        <>
            <Seo
                title={`${item.title} | ${TITLE_SUFFIX}`}
                description={item.shortDesc}
                path={`/portfolio/${item.id}`}
                type="article"
            />
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
                                <div dangerouslySetInnerHTML={{ __html: descHtml }} />
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
                            styles[`screenshot_wrapper_${item.screenshotWidths?.[i]}`]
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
    const item = projectsWithPages.find((project) => project.id === params.portfolioItemId);
    if (!item) {
        return { notFound: true };
    }
    const files = await readdir(path.join(process.cwd(), "public", item.screenshotsDirectory));
    const images = await Promise.all(
        files
            .filter((file) => SCREENSHOT_EXTENSIONS.has(path.extname(file).toLowerCase()))
            .toSorted()
            .map((file) => sizedImage(`${item.screenshotsDirectory}/${file}`))
    );
    return {
        props: {
            item,
            descHtml: await marked.parse(item.desc),
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
