"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  X,
  Check,
  Clock,
  ArrowRight,
  TrendingUp,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Quote,
  Star,
} from "lucide-react";
import type { Language, ShowcaseItem } from "@/content/schema";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface CaseStudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  item: ShowcaseItem | null;
  lang: Language;
}

const DRAWER_LABELS: Record<
  Language,
  {
    close: string;
    impactLabel: string;
    problemTitle: string;
    solutionTitle: string;
    deliverablesTitle: string;
    timelineTitle: string;
    testimonialTitle: string;
    tagsTitle: string;
    ctaButton: string;
    ctaSubtext: string;
  }
> = {
  es: {
    close: "Cerrar panel",
    impactLabel: "Impacto medible",
    problemTitle: "El Problema",
    solutionTitle: "La Solución Entregada",
    deliverablesTitle: "Entregables Técnicos Clave",
    timelineTitle: "Plazo de Ejecución",
    testimonialTitle: "Testimonio del Cliente",
    tagsTitle: "Tecnologías y Enfoque",
    ctaButton: "Pedir un proyecto similar",
    ctaSubtext: "Propuesta funcional y estimación en menos de 24 horas",
  },
  en: {
    close: "Close drawer",
    impactLabel: "Measurable Impact",
    problemTitle: "The Problem",
    solutionTitle: "The Solution Delivered",
    deliverablesTitle: "Key Technical Deliverables",
    timelineTitle: "Execution Timeline",
    testimonialTitle: "Client Testimonial",
    tagsTitle: "Technologies & Scope",
    ctaButton: "Request a similar project",
    ctaSubtext: "Functional breakdown and estimate in under 24 hours",
  },
  zh: {
    close: "关闭面板",
    impactLabel: "核心商业成效",
    problemTitle: "面临痛点",
    solutionTitle: "落地解决方案",
    deliverablesTitle: "技术与交付清单",
    timelineTitle: "交付周期",
    testimonialTitle: "客户评价",
    tagsTitle: "技术栈与能力",
    ctaButton: "咨询类似定制方案",
    ctaSubtext: "24 小时内获得功能拆解与明确报价方案",
  },
};

export function CaseStudyDrawer({
  isOpen,
  onClose,
  item,
  lang,
}: CaseStudyDrawerProps) {
  const labels = DRAWER_LABELS[lang] ?? DRAWER_LABELS.es;

  // Retain item during exit animation so drawer does not instantly empty
  const [cachedItem, setCachedItem] = useState<ShowcaseItem | null>(item);

  useEffect(() => {
    if (item) {
      setCachedItem(item);
    }
  }, [item]);

  const activeItem = item ?? cachedItem;

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    // Allow drawer closing transition to start, then scroll to #contacto
    setTimeout(() => {
      const contactSection = document.getElementById("contacto");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = "contacto";
      }
    }, 120);
  };

  if (!activeItem) {
    return null;
  }

  const { drawerDetails: details } = activeItem;

  return (
    <DialogPrimitive.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogPrimitive.Portal>
        {/* Backdrop blur overlay */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 data-[state=closed]:opacity-0 data-[state=open]:opacity-100" />

        {/* Slide-over Content from right */}
        <DialogPrimitive.Content
          className={cn(
            "fixed inset-y-0 right-0 z-50 flex h-full w-full flex-col bg-white shadow-2xl focus:outline-none",
            "transition-transform duration-300 ease-out",
            "data-[state=closed]:translate-x-full data-[state=open]:translate-x-0",
            "sm:max-w-xl md:max-w-2xl lg:max-w-3xl overflow-hidden"
          )}
          aria-describedby={undefined}
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200/80 bg-white/95 px-6 py-4 backdrop-blur-xs">
            <div className="flex items-center gap-3">
              <Badge variant="accent" size="sm">
                {activeItem.category}
              </Badge>
              <span className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase">
                {activeItem.client}
              </span>
            </div>

            <DialogPrimitive.Close asChild>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 cursor-pointer"
                aria-label={labels.close}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </DialogPrimitive.Close>
          </div>

          {/* Scrollable Story & Narrative Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-8 overscroll-contain">
            {/* Project Showcase Image */}
            <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-xs">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 700px, 800px"
                className="object-cover"
                priority
              />
            </div>

            {/* Title & Editorial Summary */}
            <div>
              <DialogPrimitive.Title className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {activeItem.title}
              </DialogPrimitive.Title>
              <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
                {activeItem.summary}
              </p>
            </div>

            {/* Commercial Impact Metric Highlight (Abhay Singh inspired) */}
            <div className="rounded-2xl border border-emerald-200/90 bg-emerald-50/80 p-5 sm:p-6 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{labels.impactLabel}</span>
              </div>
              <p className="mt-2 text-xl sm:text-2xl font-black font-mono tracking-tight text-emerald-950">
                {activeItem.impactMetric}
              </p>
            </div>

            {/* Section 1: The Problem */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                <AlertCircle className="h-4 w-4 text-amber-600 shrink-0" />
                <h4 className="text-slate-900 font-bold">{labels.problemTitle}</h4>
              </div>
              <div className="rounded-xl border border-amber-200/70 bg-amber-50/50 p-4 sm:p-5">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {details.clientProblem}
                </p>
              </div>
            </div>

            {/* Section 2: Solution Delivered */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                <Sparkles className="h-4 w-4 text-blue-600 shrink-0" />
                <h4 className="text-slate-900 font-bold">{labels.solutionTitle}</h4>
              </div>
              <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {details.solutionDelivered}
                </p>
              </div>
            </div>

            {/* Section 3: Deliverables Checklist */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <h4 className="text-slate-900 font-bold">{labels.deliverablesTitle}</h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {details.keyDeliverables.map((deliv, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 text-xs sm:text-sm text-slate-800 shadow-2xs"
                  >
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4: Timeline */}
            <div className="flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-5">
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-slate-600">
                <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                <span>{labels.timelineTitle}</span>
              </div>
              <span className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 font-mono text-xs sm:text-sm font-bold text-slate-900 shadow-2xs">
                {details.timeline}
              </span>
            </div>

            {/* Section 5: Client Testimonial */}
            {details.testimonial && (
              <div className="relative rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50/80 via-white to-slate-50/50 p-5 sm:p-6 shadow-xs">
                <Quote className="h-7 w-7 text-slate-300 mb-3" />
                <blockquote className="text-sm sm:text-base italic text-slate-800 leading-relaxed">
                  &ldquo;{details.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-4 pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {details.testimonial.author}
                    </div>
                    <div className="text-xs text-slate-500">
                      {details.testimonial.role} &bull; {activeItem.client}
                    </div>
                  </div>
                  <div
                    className="flex items-center text-amber-400 gap-0.5"
                    aria-hidden="true"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Section 6: Tags & Scope */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                {labels.tagsTitle}
              </div>
              <div className="flex flex-wrap gap-2">
                {activeItem.tags.map((tag, tIdx) => (
                  <Badge key={tIdx} variant="default" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Bottom CTA */}
          <div className="sticky bottom-0 z-20 border-t border-slate-200/90 bg-white/95 px-6 py-4 sm:px-8 sm:py-5 backdrop-blur-xs flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              <span className="font-semibold text-slate-700 block">
                {labels.ctaSubtext}
              </span>
            </div>
            <Button
              variant="primary"
              size="md"
              onClick={handleCtaClick}
              className="w-full sm:w-auto font-semibold shadow-sm group px-5 py-2.5"
            >
              <span>{labels.ctaButton}</span>
              <ArrowRight className="h-4 w-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
