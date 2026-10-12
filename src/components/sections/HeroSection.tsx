import React from "react";
import {
  Zap,
  ShieldCheck,
  PackageCheck,
  Smartphone,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import type { Language, SiteContent } from "@/content/schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface HeroSectionProps {
  hero: SiteContent["hero"];
  lang: Language;
  className?: string;
}

function getHeroIcon(iconName: string) {
  switch (iconName) {
    case "Zap":
      return Zap;
    case "ShieldCheck":
      return ShieldCheck;
    case "PackageCheck":
      return PackageCheck;
    case "Smartphone":
      return Smartphone;
    default:
      return Sparkles;
  }
}

export function HeroSection({ hero, lang, className }: HeroSectionProps) {
  const titleLines = hero.title ? hero.title.split("\n") : [""];
  const primaryHeadline = titleLines[0];
  const secondaryHeadline = titleLines.length > 1 ? titleLines.slice(1).join(" ") : null;

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-12 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 bg-white",
        className
      )}
    >
      {/* Subtle architectural grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow badge with studio availability dot */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200/90 bg-white/95 shadow-2xs text-xs sm:text-sm font-medium text-slate-700 backdrop-blur-xs transition-colors hover:border-slate-300">
            <span className="inline-flex rounded-full h-2 w-2 bg-emerald-500 shrink-0" />
            <span className="tracking-tight">{hero.eyebrow}</span>
          </div>

          {/* Editorial Headline */}
          <div className="mt-6 sm:mt-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              {primaryHeadline}
              {secondaryHeadline && (
                <span className="block text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-500 mt-2 sm:mt-3 leading-[1.15]">
                  {secondaryHeadline}
                </span>
              )}
            </h1>
          </div>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
            {hero.subtitle}
          </p>

          {/* High-conversion CTAs */}
          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#contacto"
              className="group shadow-sm text-sm sm:text-base font-semibold px-6 py-3"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="#proyectos"
              className="text-sm sm:text-base font-medium px-6 py-3 border-slate-300 hover:bg-slate-50"
            >
              <span>{hero.secondaryCta}</span>
            </Button>
          </div>

          {/* Low-friction microcopy */}
          {hero.microCopy && (
            <div className="mt-4 sm:mt-5 flex items-start sm:items-center gap-2 text-xs sm:text-sm text-slate-500 max-w-xl leading-normal">
              <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5 sm:mt-0" />
              <span>{hero.microCopy}</span>
            </div>
          )}
        </div>

        {/* 4 Trust Badges Grid */}
        {hero.badges && hero.badges.length > 0 && (
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-200/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {hero.badges.map((badge, idx) => {
                const IconComponent = getHeroIcon(badge.icon);
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-2xs transition-all duration-200"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-900 shadow-2xs">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
