import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "outline" | "accent" | "metric";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export function badgeVariants({
  variant = "default",
  size = "md",
  className,
}: {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
} = {}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors select-none rounded-full border";

  const variants: Record<BadgeVariant, string> = {
    default: "bg-slate-100 text-slate-800 border-slate-200/80",
    outline: "bg-transparent text-slate-700 border-slate-300",
    accent: "bg-blue-50 text-blue-700 border-blue-200",
    metric: "font-mono font-semibold bg-emerald-50 text-emerald-800 border-emerald-200/80",
  };

  const sizes: Record<BadgeSize, string> = {
    sm: "text-[11px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
  };

  return cn(baseStyles, variants[variant], sizes[size], className);
}

export function Badge({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={badgeVariants({ variant, size, className })} {...props}>
      {children}
    </span>
  );
}
