"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";
import type { Language, ShowcaseItem, SiteContent } from "@/content/schema";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { CaseStudyDrawer } from "./CaseStudyDrawer";

export interface ShowcaseSectionProps {
  showcase: SiteContent["showcase"];
  lang: Language;
  className?: string;
}

const SECTION_LABELS: Record<
  Language,
  {
    viewStory: string;
  }
> = {
  es: {
    viewStory: "Ver historia y entregables",
  },
  en: {
    viewStory: "View story & deliverables",
  },
  zh: {
    viewStory: "查看项目复盘与交付清单",
  },
};

export function ShowcaseSection({
  showcase,
  lang,
  className,
}: ShowcaseSectionProps) {
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const labels = SECTION_LABELS[lang] ?? SECTION_LABELS.es;

  const handleOpenCase = (item: ShowcaseItem) => {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <section
      id="proyectos"
      className={cn(
        "scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-white border-t border-slate-200/80",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {showcase.heading}
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {showcase.subheading}
          </p>
        </div>

        {/* Editorial Project Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {showcase.items.map((item: ShowcaseItem) => {
            return (
              <article
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={item.title}
                onClick={() => handleOpenCase(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenCase(item);
                  }
                }}
                className={cn(
                  "group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 lg:p-7 shadow-xs",
                  "hover:border-slate-300 hover:shadow-xl transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                )}
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200/80 mb-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-tight bg-white/95 text-slate-800 backdrop-blur-xs border border-slate-200/80 shadow-2xs">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* High-Impact Commercial Metric (Abhay Singh style) */}
                  <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-emerald-200/90 bg-emerald-50/80 px-3 py-1.5 font-mono text-xs sm:text-sm font-bold text-emerald-800">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span className="line-clamp-1">{item.impactMetric}</span>
                  </div>

                  {/* Client & Title */}
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    {item.client}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {item.tags.map((tag, tIdx) => (
                        <Badge
                          key={tIdx}
                          variant="outline"
                          size="sm"
                          className="text-slate-600 bg-slate-50/80 border-slate-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Trigger Action */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    <span>{labels.viewStory}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>

                  <span className="font-mono text-xs text-slate-400">
                    {item.drawerDetails.timeline}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Slide-over Deep-Dive Drawer */}
      <CaseStudyDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        item={selectedItem}
        lang={lang}
      />
    </section>
  );
}
