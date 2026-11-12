import { pageMetadata } from "../../../common/metadata";
import { TITLE_SUFFIX } from "../../../data/pages";
import tokens from "../../../tokens/tokens.json";
import Button from "../../_components/ui/Button";
import ButtonLink from "../../_components/ui/ButtonLink";
import { Container, Section } from "../../_components/layout/Layout";
import Logo from "../../_components/shell/Logo";
import Treeline from "../../_components/shell/Treeline";
import styles from "./design.module.css";
import { cx } from "../../../common/helpers";

export const metadata = pageMetadata({
    path: "/design",
    title: `Design tokens | ${TITLE_SUFFIX}`,
    description: "Tokens, type, the logo and buttons."
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
                <Container>
                    <h1 className={styles.title}>Design tokens</h1>
                    <h2 className={styles.heading}>Colour</h2>
                    <ul className={styles.swatches}>
                        {colours.map((name) => (
                            <li key={name}>
                                <span className={styles.swatch} style={{ background: `var(--color-${name})` }} />
                                <span className="caption">{name}</span>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>
            <Treeline variant="band-top" />
            <Section band>
                <Container>
                    <h2 className={styles.heading}>Type</h2>
                    {typeRoles.map((role) => (
                        <p key={role} className={role}>
                            {role}: Questions written once, varied every time
                        </p>
                    ))}
                    <p className="reading">
                        Body text runs to a reading width with <strong>600 for bold</strong>, a{" "}
                        <a href="#type">link in the text</a> and <code>const code = &quot;Red Hat Mono&quot;;</code>
                    </p>
                </Container>
            </Section>
            <Section>
                <Container>
                    <h2 className={styles.heading}>Spacing, radius and shadow</h2>
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
                </Container>
            </Section>
            <Section>
                <Container>
                    <h2 id="buttons" className={styles.heading}>
                        Logo and buttons
                    </h2>
                    <p className="caption">Hover, press and tab through these to see their states.</p>
                    <div className={styles.row}>
                        <Logo />
                        <ButtonLink href="#buttons">Send me a message</ButtonLink>
                        <ButtonLink href="https://cnewlands.dev" variant="secondary">
                            Visit cnewlands.dev
                        </ButtonLink>
                        <ButtonLink href="#buttons" variant="secondary">
                            All work
                        </ButtonLink>
                    </div>
                    <div className={styles.row}>
                        <Button type="button">Send it</Button>
                        <Button type="button" disabled>
                            Send it
                        </Button>
                        <Button type="button" loading loadingLabel="Sending">
                            Send it
                        </Button>
                    </div>
                    <div className={cx(styles.row, styles.dark, "on-dark")}>
                        <Logo dark />
                        <ButtonLink href="#buttons" dark>
                            Send me a message
                        </ButtonLink>
                    </div>
                </Container>
            </Section>
        </>
    );
}
