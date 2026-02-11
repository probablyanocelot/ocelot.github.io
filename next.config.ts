import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Set base path if deploying to a subdirectory (not needed for username.github.io)
  // basePath: '',
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Optimize for production
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
