/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");
const nextConfig = withContentlayer({
  images: {
    domains: ["res.cloudinary.com"],
  },
});

module.exports = nextConfig;
