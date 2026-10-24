const { readFileSync } = require("node:fs");

// Every page in the sitemap written by the prebuild, served locally
const urls = [...readFileSync("public/sitemap.xml", "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
    match[1].replace(/^https?:\/\/[^/]+/, "http://localhost:3000")
);

module.exports = {
    ci: {
        collect: {
            startServerCommand: "pnpm start",
            startServerReadyPattern: "Ready",
            url: urls,
            numberOfRuns: 3
        },
        assert: {
            assertions: {
                "categories:performance": ["error", { minScore: 0.85 }],
                "categories:accessibility": ["error", { minScore: 0.95 }],
                "categories:best-practices": ["error", { minScore: 0.95 }],
                "categories:seo": ["error", { minScore: 0.95 }]
            }
        },
        upload: {
            target: "filesystem",
            outputDir: ".lighthouseci"
        }
    }
};
