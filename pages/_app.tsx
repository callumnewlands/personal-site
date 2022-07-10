import "../styles/globals.scss";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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
            </Head>
            <NavBar />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}

export default Application;
