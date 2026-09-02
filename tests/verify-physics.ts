import React from "react";
import PhysicsPlayground from "../src/components/PhysicsPlayground";

if (typeof PhysicsPlayground !== "function") {
  throw new Error("PhysicsPlayground must be exported as a React functional component");
}

console.log("PASS: PhysicsPlayground component interface and export verified.");
