import React from "react";
import fs from "node:fs";
import path from "node:path";
import { getContent } from "../src/content";
import { ShowcaseSection, CaseStudyDrawer } from "../src/components/sections";

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

function verifyShowcaseExports(): void {
  console.log("Verifying Showcase exports...");
  assert(typeof ShowcaseSection === "function", "ShowcaseSection must be a function component");
  assert(typeof CaseStudyDrawer === "function", "CaseStudyDrawer must be a function component");
  console.log("✓ Component exports verified.");
}

function verifyMultilingualShowcaseContent(): void {
  console.log("Verifying showcase content across all languages...");
  const languages = ["es", "en", "zh"] as const;

  for (const lang of languages) {
    const content = getContent(lang);
    const { showcase } = content;

    assert(Boolean(showcase.heading), `[${lang}] showcase.heading must exist`);
    assert(Boolean(showcase.subheading), `[${lang}] showcase.subheading must exist`);
    assert(Array.isArray(showcase.items), `[${lang}] showcase.items must be an array`);
    assert(showcase.items.length === 3, `[${lang}] showcase.items must have 3 items`);

    for (const item of showcase.items) {
      assert(Boolean(item.id), `[${lang}] item.id must be defined`);
      assert(Boolean(item.title), `[${lang}] item.title must be defined`);
      assert(Boolean(item.client), `[${lang}] item.client must be defined`);
      assert(Boolean(item.category), `[${lang}] item.category must be defined`);
      assert(Boolean(item.impactMetric), `[${lang}] item.impactMetric must be defined`);
      assert(Boolean(item.summary), `[${lang}] item.summary must be defined`);
      assert(Boolean(item.image), `[${lang}] item.image must be defined`);
      assert(Array.isArray(item.tags) && item.tags.length > 0, `[${lang}] item.tags must be non-empty`);

      // Verify drawerDetails
      const { drawerDetails } = item;
      assert(Boolean(drawerDetails.clientProblem), `[${lang}] clientProblem must be defined`);
      assert(Boolean(drawerDetails.solutionDelivered), `[${lang}] solutionDelivered must be defined`);
      assert(Array.isArray(drawerDetails.keyDeliverables) && drawerDetails.keyDeliverables.length > 0, `[${lang}] keyDeliverables must be non-empty`);
      assert(Boolean(drawerDetails.timeline), `[${lang}] timeline must be defined`);

      if (drawerDetails.testimonial) {
        assert(Boolean(drawerDetails.testimonial.quote), `[${lang}] testimonial.quote must be defined`);
        assert(Boolean(drawerDetails.testimonial.author), `[${lang}] testimonial.author must be defined`);
        assert(Boolean(drawerDetails.testimonial.role), `[${lang}] testimonial.role must be defined`);
      }

      // Verify image exists on filesystem under public/
      const publicImagePath = path.join(process.cwd(), "public", item.image.replace(/^\//, ""));
      assert(fs.existsSync(publicImagePath), `Image file must exist: ${publicImagePath}`);
    }
  }

  console.log("✓ Multilingual showcase content and image paths verified.");
}

function main(): void {
  console.log("Running Showcase & CaseStudyDrawer verification...\n");
  verifyShowcaseExports();
  verifyMultilingualShowcaseContent();
  console.log("\nAll Showcase checks passed successfully!");
}

main();
