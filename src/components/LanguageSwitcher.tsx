"use client";

import { useEffect, useRef, useState } from "react";
import type { UiCopy } from "@/content/site-content";
import { locales, localeLabels, localeHome, type Locale } from "@/lib/i18n";
import { IconGlobe, IconChevron } from "./Icons";

interface Props {
  current: Locale;
  labels: UiCopy["language"];
}

export default function LanguageSwitcher({ current, labels }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDoc(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lang" ref={ref}>
      <button
        ref={btnRef}
        type="button"
        className="lang__btn"
        aria-expanded={open}
        aria-controls="language-menu"
        aria-label={labels.changeLabel}
        onClick={() => setOpen((value) => !value)}
      >
        <IconGlobe className="globe" />
        <span className="label">{localeLabels[current].native}</span>
        <IconChevron className="chev" />
      </button>

      {open && (
        <nav id="language-menu" className="lang__menu" aria-label={labels.menuLabel}>
          <ul>
            {locales.map((loc) => {
              const active = loc === current;
              return (
                <li key={loc}>
                  <a
                    className={`lang__opt${active ? " is-active" : ""}`}
                    href={localeHome[loc]}
                    hrefLang={loc}
                    lang={loc}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span>{localeLabels[loc].native}</span>
                    <span className="tag">{localeLabels[loc].flag}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}
