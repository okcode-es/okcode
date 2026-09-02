import React from "react";
import PricingTiers from "../src/components/PricingTiers";
import { getContent } from "../src/content/site-content";

if (typeof PricingTiers !== "function") {
  throw new Error("PricingTiers must be exported as a React functional component");
}

const content = getContent("en");
if (!content.pricing || content.pricing.tiers.length !== 3) {
  throw new Error("Pricing tiers must contain 3 tiers");
}

console.log("PASS: PricingTiers component interface and props verified.");
