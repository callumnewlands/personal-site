import type { ReactNode } from "react";
import { useId } from "react";
import styles from "./Layout.module.css";
import SectionHeading from "./SectionHeading";
import Treeline from "../shell/Treeline";
import { cx } from "../../../common/helpers";

interface ContainerProps {
    narrow?: boolean;
    className?: string;
    children: ReactNode;
}

export function Container({ narrow = false, className, children }: ContainerProps) {
    return <div className={cx(styles.container, narrow && styles.narrow, className)}>{children}</div>;
}

type SectionProps = ({ band?: boolean; treeline?: never } | { band: true; treeline: boolean }) & {
    narrow?: boolean;
    id?: string;
    heading?: ReactNode;
    intro?: ReactNode;
    children?: ReactNode;
};

export function Section({
    band = false,
    treeline = false,
    narrow = false,
    id,
    heading,
    intro,
    children
}: SectionProps) {
    const headingId = useId();
    return (
        <>
            {treeline && <Treeline variant="band-top" />}
            <section
                id={id}
                className={cx(styles.section, band && styles.band)}
                aria-labelledby={heading ? headingId : undefined}
            >
                <Container narrow={narrow}>
                    {heading && (
                        <SectionHeading id={headingId} intro={intro}>
                            {heading}
                        </SectionHeading>
                    )}
                    {children && <div className={styles.blocks}>{children}</div>}
                </Container>
            </section>
        </>
    );
}
