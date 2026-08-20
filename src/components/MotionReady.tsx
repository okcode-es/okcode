"use client";

import { useEffect } from "react";

export default function MotionReady() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
    return () => document.documentElement.classList.remove("js-ready");
  }, []);

  return null;
}
