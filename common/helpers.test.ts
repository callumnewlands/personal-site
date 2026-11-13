import { expect, test } from "vitest";
import { cx, evenRows } from "./helpers";

/** Returns the row lengths {@link evenRows} gives for `count` items, with at most three to a row. */
function rowSizes(count: number) {
    return evenRows(
        Array.from({ length: count }, (_, index) => index),
        3
    ).map((row) => row.length);
}

test("cx joins classes and skips falsy ones", () => {
    expect(cx("a", false, null, undefined, "", "b")).toBe("a b");
});

test("evenRows splits items into rows as even as possible", () => {
    expect(rowSizes(0)).toEqual([]);
    expect(rowSizes(2)).toEqual([2]);
    expect(rowSizes(4)).toEqual([2, 2]);
    expect(rowSizes(5)).toEqual([3, 2]);
    expect(rowSizes(7)).toEqual([2, 3, 2]);
});
