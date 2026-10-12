"use client";

import React, { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionEntry {
  question: string;
  answer: string;
  id?: string;
}

export interface AccordionItemProps {
  id?: string;
  question: React.ReactNode;
  answer?: React.ReactNode;
  children?: React.ReactNode;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  id,
  question,
  answer,
  children,
  isOpen: controlledIsOpen,
  defaultOpen = false,
  onToggle,
  className,
}: AccordionItemProps) {
  const generatedId = useId();
  const baseId = id ?? generatedId;
  const triggerId = `accordion-trigger-${baseId}`;
  const contentId = `accordion-content-${baseId}`;

  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
  const isControlled = controlledIsOpen !== undefined;
  const open = isControlled ? controlledIsOpen : uncontrolledIsOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    }
    if (!isControlled) {
      setUncontrolledIsOpen((prev) => !prev);
    }
  };

  const content = answer ?? children;

  return (
    <div
      className={cn(
        "border-b border-slate-200/80 transition-colors last:border-b-0",
        className
      )}
    >
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={open}
          aria-controls={contentId}
          onClick={handleToggle}
          className="flex w-full items-center justify-between py-5 text-left font-medium text-slate-900 transition-colors duration-150 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 select-none cursor-pointer"
        >
          <span className="text-base sm:text-lg leading-snug pr-4">
            {question}
          </span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ease-in-out",
              open && "rotate-180 text-blue-700"
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          open
            ? "grid-rows-[1fr] opacity-100 pb-5"
            : "grid-rows-[0fr] opacity-0 pb-0 invisible sm:visible"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm sm:text-base text-slate-600 leading-relaxed pr-6">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export interface AccordionProps {
  items?: AccordionEntry[];
  children?: React.ReactNode;
  className?: string;
  allowMultiple?: boolean;
  defaultOpenIndex?: number;
}

export function Accordion({
  items,
  children,
  className,
  allowMultiple = false,
  defaultOpenIndex,
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const handleToggle = (index: number) => {
    setOpenIndices((prev) => {
      const isCurrentlyOpen = prev.includes(index);
      if (allowMultiple) {
        return isCurrentlyOpen
          ? prev.filter((i) => i !== index)
          : [...prev, index];
      }
      return isCurrentlyOpen ? [] : [index];
    });
  };

  return (
    <div
      className={cn(
        "divide-y divide-slate-200/80 border-t border-b border-slate-200/80",
        className
      )}
    >
      {items
        ? items.map((item, index) => (
            <AccordionItem
              key={item.id ?? `item-${index}`}
              id={item.id ?? `item-${index}`}
              question={item.question}
              answer={item.answer}
              isOpen={openIndices.includes(index)}
              onToggle={() => handleToggle(index)}
            />
          ))
        : children}
    </div>
  );
}
