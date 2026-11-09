import { pageMetadata } from "../../../common/metadata";
import { TITLE_SUFFIX } from "../../../data/pages";

export const metadata = pageMetadata({
    path: "/shell",
    title: `App Router shell | ${TITLE_SUFFIX}`,
    description: "Checks the App Router root layout and metadata."
});

export default function Shell() {
    return <h1>App Router shell</h1>;
}
