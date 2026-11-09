import "../styles/base.css";
import type { Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import Script from "next/script";
import { siteMetadata } from "../common/metadata";
import { structuredData } from "../common/structured-data";
import { cx } from "../common/helpers";

// Named after the font family tokens so these self-hosted files take their place
const headingFont = localFont({
    src: "./fonts/bricolage-grotesque-latin-wght-normal.woff2",
    weight: "200 800",
    fallback: ["sans-serif"],
    variable: "--font-family-heading"
});
const bodyFont = localFont({
    src: "./fonts/commissioner-latin-wght-normal.woff2",
    weight: "100 900",
    fallback: ["system-ui", "sans-serif"],
    variable: "--font-family-body"
});
const codeFont = localFont({
    src: "./fonts/red-hat-mono-latin-500-normal.woff2",
    weight: "500",
    fallback: ["ui-monospace", "monospace"],
    adjustFontFallback: false,
    preload: false,
    variable: "--font-family-code"
});

export const metadata = siteMetadata;

const cloudflareAnalyticsToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

export const viewport: Viewport = {
    themeColor: "#067a7e"
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en-GB" className={cx(headingFont.variable, bodyFont.variable, codeFont.variable)}>
            <body>
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
                <main id="main">{children}</main>
            </body>
        </html>
    );
}
