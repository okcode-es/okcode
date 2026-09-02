import type { ReactNode } from "react";
import MotionReady from "./MotionReady";

interface Props {
  children: ReactNode;
  lang: string;
  dir: "ltr" | "rtl";
  skipLinkLabel: string;
}

export default function DocumentShell({ children, lang, dir, skipLinkLabel }: Props) {
  return (
    <html lang={lang} dir={dir}>
      <head>
        {lang.startsWith("zh") && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;800&display=swap"
              rel="stylesheet"
            />
          </>
        )}
      </head>
      <body>
        <a className="skip-link" href="#main">
          {skipLinkLabel}
        </a>
        <MotionReady />
        {children}
      </body>
    </html>
  );
}
