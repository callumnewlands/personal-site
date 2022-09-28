import "../styles/antd.less";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Script from "next/script";

function Application({ Component, pageProps }: AppProps) {
    return (
        <div className="container">
            <Head>
                <title>Callum Newlands -- Freelance Web and Desktop Application Developer</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#07959a" />
                <meta name="msapplication-TileColor" content="#00aba9" />
                <meta name="theme-color" content="#07959a" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@500;700;800&display=swap"
                />
            </Head>
            {/*<!-- Google tag (gtag.js) -->*/}
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9Y3PX0QM1E" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-9Y3PX0QM1E');
                `}
            </Script>
            <NavBar />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default Application;
