import { readFileSync } from "node:fs";
import { join } from "node:path";
import { expect, test } from "vitest";
import { projectJsonSchema } from "./project-schema";
import { checkProjects, getProjectPage, getProjects, getProjectSlugs, loadProjects, parseProject } from "./projects";

const directory = join("content", "projects");

const card = (order: number) => `
title: Test
order: ${order}
card:
    line: A line
    role: A role
    image: { src: /test.jpg, alt: "" }
    tags: []
`;

const page = (moreWork: string) => `
page:
    lead: A lead
    client: A client
    role: A role
    years: 2026
    headerImages:
        - { src: /1.jpg, alt: One }
        - { src: /2.jpg, alt: Two }
        - { src: /3.jpg, alt: Three }
    moreWork: [${moreWork}]
`;

const one = parseProject("one.yaml", card(1));
const two = parseProject("two.yaml", card(2));

test("every project file is valid", () => {
    expect(() => loadProjects()).not.toThrow();
});

test("sorts projects by order", () => {
    const orders = getProjects().map((item) => item.order);
    expect(orders).toEqual(orders.toSorted((a, b) => a - b));
});

test("only lists projects with a page", () => {
    for (const item of getProjects()) {
        expect(getProjectSlugs().includes(item.slug)).toBe(Boolean(item.page));
        expect(Boolean(getProjectPage(item.slug))).toBe(Boolean(item.page));
    }
});

test("loads a project with only the required fields", () => {
    expect(parseProject("test.yaml", card(1)).page).toBeUndefined();
    expect(parseProject("test.yaml", card(1) + page("one, two")).page?.chapters).toBeUndefined();
});

test("names the file and field when a required field is missing", () => {
    expect(() => parseProject("test.yaml", card(1).replace("    line: A line\n", ""))).toThrow(
        /content\/projects\/test\.yaml[\s\S]*card\.line/
    );
});

test("rejects an unknown field", () => {
    expect(() => parseProject("test.yaml", `${card(1)}headlineresult: A typo`)).toThrow(/headlineresult/);
});

test("rejects an unknown figure type", () => {
    const chapter = `
    chapters:
        - heading: A chapter
          text: Some text
          figure: { type: video, src: /a.mp4 }
`;
    expect(() => parseProject("test.yaml", card(1) + page("one, two") + chapter)).toThrow(/figure/);
});

test("rejects a link to a project that doesn't exist", () => {
    const project = parseProject("test.yaml", card(3) + page("one, nope"));
    expect(() => checkProjects([one, two, project])).toThrow(`can't link to "nope"`);
});

test("rejects a project linking to itself", () => {
    const project = parseProject("test.yaml", card(3) + page("one, test"));
    expect(() => checkProjects([one, two, project])).toThrow(`can't link to "test"`);
});

test("rejects two projects with the same order", () => {
    expect(() => checkProjects([one, parseProject("test.yaml", card(1))])).toThrow("same order");
});

test("schema.json matches the schema", () => {
    const file = JSON.parse(readFileSync(join(directory, "schema.json"), "utf8"));
    expect(file).toEqual(projectJsonSchema());
});
