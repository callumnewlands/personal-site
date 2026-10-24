import styles from "../styles/portfolio.module.scss";
import { portfolio, PortfolioItem } from "../data/portfolio";
import Head from "next/head";
import { LinkButton } from "../components/ui/Button";
import Tag, { tagColours } from "../components/ui/Tag";
import { Text, Title } from "../components/ui/Typography";

function PortfolioListItem({ item, flip }: { item: PortfolioItem; flip: boolean }) {
    const imageElement = (
        <div className={styles.list_item_image_container}>
            <img src={item.featuredImage} alt={`Screenshot of the ${item.title} application`} />
        </div>
    );

    return (
        <div className={styles.list_item + (flip ? " " + styles.list_item_flipped : "")}>
            {flip && imageElement}
            <div className={styles.list_item_description}>
                <Title level={2}>{item.title}</Title>
                <Text>{item.shortDesc}</Text>
                <div className={styles.tags_container}>
                    {item.tags.map((tag, i) => (
                        <Tag colour={tagColours[i % tagColours.length]} key={tag + i}>
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

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>Portfolio | Callum Newlands | Freelance Web and Desktop Application Developer</title>
                <meta name="description" content="Examples of my previous web and desktop development and design work." />
            </Head>
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
                    <PortfolioListItem item={item} flip={i % 2 === 0} key={item.id} />
                ))}
            </div>
        </>
    );
}
