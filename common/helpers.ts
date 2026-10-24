import { RefObject, useEffect, useState } from "react";

export function cx(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

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
