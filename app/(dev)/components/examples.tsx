import Fan from "@/app/_components/figures/Fan";
import FramedPhoto from "@/app/_components/figures/FramedPhoto";
import Gallery from "@/app/_components/figures/Gallery";
import NumberedScreenshot from "@/app/_components/figures/NumberedScreenshot";
import Screenshot from "@/app/_components/figures/Screenshot";
import SectionHeading from "@/app/_components/layout/SectionHeading";
import Facts from "@/app/_components/project/Facts";
import Quote from "@/app/_components/project/Quote";
import ResultsTiles from "@/app/_components/project/ResultsTiles";
import Timeline from "@/app/_components/project/Timeline";
import TimelineProjects from "@/app/_components/project/TimelineProjects";
import WorkGrid from "@/app/_components/project/WorkGrid";
import Logo from "@/app/_components/shell/Logo";
import Accordion from "@/app/_components/ui/Accordion";
import Button from "@/app/_components/ui/Button";
import Tags from "@/app/_components/ui/Tags";
import TextLink from "@/app/_components/ui/TextLink";
import type { ExampleData } from "./Example";
import { projects, results, samplePanel, screenshot } from "./samples";

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
                            {
                                src: "/screenshots/mathsplanner.webp",
                                alt: "",
                                href: "/#work",
                                label: "Example project"
                            },
                            {
                                src: "/screenshots/forestgenerator.webp",
                                alt: "",
                                href: "/#work",
                                label: "Research project"
                            },
                            {
                                src: "/photos/callum-newlands.jpg",
                                alt: "Callum, in front of a screen showing a generated forest",
                                href: "/about",
                                label: "About me"
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
                    <FramedPhoto placeholder="[TBC: hiking photo]" caption="Where the photo was taken" tilt="right" />
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
