/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

const { withContentlayer } = require("next-contentlayer");
 
module.exports = withContentlayer({
  reactStrictMode: true,
});