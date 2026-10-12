import React from "react";
import {
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCode2,
  Layout,
  Cpu,
  Sparkles,
} from "lucide-react";
import type { Language, ProcessStep, SiteContent } from "@/content/schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface ProcessSectionProps {
  process: SiteContent["process"];
  lang: Language;
  className?: string;
}

const LABELS: Record<
  Language,
  {
    milestoneTag: string[];
    timelineLabel: string;
    guaranteeTitle: string;
    guaranteeText: string;
    ctaButton: string;
    stepIndicator: (idx: number, total: number) => string;
  }
> = {
  es: {
    milestoneTag: [
      "Propuesta y Presupuesto",
      "Prototipo y Contrato",
      "Demos Semanales",
      "Despliegue y Código",
    ],
    timelineLabel: "Duración estimada",
    guaranteeTitle: "Pagos vinculados a hitos tangibles",
    guaranteeText:
      "Tu inversión está protegida en cada etapa: sólo abonas las fases intermedias y finales tras revisar y validar el entregable del hito anterior.",
    ctaButton: "Iniciar consulta gratuita",
    stepIndicator: (idx, total) => `Paso ${idx} de ${total}`,
  },
  en: {
    milestoneTag: [
      "Scope & Fixed Quote",
      "Prototype & Contract",
      "Weekly Live Demos",
      "Launch & Handover",
    ],
    timelineLabel: "Estimated duration",
    guaranteeTitle: "Milestone-linked payment protection",
    guaranteeText:
      "Your capital is fully protected: payments are staged across deliverables. You only disburse subsequent phases after testing and approving the preceding milestone.",
    ctaButton: "Start free consultation",
    stepIndicator: (idx, total) => `Step ${idx} of ${total}`,
  },
  zh: {
    milestoneTag: [
      "方案梳理与一口价",
      "原型确认与正式合同",
      "每周进度演示",
      "源码交接与上线",
    ],
    timelineLabel: "预计周期",
    guaranteeTitle: "阶段里程碑付款保障",
    guaranteeText:
      "资金安全有保障：严格执行分阶段验收付款。每一阶段成果确认满意后，才进入下一阶段并支付阶段款项，拒绝一次性付款风险。",
    ctaButton: "开启免费咨询",
    stepIndicator: (idx, total) => `第 ${idx} / ${total} 步`,
  },
};

function getStepIcon(index: number) {
  switch (index) {
    case 0:
      return FileCode2;
    case 1:
      return Layout;
    case 2:
      return Cpu;
    case 3:
      return Sparkles;
    default:
      return CheckCircle2;
  }
}

export function ProcessSection({
  process,
  lang,
  className,
}: ProcessSectionProps) {
  const currentLabels = LABELS[lang] ?? LABELS.es;

  return (
    <section
      id="proceso"
      className={cn(
        "scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            {process.heading}
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {process.subheading}
          </p>
        </div>

        {/* 4 Process Milestone Steps */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative">
          {process.steps.map((stepItem: ProcessStep, idx: number) => {
            const Icon = getStepIcon(idx);
            const stepNum = stepItem.step || String(idx + 1).padStart(2, "0");
            const tag = currentLabels.milestoneTag[idx] ?? `Fase 0${idx + 1}`;

            return (
              <div
                key={stepItem.step || idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Step number & Duration badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white font-mono text-sm font-bold shadow-2xs group-hover:bg-blue-600 transition-colors">
                      {stepNum}
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200/70">
                      <Clock className="h-3 w-3 text-slate-500 shrink-0" />
                      <span>{stepItem.duration}</span>
                    </div>
                  </div>

                  {/* Milestone Focus Tag */}
                  <div className="mt-4">
                    <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-700 bg-blue-50/80 border border-blue-200/60 rounded px-2 py-0.5">
                      {tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-3">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors leading-snug">
                      {stepItem.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>

                {/* Card Bottom Step Status */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5 text-slate-500" />
                    <span>{currentLabels.stepIndicator(idx + 1, 4)}</span>
                  </div>
                  {idx < 3 ? (
                    <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-all" />
                  ) : (
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Milestone Payment Safety Banner */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-emerald-200/90 bg-emerald-50/50 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-emerald-200 text-emerald-700 shadow-2xs">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {currentLabels.guaranteeTitle}
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-2xl">
                {currentLabels.guaranteeText}
              </p>
            </div>
          </div>

          <div className="shrink-0 self-stretch sm:self-auto">
            <Button
              variant="primary"
              size="md"
              href="#contacto"
              className="group/btn w-full sm:w-auto font-medium"
            >
              <span>{currentLabels.ctaButton}</span>
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
