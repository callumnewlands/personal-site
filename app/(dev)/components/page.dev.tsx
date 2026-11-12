import { pageMetadata } from "../../../common/metadata";
import type { Project, Results } from "../../../data/project-schema";
import { TITLE_SUFFIX } from "../../../data/pages";
import { getProjects } from "../../../data/projects";
import Fan from "../../_components/figures/Fan";
import FramedPhoto from "../../_components/figures/FramedPhoto";
import Gallery from "../../_components/figures/Gallery";
import NumberedScreenshot from "../../_components/figures/NumberedScreenshot";
import Screenshot from "../../_components/figures/Screenshot";
import { Section } from "../../_components/layout/Layout";
import PageHeader from "../../_components/layout/PageHeader";
import SectionHeading from "../../_components/layout/SectionHeading";
import Facts from "../../_components/project/Facts";
import Quote from "../../_components/project/Quote";
import ResultsTiles from "../../_components/project/ResultsTiles";
import Timeline from "../../_components/project/Timeline";
import TimelineProjects from "../../_components/project/TimelineProjects";
import WorkGrid from "../../_components/project/WorkGrid";
import Logo from "../../_components/shell/Logo";
import Accordion from "../../_components/ui/Accordion";
import Button from "../../_components/ui/Button";
import Tags from "../../_components/ui/Tags";
import TextLink from "../../_components/ui/TextLink";
import panel from "../../_components/ui/panel.module.css";
import type { ExampleData } from "./Example";
import Example from "./Example";
import styles from "./components.module.css";
import { jsxSource } from "./jsx-source";
import { cx } from "../../../common/helpers";

export const metadata = pageMetadata({
    path: "/components",
    title: `Components | ${TITLE_SUFFIX}`,
    description: "Every shared component, its states and the code that draws it."
});

// Sample projects for the demo. Only the first has a page, so it's the only one that links
function sampleProjects(): Project[] {
    const page = getProjects().find((project) => project.page)?.page;
    const samples = [
        { title: "Example project", image: "/screenshots/mathsplanner.webp", tags: ["Web app", "Next.js", "Python"] },
        { title: "Research project", image: "/screenshots/forestgenerator.webp", tags: ["Research", "OpenGL"] },
        { title: "Mobile app", image: "/screenshots/spydify.webp", tags: ["Mobile"] },
        { title: "Booking platform", image: "/screenshots/suac.webp", tags: ["Payments"] }
    ];
    return samples.map((sample, index) => ({
        slug: `sample-${index + 1}`,
        title: sample.title,
        order: index + 1,
        card: {
            line: "One line on what the project is and who it's for",
            role: "Lead developer, 2021 to now",
            image: { src: sample.image, alt: "" },
            tags: sample.tags
        },
        page: index === 0 ? page : undefined
    }));
}

const results: Results = [
    { value: "120+", label: "teams" },
    { value: "£2M+", label: "processed" },
    { value: "99.9%", label: "uptime" }
];

const screenshot = {
    src: "/screenshots/mathsplanner/image 10.png",
    alt: "A Maths Planner starter: six questions, a countdown timer and an extension question"
};

function samplePanel(fill: "" | "primary" | "accent" | "pine", name: string) {
    return (
        <div key={name} className={cx(panel.panel, fill && panel[fill])}>
            <SectionHeading
                level={3}
                size="chapter"
                intro="For when a team needs this sort of help, in a sentence or two."
            >
                {name}
            </SectionHeading>
            <ul role="list" className="rule-list">
                <li>Something that's included</li>
                <li>Something else that's included</li>
            </ul>
        </div>
    );
}

interface Group {
    heading: string;
    intro?: string;
    examples: ExampleData[];
}

