"use client";

import type { PointerEvent, ReactNode } from "react";
import { createContext, use, useState } from "react";
import type { Marker } from "@/data/project-schema";
import styles from "./NumberedScreenshot.module.css";
import { cx } from "@/common/helpers";

const ActiveMarker = createContext<number | undefined>(undefined);

export function MarkerHighlight({ children }: { children: ReactNode }) {
    const [active, setActive] = useState<number>();

    function highlight(event: PointerEvent) {
        const point = (event.target as Element).closest<HTMLElement>("[data-point]");
        setActive(point ? Number(point.dataset.point) : undefined);
    }

    return (
        <figure onPointerOver={highlight} onPointerLeave={() => setActive(undefined)}>
            <ActiveMarker value={active}>{children}</ActiveMarker>
        </figure>
    );
}

export function Markers({ markers }: { markers: Marker[] }) {
    const active = use(ActiveMarker);
    return markers.map((marker, index) => (
        <span
            key={marker.text}
            className={cx(styles.marker, active === index && styles.active)}
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            data-point={index}
            aria-hidden="true"
        >
            {index + 1}
        </span>
    ));
}

export function Legend({ markers }: { markers: Marker[] }) {
    const active = use(ActiveMarker);
    return (
        <ol role="list" className={styles.legend}>
            {markers.map((marker, index) => (
                <li key={marker.text} className={cx(active === index && styles.active)} data-point={index}>
                    <span className={styles.number} aria-hidden="true">
                        {index + 1}
                    </span>
                    {marker.text}
                </li>
            ))}
        </ol>
    );
}
