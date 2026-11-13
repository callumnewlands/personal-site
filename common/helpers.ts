/**
 * Joins the truthy class names with spaces, so classes can be added conditionally.
 *
 * @example cx("link", active && "active") // "link active" or "link"
 */
export function cx(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}