export default function Components() {
    const projects = sampleProjects();

    const groups: Group[] = [
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
            intro: "White has no fill class. The others add panel.primary, panel.accent or panel.pine.",
            examples: [
                {
                    element: samplePanel("primary", "Viridian panel"),
                    variants: [
                        samplePanel("", "White panel"),
                        samplePanel("accent", "Mint panel"),
                        samplePanel("pine", "Pine panel")
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
        },
        {
            heading: "Screenshot",
            examples: [
                {
                    element: (
                        <Screenshot
                            image={{
                                src: "/screenshots/mathsplanner/image 16.png",
                                alt: "A times tables grid with a two-minute timer",
                                caption: "A caption saying what the screenshot shows."
                            }}
                        />
                    ),
                    width: "narrow"
                }
            ]
        },
        {
            heading: "Fan",
            examples: [
                {
                    element: (
                        <Fan
                            images={[
                                {
                                    src: "/screenshots/mathsplanner/image 11.png",
                                    alt: "The weekly timetable where teachers save starters for each class"
                                },
                                {
                                    src: "/screenshots/mathsplanner/image 15a.PNG",
                                    alt: "The whiteboard, with a circle theorem answer worked through by hand"
                                },
                                {
                                    src: "/screenshots/mathsplanner.webp",
                                    alt: "A Maths Planner starter with six questions"
                                }
                            ]}
                        />
                    ),
                    width: "narrow"
                },
                {
                    element: (
                        <Fan
                            variant="masthead"
                            images={[
                                { src: "/screenshots/mathsplanner.webp", alt: "Example project", href: "/#work" },
                                { src: "/screenshots/forestgenerator.webp", alt: "Research project", href: "/#work" },
                                {
                                    src: "/photos/callum-newlands.jpg",
                                    alt: "Callum, in front of a screen showing a generated forest",
                                    href: "/about"
                                }
                            ]}
                        />
                    ),
                    width: "narrow"
                }
            ]
        },
        {
            heading: "FramedPhoto",
            examples: [
                {
                    element: (
                        <FramedPhoto
                            photo={{ src: "/photos/archery.webp", alt: "Callum at full draw with a recurve bow" }}
                            tilt="left"
                        />
                    ),
                    width: "small"
                },
                {
                    element: (
                        <FramedPhoto
                            placeholder="[TBC: hiking photo]"
                            caption="Where the photo was taken"
                            tilt="right"
                        />
                    ),
                    width: "small"
                }
            ]
        },
        {
            heading: "NumberedScreenshot",
            examples: [
                {
                    element: (
                        <NumberedScreenshot
                            image={screenshot}
                            markers={[
                                { x: 79, y: 5.6, text: "What this part of the screen does." },
                                { x: 33.4, y: 16, text: "Why it matters to the people using it." },
                                { x: 5.5, y: 56, text: "Another detail worth pointing out." },
                                { x: 30, y: 95.5, text: "A last point, kept to a line or two." }
                            ]}
                        />
                    ),
                    width: "medium"
                }
            ]
        },
        {
            heading: "Gallery",
            examples: [
                {
                    element: (
                        <Gallery
                            screenshots={[
                                {
                                    src: "/screenshots/mathsplanner/image 11.png",
                                    alt: "The weekly timetable where teachers save starters for each class",
                                    caption: "A wide screenshot, full width."
                                },
                                {
                                    src: "/screenshots/mathsplanner/image 17a.png",
                                    alt: "A starter shown on a phone",
                                    caption: "A tall screenshot."
                                },
                                {
                                    src: "/screenshots/dataviz.webp",
                                    alt: "A tall chart of emissions by country",
                                    caption: "Another, at the same height."
                                }
                            ]}
                        />
                    ),
                    width: "medium"
                }
            ]
        },
        {
            heading: "WorkGrid",
            intro: "The research project has no page, so it has no link or arrow. Only the wide card shows a third tag.",
            examples: [
                { element: <WorkGrid featureFirst projects={projects} /> },
                {
                    element: <WorkGrid projects={projects.slice(0, 2)} link={{ href: "/#work", label: "All work" }} />
                }
            ]
        },
        {
            heading: "Facts",
            examples: [
                {
                    element: (
                        <Facts
                            facts={[
                                { label: "Client", value: "Example Ltd" },
                                { label: "My role", value: "Lead developer" },
                                { label: "When", value: "2021 to now" }
                            ]}
                        />
                    ),
                    width: "narrow"
                }
            ]
        },
        {
            heading: "ResultsTiles",
            examples: [
                { element: <ResultsTiles results={results} source="Sample numbers, for the layout only." /> },
                { element: <ResultsTiles results={results} source="Sample numbers." />, width: "narrow" }
            ]
        },
        {
            heading: "Quote",
            examples: [
                {
                    element: (
                        <Quote
                            text="Two sentences from a client on what working together was like."
                            name="A. Client"
                            role="Product owner, Example Ltd"
                        />
                    )
                }
            ]
        },
        {
            heading: "Timeline",
            examples: [
                {
                    element: (
                        <Timeline
                            entries={[
                                {
                                    date: "2021 to now",
                                    title: "Lead developer, Example Ltd",
                                    text: "What the role covers, in a sentence.",
                                    current: true,
                                    children: <TimelineProjects projects={projects.slice(0, 2)} />
                                },
                                { date: "2019", title: "Degree, Example University", text: "A line about it." },
                                { date: "2016", title: "First job", text: "A line about it." }
                            ]}
                        />
                    )
                },
                {
                    element: (
                        <Timeline
                            entries={[
                                { date: "Jan 2024", title: "Prototype" },
                                { date: "May 2024", title: "Launch" }
                            ]}
                        />
                    ),
                    width: "medium"
                }
            ]
        }
    ];

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
                        {group.examples.map((example) => (
                            <Example key={jsxSource(example.element)} {...example} />
                        ))}
                    </div>
                </Section>
            ))}
        </>
    );
}
