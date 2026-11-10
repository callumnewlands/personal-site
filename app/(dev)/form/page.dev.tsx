import { pageMetadata } from "../../../common/metadata";
import { TITLE_SUFFIX } from "../../../data/pages";
import EnquiryForm, { EnquirySent } from "../../_components/form/EnquiryForm";
import { Section } from "../../_components/layout/Layout";
import PageHeader from "../../_components/layout/PageHeader";

export const metadata = pageMetadata({
    path: "/form",
    title: `Enquiry form | ${TITLE_SUFFIX}`,
    description: "The enquiry form used on Services and Contact."
});

export default function Form() {
    return (
        <>
            <Section>
                <PageHeader title="Enquiry form" lead="The form on Services and Contact, with every state." />
            </Section>
            <Section band narrow>
                <EnquiryForm />
            </Section>
            <Section heading="Once it&rsquo;s sent" narrow>
                <EnquirySent />
            </Section>
        </>
    );
}
