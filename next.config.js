/** @type {import('next').NextConfig} */
const withImages = require('next-images')
module.exports = {
  images: {
    domains: ["images.unsplash.com", "ipfs.io/ipfs/", "ipfs.io"],
  },
  reactStrictMode: true,
  basePath: "",
};

module.exports = withImages()