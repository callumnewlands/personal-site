import type { Project } from "../../../data/project-schema";
import TextLink from "../ui/TextLink";
import WorkCard from "./WorkCard";
import styles from "./WorkGrid.module.css";
import { evenRows } from "../../../common/helpers";

const widths = [
    { className: styles.full, sizes: "(width < 48em) 100vw, 72.5rem" },
    { className: styles.half, sizes: "(width < 48em) 100vw, 50vw" },
    { className: styles.third, sizes: "(width < 48em) 100vw, (width < 64em) 50vw, 33vw" }
];

export default function WorkGrid({
    projects,
    featureFirst = false,
    link
}: {
    projects: Project[];
    featureFirst?: boolean;
    link?: { href: string; label: string };
}) {
    const rows = featureFirst ? [projects.slice(0, 1), ...evenRows(projects.slice(1), 3)] : evenRows(projects, 3);

    return (
        <div>
            <ul role="list" className={styles.grid}>
                {rows.flatMap((row) =>
                    row.map((project) => (
                        <li key={project.slug} className={widths[row.length - 1].className}>
                            <WorkCard project={project} wide={row.length === 1} sizes={widths[row.length - 1].sizes} />
                        </li>
                    ))
                )}
            </ul>
            {link && (
                <p className={styles.link}>
                    <TextLink href={link.href} arrow="forward">
                        {link.label}
                    </TextLink>
                </p>
            )}
        </div>
    );
}
