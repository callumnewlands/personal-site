import type { Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { siteMetadata } from "../common/metadata";
import { structuredData } from "../common/structured-data";

export const metadata = siteMetadata;

const cloudflareAnalyticsToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

export const viewport: Viewport = {
    themeColor: "#07959a"
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en-GB">
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
