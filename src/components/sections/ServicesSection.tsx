import React from "react";
import {
  Globe,
  Smartphone,
  ShoppingBag,
  Layers,
  Clock,
  Check,
  ArrowUpRight,
} from "lucide-react";
import type { Language, ServiceItem, SiteContent } from "@/content/schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface ServicesSectionProps {
  services: SiteContent["services"];
  lang: Language;
  className?: string;
}

const LABELS: Record<
  Language,
  {
    idealFor: string;
    deliverables: string;
    estimatedDelivery: string;
  }
> = {
  es: {
    idealFor: "Ideal para",
    deliverables: "Entregables clave incluidos",
    estimatedDelivery: "Plazo de entrega",
  },
  en: {
    idealFor: "Ideal for",
    deliverables: "Key deliverables included",
    estimatedDelivery: "Turnaround time",
  },
  zh: {
    idealFor: "适用场景与客群",
    deliverables: "核心交付清单",
    estimatedDelivery: "交付周期",
  },
};

function getServiceIcon(id: string) {
  switch (id) {
    case "web-development":
      return Globe;
    case "mobile-app":
      return Smartphone;
    case "ecommerce":
      return ShoppingBag;
    case "business-software":
      return Layers;
    default:
      return Globe;
  }
}

export function ServicesSection({
  services,
  lang,
  className,
}: ServicesSectionProps) {
  const currentLabels = LABELS[lang] ?? LABELS.es;

  return (
    <section
      id="servicios"
      className={cn(
        "scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-slate-50/60 border-t border-slate-200/80",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            {services.heading}
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {services.subheading}
          </p>
        </div>

        {/* 4 Clean, uncluttered service cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.items.map((service: ServiceItem, index: number) => {
            const Icon = getServiceIcon(service.id);
            const indexString = String(index + 1).padStart(2, "0");

            return (
              <div
                key={service.id || index}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-9 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Card top bar */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100/90 border border-slate-200/80 text-slate-800 transition-colors group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs font-bold tracking-widest text-slate-400">
                        {indexString}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-mono bg-slate-100 text-slate-700 border border-slate-200/70">
                      <Clock className="h-3 w-3 text-slate-500 shrink-0" />
                      <span>{service.turnaround}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-5">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* For Who / Target Audience */}
                  {service.forWho && (
                    <div className="mt-5 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60">
                      <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        {currentLabels.idealFor}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {service.forWho}
                      </p>
                    </div>
                  )}

                  {/* Deliverables List */}
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="mt-6">
                      <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 mb-3">
                        {currentLabels.deliverables}
                      </div>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((deliv, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug"
                          >
                            <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer / Quick Inquiry CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                    <span className="text-slate-400">{currentLabels.estimatedDelivery}:</span>
                    <span className="font-semibold text-slate-700">
                      {service.turnaround}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    href={`#contacto?service=${encodeURIComponent(service.id)}`}
                    className="group/btn w-full sm:w-auto font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
