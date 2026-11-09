import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import { z } from "zod";

const image = z.strictObject({
    src: z.string().describe("Path under public/, e.g. /projects/mathsplanner/card.jpg"),
    alt: z.string().describe("What the image shows. Empty only when the text next to it says it all")
});
const captioned = image.extend({ caption: z.string().describe("Shown under the image") });

const figure = z
    .discriminatedUnion("type", [
        z.strictObject({
            type: z.literal("fragment"),
            name: z.string().describe("Which product fragment component to draw"),
            screenshot: captioned.optional().describe("A screenshot overlapping the fragment")
        }),
        z.strictObject({
            type: z.literal("screenshot"),
            image: captioned,
            second: captioned.optional().describe("A smaller second screenshot")
        }),
        z.strictObject({
            type: z.literal("timeline"),
            steps: z.array(z.strictObject({ date: z.string(), text: z.string() })).min(1)
        })
    ])
    .describe("The figure beside a chapter's text");

const stat = z.strictObject({
    value: z.string().describe("The number, or [TBC]"),
    label: z.string()
});

const page = z
    .strictObject({
        lead: z.string().describe("One line under the title"),
        client: z.string(),
        role: z.string().describe("My role, for the facts row"),
        years: z.coerce.string().describe("For the facts row, e.g. 2020 to now"),
        headerImages: z.tuple([image, image, image]).describe("Three wide screenshots for the fan"),
        moreWork: z.tuple([z.string(), z.string()]).describe("Two project slugs for More work"),
        liveUrl: z.url().optional().describe("Shown as the Visit button"),
        headlineResult: z.string().optional().describe("One or two sentences on the band after the header"),
        chapters: z
            .array(z.strictObject({ heading: z.string(), text: z.string(), figure }))
            .optional()
            .describe("Text and a figure, alternating sides. Separate paragraphs with a blank line"),
        inUse: z
            .strictObject({
                heading: z.string(),
                text: z.string(),
                screenshot: image.extend({
                    markers: z
                        .array(
                            z.strictObject({
                                x: z.number().describe("Percentage from the left"),
                                y: z.number().describe("Percentage from the top"),
                                text: z.string()
                            })
                        )
                        .min(1)
                        .describe("Numbered markers, with their text as the legend")
                }),
                screenshots: z.array(captioned).describe("Smaller screenshots under the numbered one")
            })
            .optional()
            .describe("The green band showing the product in use"),
        results: z.tuple([stat, stat, stat]).optional().describe("Three results tiles"),
        quote: z.strictObject({ text: z.string(), name: z.string(), role: z.string() }).optional(),
        related: z
            .strictObject({
                heading: z.string(),
                slugs: z.array(z.string()).min(1).max(3).describe("Up to three project slugs")
            })
            .optional()
            .describe("A row of work cards after the results"),
        links: z.array(z.strictObject({ label: z.string(), href: z.url() })).optional()
    })
    .describe("The project page. Leave it out and the work card doesn't link anywhere");

export const projectSchema = z.strictObject({
    title: z.string(),
    order: z.number().int().describe("Position in the home page work grid"),
    card: z
        .strictObject({
            line: z.string().describe("One line on what the project is"),
            role: z.string().describe("Role and years, e.g. Tech lead, 2022 to now"),
            image,
            tags: z.array(z.string()).max(3).describe("Quiet tags on the image")
        })
        .describe("The work card on the home page and in More work"),
    page: page.optional()
});

export function projectJsonSchema() {
    return z.toJSONSchema(projectSchema, { io: "input" });
}

export type Project = z.infer<typeof projectSchema> & { slug: string };

const directory = join(process.cwd(), "content", "projects");

export function parseProject(file: string, source: string): Project {
    const result = projectSchema.safeParse(parse(source));
    if (!result.success) {
        throw new Error(`content/projects/${file}:\n${z.prettifyError(result.error)}`);
    }
    return { ...result.data, slug: file.replace(/\.yaml$/, "") };
}

export function checkProjects(projects: Project[]) {
    const slugs = new Set(projects.map((item) => item.slug));
    const orders = new Set(projects.map((item) => item.order));
    if (orders.size !== projects.length) {
        throw new Error("content/projects: two projects have the same order");
    }
    for (const item of projects) {
        const linked = [...(item.page?.moreWork ?? []), ...(item.page?.related?.slugs ?? [])];
        if (new Set(linked).size !== linked.length) {
            throw new Error(`content/projects/${item.slug}.yaml: a project is linked twice`);
        }
        for (const slug of linked) {
            if (slug === item.slug || !slugs.has(slug)) {
                throw new Error(`content/projects/${item.slug}.yaml: can't link to "${slug}"`);
            }
        }
    }
}

function loadProjects() {
    const projects: Project[] = [];
    for (const file of readdirSync(directory)) {
        if (file.endsWith(".yaml")) {
            projects.push(parseProject(file, readFileSync(join(directory, file), "utf8")));
        }
    }
    checkProjects(projects);
    return projects.toSorted((a, b) => a.order - b.order);
}

const projects = loadProjects();

export function getProjects() {
    return projects;
}

export function getProjectPage(slug: string) {
    const item = projects.find((other) => other.slug === slug);
    return item?.page ? { ...item, page: item.page } : undefined;
}

export function getProjectSlugs() {
    return projects.filter((item) => item.page).map((item) => item.slug);
}
