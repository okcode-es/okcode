import React from "react";
import ShowcaseGallery from "../src/components/ShowcaseGallery";
import { getContent } from "../src/content/site-content";

if (typeof ShowcaseGallery !== "function") {
  throw new Error("ShowcaseGallery must be exported as a React functional component");
}

const content = getContent("en");
if (!content.showcase || content.showcase.items.length !== 3) {
  throw new Error("Showcase data must contain exactly 3 flagship projects");
}

console.log("PASS: ShowcaseGallery component interface and props verified.");
