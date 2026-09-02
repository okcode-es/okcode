"use client";

import { useState } from "react";
import type { SiteContent, ContactInfo } from "@/content/site-content";
import { IconArrow } from "./Icons";

interface Props {
  recipientEmail: string;
  contactInfo: ContactInfo;
  labels: SiteContent["ui"]["contact"];
  formNote: string;
  ctaLabel: string;
}

export default function ContactPanel({
  recipientEmail,
  contactInfo,
  labels,
  formNote,
  ctaLabel,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
    `Hello OKCODE, I am reaching out regarding a project.`
  )}`;

  async function copyEmailToClipboard() {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(recipientEmail);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = recipientEmail;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    }
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(
      `New project enquiry — ${name || "OKCODE"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    setSubmitted(true);
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="contact__wrapper">
      {/* Quick Direct Access Channels */}
      <div className="contact__channels">
        <div className="contact__channel-card">
          <div className="contact__channel-icon contact__channel-icon--wa">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </div>
          <div className="contact__channel-info">
            <span className="contact__channel-label">{labels.whatsappLabel}</span>
            <strong className="contact__channel-val">{contactInfo.phone}</strong>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__channel-btn"
          >
            Chat <IconArrow className="arrow" width={12} height={12} />
          </a>
        </div>

        {contactInfo.telegram && (
          <div className="contact__channel-card">
            <div className="contact__channel-icon contact__channel-icon--tg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div className="contact__channel-info">
              <span className="contact__channel-label">Telegram</span>
              <strong className="contact__channel-val">@okcode_es</strong>
            </div>
            <a
              href={contactInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__channel-btn"
            >
              Open <IconArrow className="arrow" width={12} height={12} />
            </a>
          </div>
        )}

        <div className="contact__channel-card">
          <div className="contact__channel-icon contact__channel-icon--mail">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div className="contact__channel-info">
            <span className="contact__channel-label">{labels.emailLabel}</span>
            <strong className="contact__channel-val">{recipientEmail}</strong>
          </div>
          <button
            type="button"
            className="contact__channel-btn"
            onClick={copyEmailToClipboard}
          >
            {copiedEmail ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Main Form */}
      <div className="contact__grid">
        <form className="form" onSubmit={submit}>
          <p className="form__note">{formNote}</p>
          <div className="field">
            <label htmlFor="cf-name">{labels.nameLabel}</label>
            <input
              id="cf-name"
              name="name"
              autoComplete="name"
              placeholder={labels.namePlaceholder}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="cf-email">{labels.emailFieldLabel}</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              spellCheck={false}
              placeholder={labels.emailPlaceholder}
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="cf-msg">{labels.projectLabel}</label>
            <textarea
              id="cf-msg"
              name="message"
              placeholder={labels.projectPlaceholder}
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn--primary">
            {ctaLabel}
            <IconArrow className="arrow" width={16} height={16} />
          </button>

          {submitted && (
            <div className="form__feedback" role="status" aria-live="polite">
              <span>🚀 Opening your email client... If it didn&apos;t open, you can send directly to <strong>{recipientEmail}</strong> or use WhatsApp above.</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
