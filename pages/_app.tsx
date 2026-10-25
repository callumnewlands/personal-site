import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Alegreya_Sans_SC } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const logoFont = Alegreya_Sans_SC({
    weight: ["500", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-logo"
});

const cloudflareAnalyticsToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

function Application({ Component, pageProps }: AppProps) {

    const personLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Callum Newlands",
        "jobTitle": "Freelance Full-Stack Developer",
        "url": "https://cnewlands.dev",
        "sameAs": [
            "https://www.linkedin.com/in/callum-newlands-80ab28174",
            "https://github.com/callumnewlands"
        ],
        "description": "Callum Newlands specializes in creating modern, responsive web and desktop applications.",
        "image": "https://cnewlands.dev/logo-vector-green.svg"
    }

    return (
        <div className={"container " + logoFont.variable}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Callum Newlands | Freelance Full-Stack Web App Developer</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#07959a" />
                <meta name="author" content="Callum Newlands" />
                <meta name="description"
                      content="Callum Newlands is a freelance full-stack software developer specializing in modern web application development. Discover projects, services, and contact information." />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}/>
                <meta property="og:site_name" content="Callum Newlands · Freelance Developer" />
                <meta property="og:title" content="Callum Newlands | Freelance Full-Stack Web Developer" />
                <meta property="og:description"
                      content="Freelance full-stack developer specializing in modern web apps." />
                <meta property="og:image" content="https://cnewlands.dev/logo-vector-green.svg" />
                <meta property="og:url" content="https://cnewlands.dev" />
                <meta property="og:type" content="website" />
                <meta name="keywords"
                      content="freelance web developer, full-stack developer, software engineer, web applications, desktop applications, Callum Newlands, portfolio" />
                <meta name="robots" content="index, follow" />
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
