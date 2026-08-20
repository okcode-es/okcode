import type { Metadata } from "next";

export const rootMetadata: Metadata = {
  metadataBase: new URL("https://okcode.es"),
  title: {
    default: "OKCODE — Software Studio in Spain",
    template: "%s · OKCODE",
  },
  icons: { icon: "/favicon.svg" },
};
