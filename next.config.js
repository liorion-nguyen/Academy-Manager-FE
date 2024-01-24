/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/login',
                destination: '/Login',
            }
        ]
    }
}

module.exports = nextConfig
