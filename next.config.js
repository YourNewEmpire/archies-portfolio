/** @type {import('next').NextConfig} */
const withImages = require("next-images");
module.exports = {
  images: {
    domains: ["images.unsplash.com", "ipfs.io/ipfs/", "ipfs.io"],
    formats: ["image/webp"],
  },
  reactStrictMode: true,
};

module.exports = withImages();
