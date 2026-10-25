import Head from "next/head";
import { absoluteUrl, ogImagePath, SITE_NAME } from "../common/site";

interface SeoProps {
    title: string;
    description: string;
    path: string;
    type?: "website" | "article" | "profile";
}

export default function Seo({ title, description, path, type = "website" }: SeoProps) {
    const url = absoluteUrl(path);
    const image = absoluteUrl(ogImagePath(path));

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="en_GB" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
}
