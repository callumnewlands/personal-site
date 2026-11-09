import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import { z } from "zod";
import type { Project } from "./project-schema";
import { projectSchema } from "./project-schema";

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
