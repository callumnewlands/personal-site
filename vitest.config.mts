import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
    resolve: { tsconfigPaths: true },
    test: {
        // ignore playwright tests and hidden (dot) directories
        exclude: [...configDefaults.exclude, "e2e/**", ".*/**"]
    }
});
