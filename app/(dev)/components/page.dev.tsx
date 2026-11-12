import { pageMetadata } from "../../../common/metadata";
import { TITLE_SUFFIX } from "../../../data/pages";
import { Section } from "../../_components/layout/Layout";
import PageHeader from "../../_components/layout/PageHeader";
import Example from "./Example";
import styles from "./components.module.css";
import { groups } from "./examples";
import { exampleSources } from "./source";

export const metadata = pageMetadata({
    path: "/components",
    title: `Components | ${TITLE_SUFFIX}`,
    description: "Every shared component, its states and the code that draws it."
});

export default function Components() {
    const sources = exampleSources();

    return (
        <>
            <Section>
                <PageHeader
                    title="Components"
                    lead="Every shared component, with its states and the code that draws it. Hover, press and tab through the interactive ones."
                />
            </Section>
            {groups.map((group, index) => (
                <Section key={group.heading} band={index % 2 === 1} heading={group.heading} intro={group.intro}>
                    <div className={styles.examples}>
                        {group.examples.map((example, number) => {
                            const code = sources[group.heading][number];
                            return <Example key={code} {...example} code={code} />;
                        })}
                    </div>
                </Section>
            ))}
        </>
    );
}
