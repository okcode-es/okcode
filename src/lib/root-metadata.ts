import type { Metadata, Viewport } from "next";

export const rootViewport: Viewport = {
  themeColor: "#181d2c",
  width: "device-width",
  initialScale: 1,
};

export const rootMetadata: Metadata = {
  metadataBase: new URL("https://okcode.es"),
  title: {
    default: "OKCODE — Software Studio in Spain",
    template: "%s · OKCODE",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};
