import type { RefObject } from "react";
import { useEffect, useState } from "react";

/**
 * Tracks whether an element's content is taller or wider than the element,
 * rechecking whenever the element resizes. It's false until the first check.
 */
export function useOverflowing(ref: RefObject<HTMLElement | null>) {
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) {
            return;
        }
        const observer = new ResizeObserver(() =>
            setIsOverflowing(element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth)
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, [ref]);

    return isOverflowing;
}
