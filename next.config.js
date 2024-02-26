/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/login',
                destination: '/Login',
            },{
                source: '/blog/:path*',
                destination: '/blog', // The :path parameter isn't used here so will be automatically passed in the query
              },
        ]
    },
    env: {
        DOMAIN: process.env.DOMAIN,
      },
}

module.exports = nextConfig
