import { expect, test } from "vitest";
import { cx } from "./helpers";

test("cx joins classes and skips falsy ones", () => {
    expect(cx("a", false, null, undefined, "", "b")).toBe("a b");
});
