import type { Metadata, Viewport } from "next";
import "../globals.css";
import DocumentShell from "@/components/DocumentShell";
import { getContent } from "@/content/site-content";
import { rootMetadata, rootViewport } from "@/lib/root-metadata";

export const metadata: Metadata = rootMetadata;
export const viewport: Viewport = rootViewport;

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  const content = getContent("zh-CN");
  return (
    <DocumentShell lang="zh-CN" dir={content.dir} skipLinkLabel={content.ui.skipToContent}>
      {children}
    </DocumentShell>
  );
}
