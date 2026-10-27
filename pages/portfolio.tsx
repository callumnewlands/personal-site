import styles from "../styles/portfolio.module.scss";
import type { PortfolioItem } from "../data/portfolio";
import { portfolio } from "../data/portfolio";
import { pages } from "../data/pages";
import Image from "next/image";
import Seo from "../components/Seo";
import { LinkButton } from "../components/ui/Button";
import Tag, { tagColours } from "../components/ui/Tag";
import { Text, Title } from "../components/ui/Typography";
import type { SizedImage } from "../common/images";
import { sizedImage } from "../common/images";
import { cx } from "../common/helpers";

function PortfolioListItem({ item, image, flip }: { item: PortfolioItem; image: SizedImage; flip: boolean }) {
    const imageElement = (
        <div className={styles.list_item_image_container}>
            <Image
                {...image}
                alt={`Screenshot of the ${item.title} application`}
                sizes="(max-width: 736px) 90vw, 45vw"
                quality={80}
            />
        </div>
    );

    return (
        <div className={cx(styles.list_item, flip && styles.list_item_flipped)}>
            {flip && imageElement}
            <div className={styles.list_item_description}>
                <Title level={2}>{item.title}</Title>
                <Text>{item.shortDesc}</Text>
                <div className={styles.tags_container}>
                    {item.tags.map((tag, i) => (
                        <Tag colour={tagColours[i % tagColours.length]} key={tag}>
                            {tag}
                        </Tag>
                    ))}
                </div>
                {!item?.disablePage ? (
                    <LinkButton variant="primary" href={`/portfolio/${item.id}`} className={styles.list_item_button}>
                        Read More &gt;
                    </LinkButton>
                ) : (
                    item?.link && (
                        <LinkButton href={item.link} newTab className={styles.list_item_button}>
                            Visit Site
                        </LinkButton>
                    )
                )}
            </div>
            {!flip && imageElement}
        </div>
    );
}

export default function Portfolio({ images }: { images: SizedImage[] }) {
    return (
        <>
            <Seo {...pages.portfolio} />
            <div className={styles.intro}>
                <Title level={1}>My Work</Title>
                <Text>
                    I have been creating bespoke websites and applications since 2019. I specialise in both frontend and
                    backend application development, and I&apos;m currently working on expanding my user interface/user
                    experience (UI/UX) design skills.
                </Text>
                <Text>
                    Here are a few examples of my most recent development work and projects from the last few years
                    including full-stack web applications, desktop applications and static websites.
                </Text>
            </div>
            <hr />
            <div className={styles.list}>
                {portfolio.map((item, i) => (
                    <PortfolioListItem item={item} image={images[i]} flip={i % 2 === 0} key={item.id} />
                ))}
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            images: await Promise.all(portfolio.map((item) => sizedImage(item.featuredImage)))
        }
    };
}
