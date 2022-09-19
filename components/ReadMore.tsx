import { ReactNode, useRef, useState } from "react";
import { useOverflowing } from "../common/helpers";

interface ReadMoreProps {
    maxHeight?: string;
    children: ReactNode | ReactNode[];
}

export function ReadMore({ maxHeight = "11.5rem", children }: ReadMoreProps) {
    const [showMore, setShowMore] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isOverflowing = useOverflowing(ref, [showMore]);

    return (
        <>
            <div
                ref={ref}
                className={"read_more"}
                style={{ ...(!showMore ? { maxHeight } : {}) }}
            >
                {children}
            </div>
            {isOverflowing && (
                <span className={"read_more_button"} onClick={() => setShowMore(true)}>
                    Read More...
                </span>
            )}
        </>
    );
}
