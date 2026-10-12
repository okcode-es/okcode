import React from "react";
import {
  Code2,
  ShieldCheck,
  Lock,
  Globe,
  Rocket,
  LifeBuoy,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { Language, SiteContent, WhyUsItem } from "@/content/schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface WhyUsSectionProps {
  whyUs: SiteContent["whyUs"];
  lang: Language;
  className?: string;
}

const LABELS: Record<
  Language,
  {
    bannerTitle: string;
    bannerSubtitle: string;
    bannerCta: string;
    guaranteeBadge: string;
  }
> = {
  es: {
    bannerTitle: "¿Dudas sobre tu caso específico?",
    bannerSubtitle:
      "Analizamos tu idea técnica y te entregamos un presupuesto cerrado y detallado sin ningún compromiso.",
    bannerCta: "Consultar mi proyecto",
    guaranteeBadge: "Garantía OKCODE",
  },
  en: {
    bannerTitle: "Questions about your specific requirements?",
    bannerSubtitle:
      "We analyze your technical needs and provide a comprehensive fixed-price blueprint with zero obligation.",
    bannerCta: "Discuss my project",
    guaranteeBadge: "OKCODE Guarantee",
  },
  zh: {
    bannerTitle: "对您的业务场景有特殊疑问？",
    bannerSubtitle:
      "我们将在 24 小时内为您免费梳理技术方案，并出具明确详尽的一口价清单，无任何签约压力。",
    bannerCta: "免费咨询方案",
    guaranteeBadge: "OKCODE 服务保障",
  },
};

function getPillarIcon(index: number) {
  switch (index) {
    case 0:
      return Code2;
    case 1:
      return ShieldCheck;
    case 2:
      return Lock;
    case 3:
      return Globe;
    case 4:
      return Rocket;
    case 5:
      return LifeBuoy;
    default:
      return Sparkles;
  }
}

export function WhyUsSection({ whyUs, lang, className }: WhyUsSectionProps) {
  const currentLabels = LABELS[lang] ?? LABELS.es;

  return (
    <section
      id="ventajas"
      className={cn(
        "scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-white border-t border-slate-200/80 relative overflow-hidden",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            {whyUs.heading}
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {whyUs.subheading}
          </p>
        </div>

        {/* 6 Pillars of Trust Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyUs.items.map((item: WhyUsItem, idx: number) => {
            const Icon = getPillarIcon(idx);
            const pillarNum = item.number || String(idx + 1).padStart(2, "0");

            return (
              <div
                key={item.number || idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 lg:p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Top Header: Icon & Pillar Number */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100/90 border border-slate-200/80 text-slate-800 transition-colors group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-xs font-bold tracking-widest text-slate-400 bg-slate-50 border border-slate-200/70 rounded-md px-2.5 py-1">
                      {pillarNum}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-5">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {currentLabels.guaranteeBadge}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Assurance Banner */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xs">
          <div className="max-w-2xl">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              {currentLabels.bannerTitle}
            </h4>
            <p className="mt-1.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentLabels.bannerSubtitle}
            </p>
          </div>

          <div className="shrink-0">
            <Button
              variant="primary"
              size="md"
              href="#contacto"
              className="group/btn w-full sm:w-auto"
            >
              <span>{currentLabels.bannerCta}</span>
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
