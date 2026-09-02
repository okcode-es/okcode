import assert from "node:assert/strict";
import { content, type Locale, type SiteContent } from "../src/content/site-content";

const locales: Locale[] = ["en", "es", "zh-CN"];

console.log("Running content verification tests...");

for (const loc of locales) {
  console.log(`Checking locale: ${loc}`);
  const data = content[loc] as unknown as Record<string, any>;
  assert.ok(data, `Content for locale ${loc} should exist`);

  // 1. Hero editorialTitle
  assert.ok(data.hero, `Hero section should exist for ${loc}`);
  assert.ok(data.hero.editorialTitle, `hero.editorialTitle must exist for ${loc}`);
  assert.ok(typeof data.hero.editorialTitle.prefix === "string" && data.hero.editorialTitle.prefix.length > 0, `hero.editorialTitle.prefix should be non-empty string in ${loc}`);
  assert.ok(typeof data.hero.editorialTitle.serif === "string" && data.hero.editorialTitle.serif.length > 0, `hero.editorialTitle.serif should be non-empty string in ${loc}`);
  assert.ok(typeof data.hero.editorialTitle.suffix === "string" && data.hero.editorialTitle.suffix.length > 0, `hero.editorialTitle.suffix should be non-empty string in ${loc}`);

  // 2. Hero physics
  assert.ok(data.hero.physics, `hero.physics must exist for ${loc}`);
  assert.ok(typeof data.hero.physics.badge === "string" && data.hero.physics.badge.length > 0, `hero.physics.badge should be non-empty string in ${loc}`);
  assert.ok(typeof data.hero.physics.instruction === "string" && data.hero.physics.instruction.length > 0, `hero.physics.instruction should be non-empty string in ${loc}`);
  assert.ok(Array.isArray(data.hero.physics.items) && data.hero.physics.items.length >= 8, `hero.physics.items must have at least 8 items in ${loc}`);
  for (const item of data.hero.physics.items) {
    assert.ok(typeof item.id === "string" && item.id.length > 0, `physics item id must be string`);
    assert.ok(typeof item.label === "string" && item.label.length > 0, `physics item label must be string`);
    assert.ok(item.type === "pill" || item.type === "badge", `physics item type must be pill or badge`);
  }

  // 3. Showcase Section
  assert.ok(data.showcase, `showcase section must exist for ${loc}`);
  assert.ok(typeof data.showcase.eyebrow === "string" && data.showcase.eyebrow.length > 0, `showcase.eyebrow required in ${loc}`);
  assert.ok(typeof data.showcase.title === "string" && data.showcase.title.length > 0, `showcase.title required in ${loc}`);
  assert.ok(typeof data.showcase.titleHighlight === "string" && data.showcase.titleHighlight.length > 0, `showcase.titleHighlight required in ${loc}`);
  assert.ok(typeof data.showcase.intro === "string" && data.showcase.intro.length > 0, `showcase.intro required in ${loc}`);
  assert.ok(Array.isArray(data.showcase.items) && data.showcase.items.length === 3, `showcase.items must contain 3 items in ${loc}`);
  for (const item of data.showcase.items) {
    assert.ok(item.id, `showcase item id missing in ${loc}`);
    assert.ok(item.title, `showcase item title missing in ${loc}`);
    assert.ok(item.client, `showcase item client missing in ${loc}`);
    assert.ok(item.industry, `showcase item industry missing in ${loc}`);
    assert.ok(item.summary, `showcase item summary missing in ${loc}`);
    assert.ok(item.image && item.image.endsWith(".webp"), `showcase item image must end with .webp in ${loc}`);
    assert.ok(Array.isArray(item.tags) && item.tags.length > 0, `showcase item tags must be non-empty in ${loc}`);
    assert.ok(item.metrics, `showcase item metrics missing in ${loc}`);
    assert.ok(item.metricsLabel, `showcase item metricsLabel missing in ${loc}`);
  }

  // 4. Pricing Section
  assert.ok(data.pricing, `pricing section must exist for ${loc}`);
  assert.ok(typeof data.pricing.eyebrow === "string" && data.pricing.eyebrow.length > 0, `pricing.eyebrow required in ${loc}`);
  assert.ok(typeof data.pricing.title === "string" && data.pricing.title.length > 0, `pricing.title required in ${loc}`);
  assert.ok(typeof data.pricing.titleHighlight === "string" && data.pricing.titleHighlight.length > 0, `pricing.titleHighlight required in ${loc}`);
  assert.ok(typeof data.pricing.intro === "string" && data.pricing.intro.length > 0, `pricing.intro required in ${loc}`);
  assert.ok(typeof data.pricing.estimatorNote === "string" && data.pricing.estimatorNote.length > 0, `pricing.estimatorNote required in ${loc}`);
  assert.ok(Array.isArray(data.pricing.tiers) && data.pricing.tiers.length === 3, `pricing.tiers must contain 3 tiers in ${loc}`);
  let highlightedCount = 0;
  for (const tier of data.pricing.tiers) {
    assert.ok(tier.id, `tier id missing in ${loc}`);
    assert.ok(tier.name, `tier name missing in ${loc}`);
    assert.ok(typeof tier.highlight === "boolean", `tier highlight must be boolean in ${loc}`);
    if (tier.highlight) highlightedCount++;
    assert.ok(tier.priceStarting && (tier.priceStarting.includes("1,800€") || tier.priceStarting.includes("3,800€") || tier.priceStarting.includes("6,500€")), `tier priceStarting format unexpected in ${loc}: ${tier.priceStarting}`);
    assert.ok(tier.period, `tier period missing in ${loc}`);
    assert.ok(tier.summary, `tier summary missing in ${loc}`);
    assert.ok(Array.isArray(tier.deliverables) && tier.deliverables.length >= 3, `tier deliverables must have at least 3 items in ${loc}`);
    assert.ok(tier.timeline, `tier timeline missing in ${loc}`);
    assert.ok(tier.cta, `tier cta missing in ${loc}`);
  }
  assert.strictEqual(highlightedCount, 1, `Exactly one tier should be highlighted in ${loc}`);
}

