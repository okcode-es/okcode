import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  // GitHub Pages static hosting: no server runtime.
  output: "export",
  // Pretty, shareable URLs that work without a host-side rewrite engine.
  trailingSlash: true,
  // We ship only static assets, so disable the optimizer (which needs a server).
  images: {
    unoptimized: true,
  },
  // Custom domain okcode.es is served via public/CNAME; no basePath needed.
  reactStrictMode: true,
};

export default nextConfig;
