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
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
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
