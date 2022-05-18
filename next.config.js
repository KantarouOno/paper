/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  // some configuration
  assetPrefix: process.env.NODE_ENV === "production" ? "/project_name" : ""
  // another configuration
};
