"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import type { Language, SiteContent } from "@/content/schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface SiteHeaderProps {
  lang: Language;
  nav: SiteContent["nav"];
  className?: string;
}

interface LanguageOption {
  code: Language;
  label: string;
  href: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "es", label: "ES", href: "/" },
  { code: "en", label: "EN", href: "/en" },
  { code: "zh", label: "ZH", href: "/zh" },
];

export function SiteHeader({ lang, nav, className }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const homeHref = lang === "es" ? "/" : `/${lang}`;

  const navLinks = [
    { href: "#servicios", label: nav.services },
    { href: "#proyectos", label: nav.projects },
    { href: "#ventajas", label: nav.whyUs },
    { href: "#precios", label: nav.pricing },
    { href: "#faq", label: nav.faq },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 w-full z-40 backdrop-blur-md bg-white/80 border-b border-slate-200/60 transition-colors",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link
              href={homeHref}
              className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-md"
              aria-label="OKCODE - Inicio"
            >
              <Image
                src="/ok-logo-mark.webp"
                alt="OKCODE Logo"
                width={32}
                height={38}
                className="h-8 w-auto object-contain rounded-xs transition-transform duration-200 group-hover:scale-105"
                priority
              />
              <span className="font-mono font-bold tracking-tight text-slate-900 text-lg sm:text-xl">
                OKCODE
              </span>
              <span className="text-[11px] font-mono text-slate-400 font-normal hidden sm:inline-block -ml-1">
                .es
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right: Language Switcher & Primary CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div
              className="inline-flex items-center text-xs font-mono tracking-wider text-slate-400 bg-slate-100/80 p-1 rounded-lg border border-slate-200/60"
              role="navigation"
              aria-label="Selector de idioma"
            >
              {LANGUAGES.map((item, idx) => {
                const isActive = lang === item.code;
                return (
                  <React.Fragment key={item.code}>
                    {idx > 0 && (
                      <span className="text-slate-300 mx-1 select-none text-[10px]">
                        ·
                      </span>
                    )}
                    <Link
                      href={item.href}
                      className={cn(
                        "px-2 py-0.5 rounded transition-all duration-150 font-medium",
                        isActive
                          ? "bg-white text-slate-900 font-bold shadow-2xs"
                          : "text-slate-500 hover:text-slate-900"
                      )}
                      aria-current={isActive ? "page" : undefined}
                      lang={item.code}
                    >
                      {item.label}
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>

            {/* Primary CTA */}
            <Button
              href="#contacto"
              variant="primary"
              size="sm"
              className="text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-xs"
            >
              {nav.contactCta}
            </Button>
          </div>

          {/* Mobile Right Controls: Compact Language Switcher + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Compact Language Switcher on mobile header */}
            <div
              className="inline-flex items-center text-[11px] font-mono tracking-wide text-slate-400 bg-slate-100/80 p-0.5 rounded-md border border-slate-200/60 mr-1"
              role="navigation"
              aria-label="Selector de idioma rápido"
            >
              {LANGUAGES.map((item, idx) => {
                const isActive = lang === item.code;
                return (
                  <React.Fragment key={item.code}>
                    {idx > 0 && (
                      <span className="text-slate-300 mx-0.5 select-none text-[9px]">
                        ·
                      </span>
                    )}
                    <Link
                      href={item.href}
                      className={cn(
                        "px-1.5 py-0.5 rounded transition-colors font-medium",
                        isActive
                          ? "bg-white text-slate-900 font-bold shadow-2xs"
                          : "text-slate-500 hover:text-slate-900"
                      )}
                      aria-current={isActive ? "page" : undefined}
                      lang={item.code}
                    >
                      {item.label}
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel & Backdrop */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-slate-900/20 backdrop-blur-xs z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-navigation-drawer"
            className="relative z-40 md:hidden border-b border-slate-200/80 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto space-y-3">
              <nav className="flex flex-col space-y-1" aria-label="Navegación móvil">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 font-medium text-base transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-slate-100">
                <Button
                  href="#contacto"
                  variant="primary"
                  size="md"
                  className="w-full justify-center text-sm font-semibold py-2.5 rounded-lg shadow-xs"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {nav.contactCta}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
