import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Alegreya_Sans_SC } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { structuredData } from "../common/structured-data";
import { cx } from "../common/helpers";

const logoFont = Alegreya_Sans_SC({
    weight: ["500", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-logo"
});

const cloudflareAnalyticsToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

function Application({ Component, pageProps }: AppProps) {
    return (
        <div className={cx("container", logoFont.variable)}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#067a7e" />
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
