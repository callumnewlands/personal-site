// Editors read this through the yaml-language-server comment at the top of each project file
import { writeFile } from "node:fs/promises";
import { projectJsonSchema } from "../data/projects.ts";

await writeFile(
    new URL("../content/projects/schema.json", import.meta.url),
    `${JSON.stringify(projectJsonSchema(), null, 4)}\n`
);
console.log("Generated content/projects/schema.json");
