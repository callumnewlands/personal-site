import type { Project, Results } from "@/data/project-schema";
import { getProjects } from "@/data/projects";
import SectionHeading from "@/app/_components/layout/SectionHeading";
import { cx } from "@/common/helpers";

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

export const results: Results = {
    tiles: [
        { value: "12", label: "sample stat" },
        { value: "345", label: "another sample stat" },
        { value: "6.7K", label: "a third sample stat" }
    ],
    source: "Sample numbers, Nov 2026."
};

export const screenshot = {
    src: "/screenshots/mathsplanner/image 10.png",
    alt: "A Maths Planner starter: six questions, a countdown timer and an extension question"
};

export function samplePanel(name: string, fill?: "primary" | "accent" | "pine") {
    return (
        <div key={name} className={cx("panel", fill && `panel-${fill}`)}>
            <SectionHeading
                level={3}
                size="chapter"
                intro="For when a team needs this sort of help, in a sentence or two."
            >
                {name}
            </SectionHeading>
            <ul role="list" className="ruled-list">
                <li>Something that's included</li>
                <li>Something else that's included</li>
            </ul>
        </div>
    );
}

export const projects = sampleProjects();
