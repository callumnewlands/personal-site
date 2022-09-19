import { DependencyList, RefObject, useEffect, useState } from "react";

export const tagColours = [
    "purple",
    "volcano",
    "cyan",
    "lime",
    "magenta",
    "gold",
    "blue",
    "red",
    "geekblue",
    "orange",
    "green",
    "yellow"
];

export function useOverflowing(ref: RefObject<HTMLElement>, extraDeps: DependencyList = []) {
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const element = ref?.current;
        if (!element) {
            return;
        }
        const hasOverflowingChildren =
            element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
        setIsOverflowing(hasOverflowingChildren);
    }, extraDeps);

    return isOverflowing;
}