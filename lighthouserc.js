const { readFileSync } = require("node:fs");

// Every page in the sitemap written by the postbuild, served locally
const urls = [...readFileSync("public/sitemap.xml", "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
    match[1].replace(/^https?:\/\/[^/]+/, "http://localhost:3000")
);

// CI splits the pages across parallel jobs, each taking every nth page
const shard = Number(process.env.LIGHTHOUSE_SHARD ?? 0);
const shards = Number(process.env.LIGHTHOUSE_SHARDS ?? 1);
const shardUrls = urls.filter((_, index) => index % shards === shard);

module.exports = {
    ci: {
        collect: {
            startServerCommand: "pnpm start",
            startServerReadyPattern: "Ready",
            url: shardUrls,
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
