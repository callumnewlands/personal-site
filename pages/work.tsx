import { Divider, Typography } from "antd";
import styles from "../styles/work.module.scss";

const { Title, Text } = Typography;

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
            <p>Under Construction</p>
        </>
    );
}
