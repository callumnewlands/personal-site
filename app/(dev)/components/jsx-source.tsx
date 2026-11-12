import type { ReactNode } from "react";
import { Fragment, isValidElement } from "react";

const lineLength = 80;

function componentName(type: unknown): string {
    if (typeof type === "string") {
        return type;
    }
    if (type === Fragment) {
        return "";
    }
    // Client components reach a server page as a reference to their module
    const id = (type as { $$id?: string }).$$id;
    if (id) {
        const [file, name] = id.split("#");
        return name && name !== "default" ? name : (file.match(/(\w+)\.tsx/)?.[1] ?? "Component");
    }
    return typeof type === "function" ? type.name : "Component";
}

const newline = "\n    ";

function indent(text: string) {
    return text.replaceAll("\n", newline);
}

// An opening line, then each line indented, then a closing line
function block(open: string, lines: string[], separator: string, close: string) {
    return `${open}${newline}${lines.map(indent).join(separator + newline)}\n${close}`;
}

function fit(inline: string, multiline: () => string) {
    return inline.includes("\n") || inline.length > lineLength - 20 ? multiline() : inline;
}

// Shows enough of the data to read its shape: whole when short, otherwise the first item of a list
function data(value: unknown, depth: number): string {
    if (typeof value === "string") {
        return JSON.stringify(value);
    }
    if (typeof value !== "object" || value === null) {
        return String(value);
    }
    if (isValidElement(value)) {
        const source = jsxSource(value);
        return source.includes("\n") ? `<${componentName(value.type)} />` : source;
    }
    if (depth >= 2) {
        return Array.isArray(value) ? "[…]" : "{…}";
    }
    if (Array.isArray(value)) {
        const items = value.map((item) => data(item, depth + 1));
        return fit(`[${items.join(", ")}]`, () => {
            const shown = items.length > 1 ? [items[0], "…"] : items;
            return block("[", shown, ",", "]");
        });
    }
    const fields = Object.entries(value)
        .filter(([, field]) => field !== undefined)
        .map(([key, field]) => `${key}: ${data(field, depth + 1)}`);
    return fit(`{ ${fields.join(", ")} }`, () => block("{", fields, ",", "}"));
}

// CSS module classes arrive hashed, like panel-module__2ivQ0G__primary, so they're printed as panel.primary
function className(value: string) {
    const names = value.split(" ").map((name) => {
        const [, file, key] = name.match(/^(\w+)-module__[\w-]+__([\w-]+)$/) ?? [];
        if (!file) {
            return JSON.stringify(name);
        }
        return key.includes("-") ? `${file}["${key}"]` : `${file}.${key}`;
    });
    if (names.every((name) => name.startsWith('"'))) {
        return `className=${JSON.stringify(value)}`;
    }
    return `className={${names.length > 1 ? `cx(${names.join(", ")})` : names[0]}}`;
}

function attribute(key: string, value: unknown) {
    if (value === true) {
        return key;
    }
    if (key === "className" && typeof value === "string") {
        return className(value);
    }
    return typeof value === "string" ? `${key}=${JSON.stringify(value)}` : `${key}={${data(value, 0)}}`;
}

export function jsxSource(node: ReactNode): string {
    if (Array.isArray(node)) {
        const text = node.every((child) => !isValidElement(child));
        return node.map(jsxSource).join(text ? "" : "\n");
    }
    if (!isValidElement<Record<string, unknown>>(node)) {
        return node === null || node === undefined || typeof node === "boolean" ? "" : String(node);
    }

    const name = componentName(node.type);
    const { children, ...props } = node.props;
    const attributes = Object.entries(props)
        .filter(([, value]) => value !== undefined && value !== false)
        .map(([key, value]) => attribute(key, value));

    const oneLine = [name, ...attributes].join(" ");
    const opening = oneLine.length > lineLength || oneLine.includes("\n") ? block(name, attributes, "", "") : oneLine;
    const inner = jsxSource(children as ReactNode);

    if (!inner) {
        return `<${opening}${opening.endsWith("\n") ? "" : " "}/>`;
    }
    if (!inner.includes("\n") && inner.length + oneLine.length < lineLength && !isValidElement(children)) {
        return `<${opening}>${inner}</${name}>`;
    }
    return block(`<${opening}>`, [inner], "", `</${name}>`);
}

const tokens = /((?<=<\/?)[\w.]+)|(\w+(?==))|("[^"]*")/g;

export function highlight(code: string, classes: { tag: string; prop: string; string: string }) {
    const parts: ReactNode[] = [];
    let last = 0;
    for (const match of code.matchAll(tokens)) {
        const kind = (["tag", "prop", "string"] as const)[match.slice(1).findIndex(Boolean)];
        parts.push(
            code.slice(last, match.index),
            <span key={match.index} className={classes[kind]}>
                {match[0]}
            </span>
        );
        last = match.index + match[0].length;
    }
    parts.push(code.slice(last));
    return parts;
}
