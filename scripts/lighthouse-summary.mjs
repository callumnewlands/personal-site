// Writes a table of Lighthouse scores to the GitHub Actions job summary, from the manifest LHCI uploads with each report
// Takes the report folders as arguments, so CI can combine every shard's results into one table
import { appendFile, readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { join } from "node:path";

const { ci } = createRequire(import.meta.url)("../lighthouserc.js");
const folders = process.argv.length > 2 ? process.argv.slice(2) : [".lighthouseci"];

// A shard's manifest is missing when LHCI failed before uploading, in which case its own error is the one that matters
const readManifest = (folder) =>
    readFile(join(folder, "manifest.json"), "utf8")
        .then(JSON.parse)
        .catch(() => []);
const runs = (await Promise.all(folders.map(readManifest))).flat().filter((run) => run.isRepresentativeRun);

const categories = [
    ["performance", "Performance"],
    ["accessibility", "Accessibility"],
    ["best-practices", "Best practices"],
    ["seo", "SEO"]
];
const minScore = (category) => ci.assert.assertions[`categories:${category}`]?.[1].minScore ?? 0;
const score = (category, value) => `${value >= minScore(category) ? "✅" : "❌"} ${Math.round(value * 100)}`;

const rows = runs
    .map(({ url, summary }) => ({ path: new URL(url).pathname, summary }))
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(({ path, summary }) => {
        const scores = categories.map(([category]) => score(category, summary[category]));
        return `| \`${path}\` | ${scores.join(" | ")} |`;
    });

const table = [
    "## Lighthouse results",
    "",
    `| Page | ${categories.map(([, label]) => label).join(" | ")} |`,
    `| --- | ${categories.map(() => "---").join(" | ")} |`,
    ...rows,
    "",
    `Median of ${ci.collect.numberOfRuns} runs per page. Full reports are in the lighthouse-reports artifacts.`,
    ""
].join("\n");

if (process.env.GITHUB_STEP_SUMMARY) {
    await appendFile(process.env.GITHUB_STEP_SUMMARY, table);
} else {
    console.log(table);
}
