import type { Project } from "@/data/project-schema";
import TextLink from "@/app/_components/ui/TextLink";
import WorkCard from "./WorkCard";
import styles from "./WorkGrid.module.css";
import { evenRows } from "@/common/helpers";

const half = { className: styles.half, sizes: "(width < 48em) 100vw, 50vw" };
const third = { className: styles.third, sizes: "(width < 48em) 100vw, (width < 64em) 50vw, 33vw" };

export default function WorkGrid({
    projects,
    featureFirst = false,
    link
}: {
    projects: Project[];
    featureFirst?: boolean;
    link?: { href: string; label: string };
}) {
    const feature = featureFirst ? projects[0] : undefined;
    const rows = evenRows(featureFirst ? projects.slice(1) : projects, 3);

    return (
        <div>
            <ul role="list" className={styles.grid}>
                {feature && (
                    <li className={styles.full}>
                        <WorkCard project={feature} wide sizes="(width < 48em) 100vw, 72.5rem" />
                    </li>
                )}
                {rows.flatMap((row) => {
                    const width = row.length === 3 ? third : half;
                    return row.map((project) => (
                        <li key={project.slug} className={width.className}>
                            <WorkCard project={project} sizes={width.sizes} />
                        </li>
                    ));
                })}
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
