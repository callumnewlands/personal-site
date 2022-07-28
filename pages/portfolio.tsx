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
            {portfolio.map(item => <>
                {item.title}
                <Link href={`/portfolio/${item.id}`} passHref={true}><Button>View</Button></Link>
            </>)}
        </>
    );
}
