// setConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd-mobile'],
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
}
module.exports = nextConfig
