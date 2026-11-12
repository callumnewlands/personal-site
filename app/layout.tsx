import "../styles/base.css";
import type { Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { siteMetadata } from "../common/metadata";
import { structuredData } from "../common/structured-data";
import { colorPrimary } from "../styles/tokens";
import Footer from "./_components/shell/Footer";
import Nav from "./_components/shell/Nav";
import { LogoSymbol } from "./_components/shell/Logo";
import SkipLink from "./_components/shell/SkipLink";
import { fontVariables } from "./fonts";

export const metadata = siteMetadata;

const cloudflareAnalyticsToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

export const viewport: Viewport = {
    themeColor: colorPrimary
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en-GB" className={fontVariables}>
            <body>
                <LogoSymbol />
                <SkipLink />
                <Nav />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
                {cloudflareAnalyticsToken && (
                    <Script
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                        strategy="afterInteractive"
                        data-cf-beacon={JSON.stringify({ token: cloudflareAnalyticsToken, spa: true })}
                    />
                )}
                <main id="main" tabIndex={-1}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
