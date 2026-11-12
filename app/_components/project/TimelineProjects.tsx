import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../../data/project-schema";
import styles from "./TimelineProjects.module.css";

export default function TimelineProjects({ projects }: { projects: Project[] }) {
    return (
        <ul role="list" className={styles.projects}>
            {projects.map((project) => {
                const content = (
                    <>
                        <Image src={project.card.image.src} alt="" width={96} height={60} />
                        <span>
                            <span className={styles.title}>{project.title}</span>
                            <span className={styles.line}>{project.card.line}</span>
                        </span>
                    </>
                );
                return (
                    <li key={project.slug}>
                        {project.page ? (
                            <Link href={`/portfolio/${project.slug}`} className={styles.card}>
                                {content}
                            </Link>
                        ) : (
                            <div className={styles.card}>{content}</div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
