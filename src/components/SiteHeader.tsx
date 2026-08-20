"use client";

import { useEffect, useRef, useState } from "react";
import type { SiteContent } from "@/content/site-content";
import { localeHome, type Locale } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { BrandMark, IconArrow } from "./Icons";

interface Props {
  content: SiteContent;
  current: Locale;
}

export default function SiteHeader({ content, current }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const home = localeHome[current];
  const navItems = content.nav.filter(
    (item) => item.anchor !== "testimonials" || content.visibility.testimonials
  );

  useEffect(() => {
    if (!menuOpen) return;

    firstMenuLinkRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href={home} aria-label={content.ui.header.homeLabel}>
          <BrandMark className="brand__mark" />
          <span>OKCODE</span>
        </a>

        <nav className="nav" aria-label={content.ui.header.primaryNavLabel}>
          <ul className="nav__links">
            {navItems.map((item) => (
              <li key={item.anchor}>
                <a className="nav__link" href={`#${item.anchor}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="header-actions">
            <LanguageSwitcher current={current} labels={content.ui.language} />
            <a className="btn btn--primary" href="#contact">
              {content.ctaLabel}
              <IconArrow className="arrow" width={16} height={16} />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              className="menu-toggle"
              aria-label={content.ui.header.toggleMenuLabel}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span />
            </button>
          </div>
        </nav>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label={content.ui.header.primaryNavLabel}
        hidden={!menuOpen}
      >
        <div className="mobile-nav__inner">
          {content.nav.map((item, index) => (
            <a
              key={item.anchor}
              ref={index === 0 ? firstMenuLinkRef : undefined}
              className="mobile-nav__link"
              href={`#${item.anchor}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn btn--primary"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            {content.ctaLabel}
            <IconArrow className="arrow" width={16} height={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
