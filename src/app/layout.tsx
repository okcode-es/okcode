import type { Metadata } from "next";
import "@/app/globals.css";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata("es");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased font-sans selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
