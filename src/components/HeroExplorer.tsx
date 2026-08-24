"use client";

import { useState } from "react";
import type { HeroInteractiveData } from "@/content/site-content";
import { IconArrow } from "./Icons";

interface Props {
  interactive: HeroInteractiveData;
}

export default function HeroExplorer({ interactive }: Props) {
  const [activeTabId, setActiveTabId] = useState(interactive.tabs[0]?.id ?? "web");

  const currentTab =
    interactive.tabs.find((t) => t.id === activeTabId) ?? interactive.tabs[0];

  return (
    <figure className="hero-explorer" aria-label="OKCODE Solution Explorer">
      {/* Top terminal bar */}
      <div className="hero-explorer__topbar" aria-hidden="true">
        <div className="hero-explorer__dots">
          <i />
          <i />
          <i />
        </div>
        <span className="hero-explorer__path">{interactive.terminalPath}</span>
        <span className="hero-explorer__status">
          <span className="hero-explorer__pulse" />
          {interactive.statusBadge}
        </span>
      </div>

      {/* Tab Switcher */}
      <div className="hero-explorer__tabs" role="tablist" aria-label="Solutions">
        {interactive.tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`hero-panel-${tab.id}`}
              className={`hero-explorer__tab${isActive ? " is-active" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Panel */}
      {currentTab && (
        <div
          id={`hero-panel-${currentTab.id}`}
          role="tabpanel"
          className="hero-explorer__body"
        >
          <div className="hero-explorer__header">
            <div>
              <span className="hero-explorer__badge">{currentTab.badge}</span>
              <h2 className="hero-explorer__title">{currentTab.title}</h2>
            </div>
          </div>

          <p className="hero-explorer__desc">{currentTab.description}</p>

          {/* Capabilities pills */}
          <div className="hero-explorer__features">
            {currentTab.features.map((f) => (
              <span className="hero-explorer__pill" key={f}>
                <svg
                  className="check-icon"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {f}
              </span>
            ))}
          </div>

          {/* Guarantee Metrics Grid */}
          <div className="hero-explorer__grid">
            <div className="hero-explorer__stat">
              <span className="k">{currentTab.timelineLabel}</span>
              <strong className="v v--accent">{currentTab.timeline}</strong>
            </div>
            <div className="hero-explorer__stat">
              <span className="k">{currentTab.pricingLabel}</span>
              <strong className="v">{currentTab.pricingType}</strong>
            </div>
            <div className="hero-explorer__stat">
              <span className="k">{currentTab.ownershipLabel}</span>
              <strong className="v v--cyan">{currentTab.ownership}</strong>
            </div>
          </div>

          {/* Interactive Direct CTA */}
          <div className="hero-explorer__footer">
            <a className="btn btn--primary hero-explorer__cta" href="#contact">
              {currentTab.ctaText}
              <IconArrow className="arrow" width={15} height={15} />
            </a>
          </div>
        </div>
      )}
    </figure>
  );
}
