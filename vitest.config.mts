import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        // ignore playwright tests and hidden (dot) directories
        exclude: [...configDefaults.exclude, "e2e/**", ".*/**"]
    }
});
