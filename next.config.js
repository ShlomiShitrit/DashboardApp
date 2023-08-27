/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://api.example.com/:path*",
            },
        ];
    },
};

module.exports = nextConfig;
