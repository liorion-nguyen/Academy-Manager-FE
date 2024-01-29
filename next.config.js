/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/login',
                destination: '/Login',
            }
        ]
    },
    env: {
        DOMAIN: process.env.DOMAIN,
      },
}

module.exports = nextConfig
