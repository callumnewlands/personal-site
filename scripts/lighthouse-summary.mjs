// Lighthouse scores table for the Actions job summary
import { appendFile, readFile } from "node:fs/promises";
import { join } from "node:path";
import budgets from "../lighthouse-budgets.json" with { type: "json" };

const labels = {
    performance: "Performance",
    accessibility: "Accessibility",
    "best-practices": "Best practices",
    seo: "SEO"
};

const folders = process.argv.length > 2 ? process.argv.slice(2) : [".lighthouseci"];
const runs = [];
const missing = [];
for (const folder of folders) {
    try {
        const manifest = JSON.parse(await readFile(join(folder, "manifest.json"), "utf8"));
        runs.push(...manifest.filter((run) => run.isRepresentativeRun));
    } catch {
        missing.push(folder);
    }
}
runs.sort((a, b) => a.url.localeCompare(b.url));

let table = "## Lighthouse results\n\n";
table += "| Page | " + Object.values(labels).join(" | ") + " |\n";
table += "| --- |" + " --- |".repeat(Object.keys(labels).length) + "\n";
for (const run of runs) {
    let row = `| \`${new URL(run.url).pathname}\` |`;
    for (const category of Object.keys(labels)) {
        const score = run.summary[category];
        const icon = score >= budgets.minScores[category] ? "✅" : "❌";
        row += ` ${icon} ${Math.round(score * 100)} |`;
    }
    table += row + "\n";
}
for (const folder of missing) {
    table += `\n⚠️ No results in ${folder}, so its pages are missing.\n`;
}
table += `\nScores are from LHCI's representative (median) run of ${budgets.numberOfRuns} per page. Full reports are in the lighthouse-reports artifacts.\n`;

if (process.env.GITHUB_STEP_SUMMARY) {
    await appendFile(process.env.GITHUB_STEP_SUMMARY, table);
} else {
    console.log(table);
}
