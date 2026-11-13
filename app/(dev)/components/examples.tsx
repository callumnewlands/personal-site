import SectionHeading from "@/app/_components/layout/SectionHeading";
import Logo from "@/app/_components/shell/Logo";
import Accordion from "@/app/_components/ui/Accordion";
import Button from "@/app/_components/ui/Button";
import Tags from "@/app/_components/ui/Tags";
import TextLink from "@/app/_components/ui/TextLink";
import type { ExampleData } from "./Example";
import { samplePanel } from "./samples";

export interface Group {
    heading: string;
    intro?: string;
    examples: ExampleData[];
}

export const groups: Group[] = [
    {
        heading: "Logo",
        examples: [{ element: <Logo /> }, { element: <Logo dark />, dark: true }]
    },
    {
        heading: "Button",
        examples: [
            { element: <Button href="#buttons">Send me a message</Button> },
            {
                element: (
                    <Button href="https://example.com" variant="secondary">
                        Visit example.com
                    </Button>
                )
            },
            {
                element: (
                    <Button href="#buttons" variant="secondary">
                        All work
                    </Button>
                )
            },
            {
                element: (
                    <Button href="#buttons" variant="nav">
                        Contact
                    </Button>
                )
            },
            { element: <Button>Send it</Button> },
            { element: <Button disabled>Send it</Button> },
            {
                element: (
                    <Button type="submit" loading loadingLabel="Sending">
                        Send it
                    </Button>
                )
            },
            {
                element: (
                    <Button href="#buttons" dark>
                        Send me a message
                    </Button>
                ),
                dark: true
            }
        ]
    },
    {
        heading: "TextLink",
        examples: [
            {
                element: (
                    <TextLink href="/#work" arrow="back" quiet>
                        All work
                    </TextLink>
                )
            },
            {
                element: (
                    <TextLink href="/#work" arrow="forward">
                        See it in a project
                    </TextLink>
                )
            },
            { element: <TextLink href="https://example.com/">example.com</TextLink> }
        ]
    },
    {
        heading: "Tags",
        examples: [
            { element: <Tags tags={["Web app", "Next.js", "PostgreSQL"]} /> },
            { element: <Tags tags={["Web app", "Next.js"]} variant="overlay" />, dark: true }
        ]
    },
    {
        heading: "Accordion",
        examples: [
            {
                element: (
                    <Accordion
                        items={[
                            {
                                title: "How long does a project take?",
                                content: <p>It depends on the scope. A short answer goes here.</p>
                            },
                            { title: "Do you work with existing teams?", content: <p>A short answer.</p> },
                            { title: "What happens after launch?", content: <p>A short answer.</p> }
                        ]}
                    />
                ),
                width: "narrow"
            }
        ]
    },
    {
        heading: "Panels",
        intro: "A white panel is just panel. The others add panel-primary, panel-accent or panel-pine.",
        examples: [
            {
                element: (
                    <div className="panel panel-primary">
                        <SectionHeading
                            level={3}
                            size="chapter"
                            intro="For when a team needs this sort of help, in a sentence or two."
                        >
                            Viridian panel
                        </SectionHeading>
                        <ul role="list" className="ruled-list">
                            <li>Something that's included</li>
                            <li>Something else that's included</li>
                        </ul>
                    </div>
                ),
                variants: [
                    samplePanel("White panel"),
                    samplePanel("Mint panel", "accent"),
                    samplePanel("Pine panel", "pine")
                ]
            }
        ]
    },
    {
        heading: "SectionHeading",
        examples: [
            {
                element: (
                    <SectionHeading level={3} intro="Body-size text under a section title.">
                        Section title
                    </SectionHeading>
                )
            },
            {
                element: (
                    <SectionHeading level={3} size="chapter" intro="Body-size text under a chapter or card title.">
                        Chapter title
                    </SectionHeading>
                )
            },
            {
                element: (
                    <SectionHeading level={3} size="panel" intro="Lead-size text under a panel title.">
                        Panel title
                    </SectionHeading>
                )
            }
        ]
    }
];
