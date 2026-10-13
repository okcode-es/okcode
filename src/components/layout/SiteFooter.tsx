"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Copy, Check, MapPin, ArrowUp } from "lucide-react";
import type { Language, SiteContent } from "@/content/schema";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface SiteFooterProps {
  lang: Language;
  footer: SiteContent["footer"];
  nav?: SiteContent["nav"];
  className?: string;
}

const DEFAULT_LABELS: Record<
  Language,
  {
    services: string;
    projects: string;
    whyUs: string;
    pricing: string;
    faq: string;
    contact: string;
    contactHeading: string;
    navigationHeading: string;
    wechatLabel: string;
    whatsappLabel: string;
    copied: string;
    backToTop: string;
    poeticTagline: string;
  }
> = {
  es: {
    services: "Servicios",
    projects: "Casos de Éxito",
    whyUs: "Por qué nosotros",
    pricing: "Tarifas",
    faq: "Preguntas Frecuentes",
    contact: "Pedir Presupuesto",
    contactHeading: "Contacto Directo",
    navigationHeading: "Navegación",
    wechatLabel: "WeChat",
    whatsappLabel: "WhatsApp Directo",
    copied: "¡Copiado!",
    backToTop: "Volver arriba",
    poeticTagline: "Por el oficio de crear buen software · Madrid · 2026",
  },
  en: {
    services: "Services",
    projects: "Showcase",
    whyUs: "Why Us",
    pricing: "Pricing",
    faq: "FAQ",
    contact: "Get a Quote",
    contactHeading: "Direct Contact",
    navigationHeading: "Navigation",
    wechatLabel: "WeChat",
    whatsappLabel: "WhatsApp Direct",
    copied: "Copied!",
    backToTop: "Back to top",
    poeticTagline: "Por el oficio de crear buen software · Madrid · 2026",
  },
  zh: {
    services: "核心服务",
    projects: "精选案例",
    whyUs: "为什么选我们",
    pricing: "预算参考",
    faq: "常见问题",
    contact: "获取报价",
    contactHeading: "直接联系",
    navigationHeading: "快捷导航",
    wechatLabel: "微信咨询",
    whatsappLabel: "WhatsApp 在线咨询",
    copied: "已复制！",
    backToTop: "返回顶部",
    poeticTagline: "Por el oficio de crear buen software · Madrid · 2026",
  },
};

