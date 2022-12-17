/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['en', 'no'],
        defaultLocale: 'no',
        localeDetection: false,
    },
    trailingSlash: true,
};

module.exports = nextConfig;
