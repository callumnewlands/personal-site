/**
 * Joins the truthy class names with spaces, so classes can be added conditionally.
 *
 * @example cx("link", active && "active") // "link active" or "link"
 */
export function cx(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

// Splits items into rows of at most max, as even as possible
export function evenRows<T>(items: T[], max: number) {
    const count = Math.ceil(items.length / max);
    const rows: T[][] = [];
    for (let row = 0; row < count; row++) {
        rows.push(
            items.slice(Math.round((row * items.length) / count), Math.round(((row + 1) * items.length) / count))
        );
    }
    return rows;
}
