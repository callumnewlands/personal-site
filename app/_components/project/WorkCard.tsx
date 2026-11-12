import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/project-schema";
import { ArrowIcon } from "@/app/_components/ui/icons";
import Tags from "@/app/_components/ui/Tags";
import styles from "./WorkCard.module.css";
import { cx } from "@/common/helpers";

export default function WorkCard({
    project,
    wide = false,
    sizes = "(width < 48em) 100vw, 50vw"
}: {
    project: Project;
    wide?: boolean;
    sizes?: string;
}) {
    const { card } = project;
    const tags = wide ? card.tags : card.tags.slice(0, 2);
    return (
        <div className={cx(styles.card, wide && styles.wide)}>
            <div className={styles.image}>
                <Image src={card.image.src} alt={card.image.alt} fill sizes={sizes} />
                {tags.length > 0 && <Tags tags={tags} variant="overlay" />}
            </div>
            <div className={styles.text}>
                <h3 className={styles.title}>
                    {project.page ? <Link href={`/portfolio/${project.slug}`}>{project.title}</Link> : project.title}
                    {project.page && <ArrowIcon />}
                </h3>
                <p className={styles.line}>{card.line}</p>
                <p className="caption">{card.role}</p>
            </div>
        </div>
    );
}
