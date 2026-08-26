import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    // stray lockfile/node_modules in the home folder confuse auto-detection
    root: process.cwd(),
  },
};

export default nextConfig;