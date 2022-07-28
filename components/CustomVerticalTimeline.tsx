import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";

import styles from "./CustomVerticalTimeline.module.scss";
import { UpOutlined } from "@ant-design/icons";

interface TimelineElementProps {
    date: string;
    title: string;
    location: string;
    description: string;
}

interface CustomVerticalTimelineProps {
    data: TimelineElementProps[];
}

export default function CustomVerticalTimeline({ data }: CustomVerticalTimelineProps) {
    return (
        <div className={styles.timeline_wrapper}>
            <UpOutlined className={styles.top_icon} />
            <VerticalTimeline lineColor={"#d6d6d6"} className={styles.custom_timeline}>
                {data?.map((d) => (
                    <VerticalTimelineElement date={d.date} key={d.title + d.date}>
                        <h3 className="vertical-timeline-element-title">{d.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{d.location}</h4>
                        <p>{d.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}
