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
