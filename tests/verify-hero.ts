import React from "react";
import Hero from "../src/components/Hero";
import { getContent } from "../src/content/site-content";

if (typeof Hero !== "function") {
  throw new Error("Hero must be exported as a React functional component");
}

const content = getContent("en");
if (!content.hero.physics) {
  throw new Error("Hero data must have physics playground configuration");
}

console.log("PASS: Hero component and physics payload verified.");
