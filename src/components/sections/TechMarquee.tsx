"use client";

import React from "react";
import type { Language } from "@/content/schema";
import { cn } from "@/lib/utils";

export interface TechMarqueeProps {
  lang: Language;
  className?: string;
}

const MARQUEE_ITEMS: Record<
  Language,
  Array<{ name: string; category: "tech" | "standard" | "guarantee" }>
> = {
  es: [
    { name: "Next.js 15 (App Router)", category: "tech" },
    { name: "React 19", category: "tech" },
    { name: "TypeScript 5 (Strict)", category: "tech" },
    { name: "React Native (iOS & Android)", category: "tech" },
    { name: "Tailwind CSS v4", category: "tech" },
    { name: "Auditoría Lighthouse 100/100", category: "standard" },
    { name: "Entrega desde 2 Semanas", category: "guarantee" },
    { name: "PostgreSQL & Supabase", category: "tech" },
    { name: "Stripe & Pasarelas Multidivisa", category: "tech" },
    { name: "100% Propiedad del Código", category: "guarantee" },
    { name: "Publicación en App Store y Google Play", category: "standard" },
    { name: "Presupuesto Cerrado Sin Sobrecostes", category: "guarantee" },
    { name: "Garantía de 30 a 60 Días", category: "guarantee" },
  ],
  en: [
    { name: "Next.js 15 (App Router)", category: "tech" },
    { name: "React 19", category: "tech" },
    { name: "TypeScript 5 (Strict)", category: "tech" },
    { name: "React Native (iOS & Android)", category: "tech" },
    { name: "Tailwind CSS v4", category: "tech" },
    { name: "Google Lighthouse 100/100", category: "standard" },
    { name: "Delivery from 2 Weeks", category: "guarantee" },
    { name: "PostgreSQL & Supabase", category: "tech" },
    { name: "Stripe & Multi-currency Checkout", category: "tech" },
    { name: "100% Source Code Ownership", category: "guarantee" },
    { name: "App Store & Google Play Publishing", category: "standard" },
    { name: "Fixed-Price Guarantee", category: "guarantee" },
    { name: "30 to 60 Days Warranty", category: "guarantee" },
  ],
  zh: [
    { name: "Next.js 15 (App Router)", category: "tech" },
    { name: "React 19", category: "tech" },
    { name: "TypeScript 5 (严格类型)", category: "tech" },
    { name: "React Native (双端原生)", category: "tech" },
    { name: "Tailwind CSS v4", category: "tech" },
    { name: "Google Lighthouse 满分体验", category: "standard" },
    { name: "2 周起敏捷交付", category: "guarantee" },
    { name: "PostgreSQL & Supabase", category: "tech" },
    { name: "Stripe / 多货币结算集成", category: "tech" },
    { name: "100% 源码产权交付", category: "guarantee" },
    { name: "协助上架苹果与谷歌商店", category: "standard" },
    { name: "确定功能一口价无套路", category: "guarantee" },
    { name: "30-60 天免费质保", category: "guarantee" },
  ],
};

export function TechMarquee({ lang, className }: TechMarqueeProps) {
  const items = MARQUEE_ITEMS[lang] ?? MARQUEE_ITEMS.es;

  // Duplicate items array once to ensure seamless infinite looping with CSS translateX(-50%)
  const doubleItems = [...items, ...items];

  return (
    <section
      aria-label="Tecnologías y Estándares de Ingeniería"
      className={cn(
        "relative overflow-hidden border-y border-slate-200/80 bg-slate-50/70 py-3.5 sm:py-4 select-none",
        className
      )}
    >
      {/* Subtle fade masks at edges for fluid entry/exit */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="animate-marquee flex items-center gap-3 sm:gap-4 will-change-transform">
        {doubleItems.map((item, index) => {
          const isGuarantee = item.category === "guarantee";
          const isStandard = item.category === "standard";

          return (
            <div
              key={`${item.name}-${index}`}
              className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-150 shrink-0",
                isGuarantee
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80"
                  : isStandard
                  ? "bg-blue-50 text-blue-800 border border-blue-200/80"
                  : "bg-white text-slate-800 border border-slate-200/90 shadow-2xs"
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  isGuarantee
                    ? "bg-emerald-500"
                    : isStandard
                    ? "bg-blue-600"
                    : "bg-slate-400"
                )}
                aria-hidden="true"
              />
              <span className="tracking-tight whitespace-nowrap">{item.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
