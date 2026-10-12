import React from "react";
import { MessageSquare, ArrowRight, HelpCircle } from "lucide-react";
import type { Language, SiteContent } from "@/content/schema";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export interface FaqSectionProps {
  faq: SiteContent["faq"];
  lang: Language;
  className?: string;
}

const LABELS: Record<
  Language,
  {
    stillQuestionsTitle: string;
    stillQuestionsText: string;
    stillQuestionsCta: string;
  }
> = {
  es: {
    stillQuestionsTitle: "¿Tienes otra consulta no resuelta aquí?",
    stillQuestionsText:
      "Cada proyecto tiene particularidades únicas. Escríbenos directamente y te responderemos con criterio técnico en menos de 24 horas.",
    stillQuestionsCta: "Hacer una pregunta directa",
  },
  en: {
    stillQuestionsTitle: "Have another question not answered here?",
    stillQuestionsText:
      "Every project has unique considerations. Reach out directly and we will provide straightforward technical advice within 24 hours.",
    stillQuestionsCta: "Ask a direct question",
  },
  zh: {
    stillQuestionsTitle: "还有其他未在此列出的特殊疑问？",
    stillQuestionsText:
      "每个软件或建站项目的需求均不相同。直接与我们取得联系，我们将在 24 小时内为您提供坦诚、客观的技术建议。",
    stillQuestionsCta: "直接向工程师提问",
  },
};

export function FaqSection({ faq, lang, className }: FaqSectionProps) {
  const currentLabels = LABELS[lang] ?? LABELS.es;

  // Format faq items for AccordionEntry compatibility
  const accordionItems = faq.items.map((item, index) => ({
    id: `faq-${index}`,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <section
      id="faq"
      className={cn(
        "scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden",
        className
      )}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            {faq.heading}
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {faq.subheading}
          </p>
        </div>

        {/* Accordion Component with Accessible Structure */}
        <div className="mt-12 sm:mt-16 bg-white rounded-2xl border border-slate-200/90 shadow-xs px-6 sm:px-8 py-2">
          <Accordion
            items={accordionItems}
            defaultOpenIndex={0}
            allowMultiple={true}
            className="border-none divide-slate-100"
          />
        </div>

        {/* Still have questions? Help Card */}
        <div className="mt-10 sm:mt-14 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-200/80 text-blue-700 shadow-2xs">
              <MessageSquare className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {currentLabels.stillQuestionsTitle}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                {currentLabels.stillQuestionsText}
              </p>
            </div>
          </div>

          <div className="shrink-0 self-stretch sm:self-auto">
            <Button
              variant="outline"
              size="md"
              href="#contacto"
              className="group/btn w-full sm:w-auto font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900"
            >
              <span>{currentLabels.stillQuestionsCta}</span>
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
