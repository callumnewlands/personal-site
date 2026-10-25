/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
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
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
                ]
            }
        ];
    }
};
