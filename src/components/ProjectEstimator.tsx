"use client";

import { useState, useId } from "react";
import type { EstimatorData, ContactInfo } from "@/content/site-content";
import SectionHeading from "./SectionHeading";
import { IconArrow } from "./Icons";

interface Props {
  estimator: EstimatorData;
  contact: ContactInfo;
}

export default function ProjectEstimator({ estimator, contact }: Props) {
  const { eyebrow, title, intro, projectTypes, featureOptions, timelines, ui } = estimator;
  const headingId = useId();

  const [selectedTypeId, setSelectedTypeId] = useState<string>(
    projectTypes[0]?.id ?? "mvp"
  );
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>([
    "auth",
    "payments",
    "admin",
  ]);
  const [selectedTimelineId, setSelectedTimelineId] = useState<string>(
    timelines[0]?.id ?? "express"
  );
  const [copied, setCopied] = useState<boolean>(false);

  const currentType =
    projectTypes.find((p) => p.id === selectedTypeId) ?? projectTypes[0];
  const currentTimeline =
    timelines.find((t) => t.id === selectedTimelineId) ?? timelines[0];
  const selectedFeatures = featureOptions.filter((f) =>
    selectedFeatureIds.includes(f.id)
  );

  function toggleFeature(featureId: string) {
    setSelectedFeatureIds((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  }

  // Generate formatted blueprint text for WhatsApp / Email / Clipboard
  const blueprintSummary = [
    ui.whatsappMessagePrefix,
    `\n📦 ${ui.summaryScope}: ${currentType?.title ?? ""}`,
    `⏱️ ${ui.summaryTimeline}: ${currentTimeline?.label ?? ""} (${currentType?.baseTimeline ?? ""})`,
    `🛠️ ${ui.summaryStack}: ${currentType?.stackSuggested ?? ""}`,
    `⚡ Features (${selectedFeatures.length}):`,
    ...selectedFeatures.map((f) => ` • ${f.name}`),
  ].join("\n");

  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    blueprintSummary
  )}`;

  const emailSubject = encodeURIComponent(
    `Project Blueprint: ${currentType?.title ?? "Custom Project"}`
  );
  const emailBody = encodeURIComponent(blueprintSummary);
  const emailUrl = `mailto:${contact.email}?subject=${emailSubject}&body=${emailBody}`;

  async function handleCopy() {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(blueprintSummary);
      } else {
        // Fallback
        const textarea = document.createElement("textarea");
        textarea.value = blueprintSummary;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  }

  return (
    <section className="section section--tint estimator-section" id="estimator" aria-labelledby={headingId}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />

        <div className="estimator__layout">
          {/* Controls Column */}
          <div className="estimator__controls">
            {/* Step 1: Project Type */}
            <fieldset className="estimator__step">
              <legend className="estimator__step-title">{ui.step1Title}</legend>
              <div className="estimator__types-grid" role="radiogroup" aria-label={ui.step1Title}>
                {projectTypes.map((type) => {
                  const isSelected = type.id === selectedTypeId;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      className={`estimator__type-card${isSelected ? " is-selected" : ""}`}
                      onClick={() => setSelectedTypeId(type.id)}
                    >
                      <div className="estimator__type-top">
                        <span className="estimator__type-badge">{type.badge}</span>
                        <span className="estimator__radio-indicator" aria-hidden="true" />
                      </div>
                      <h3 className="estimator__type-title">{type.title}</h3>
                      <p className="estimator__type-desc">{type.description}</p>
                      <div className="estimator__type-meta">
                        <span className="estimator__meta-pill">⏱️ {type.baseTimeline}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Step 2: Capabilities & Features */}
            <fieldset className="estimator__step">
              <legend className="estimator__step-title">{ui.step2Title}</legend>
              <div className="estimator__features-grid" role="group" aria-label={ui.step2Title}>
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatureIds.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      role="checkbox"
                      aria-checked={isChecked}
                      className={`estimator__feature-chip${isChecked ? " is-checked" : ""}`}
                      onClick={() => toggleFeature(feat.id)}
                    >
                      <span className="estimator__check-box" aria-hidden="true">
                        {isChecked && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </span>
                      <div className="estimator__feature-info">
                        <strong className="estimator__feature-name">{feat.name}</strong>
                        <span className="estimator__feature-desc">{feat.desc}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Step 3: Target Timeline */}
            <fieldset className="estimator__step">
              <legend className="estimator__step-title">{ui.step3Title}</legend>
              <div className="estimator__timelines" role="radiogroup" aria-label={ui.step3Title}>
                {timelines.map((timeline) => {
                  const isSelected = timeline.id === selectedTimelineId;
                  return (
                    <button
                      key={timeline.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      className={`estimator__timeline-pill${isSelected ? " is-selected" : ""}`}
                      onClick={() => setSelectedTimelineId(timeline.id)}
                    >
                      <span className="estimator__radio-indicator" aria-hidden="true" />
                      <span className="estimator__timeline-label">{timeline.label}</span>
                      <span className="estimator__timeline-badge">{timeline.badge}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>

          {/* Blueprint Output / Lead Conversion Card */}
          <div className="estimator__sidebar">
            <div className="estimator__summary-card">
              <div className="estimator__summary-header">
                <span className="estimator__summary-kicker">OKCODE / SCOPE ENGINE</span>
                <h3 className="estimator__summary-title">{ui.summaryTitle}</h3>
              </div>

              <div className="estimator__summary-body">
                <div className="estimator__summary-block">
                  <span className="estimator__summary-label">{ui.summaryScope}</span>
                  <strong className="estimator__summary-value">{currentType?.title}</strong>
                  <p className="estimator__summary-sub">{currentType?.description}</p>
                </div>

                <div className="estimator__summary-block">
                  <span className="estimator__summary-label">{ui.summaryTimeline}</span>
                  <div className="estimator__summary-value estimator__summary-value--highlight">
                    {currentTimeline?.label} ({currentType?.baseTimeline})
                  </div>
                </div>

                <div className="estimator__summary-block">
                  <span className="estimator__summary-label">{ui.summaryStack}</span>
                  <div className="estimator__summary-code">
                    <code>{currentType?.stackSuggested}</code>
                  </div>
                </div>

                {selectedFeatures.length > 0 && (
                  <div className="estimator__summary-block">
                    <span className="estimator__summary-label">
                      Features ({selectedFeatures.length})
                    </span>
                    <div className="estimator__summary-tags">
                      {selectedFeatures.map((f) => (
                        <span className="estimator__summary-tag" key={f.id}>
                          {f.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="estimator__summary-actions">
                {/* Primary: WhatsApp Instant Enquiry */}
                <a
                  className="btn btn--whatsapp"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>{ui.whatsappButton}</span>
                </a>

                {/* Secondary: Email Direct */}
                <a className="btn btn--secondary" href={emailUrl}>
                  <span>{ui.emailButton}</span>
                  <IconArrow className="arrow" width={14} height={14} />
                </a>

                {/* Copy Blueprint Button */}
                <button
                  type="button"
                  className={`estimator__copy-btn${copied ? " is-copied" : ""}`}
                  onClick={handleCopy}
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{ui.copiedNotice}</span>
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span>{ui.copyButton}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