// Locale-specific spot checks
// en
const en = content.en as unknown as Record<string, any>;
assert.strictEqual(en.hero.editorialTitle.prefix, "Crafting");
assert.strictEqual(en.hero.editorialTitle.serif, "exceptional");
assert.strictEqual(en.hero.editorialTitle.suffix, "software for brands ready to lead.");
assert.strictEqual(en.hero.physics.badge, "STUDIO VALUE LAB");
assert.strictEqual(en.hero.physics.instruction, "Drag and flick to explore client value tokens");
assert.deepStrictEqual(en.hero.physics.items.map((i: any) => i.id), [
  "uptime", "seo", "zero-bug", "fast-ux", "scale", "conversion", "code", "rocket"
]);
assert.deepStrictEqual(en.showcase.items.map((i: any) => i.id), ["fintech", "luxury-store", "ai-workflow"]);
assert.deepStrictEqual(en.pricing.tiers.map((t: any) => t.id), ["showcase", "ecommerce", "webapp"]);

// es
const es = content.es as unknown as Record<string, any>;
assert.strictEqual(es.hero.editorialTitle.prefix, "Diseñamos software");
assert.strictEqual(es.hero.editorialTitle.serif, "excepcional");
assert.strictEqual(es.hero.editorialTitle.suffix, "para marcas que buscan liderar.");
assert.strictEqual(es.hero.physics.badge, "LABORATORIO DE VALOR");
assert.strictEqual(es.hero.physics.instruction, "Arrastra y lanza los tokens de valor comercial");
assert.deepStrictEqual(es.hero.physics.items.map((i: any) => i.id), [
  "uptime", "seo", "zero-bug", "fast-ux", "scale", "conversion", "code", "rocket"
]);

// zh-CN
const zh = content["zh-CN"] as unknown as Record<string, any>;
assert.strictEqual(zh.hero.editorialTitle.prefix, "为追求");
assert.strictEqual(zh.hero.editorialTitle.serif, "卓越");
assert.strictEqual(zh.hero.editorialTitle.suffix, "的品牌，构筑极致可靠的数字工程。");
assert.strictEqual(zh.hero.physics.badge, "商业价值实验室");
assert.strictEqual(zh.hero.physics.instruction, "鼠标拖拽或抛掷，探索交付价值指标");
assert.deepStrictEqual(zh.hero.physics.items.map((i: any) => i.id), [
  "uptime", "seo", "zero-bug", "fast-ux", "scale", "conversion", "code", "rocket"
]);

console.log("✅ All content validation tests passed successfully!");
