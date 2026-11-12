import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import { z } from "zod";
import type { Project, ProjectWithPage } from "./project-schema";
import { projectSchema } from "./project-schema";

const directory = join(process.cwd(), "content", "projects");

/**
 * Parses and validates one project file, using its file name without .yaml as the slug.
 *
 * @throws if the YAML is invalid or doesn't match {@link projectSchema}, listing each problem
 */
export function parseProject(file: string, source: string): Project {
    const result = projectSchema.safeParse(parse(source));
    if (!result.success) {
        throw new Error(`content/projects/${file}:\n${z.prettifyError(result.error)}`);
    }
    return { ...result.data, slug: file.replace(/\.yaml$/, "") };
}

/**
 * Checks project constraints the schema doesn't cover, such as unique orders and valid links.
 *
 * @throws if any constraint is broken, e.g. a link to a project that doesn't exist
 */
export function checkProjects(projects: Project[]) {
    const slugs = new Set(projects.map((item) => item.slug));
    const orders = new Set(projects.map((item) => item.order));
    if (orders.size !== projects.length) {
        throw new Error("content/projects: two projects have the same order");
    }
    const first = Math.min(...orders);
    for (const item of projects) {
        if (item.order !== first && item.card.tags.length > 2) {
            throw new Error(`content/projects/${item.slug}.yaml: only the first card can have three tags`);
        }
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

/**
 * Reads every YAML file in content/projects, validates each one and the set as a whole,
 * and returns them sorted by order.
 */
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

let projects: Project[] | undefined;

/**
 * Returns the projects, sorted by order. Reads and validates them on the first
 * call, then returns the cached list.
 */
export function getProjects() {
    projects ??= loadProjects();
    return projects;
}

/**
 * Returns the project with this slug, for rendering its page.
 *
 * @returns undefined for an unknown slug or a project without a page
 */
export function getProjectPage(slug: string): ProjectWithPage | undefined {
    const item = getProjects().find((other) => other.slug === slug);
    return item?.page ? { ...item, page: item.page } : undefined;
}

/** Returns the slugs of the projects that have a page, for generating their routes. */
export function getProjectSlugs() {
    return getProjects()
        .filter((item) => item.page)
        .map((item) => item.slug);
}
