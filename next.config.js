// Netlify only adds noindex to previews, not the latest deploy of each branch
const noindex = ["branch-deploy", "deploy-preview"].includes(process.env.CONTEXT);

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    // Demo routes are app/**/page.dev.tsx files, so only next dev builds them
    pageExtensions: ["tsx", "ts", "jsx", "js", ...(process.env.NODE_ENV === "development" ? ["dev.tsx"] : [])],
    images: {
        qualities: [75, 80]
    },
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    ...(noindex ? [{ key: "X-Robots-Tag", value: "noindex" }] : [])
                ]
            }
        ];
    }
};
