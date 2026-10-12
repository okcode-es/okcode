import React from "react";
import {
  Check,
  Clock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  FileText,
} from "lucide-react";
import type { Language, PricingTier, SiteContent } from "@/content/schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface PricingSectionProps {
  pricing: SiteContent["pricing"];
  lang: Language;
  className?: string;
}

const LABELS: Record<
  Language,
  {
    popularBadge: string;
    targetLabel: string;
    turnaroundLabel: string;
    includesLabel: string;
    ctaDefault: string;
    ctaCustom: string;
    vatNote: string;
  }
> = {
  es: {
    popularBadge: "Más Popular",
    targetLabel: "Recomendado para",
    turnaroundLabel: "Plazo",
    includesLabel: "Entregables incluidos:",
    ctaDefault: "Pedir Presupuesto",
    ctaCustom: "Consultar a Medida",
    vatNote:
      "Precios orientativos de partida sin IVA · Presupuesto cerrado contractual antes de empezar",
  },
  en: {
    popularBadge: "Most Popular",
    targetLabel: "Recommended for",
    turnaroundLabel: "Turnaround",
    includesLabel: "Key deliverables included:",
    ctaDefault: "Get Estimate",
    ctaCustom: "Request Custom Scope",
    vatNote:
      "Indicative starting prices excl. VAT · Fixed-price contract before writing code",
  },
  zh: {
    popularBadge: "最受欢迎",
    targetLabel: "适合客群与场景",
    turnaroundLabel: "交付周期",
    includesLabel: "核心交付清单：",
    ctaDefault: "获取详细报价",
    ctaCustom: "定制方案评估",
    vatNote:
      "以上为基础起步参考价（不含税） · 签约前确定完整功能清单与固定一口价",
  },
};

export function PricingSection({
  pricing,
  lang,
  className,
}: PricingSectionProps) {
  const currentLabels = LABELS[lang] ?? LABELS.es;

  return (
    <section
      id="precios"
      className={cn(
        "scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-white border-t border-slate-200/80 relative overflow-hidden",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            {pricing.heading}
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {pricing.subheading}
          </p>
        </div>

        {/* 4 Transparent Pricing Tiers */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 items-stretch">
          {pricing.tiers.map((tier: PricingTier, idx: number) => {
            const isHighlighted = !!tier.highlighted;
            const isCustom = idx === 3;
            const ctaText = isCustom
              ? currentLabels.ctaCustom
              : currentLabels.ctaDefault;

            return (
              <div
                key={tier.name || idx}
                className={cn(
                  "relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300",
                  isHighlighted
                    ? "bg-slate-900 text-white border-2 border-slate-900 shadow-xl ring-4 ring-slate-900/5 lg:-translate-y-2"
                    : "bg-white text-slate-900 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md"
                )}
              >
                {/* Popular Pill */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-blue-600 text-white font-mono text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
                      <Sparkles className="h-3 w-3" />
                      {currentLabels.popularBadge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Turnaround */}
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={cn(
                        "text-lg font-bold tracking-tight",
                        isHighlighted ? "text-white" : "text-slate-900"
                      )}
                    >
                      {tier.name}
                    </h3>
                  </div>

                  {/* Delivery Timeline Pill */}
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border">
                    <Clock
                      className={cn(
                        "h-3 w-3 shrink-0",
                        isHighlighted ? "text-slate-400" : "text-slate-500"
                      )}
                    />
                    <span
                      className={
                        isHighlighted ? "text-slate-300" : "text-slate-600"
                      }
                    >
                      {tier.turnaround}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="mt-5 pb-5 border-b border-slate-200/20">
                    <div
                      className={cn(
                        "text-2xl sm:text-3xl font-extrabold tracking-tight",
                        isHighlighted ? "text-white" : "text-slate-900"
                      )}
                    >
                      {tier.startingPrice}
                    </div>
                  </div>

                  {/* Target Audience / Ideal For */}
                  <div
                    className={cn(
                      "mt-4 p-3 rounded-xl text-xs leading-relaxed",
                      isHighlighted
                        ? "bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        : "bg-slate-50 text-slate-600 border border-slate-200/60"
                    )}
                  >
                    <span
                      className={cn(
                        "block font-mono font-semibold uppercase tracking-wider text-[10px] mb-1",
                        isHighlighted ? "text-slate-400" : "text-slate-500"
                      )}
                    >
                      {currentLabels.targetLabel}
                    </span>
                    {tier.target}
                  </div>

                  {/* Deliverables / Includes List */}
                  <div className="mt-5">
                    <div
                      className={cn(
                        "text-[11px] font-mono font-semibold uppercase tracking-wider mb-3",
                        isHighlighted ? "text-slate-400" : "text-slate-500"
                      )}
                    >
                      {currentLabels.includesLabel}
                    </div>
                    <ul className="space-y-2.5">
                      {tier.includes.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug"
                        >
                          <Check
                            className={cn(
                              "h-4 w-4 shrink-0 mt-0.5",
                              isHighlighted
                                ? "text-emerald-400"
                                : "text-emerald-600"
                            )}
                          />
                          <span
                            className={
                              isHighlighted ? "text-slate-300" : "text-slate-700"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-200/20">
                  <Button
                    variant={isHighlighted ? "primary" : "outline"}
                    size="md"
                    href={`#contacto?tier=${encodeURIComponent(tier.name)}`}
                    className={cn(
                      "w-full justify-center group/btn font-medium",
                      isHighlighted
                        ? "bg-blue-600 hover:bg-blue-500 text-white border-transparent"
                        : "hover:bg-slate-900 hover:text-white hover:border-slate-900"
                    )}
                  >
                    <span>{ctaText}</span>
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* VAT Note */}
        <p className="mt-6 text-center text-xs font-mono text-slate-400">
          {currentLabels.vatNote}
        </p>

        {/* Milestone Payment Protection Callout (guaranteeText) */}
        {pricing.guaranteeText && (
          <div className="mt-8 sm:mt-10 rounded-2xl border border-blue-200/80 bg-blue-50/60 p-5 sm:p-6 lg:p-7 flex items-start sm:items-center gap-4 shadow-2xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-blue-200 text-blue-700 shadow-2xs">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
              {pricing.guaranteeText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
