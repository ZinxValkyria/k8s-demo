/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: "standalone",
    assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
    distDir: "build",
}

module.exports = nextConfig
