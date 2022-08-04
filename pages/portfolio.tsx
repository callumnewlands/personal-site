import { Button, Divider, Typography } from "antd";
import Link from "next/link";
import styles from "../styles/portfolio.module.scss";
import { PortfolioItem } from "./portfolio/[portfolioItemId]";

const { Title, Text } = Typography;

export const portfolio: PortfolioItem[] = [
    {
        id: "mathsplanner",
        title: "Maths Planner",
        shortDesc: "Short sentence of what the project was about and what was required",
        desc: [
            "Summary of what the project was about and what was required.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque nisi, varius tincidunt pharetra vitae, " +
            "consectetur in nisi. Mauris lobortis lacinia leo vel lacinia. Nunc rutrum auctor purus eu imperdiet. " +
            "Praesent dui augue, mattis eu ullamcorper",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque nisi, varius tincidunt pharetra vitae, " +
            "consectetur in nisi."
        ],
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
        screenshotWidths: [4, 4, 1, 3, 4]
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
