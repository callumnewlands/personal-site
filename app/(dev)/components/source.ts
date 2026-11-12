import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "@babel/parser";

interface SyntaxNode {
    type: string;
    start: number;
    end: number;
    [key: string]: unknown;
}

function isNode(value: unknown): value is SyntaxNode {
    return typeof value === "object" && value !== null && "type" in value;
}

function property(node: SyntaxNode, name: string) {
    if (node.type !== "ObjectExpression") {
        return undefined;
    }
    const found = (node.properties as SyntaxNode[]).find(
        (item) => item.type === "ObjectProperty" && (item.key as SyntaxNode).name === name
    );
    return found?.value as SyntaxNode | undefined;
}

// Removes the indent the code had inside examples.tsx, keeping its own nesting
function dedent(code: string) {
    const lines = code.split("\n");
    const indents = lines.slice(1).map((line) => line.match(/^ */)![0].length);
    const indent = Math.min(...indents.filter((_, index) => lines[index + 1].trim()));
    return lines.map((line, index) => (index === 0 ? line : line.slice(indent))).join("\n");
}

// The JSX of each example's element, as written in examples.tsx, by group heading
export function exampleSources() {
    const text = readFileSync(join(process.cwd(), "app/(dev)/components/examples.tsx"), "utf8");
    const sources: Record<string, string[]> = {};

    function visit(value: unknown) {
        if (Array.isArray(value)) {
            value.forEach(visit);
            return;
        }
        if (!isNode(value)) {
            return;
        }
        const heading = property(value, "heading");
        const examples = property(value, "examples");
        if (heading?.type === "StringLiteral" && examples?.type === "ArrayExpression") {
            sources[heading.value as string] = (examples.elements as SyntaxNode[]).map((example) => {
                const element = property(example, "element")!;
                return dedent(text.slice(element.start, element.end));
            });
            return;
        }
        Object.values(value).forEach(visit);
    }

    visit(parse(text, { sourceType: "module", plugins: ["typescript", "jsx"] }).program);
    return sources;
}