export function SiteFooter({ lang, footer, nav, className }: SiteFooterProps) {
  const [copiedWeChat, setCopiedWeChat] = useState(false);
  const labels = DEFAULT_LABELS[lang] || DEFAULT_LABELS.es;


  const handleCopyWeChat = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(SITE_CONFIG.wechatId);
        setCopiedWeChat(true);
        setTimeout(() => setCopiedWeChat(false), 2000);
      }
    } catch {
      // Fallback: prompt or quiet failure
      setCopiedWeChat(true);
      setTimeout(() => setCopiedWeChat(false), 2000);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { href: "#servicios", label: nav?.services || labels.services },
    { href: "#proyectos", label: nav?.projects || labels.projects },
    { href: "#ventajas", label: nav?.whyUs || labels.whyUs },
    { href: "#precios", label: nav?.pricing || labels.pricing },
    { href: "#faq", label: nav?.faq || labels.faq },
    { href: "#contacto", label: nav?.contactCta || labels.contact },
  ];

  const homeHref = lang === "es" ? "/" : `/${lang}`;

  return (
    <footer
      className={cn(
        "border-t border-slate-200/80 bg-slate-50/70 text-slate-700 transition-colors",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand, Status Badge & Editorial Signoff (Span 5 on MD) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Logo & Name */}
              <Link
                href={homeHref}
                className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-md"
                aria-label="OKCODE - Inicio"
              >
                <Image
                  src="/ok-logo-mark.webp"
                  alt="OKCODE Logo"
                  width={28}
                  height={34}
                  className="h-7 w-auto object-contain rounded-xs transition-transform duration-200 group-hover:scale-105"
                />
                <span className="font-mono font-bold tracking-tight text-slate-900 text-lg">
                  OKCODE
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-normal">
                  .es
                </span>
              </Link>

              {/* Editorial Signoff */}
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
                {footer.editorialSignoff}
              </p>

              {/* Poetic Editorial Tagline */}
              <p className="text-xs font-mono text-slate-400 tracking-wide">
                {labels.poeticTagline}
              </p>

            </div>

            {/* Studio location badge */}
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (Span 3 on MD) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              {labels.navigationHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-slate-950 transition-colors duration-150 inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Links (Span 4 on MD) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              {labels.contactHeading}
            </h3>
            <ul className="space-y-3 text-sm">
              {/* Email */}
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors group font-mono text-xs sm:text-sm"
                >
                  <Mail
                    className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors shrink-0"
                    aria-hidden="true"
                  />
                  <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-slate-900">
                    {SITE_CONFIG.email}
                  </span>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-950 transition-colors group font-mono text-xs sm:text-sm"
                >
                  <MessageCircle
                    className="w-4 h-4 text-emerald-600 group-hover:text-emerald-700 transition-colors shrink-0"
                    aria-hidden="true"
                  />
                  <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-slate-900 font-sans">
                    {labels.whatsappLabel}
                  </span>
                </a>
              </li>

              {/* WeChat with 1-click copy */}
              <li>
                <div className="inline-flex items-center gap-2 text-slate-700 font-mono text-xs sm:text-sm">
                  <span className="text-slate-500 font-sans text-xs">
                    {labels.wechatLabel}:
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyWeChat}
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 cursor-pointer"
                    title="Click para copiar ID de WeChat"
                    aria-label={`Copiar ID de WeChat: ${SITE_CONFIG.wechatId}`}
                  >
                    <span>{SITE_CONFIG.wechatId}</span>
                    {copiedWeChat ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    )}
                  </button>
                  {copiedWeChat && (
                    <span className="text-xs font-mono text-emerald-600 animate-in fade-in">
                      {labels.copied}
                    </span>
                  )}
                  <a
                    href="#contacto"
                    className="text-xs text-slate-400 hover:text-slate-600 underline ml-1"
                    title="Ver código QR en contacto"
                  >
                    QR
                  </a>
                </div>
              </li>
            </ul>

            {/* Language Switch Links in Footer */}
            <div className="pt-2">
              <div className="inline-flex items-center text-xs font-mono text-slate-400">
                <span className="mr-2 text-slate-400">i18n:</span>
                <Link
                  href="/"
                  className={cn(
                    "px-1.5 py-0.5 rounded transition-colors",
                    lang === "es"
                      ? "text-slate-900 font-bold underline underline-offset-4"
                      : "hover:text-slate-900"
                  )}
                >
                  Español
                </Link>
                <span className="text-slate-300 mx-1">·</span>
                <Link
                  href="/en"
                  className={cn(
                    "px-1.5 py-0.5 rounded transition-colors",
                    lang === "en"
                      ? "text-slate-900 font-bold underline underline-offset-4"
                      : "hover:text-slate-900"
                  )}
                >
                  English
                </Link>
                <span className="text-slate-300 mx-1">·</span>
                <Link
                  href="/zh"
                  className={cn(
                    "px-1.5 py-0.5 rounded transition-colors",
                    lang === "zh"
                      ? "text-slate-900 font-bold underline underline-offset-4"
                      : "hover:text-slate-900"
                  )}
                >
                  中文
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar: Copyright & Back to Top */}
        <div className="border-t border-slate-200/60 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <p>{footer.rights}</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-block text-slate-400">
              {SITE_CONFIG.domain}
            </span>
            <a
              href="#top"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors font-medium group"
              aria-label={labels.backToTop}
            >
              <span>{labels.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
