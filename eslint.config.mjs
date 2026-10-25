import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
    includeIgnoreFile(fileURLToPath(new URL(".gitignore", import.meta.url))),
    ...nextVitals,
    ...nextTypescript,
    // Lighthouse CI only loads CommonJS config
    { files: ["lighthouserc.js"], rules: { "@typescript-eslint/no-require-imports": "off" } }
];

export default config;
