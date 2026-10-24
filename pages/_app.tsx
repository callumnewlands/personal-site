import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Alegreya_Sans_SC } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { absoluteUrl, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "../common/site";

const logoFont = Alegreya_Sans_SC({
    weight: ["500", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-logo"
});

const cloudflareAnalyticsToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Callum Newlands",
            jobTitle: "Freelance Full-Stack Developer",
            url: SITE_URL,
            image: absoluteUrl("/photos/callum-newlands.jpg"),
            sameAs: [SOCIAL_LINKS.LinkedIn, SOCIAL_LINKS.GitHub, SOCIAL_LINKS.Upwork],
            description: "Callum Newlands specializes in creating modern, responsive web and desktop applications.",
            alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Southampton"
            }
        },
        {
            "@type": "ProfessionalService",
            "@id": `${SITE_URL}/#service`,
            name: SITE_NAME,
            url: SITE_URL,
            image: absoluteUrl("/og/home.jpg"),
            logo: absoluteUrl("/android-chrome-384x384.png"),
            description: "Freelance full-stack web and desktop application development, UI/UX design and consultancy.",
            founder: { "@id": `${SITE_URL}/#person` },
            areaServed: "GB",
            serviceType: ["Web application development", "Desktop application development", "UI/UX design"],
            sameAs: [SOCIAL_LINKS.Upwork]
        }
    ]
};

function Application({ Component, pageProps }: AppProps) {
    return (
        <div className={"container " + logoFont.variable}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#07959a" />
                <meta name="author" content="Callum Newlands" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            {cloudflareAnalyticsToken && (
                <Script
                    src="https://static.cloudflareinsights.com/beacon.min.js"
                    strategy="afterInteractive"
                    data-cf-beacon={JSON.stringify({ token: cloudflareAnalyticsToken, spa: true })}
                />
            )}
            <NavBar />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default Application;
