import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits a plain HTML/CSS/JS site in ./out
  // that can be hosted on GitHub Pages, Cloudflare Pages, Netlify — anywhere.
  output: "export",
  // next/image has no server optimizer in a static export
  images: { unoptimized: true },
  // Every route becomes folder/index.html → works on ALL static hosts
  // (no reliance on a host resolving /privacy to privacy.html)
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
