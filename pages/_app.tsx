import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Application({ Component, pageProps }: AppProps) {
    return (
        <div className="container">
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="Welcome to my app!" />
                <Component {...pageProps} />
            </main>

            <Footer />
        </div>
    );
}

export default Application;
