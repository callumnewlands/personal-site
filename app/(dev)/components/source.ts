import { readFileSync } from "node:fs";
import { join } from "node:path";
import ts from "typescript";

function property(node: ts.Node, name: string) {
    if (!ts.isObjectLiteralExpression(node)) {
        return undefined;
    }
    const found = node.properties.find((item) => item.name?.getText() === name);
    return found && ts.isPropertyAssignment(found) ? found.initializer : undefined;
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
    const file = join(process.cwd(), "app/(dev)/components/examples.tsx");
    const tree = ts.createSourceFile(file, readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const sources: Record<string, string[]> = {};

    tree.forEachChild(function visit(node) {
        const heading = property(node, "heading");
        const examples = property(node, "examples");
        if (heading && ts.isStringLiteral(heading) && examples && ts.isArrayLiteralExpression(examples)) {
            sources[heading.text] = examples.elements.map((example) => {
                let element = property(example, "element")!;
                if (ts.isParenthesizedExpression(element)) {
                    element = element.expression;
                }
                return dedent(element.getText());
            });
            return;
        }
        node.forEachChild(visit);
    });
    return sources;
}
