import localFont from "next/font/local";
import { cx } from "../../common/helpers";

// Named after the font family tokens so these self-hosted files take their place
const headingFont = localFont({
    src: "./bricolage-grotesque-latin-wght-normal.woff2",
    weight: "200 800",
    fallback: ["sans-serif"],
    variable: "--font-family-heading"
});
const bodyFont = localFont({
    src: "./commissioner-latin-wght-normal.woff2",
    weight: "100 900",
    fallback: ["system-ui", "sans-serif"],
    variable: "--font-family-body"
});
const codeFont = localFont({
    src: "./red-hat-mono-latin-500-normal.woff2",
    weight: "500",
    fallback: ["ui-monospace", "monospace"],
    adjustFontFallback: false,
    preload: false,
    variable: "--font-family-code"
});

export const fontVariables = cx(headingFont.variable, bodyFont.variable, codeFont.variable);
