"use client";

import React, { useRef } from "react";
import type { ShowcaseSectionData } from "@/content/site-content";
import { IconArrow } from "./Icons";

interface ShowcaseGalleryProps {
  showcase: ShowcaseSectionData;
}

export default function ShowcaseGallery({ showcase }: ShowcaseGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (offset: number) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="section section--tint" id="projects">
      <div className="container">
        {/* Section Header with Editorial Accents */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "40px" }}>
          <div>
            <p className="eyebrow">{showcase.eyebrow}</p>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", marginTop: "8px", marginBottom: "12px" }}>
              {showcase.title}{" "}
              <span className="font-editorial">{showcase.titleHighlight}</span>
            </h2>
            {showcase.intro && (
              <p style={{ color: "var(--text-dim)", maxWidth: "560px", fontSize: "1.05rem", lineHeight: 1.6 }}>
                {showcase.intro}
              </p>
            )}
          </div>

          {/* Gallery Navigation Controls */}
          <div style={{ display: "flex", gap: "10px" }} aria-label="Gallery controls">
            <button
              onClick={() => scrollByAmount(-480)}
              className="btn btn--ghost"
              style={{
                width: "44px",
                height: "44px",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
              aria-label="Previous project"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scrollByAmount(480)}
              className="btn btn--ghost"
              style={{
                width: "44px",
                height: "44px",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
              aria-label="Next project"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll-Snap Gallery */}
        <div ref={galleryRef} className="showcase-gallery" tabIndex={0} aria-label="Project showcase carousel">
          {showcase.items.map((item) => (
            <article
              key={item.id}
              className="showcase-card"
              style={{
                borderRadius: "20px",
                background: "linear-gradient(180deg, rgba(20, 28, 48, 0.7) 0%, rgba(10, 16, 28, 0.9) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 24px 48px -15px rgba(0, 0, 0, 0.6)",
                position: "relative",
              }}
            >
              {/* Media Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                  backgroundColor: "#070b14",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />

                {/* Frosted vignette */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(10, 16, 28, 0.8) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Floating Metric Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    background: "rgba(8, 12, 22, 0.85)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(56, 189, 248, 0.35)",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontSize: "14px", fontWeight: 800, color: "#38bdf8" }}>
                    {item.metrics}
                  </span>
                  <span style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 500 }}>
                    {item.metricsLabel}
                  </span>
                </div>

                {/* Industry Tag */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#e2e8f0",
                      background: "rgba(15, 23, 42, 0.75)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {item.industry}
                  </span>
                </div>
              </div>

              {/* Content Details */}
              <div style={{ padding: "28px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                  <span style={{ fontSize: "12px", color: "var(--accent-glow, #38bdf8)", fontWeight: 600 }}>
                    {item.client}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#f8fafc", marginBottom: "12px", lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                <p style={{ color: "var(--text-dim, #94a3b8)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px", flex: 1 }}>
                  {item.summary}
                </p>

                {/* Tech Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        padding: "3px 10px",
                        borderRadius: "999px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "#cbd5e1",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Action */}
                <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "16px" }}>
                  <a
                    href="#contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#38bdf8",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <span>Discuss Similar Architecture</span>
                    <IconArrow width={14} height={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
