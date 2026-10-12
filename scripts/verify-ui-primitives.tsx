import React from "react";
import { cn } from "../src/lib/utils";
import { SITE_CONFIG } from "../src/lib/constants";
import { Button, buttonVariants } from "../src/components/ui/Button";
import { Badge, badgeVariants } from "../src/components/ui/Badge";
import {
  Modal,
  ModalRoot,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalClose,
} from "../src/components/ui/Modal";
import { Accordion, AccordionItem } from "../src/components/ui/Accordion";

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

function verifyUtils(): void {
  console.log("Verifying cn() utility...");
  const merged = cn("px-4 py-2", "px-6", { "bg-red-500": true, "text-white": false });
  assert(merged.includes("px-6"), "twMerge should override px-4 with px-6");
  assert(!merged.includes("px-4"), "twMerge should deduplicate px-4");
  assert(merged.includes("bg-red-500"), "clsx should include truthy conditional class");
  assert(!merged.includes("text-white"), "clsx should omit falsy conditional class");
  console.log("✓ cn() utility verified.");
}

function verifyConstants(): void {
  console.log("Verifying SITE_CONFIG...");
  assert(SITE_CONFIG.name === "OKCODE", "SITE_CONFIG name must be OKCODE");
  assert(SITE_CONFIG.domain === "okcode.es", "SITE_CONFIG domain must be okcode.es");
  assert(SITE_CONFIG.url === "https://okcode.es", "SITE_CONFIG url must be https://okcode.es");
  assert(SITE_CONFIG.email === "info@okcode.es", "SITE_CONFIG email must be info@okcode.es");
  assert(Boolean(SITE_CONFIG.whatsappNumber), "whatsappNumber must be defined");
  assert(Boolean(SITE_CONFIG.whatsappUrl), "whatsappUrl must be defined");
  assert(Boolean(SITE_CONFIG.wechatId), "wechatId must be defined");
  assert(Boolean(SITE_CONFIG.location), "location must be defined");
  assert(SITE_CONFIG.foundingYear === 2020, "foundingYear must be 2020");
  console.log("✓ SITE_CONFIG verified.");
}

function verifyButtonVariants(): void {
  console.log("Verifying Button variants and sizes...");
  const variants = ["primary", "secondary", "outline", "ghost"] as const;
  const sizes = ["sm", "md", "lg"] as const;

  for (const v of variants) {
    for (const s of sizes) {
      const cls = buttonVariants({ variant: v, size: s });
      assert(typeof cls === "string" && cls.length > 0, `Button variant ${v} size ${s} should produce non-empty class string`);
    }
  }

  assert(typeof Button === "object" || typeof Button === "function", "Button must be a valid React component");
  console.log("✓ Button variants and component verified.");
}

function verifyBadgeVariants(): void {
  console.log("Verifying Badge variants...");
  const variants = ["default", "outline", "accent", "metric"] as const;
  const sizes = ["sm", "md"] as const;

  for (const v of variants) {
    for (const s of sizes) {
      const cls = badgeVariants({ variant: v, size: s });
      assert(typeof cls === "string" && cls.length > 0, `Badge variant ${v} size ${s} should produce non-empty class string`);
      if (v === "metric") {
        assert(cls.includes("font-mono"), "metric badge must include font-mono");
      }
    }
  }

  assert(typeof Badge === "function", "Badge must be a valid component function");
  console.log("✓ Badge variants and component verified.");
}

function verifyModalExports(): void {
  console.log("Verifying Modal exports...");
  assert(typeof Modal === "function", "Modal must be a function component");
  assert(Boolean(ModalRoot), "ModalRoot must be exported");
  assert(Boolean(ModalContent), "ModalContent must be exported");
  assert(Boolean(ModalHeader), "ModalHeader must be exported");
  assert(Boolean(ModalTitle), "ModalTitle must be exported");
  assert(Boolean(ModalDescription), "ModalDescription must be exported");
  assert(Boolean(ModalClose), "ModalClose must be exported");
  console.log("✓ Modal exports verified.");
}

function verifyAccordionExports(): void {
  console.log("Verifying Accordion exports...");
  assert(typeof Accordion === "function", "Accordion must be a function component");
  assert(typeof AccordionItem === "function", "AccordionItem must be a function component");
  console.log("✓ Accordion exports verified.");
}

function main(): void {
  console.log("Running UI Primitives verification...\n");
  verifyUtils();
  verifyConstants();
  verifyButtonVariants();
  verifyBadgeVariants();
  verifyModalExports();
  verifyAccordionExports();
  console.log("\nAll UI primitives and design tokens verified successfully!");
}

main();
