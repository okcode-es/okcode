import React from "react";
import type { PricingSectionData, ContactInfo } from "@/content/site-content";
import { IconArrow } from "./Icons";

interface PricingTiersProps {
  pricing: PricingSectionData;
  contact?: ContactInfo;
}

export default function PricingTiers({ pricing, contact }: PricingTiersProps) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 48px auto" }}>
          <p className="eyebrow">{pricing.eyebrow}</p>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", marginTop: "8px", marginBottom: "16px" }}>
            {pricing.title}{" "}
            <span className="font-editorial">{pricing.titleHighlight}</span>
          </h2>
          {pricing.intro && (
            <p style={{ color: "var(--text-dim)", fontSize: "1.05rem", lineHeight: 1.6 }}>
              {pricing.intro}
            </p>
          )}
        </div>

        {/* 3-Tier Grid */}
        <div className="pricing-grid">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card ${tier.highlight ? "pricing-card--highlight" : ""}`}
            >
              {/* Highlight Badge */}
              {tier.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "4px 14px",
                    borderRadius: "999px",
                    background: "linear-gradient(90deg, #0284c7, #38bdf8)",
                    color: "#080c16",
                    fontSize: "10.5px",
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 12px rgba(56, 189, 248, 0.4)",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div style={{ marginBottom: "20px" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
                  {tier.name}
                </h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "2rem", fontWeight: 800, color: tier.highlight ? "#38bdf8" : "#f1f5f9", letterSpacing: "-0.03em" }}>
                    {tier.priceStarting}
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--text-dim, #94a3b8)" }}>
                    / {tier.period}
                  </span>
                </div>
                <p style={{ color: "var(--text-dim, #94a3b8)", fontSize: "0.9rem", lineHeight: 1.5, minHeight: "44px" }}>
                  {tier.summary}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div style={{ flex: 1, borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "20px", marginBottom: "24px" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {tier.deliverables.map((item, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.88rem", color: "#cbd5e1" }}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={tier.highlight ? "#38bdf8" : "#34d399"}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery Timeline info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "var(--text-dim, #94a3b8)",
                  background: "rgba(0, 0, 0, 0.2)",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <span>Estimated Delivery:</span>
                <strong style={{ color: "#e2e8f0" }}>{tier.timeline}</strong>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className={`btn ${tier.highlight ? "btn--primary" : "btn--ghost"}`}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "12px 20px",
                }}
              >
                <span>{tier.cta}</span>
                <IconArrow width={14} height={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Transition Bridge to Interactive Project Estimator */}
        <div
          style={{
            marginTop: "48px",
            padding: "20px 24px",
            borderRadius: "12px",
            background: "linear-gradient(90deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.5) 100%)",
            border: "1px solid rgba(56, 189, 248, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "20px" }}>⚡</span>
            <p style={{ margin: 0, color: "#e2e8f0", fontSize: "0.95rem" }}>
              {pricing.estimatorNote}
            </p>
          </div>
          <a
            href="#estimator"
            className="btn btn--ghost"
            style={{ fontSize: "0.85rem", padding: "8px 16px" }}
          >
            <span>Open Custom Calculator</span>
            <IconArrow width={14} height={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
