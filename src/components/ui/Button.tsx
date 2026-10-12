import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
}

export type ButtonProps =
  | (ButtonBaseProps &
      React.ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
      })
  | (ButtonBaseProps &
      Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
        href: string;
      });

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-150 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99]";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 border border-transparent shadow-xs",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200/80",
    outline:
      "bg-white text-slate-800 hover:bg-slate-50 active:bg-slate-100 border border-slate-300 shadow-2xs",
    ghost:
      "bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200/60",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "text-xs px-3 py-1.5 rounded-md gap-1.5",
    md: "text-sm px-4 py-2 rounded-lg gap-2",
    lg: "text-base px-6 py-2.5 rounded-lg gap-2.5",
  };

  return cn(baseStyles, variants[variant], sizes[size], className);
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  { variant = "primary", size = "md", className, children, href, ...rest },
  ref
) {
  const classes = buttonVariants({ variant, size, className });

  if (href !== undefined) {
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...(isExternal
          ? {
              target: anchorProps.target ?? "_blank",
              rel: anchorProps.rel ?? "noopener noreferrer",
            }
          : {})}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } =
    rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={type}
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
