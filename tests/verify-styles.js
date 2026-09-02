import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssPath = path.resolve(__dirname, "../src/app/globals.css");
console.log("Running style verification tests on:", cssPath);

assert.ok(fs.existsSync(cssPath), "globals.css must exist");
const css = fs.readFileSync(cssPath, "utf-8");

// Helper to check CSS rules
function assertContains(source, pattern, description) {
  if (typeof pattern === "string") {
    assert.ok(source.includes(pattern), `Expected CSS to contain "${pattern}" (${description})`);
  } else if (pattern instanceof RegExp) {
    assert.ok(pattern.test(source), `Expected CSS to match ${pattern} (${description})`);
  }
}

// 1. Editorial Serif Font System
console.log("Checking Editorial Serif typography tokens...");
assertContains(css, "--font-serif", "CSS variable --font-serif defined in root");
assertContains(css, /--font-serif:\s*["']Newsreader["']/, "--font-serif should include Newsreader");
assertContains(css, ".font-editorial", ".font-editorial utility class exists");
assertContains(css, /font-family:\s*var\(--font-serif\)/, ".font-editorial uses --font-serif");
assertContains(css, /font-style:\s*italic/, ".font-editorial sets italic style");

// 2. Physics Container Styles
console.log("Checking Physics Container styles...");
assertContains(css, ".physics-container", ".physics-container class exists");
assertContains(css, /height:\s*460px/, ".physics-container defines height 460px");
assertContains(css, ".physics-overlay", ".physics-overlay class for badges/prompts exists");
assertContains(css, ".physics-badge", ".physics-badge class exists");
assertContains(css, ".physics-prompt", ".physics-prompt class exists");

// 3. Horizontal Showcase Scroll-Snap
console.log("Checking Horizontal Showcase Gallery styles...");
assertContains(css, ".showcase-gallery", ".showcase-gallery class exists");
assertContains(css, /scroll-snap-type:\s*x mandatory/, ".showcase-gallery defines x mandatory scroll-snap");
assertContains(css, /overflow-x:\s*auto/, ".showcase-gallery allows horizontal scroll");
assertContains(css, ".showcase-card", ".showcase-card class exists");
assertContains(css, /scroll-snap-align:\s*start/, ".showcase-card has scroll-snap-align start");
assertContains(css, /@media\s*\(\s*min-width:\s*1024px\s*\)/, "Responsive breakpoint for showcase cards");

// 4. Pricing Grid & Tier Cards
console.log("Checking Pricing Grid and Tier Cards styles...");
assertContains(css, ".pricing-grid", ".pricing-grid class exists");
assertContains(css, /@media\s*\(\s*min-width:\s*900px\s*\)/, "Responsive 3-column pricing grid breakpoint");
assertContains(css, ".pricing-card", ".pricing-card class exists");
assertContains(css, ".pricing-card--highlight", ".pricing-card--highlight modifier class exists");

// 5. Accessibility / Prefers-reduced-motion
console.log("Checking prefers-reduced-motion compliance...");
assertContains(css, "prefers-reduced-motion: reduce", "prefers-reduced-motion media query exists");

console.log("All style verification tests passed successfully!");
