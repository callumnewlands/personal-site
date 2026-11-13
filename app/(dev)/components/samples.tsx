import SectionHeading from "@/app/_components/layout/SectionHeading";
import { cx } from "@/common/helpers";

export function samplePanel(name: string, fill?: "primary" | "accent" | "pine") {
    return (
        <div key={name} className={cx("panel", fill && `panel-${fill}`)}>
            <SectionHeading
                level={3}
                size="chapter"
                intro="For when a team needs this sort of help, in a sentence or two."
            >
                {name}
            </SectionHeading>
            <ul role="list" className="ruled-list">
                <li>Something that's included</li>
                <li>Something else that's included</li>
            </ul>
        </div>
    );
}
