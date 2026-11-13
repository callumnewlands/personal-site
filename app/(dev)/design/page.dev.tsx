import { pageMetadata } from "@/common/metadata";
import { TITLE_SUFFIX } from "@/data/pages";
import tokens from "@/tokens/tokens.json";
import { Section } from "@/app/_components/layout/Layout";
import PageHeader from "@/app/_components/layout/PageHeader";
import styles from "./design.module.css";

export const metadata = pageMetadata({
    path: "/design",
    title: `Design tokens | ${TITLE_SUFFIX}`,
    description: "Colour, type, spacing, radius and shadow tokens."
});

const colours: string[] = [];
for (const [name, token] of Object.entries(tokens.color)) {
    if ("$value" in token) {
        colours.push(name);
    } else {
        for (const status of Object.keys(token)) {
            colours.push(`${name}-${status}`);
        }
    }
}

const typeRoles = [
    "display",
    "section-title",
    "chapter-title",
    "panel-title",
    "callout",
    "stat",
    "lead",
    "small",
    "caption"
];

export default function Design() {
    return (
        <>
            <Section>
                <PageHeader title="Design tokens" />
            </Section>
            <Section heading="Colour">
                <ul className={styles.swatches}>
                    {colours.map((name) => (
                        <li key={name}>
                            <span className={styles.swatch} style={{ background: `var(--color-${name})` }} />
                            <span className="caption">{name}</span>
                        </li>
                    ))}
                </ul>
            </Section>
            <Section band treeline heading="Type">
                <div className="prose">
                    {typeRoles.map((role) => (
                        <p key={role} className={role}>
                            {role}: Questions written once, varied every time
                        </p>
                    ))}
                    <p className="reading">
                        Body text runs to a reading width with <strong>600 for bold</strong>, a{" "}
                        <a href="#type">link in the text</a> and <code>const code = &quot;Red Hat Mono&quot;;</code>
                    </p>
                </div>
            </Section>
            <Section heading="Spacing, radius and shadow">
                <div className={styles.rows}>
                    <ul className={styles.row}>
                        {Object.keys(tokens.space).map((step) => (
                            <li key={step}>
                                <span className={styles.space} style={{ width: `var(--space-${step})` }} />
                                <span className="caption">{step}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.row}>
                        {Object.keys(tokens.radius).map((name) => (
                            <li key={name} className={styles.tile} style={{ borderRadius: `var(--radius-${name})` }}>
                                <span className="caption">{name}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.row}>
                        {Object.keys(tokens.shadow).map((name) => (
                            <li key={name} className={styles.tile} style={{ boxShadow: `var(--shadow-${name})` }}>
                                <span className="caption">{name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
        </>
    );
}
