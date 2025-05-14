import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { hostname: '*' },
      { hostname: 'localhost', protocol: "http" },
      { hostname: 'cdn.dummyjson.com', protocol: "https" }
    ],
  },
};

export default nextConfig;
