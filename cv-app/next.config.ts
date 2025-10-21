import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: '../out',
  images: {
    unoptimized: true
  },
  // For GitHub Pages deployment as a project page (e.g., username.github.io/repo-name)
  // Remove or comment out basePath if deploying to a custom domain or user/org page
  basePath: process.env.GITHUB_ACTIONS ? '/CV-Next' : '',
};

export default nextConfig;
