// Builds ../brand-guidelines.pdf and ../brand-guidelines.md from index.html
// Run with: pnpm guidelines (needs Chromium once: pnpm exec playwright install chromium)
// --md-only skips the PDF
import { chromium } from "@playwright/test";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import prettier from "prettier";

const here = dirname(fileURLToPath(import.meta.url));
const pdfPath = join(here, "..", "brand-guidelines.pdf");
const mdPath = join(here, "..", "brand-guidelines.md");

const header = `# cnewlands.dev brand guidelines

<!-- Generated from brand-guidelines-source/index.html by pnpm guidelines. Edit the HTML, not this file. -->

The design rules for [cnewlands.dev](https://cnewlands.dev): what the site is for, colour, type, the logo, layout, components, page templates, words, the avoid-list, and how components behave. [brand-guidelines.pdf](brand-guidelines.pdf) has the same content with the swatches, logo, icons and component examples; this file is the text version, which is easier to read on GitHub and to search.`;

// Chromium stamps the time in, so keep the old PDF if that is all that changed
const withoutDates = (bytes) => bytes.toString("latin1").replace(/\/(CreationDate|ModDate) \([^)]*\)/g, "");

let blocks;
const browser = await chromium.launch();
try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(join(here, "index.html")).href);
    await page.evaluate(() => document.fonts.ready);

    if (!process.argv.includes("--md-only")) {
        const pdf = await page.pdf({ preferCSSPageSize: true, printBackground: true });
        const old = await readFile(pdfPath).catch(() => null);
        if (old && withoutDates(old) === withoutDates(pdf)) {
            console.log(`${pdfPath} unchanged`);
        } else {
            await writeFile(pdfPath, pdf);
            console.log(`Wrote ${pdfPath}`);
        }
    }

    // Walks the page in the browser and returns markdown blocks
    blocks = await page.evaluate(() => {
        const inlineTags = new Set(["B", "STRONG", "CODE", "SPAN", "BR", "EM", "I", "A", "SVG", "IMG"]);
        const isInline = (node) => node.nodeType === Node.TEXT_NODE || inlineTags.has(node.nodeName.toUpperCase());
        const note = (text) => `_Shown in the PDF: ${text}._`;
        let sectionNumber = 0;

        function inline(node, inTable) {
            if (node.nodeType === Node.TEXT_NODE) return node.textContent.replace(/\s+/g, " ");
            const tag = node.nodeName.toUpperCase();
            if (tag === "SVG" || tag === "IMG") return "";
            if (tag === "BR") return inTable ? " " : "\n";
            let text = "";
            for (const child of node.childNodes) text += inline(child, inTable);
            if (tag === "B" || tag === "STRONG") return `**${text.trim()}**`;
            if (tag === "CODE") return `\`${text}\``;
            return text;
        }

        function tidy(text) {
            return text
                .split("\n")
                .map((line) => line.replace(/ +/g, " ").trim())
                .filter(Boolean)
                .join("\n");
        }

        // A row of state examples, each with a centred caption underneath
        function captions(el) {
            const items = [...el.children];
            if (!items.length) return null;
            const texts = [];
            for (const item of items) {
                const caption = item.lastElementChild;
                if (!caption || !caption.matches("p.small") || !caption.style.textAlign) return null;
                texts.push(tidy(inline(caption)));
            }
            return texts.join(", ");
        }

        function table(el) {
            const headings = [...el.querySelectorAll("th")].map((th) => tidy(inline(th, true)));
            const columns = headings.map((heading, i) => i).filter((i) => headings[i]);
            let md = `| ${columns.map((i) => headings[i]).join(" | ")} |\n`;
            md += `|${" --- |".repeat(columns.length)}`;
            for (const row of el.querySelectorAll("tr")) {
                const cells = [...row.querySelectorAll("td")];
                if (!cells.length) continue;
                md += `\n| ${columns.map((i) => tidy(inline(cells[i], true)).replace(/\|/g, "\\|")).join(" | ")} |`;
            }
            return md;
        }

        function block(el) {
            if (el.dataset?.md === "skip" || el.matches(".cover, .toc h1, .toc ol, svg, img, style")) return [];
            if (el.dataset?.mdNote) {
                return [note(el.dataset.mdNote), ...[...el.querySelectorAll(":scope > ul")].flatMap(block)];
            }
            const tag = el.nodeName;
            if (tag === "H1") return [`## ${++sectionNumber}. ${tidy(inline(el))}`];
            if (tag === "H2") return [`### ${tidy(inline(el))}`];
            if (tag === "H3") return [`#### ${tidy(inline(el))}`];
            if (tag === "P") return [tidy(inline(el))].filter(Boolean);
            if (tag === "UL" || tag === "OL") {
                return [...el.children].map((li) => `- ${tidy(inline(li)).replace(/\n/g, " ")}`);
            }
            if (tag === "TABLE") return [table(el)];
            const row = captions(el);
            if (row) return [note(row)];
            return children(el);
        }

        // Runs of inline content become one paragraph, everything else is a block
        function children(el) {
            const out = [];
            let run = "";
            const flush = () => {
                const text = tidy(run);
                if (text) out.push(text);
                run = "";
            };
            for (const child of el.childNodes) {
                if (isInline(child)) {
                    run += inline(child);
                } else if (child.nodeType === Node.ELEMENT_NODE) {
                    flush();
                    out.push(...block(child));
                }
            }
            flush();
            return out;
        }

        return children(document.body);
    });
} finally {
    await browser.close();
}

// List items go on consecutive lines so each list stays together
let md = header;
let previous = "";
for (const text of blocks) {
    md += text.startsWith("- ") && previous.startsWith("- ") ? `\n${text}` : `\n\n${text}`;
    previous = text;
}
const options = await prettier.resolveConfig(mdPath);
await writeFile(mdPath, await prettier.format(`${md}\n`, { ...options, filepath: mdPath }));
console.log(`Wrote ${mdPath}`);
