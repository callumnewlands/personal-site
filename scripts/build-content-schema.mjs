// Used for IDE code hints in content/projects/*.yaml files
import { writeFile } from "node:fs/promises";
import { projectJsonSchema } from "../data/project-schema.ts";

await writeFile(
    new URL("../content/projects/schema.json", import.meta.url),
    `${JSON.stringify(projectJsonSchema(), null, 4)}\n`
);
console.log("Generated content/projects/schema.json");
