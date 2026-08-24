import type { Metadata } from "next";

export const rootMetadata: Metadata = {
  metadataBase: new URL("https://okcode.es"),
  title: {
    default: "OKCODE — Software Studio in Spain",
    template: "%s · OKCODE",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

