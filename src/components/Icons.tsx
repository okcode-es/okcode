import type { SVGProps } from "react";

// Inline, stroke-based icons using currentColor. No external icon dependency.

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...props,
  };
}

export function IconSoftware(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 8l-3 4 3 4" />
      <path d="M15 8l3 4-3 4" />
      <path d="M13 6l-2 12" />
    </svg>
  );
}

export function IconWeb(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 8.5h18" />
      <path d="M6.5 6h.01M9 6h.01" />
      <path d="M4 12.5h16" />
    </svg>
  );
}

export function IconEcommerce(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 7h14l-1 12H6L5 7z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
      <path d="M3.5 7h17" />
    </svg>
  );
}

export function IconApp(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M10.5 18h3" />
      <path d="M11 7h2" />
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}

export function IconChevron(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h13" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function BrandMark({ className, ...props }: { className?: string; [key: string]: unknown }) {
  return (
    <img
      src="/ok-logo-mark.webp"
      alt="OKCODE"
      aria-hidden="true"
      width={32}
      height={32}
      className={className ?? "brand__mark"}
      style={{ objectFit: "contain", display: "inline-block", verticalAlign: "middle" }}
      {...props}
    />
  );
}

export const serviceIcons = {
  software: IconSoftware,
  web: IconWeb,
  ecommerce: IconEcommerce,
  app: IconApp,
} as const;
